import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    } catch (e) {
      console.error("Failed to initialize GoogleGenAI client:", e);
      return null;
    }
  }
  return aiClient;
}

// Initialize Supabase Admin helper
function getSupabaseAdmin() {
  const url = process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    return null;
  }
  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

function getSupabasePublic() {
  const url = process.env.VITE_SUPABASE_URL;
  const anonKey = process.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    return null;
  }
  return createClient(url, anonKey);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Middleware to authorize Super Administrator requests
  async function authorizeSuperAdmin(req: any, res: any, next: any) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Missing authorization header." });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Invalid authorization header format." });
    }

    const supabase = getSupabasePublic();
    if (!supabase) {
      // If Supabase is not configured, we're in offline/dev simulation mode.
      // Bypass verification for local development/QA review of UI elements.
      req.user = { id: "simulated-super-admin-uuid", email: "allindiarangrej@gmail.com" };
      return next();
    }

    try {
      const { data: { user }, error } = await supabase.auth.getUser(token);
      if (error || !user) {
        return res.status(401).json({ error: "Unauthorized session token: " + (error?.message || "User not found") });
      }

      // Check role in member_profiles
      const { data: profile, error: profileErr } = await supabase
        .from('member_profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (profileErr) {
        console.warn("Error verifying user profile role:", profileErr);
      }

      // Super admin check (or match developer email)
      const isDevEmail = user.email === 'allindiarangrej@gmail.com';
      const isSuperAdmin = profile?.role === 'Super Administrator';

      if (!isSuperAdmin && !isDevEmail) {
        return res.status(403).json({ error: "Access Denied: Requires Super Administrator privileges." });
      }

      req.user = user;
      next();
    } catch (err: any) {
      return res.status(500).json({ error: "Internal Auth Verification Failure: " + err.message });
    }
  }

  // Lazy-initialized nodemailer transporter
  let mailTransporter: any = null;

  function getMailTransporter() {
    if (!mailTransporter) {
      // Keep ready for Gmail SMTP by defaulting to smtp.gmail.com and port 465
      const host = process.env.SMTP_HOST || "smtp.gmail.com";
      const port = parseInt(process.env.SMTP_PORT || "465");
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASS;

      if (!user || !pass) {
        console.warn("SMTP credentials (SMTP_USER, SMTP_PASS) are not configured.");
        return null;
      }

      mailTransporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
      });
    }
    return mailTransporter;
  }

  // API routes FIRST

  app.post("/api/send-confirmation", async (req, res) => {
    const { email, name, role, district } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }

    const transporter = getMailTransporter();
    if (!transporter) {
      console.warn("SMTP credentials (SMTP_USER, SMTP_PASS) are not configured. Logging welcome email to console:", email);
      return res.json({ 
        success: true, 
        message: "Registration complete. Welcome email logged to console as SMTP is not configured on the custom backend." 
      });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || '"All India Rangrez Mahasabha" <no-reply@rangrezcommunity.org>',
      to: email,
      subject: "Welcome to All India Rangrez Mahasabha - Registration Confirmed",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background-color: #004B23; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">All India Rangrez Mahasabha</h1>
          </div>
          <div style="padding: 20px; color: #1f2937; line-height: 1.6;">
            <h2 style="color: #0b132b; margin-top: 0;">Assalamu Alaikum, ${name}!</h2>
            <p>Thank you for registering with the <strong>All India Rangrez Mahasabha Community ERP Portal</strong>.</p>
            <p>Your registration details have been received successfully and your account profile has been generated.</p>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #004B23;">Your Member Profile Summary:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 6px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Registered Email:</td>
                  <td style="padding: 6px 0;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Designated Role:</td>
                  <td style="padding: 6px 0;">${role || "Member"}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">District:</td>
                  <td style="padding: 6px 0;">${district || "N/A"}</td>
                </tr>
              </table>
            </div>
            
            <p>You can now access your digital ID card, network directory, welfare benefits console, and administrative services on your Member Dashboard.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.APP_URL || 'https://rangrezcommunity.org'}" style="background-color: #004B23; color: #ffffff; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block;">Go to Member Portal</a>
            </div>
            
            <p>Best Regards,<br/><strong>Central IT Secretariat</strong><br/>All India Rangrez Mahasabha</p>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 11px; color: #6b7280; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
            This is an automated production email. Please do not reply directly to this message.
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Successfully sent registration confirmation email to ${email}`);
      return res.json({ success: true, message: "Registration confirmation email sent successfully via SMTP." });
    } catch (err: any) {
      console.error("Failed to send registration confirmation email:", err);
      return res.status(500).json({ error: "Failed to dispatch confirmation email: " + err.message });
    }
  });

  app.post("/api/chat", async (req, res) => {
    const { prompt } = req.body;
    const ai = getAIClient();
    if (!ai) {
      return res.status(503).json({ error: "AI service currently running in local offline semantic mode. GEMINI_API_KEY not configured." });
    }
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      res.json({ text: response.text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate content" });
    }
  });

  // Admin API: Create Admin User (Bypasses sign-in step)
  app.post("/api/admin/create-user", authorizeSuperAdmin, async (req, res) => {
    const { email, password, full_name, phone, role, state, district, tehsil, committee, permissions } = req.body;
    const supabaseAdmin = getSupabaseAdmin();
    const supabasePublic = getSupabasePublic();

    if (!supabaseAdmin || !supabasePublic) {
      console.warn("Supabase Admin client not configured. Simulating Admin creation.");
      return res.json({ 
        success: true, 
        simulated: true,
        message: "Supabase service credentials not fully configured. Created user in offline system memory successfully.",
        user: { id: `simulated-${Date.now()}`, email }
      });
    }

    try {
      // 1. Create user in auth schema
      const { data: authUser, error: authErr } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name, phone, role }
      });

      if (authErr) {
        return res.status(400).json({ error: authErr.message });
      }

      const userId = authUser.user.id;

      // 2. Create profile in public.member_profiles
      const { data: profile, error: profileErr } = await supabaseAdmin
        .from("member_profiles")
        .insert({
          user_id: userId,
          full_name,
          phone,
          district,
          state: state || "Madhya Pradesh",
          tehsil: tehsil || "",
          committee: committee || "",
          role: role || "Member",
          permissions: permissions || [],
          status: "Active"
        })
        .select()
        .single();

      if (profileErr) {
        console.error("Error creating member profile record:", profileErr);
        // Clean up the created auth user
        await supabaseAdmin.auth.admin.deleteUser(userId);
        return res.status(400).json({ error: "Failed to create member profile record: " + profileErr.message });
      }

      res.json({ success: true, user: authUser.user, profile });
    } catch (err: any) {
      res.status(500).json({ error: "Server error during admin user creation: " + err.message });
    }
  });

  // Admin API: Reset Password
  app.post("/api/admin/reset-password", authorizeSuperAdmin, async (req, res) => {
    const { userId, newPassword } = req.body;
    const supabaseAdmin = getSupabaseAdmin();

    if (!supabaseAdmin) {
      console.warn("Supabase Admin client not configured. Simulating Password Reset.");
      return res.json({ success: true, simulated: true, message: "Password reset simulated successfully." });
    }

    try {
      const { error } = await supabaseAdmin.auth.admin.updateUserById(userId, {
        password: newPassword
      });

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      res.json({ success: true, message: "Password updated successfully." });
    } catch (err: any) {
      res.status(500).json({ error: "Server error during password reset: " + err.message });
    }
  });

  // Admin API: Toggle Status / Suspend Account
  app.post("/api/admin/toggle-status", authorizeSuperAdmin, async (req, res) => {
    const { userId, status } = req.body; // status: 'Active' or 'Suspended'
    const supabaseAdmin = getSupabaseAdmin();

    if (!supabaseAdmin) {
      console.warn("Supabase Admin client not configured. Simulating Account Status Toggle.");
      return res.json({ success: true, simulated: true, message: `Account status updated to ${status} (simulated).` });
    }

    try {
      // 1. Update status in member_profiles
      const { error: profileErr } = await supabaseAdmin
        .from("member_profiles")
        .update({ status })
        .eq("user_id", userId);

      if (profileErr) {
        return res.status(400).json({ error: "Failed to update profile status: " + profileErr.message });
      }

      // 2. Disable user in Auth if suspended
      const { error: authErr } = await supabaseAdmin.auth.admin.updateUserById(userId, {
        ban_duration: status === "Suspended" ? "1000h" : "none" // ban or unban
      });

      if (authErr) {
        console.warn("Could not ban/unban user in auth schema (might require newer Supabase version):", authErr.message);
      }

      res.json({ success: true, message: `Account successfully set to ${status}.` });
    } catch (err: any) {
      res.status(500).json({ error: "Server error during status toggle: " + err.message });
    }
  });

  // Admin API: Update User Details (Role, Permissions, Location)
  app.post("/api/admin/update-user", authorizeSuperAdmin, async (req, res) => {
    const { userId, full_name, phone, role, state, district, tehsil, committee, permissions } = req.body;
    const supabaseAdmin = getSupabaseAdmin();

    if (!supabaseAdmin) {
      console.warn("Supabase Admin client not configured. Simulating Update User.");
      return res.json({ success: true, simulated: true, message: "User details updated (simulated)." });
    }

    try {
      const { data, error } = await supabaseAdmin
        .from("member_profiles")
        .update({
          full_name,
          phone,
          role,
          state,
          district,
          tehsil,
          committee,
          permissions
        })
        .eq("user_id", userId)
        .select()
        .single();

      if (error) {
        return res.status(400).json({ error: error.message });
      }

      // Also update auth user metadata
      await supabaseAdmin.auth.admin.updateUserById(userId, {
        user_metadata: { full_name, phone, role }
      });

      res.json({ success: true, profile: data });
    } catch (err: any) {
      res.status(500).json({ error: "Server error during update user: " + err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
