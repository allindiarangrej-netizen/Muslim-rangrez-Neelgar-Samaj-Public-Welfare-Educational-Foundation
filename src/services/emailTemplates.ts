/**
 * Professional HTML Email Templates for All India Rangrez Mahasabha
 * Fully responsive, brand-aligned (Forest Green #004B23 & Gold #FFD54A),
 * with elegant typography, social hooks, footer compliance, and contact coordinates.
 */

interface TemplateWrapperProps {
  title: string;
  preheader: string;
  contentHtml: string;
}

function getBaseTemplateWrapper({ title, preheader, contentHtml }: TemplateWrapperProps): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          min-width: 100%;
          font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f3f4f6;
          color: #1f2937;
          -webkit-font-smoothing: antialiased;
        }
        table {
          border-spacing: 0;
          border-collapse: collapse;
          width: 100%;
        }
        img {
          border: 0;
        }
        .wrapper {
          width: 100%;
          table-layout: fixed;
          background-color: #f3f4f6;
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          border: 1px solid #e5e7eb;
        }
        .header {
          background: linear-gradient(135deg, #004B23 0%, #0A2E1C 100%);
          padding: 30px 40px;
          text-align: center;
          border-bottom: 4px solid #FFD54A;
        }
        .header h1 {
          color: #ffffff;
          margin: 0;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.5px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .header p {
          color: #FFD54A;
          margin: 6px 0 0 0;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: bold;
        }
        .content {
          padding: 40px 40px 30px 40px;
          line-height: 1.6;
          font-size: 15px;
        }
        .content h2 {
          color: #0A2E1C;
          margin-top: 0;
          font-size: 20px;
          font-weight: 700;
          border-bottom: 2px solid #f3f4f6;
          padding-bottom: 12px;
        }
        .button-container {
          text-align: center;
          margin: 30px 0;
        }
        .button {
          background-color: #004B23;
          color: #ffffff !important;
          padding: 12px 28px;
          text-decoration: none;
          font-weight: bold;
          border-radius: 8px;
          display: inline-block;
          font-size: 14px;
          box-shadow: 0 4px 6px rgba(0, 75, 35, 0.15);
          transition: background-color 0.2s;
        }
        .card {
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
        }
        .card-title {
          font-weight: bold;
          color: #004B23;
          font-size: 14px;
          margin-top: 0;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .footer {
          background-color: #111827;
          padding: 30px 40px;
          text-align: center;
          color: #9ca3af;
          font-size: 12px;
          border-top: 1px solid #1f2937;
        }
        .footer a {
          color: #FFD54A;
          text-decoration: none;
        }
        .footer p {
          margin: 8px 0;
        }
        .footer-logo {
          font-size: 16px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 15px;
        }
        .badge {
          display: inline-block;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: bold;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .badge-pending { background-color: #fef3c7; color: #d97706; }
        .badge-success { background-color: #d1fae5; color: #065f46; }
        .badge-danger { background-color: #fee2e2; color: #991b1b; }
      </style>
    </head>
    <body>
      <div style="display: none; max-height: 0px; overflow: hidden;">
        ${preheader}
      </div>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <h1>All India Rangrez Mahasabha</h1>
            <p>Empowering & Uniting the Rangrez Samaj</p>
          </div>
          <div class="content">
            ${contentHtml}
          </div>
          <div class="footer">
            <div class="footer-logo">ALL INDIA RANGREZ MAHASABHA</div>
            <p style="margin-bottom: 16px;">
              Official Central ERP Portal • Connecting Rajasthan, MP, UP & Gujarat Chapters
            </p>
            <p>
              Official Website: <a href="https://rangrezcommunity.org">rangrezcommunity.org</a> | 
              Support: <a href="mailto:support@rangrezcommunity.org">support@rangrezcommunity.org</a>
            </p>
            <p style="margin-top: 20px; font-size: 11px;">
              © 2026 All India Rangrez Central Trust. All rights reserved. 80G Tax Exemption Certified.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// 1. Email Verification Template
export function generateEmailVerificationTemplate(name: string, otpOrLink: string): string {
  const isLink = otpOrLink.startsWith('http');
  const actionButton = isLink 
    ? `<div class="button-container">
         <a href="${otpOrLink}" class="button" target="_blank">Verify Email Address</a>
       </div>`
    : `<div class="button-container">
         <span style="font-size: 32px; font-weight: 800; color: #004B23; letter-spacing: 5px; background: #f3f4f6; padding: 10px 24px; border-radius: 8px; border: 1px dashed #004B23; display: inline-block;">${otpOrLink}</span>
       </div>`;

  const html = `
    <h2>Verify Your Email Address</h2>
    <p>Assalamu Alaikum ${name},</p>
    <p>Thank you for initiating your registration on the All India Rangrez Mahasabha Community Portal. To complete your verification and secure your account, please click the verification button or enter the security code below:</p>
    
    ${actionButton}
    
    <p style="font-size: 13px; color: #6b7280;">This security code/link is valid for exactly <strong>24 hours</strong>. If you did not sign up for an account on our platform, please ignore this email or contact support.</p>
    
    <div class="card">
      <div class="card-title">Security Warning</div>
      <p style="margin: 0; font-size: 12px; color: #4b5563;">Never share your verification link, OTP, or login password with anyone, including volunteers or district coordinators representing the Mahasabha.</p>
    </div>
  `;

  return getBaseTemplateWrapper({
    title: 'Verify Your Email Address',
    preheader: 'Complete your registration with All India Rangrez Mahasabha.',
    contentHtml: html
  });
}

// 2. Welcome Email Template
export function generateWelcomeEmailTemplate(name: string, memberId: string, digitalIdUrl?: string): string {
  const html = `
    <h2>Assalamu Alaikum & Welcome to the Mahasabha!</h2>
    <p>Dear <strong>${name}</strong>,</p>
    <p>It is with great pleasure that we welcome you to the <strong>All India Rangrez Mahasabha Community ERP Portal</strong>. Your registration has been fully confirmed!</p>
    
    <div class="card">
      <div class="card-title">Account Verified & Activated</div>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <tr>
          <td style="padding: 6px 0; font-weight: bold; width: 140px; color: #004B23;">Member Name:</td>
          <td style="padding: 6px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; color: #004B23;">Official ID ID:</td>
          <td style="padding: 6px 0; font-family: monospace; font-weight: bold;">${memberId}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; color: #004B23;">Default Privilege:</td>
          <td style="padding: 6px 0;"><span class="badge badge-success">Official Member</span></td>
        </tr>
      </table>
    </div>

    <p>Your digital profile has been built, granting you access to:</p>
    <ul style="padding-left: 20px; font-size: 14px;">
      <li>Your official **Digital Identity Card** (customizable with your photo)</li>
      <li>National & District level Member Directories</li>
      <li>Welfare Scheme Apply Engine (Scholarships, Business Grants)</li>
      <li>Mahapanchayat Updates & Legal Guidance forum</li>
    </ul>

    <div class="button-container">
      <a href="https://rangrezcommunity.org" class="button" target="_blank">Access Member Dashboard</a>
    </div>

    <p>Should you need assistance, reach out to your local Ward or District Chapter coordinator, or drop us an email at <a href="mailto:membership@rangrezcommunity.org">membership@rangrezcommunity.org</a>.</p>
  `;

  return getBaseTemplateWrapper({
    title: 'Welcome to the Mahasabha!',
    preheader: 'Your profile has been created and verified.',
    contentHtml: html
  });
}

// 3. Membership Confirmation Template
export function generateMembershipConfirmationTemplate(name: string, appNo: string, amount: number): string {
  const html = `
    <h2>Membership Application Submitted</h2>
    <p>Assalamu Alaikum ${name},</p>
    <p>We have successfully received your official membership application and administrative verification files.</p>
    
    <div class="card">
      <div class="card-title">Application Summary</div>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <tr>
          <td style="padding: 6px 0; font-weight: bold; width: 140px;">Applicant Name:</td>
          <td style="padding: 6px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold;">Application No:</td>
          <td style="padding: 6px 0; font-family: monospace;">${appNo}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold;">Processing Status:</td>
          <td style="padding: 6px 0;"><span class="badge badge-pending">Under Verification</span></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold;">Donation / Fee:</td>
          <td style="padding: 6px 0; font-weight: bold; color: #004B23;">₹ ${amount}</td>
        </tr>
      </table>
    </div>

    <p><strong>Next Steps:</strong></p>
    <p>Our District Evaluation Committee will review your uploaded Aadhaar card, professional credentials, and verify your local address within **3-5 working days**. Once approved, we will dispatch your physical welcome kit and generate your laminated National ID.</p>
    
    <p>You can check your progress at any time by logging into the Portal.</p>
  `;

  return getBaseTemplateWrapper({
    title: 'Membership Application Submitted',
    preheader: 'Your membership application is currently under verification.',
    contentHtml: html
  });
}

// 4. Password Reset Template
export function generatePasswordResetTemplate(name: string, resetLink: string): string {
  const html = `
    <h2>Secure Password Reset Request</h2>
    <p>Hello ${name},</p>
    <p>A request was recently submitted to reset your account credentials on the All India Rangrez Community ERP system.</p>
    <p>Click the button below to establish a secure new password for your account:</p>
    
    <div class="button-container">
      <a href="${resetLink}" class="button" target="_blank">Reset Password</a>
    </div>

    <div class="card">
      <div class="card-title">Security Compliance</div>
      <ul style="margin: 0; padding-left: 20px; font-size: 12px; color: #4b5563;">
        <li>This reset link can only be used <strong>once</strong>.</li>
        <li>This link expires automatically in <strong>1 hour</strong>.</li>
        <li>If you did not initiate this request, no action is needed. Your current password remains perfectly secure.</li>
      </ul>
    </div>
  `;

  return getBaseTemplateWrapper({
    title: 'Password Reset Request',
    preheader: 'Reset your account credentials securely.',
    contentHtml: html
  });
}

// 5. Contact Form Confirmation Template
export function generateContactFormConfirmationTemplate(name: string, subject: string, message: string): string {
  const html = `
    <h2>We Received Your Inquiry</h2>
    <p>Dear ${name},</p>
    <p>Thank you for getting in touch with the <strong>All India Rangrez Mahasabha IT Helpline</strong>. This is an automated acknowledgment confirming we have received your ticket.</p>
    
    <div class="card">
      <div class="card-title">Your Submission Details</div>
      <p style="margin: 0 0 10px 0; font-size: 13px;"><strong>Subject:</strong> ${subject}</p>
      <p style="margin: 0; font-size: 13px; font-style: italic; color: #4b5563;">"${message}"</p>
    </div>

    <p>Our helpdesk officers or central IT representatives will review your query and reply back to you at this email address within **24-48 business hours**.</p>
    
    <p>Best Regards,<br/><strong>IT & Helpdesk Support Secretariat</strong><br/>All India Rangrez Mahasabha</p>
  `;

  return getBaseTemplateWrapper({
    title: 'Inquiry Acknowledgment',
    preheader: 'We have received your message and are processing it.',
    contentHtml: html
  });
}

// 6. Admin Notification Template
export function generateAdminNotificationTemplate(type: string, details: Record<string, any>): string {
  let tableRows = '';
  for (const [key, val] of Object.entries(details)) {
    tableRows += `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; text-transform: capitalize; color: #004B23;">${key.replace(/_/g, ' ')}:</td>
        <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${typeof val === 'object' ? JSON.stringify(val) : val}</td>
      </tr>
    `;
  }

  const html = `
    <h2 style="color: #991b1b;">⚠️ [ADMIN NOTIFICATION] ${type}</h2>
    <p>An official action occurred on the community platform requiring administrator review or manual verification.</p>
    
    <div class="card">
      <div class="card-title">Submission Details</div>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        ${tableRows}
      </table>
    </div>

    <div class="button-container">
      <a href="https://rangrezcommunity.org" class="button" style="background-color: #991b1b;">Launch Admin Dashboard</a>
    </div>

    <p style="font-size: 12px; color: #6b7280;">This is an enterprise alert dispatched to trust administrative staff. Action audit logs have been recorded.</p>
  `;

  return getBaseTemplateWrapper({
    title: `Admin Alert: ${type}`,
    preheader: 'New administrative submission requires your attention.',
    contentHtml: html
  });
}

// 7. Application Approved Template
export function generateApplicationApprovedTemplate(name: string, type: string, appNo: string): string {
  const html = `
    <h2 style="color: #065f46;">🎉 Congratulations! Application Approved</h2>
    <p>Assalamu Alaikum ${name},</p>
    <p>We are delighted to inform you that your application for <strong>${type}</strong> has been successfully verified, evaluated, and approved by the central trust committee.</p>
    
    <div class="card">
      <div class="card-title">Approval Summary</div>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <tr>
          <td style="padding: 6px 0; font-weight: bold; width: 140px;">Applicant Name:</td>
          <td style="padding: 6px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold;">Application Ref:</td>
          <td style="padding: 6px 0; font-family: monospace;">${appNo}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold;">Current Status:</td>
          <td style="padding: 6px 0;"><span class="badge badge-success">Approved / Active</span></td>
        </tr>
      </table>
    </div>

    <p>Our logistics or accounts department is processing your benefits. If this is a scholarship or financial aid grant, disbursal will hit your verified bank account during the next batch cycle.</p>
    
    <div class="button-container">
      <a href="https://rangrezcommunity.org" class="button">View Certificate & Progress</a>
    </div>
  `;

  return getBaseTemplateWrapper({
    title: 'Application Approved!',
    preheader: 'Your application has been approved by the committee.',
    contentHtml: html
  });
}

// 8. Application Rejected Template
export function generateApplicationRejectedTemplate(name: string, type: string, reason: string): string {
  const html = `
    <h2>Update Regarding Your Application</h2>
    <p>Assalamu Alaikum ${name},</p>
    <p>Thank you for submitting your application for <strong>${type}</strong>. Our verification officers have completed their evaluation.</p>
    
    <p>Unfortunately, your application could not be approved at this time due to the following criteria mismatch:</p>
    
    <div class="card" style="border-left: 4px solid #b91c1c; background-color: #fdf2f2;">
      <div class="card-title" style="color: #b91c1c;">Rejection Reason / Clarification</div>
      <p style="margin: 0; font-size: 13px; font-style: italic; color: #111827;">"${reason}"</p>
    </div>

    <p><strong>What you can do:</strong></p>
    <p>You can correct any document errors, upload clear copies of missing items, and resubmit a fresh application on the portal. Make sure your income certificate and community details align with the scheme's guidelines.</p>
    
    <div class="button-container">
      <a href="https://rangrezcommunity.org" class="button" style="background-color: #4b5563;">Update & Resubmit</a>
    </div>
  `;

  return getBaseTemplateWrapper({
    title: 'Application Mismatch Notice',
    preheader: 'Important notice regarding your community application.',
    contentHtml: html
  });
}

// 9. Membership Renewal Reminder Template
export function generateRenewalReminderTemplate(name: string, expiryDate: string): string {
  const html = `
    <h2>⚠️ Notice: Membership Renewal Due</h2>
    <p>Dear ${name},</p>
    <p>This is a polite reminder from the Central Membership Committee. Your official All India Rangrez Mahasabha identity card & membership registry is scheduled to expire on <strong>${expiryDate}</strong>.</p>
    
    <p>To continue enjoying uninterrupted access to community welfare schemes, digital directories, and voting rights in state chapters, kindly renew your registration.</p>
    
    <div class="button-container">
      <a href="https://rangrezcommunity.org" class="button">Renew Membership Online</a>
    </div>

    <p style="font-size: 13px; color: #4b5563;">If you have already renewed your membership offline or made a recent bank donation, please ignore this warning or update your transaction receipt under the portal Settings.</p>
  `;

  return getBaseTemplateWrapper({
    title: 'Membership Renewal Reminder',
    preheader: 'Ensure your official membership status remains active.',
    contentHtml: html
  });
}

// 10. Event Registration Confirmation Template
export function generateEventConfirmationTemplate(name: string, eventName: string, dateTime: string, venue: string): string {
  const html = `
    <h2 style="color: #004B23;">🎟️ Event Seat Reserved!</h2>
    <p>Assalamu Alaikum ${name},</p>
    <p>We are excited to confirm your reservation for the upcoming <strong>All India Rangrez Mahasabha National Event</strong>.</p>
    
    <div class="card">
      <div class="card-title">Pass Information</div>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <tr>
          <td style="padding: 6px 0; font-weight: bold; width: 140px; color: #004B23;">Event:</td>
          <td style="padding: 6px 0; font-weight: bold;">${eventName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; color: #004B23;">Date & Time:</td>
          <td style="padding: 6px 0;">${dateTime}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; color: #004B23;">Venue:</td>
          <td style="padding: 6px 0; font-style: italic;">${venue}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; color: #004B23;">Access Pass Type:</td>
          <td style="padding: 6px 0;"><span class="badge badge-success">Registered VIP Entry</span></td>
        </tr>
      </table>
    </div>

    <p>Please carry a printed copy of this email or show your mobile dashboard barcode at the registration desks for instant scanning.</p>
    
    <div class="button-container">
      <a href="https://rangrezcommunity.org" class="button">Download Digital Entry Pass</a>
    </div>
  `;

  return getBaseTemplateWrapper({
    title: 'Event Registration Confirmed!',
    preheader: 'Your reservation for our national event is successful.',
    contentHtml: html
  });
}
