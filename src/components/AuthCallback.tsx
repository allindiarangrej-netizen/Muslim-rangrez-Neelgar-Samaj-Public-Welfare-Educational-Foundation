import React, { useEffect, useState } from 'react';
import { CheckCircle2, XCircle, Loader2, ArrowRight, RefreshCcw } from 'lucide-react';
import { getSupabase } from '../lib/supabaseClient';
import { Language } from '../types';

interface AuthCallbackProps {
  currentLanguage: Language;
  setActiveTab: (tab: string) => void;
}

export default function AuthCallback({ currentLanguage, setActiveTab }: AuthCallbackProps) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [resending, setResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [emailToResend, setEmailToResend] = useState('');
  
  const supabase = getSupabase();

  useEffect(() => {
    async function processAuthCallback() {
      if (!supabase) {
        setStatus('error');
        setErrorMessage('Database configuration error.');
        return;
      }

      // Check URL parameters
      const url = new URL(window.location.href);
      const code = url.searchParams.get('code');
      const errorParam = url.searchParams.get('error');
      const errorDescription = url.searchParams.get('error_description');
      
      // Parse hash parameters if present (Implicit Flow)
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const hashError = hashParams.get('error');
      const hashErrorDesc = hashParams.get('error_description');
      const accessToken = hashParams.get('access_token');

      // Check for errors first
      if (errorParam || hashError) {
        const desc = errorDescription || hashErrorDesc || '';
        setStatus('error');
        if (desc.toLowerCase().includes('expired')) {
          setErrorMessage('Verification link expired. Please resend verification email.');
        } else {
          setErrorMessage(desc || 'Authentication failed. Please try again.');
        }
        
        // Extract email if we can find it in local storage from a recent signup
        // (Supabase doesn't easily provide the email back in the error callback)
        return;
      }

      // If PKCE flow (has 'code')
      if (code) {
        try {
          const { data, error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
          
          if (data.session) {
            setStatus('success');
            // Clean up the URL
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        } catch (err: any) {
          console.error('Session exchange error:', err);
          setStatus('error');
          if (err.message?.toLowerCase().includes('expired') || err.message?.toLowerCase().includes('invalid')) {
            setErrorMessage('Verification link expired. Please resend verification email.');
          } else {
            setErrorMessage(err.message || 'Verification failed.');
          }
        }
        return;
      }

      // If Implicit flow (has 'access_token' in hash)
      if (accessToken) {
        // Supabase client should automatically pick this up, but we can verify the session
        const { data, error } = await supabase.auth.getSession();
        if (error || !data.session) {
          setStatus('error');
          setErrorMessage('Could not establish session from verification link.');
        } else {
          setStatus('success');
          // Clean up the URL
          window.history.replaceState({}, document.title, window.location.pathname);
        }
        return;
      }
      
      // If none matched, check if there is an active session
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('Invalid verification link.');
      }
    }

    processAuthCallback();
  }, [supabase]);

  const handleResend = async () => {
    if (!supabase || !emailToResend) return;
    setResending(true);
    setErrorMessage('');
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: emailToResend,
        options: {
          emailRedirectTo: window.location.origin
        }
      });
      
      if (error) throw error;
      setResendSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to resend verification email.');
    } finally {
      setResending(false);
    }
  };

  const handleContinue = () => {
    setActiveTab('portal'); // Redirect to dashboard / portal
  };

  return (
    <div className="py-20 min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
        
        {status === 'loading' && (
          <div className="space-y-6">
            <Loader2 className="w-16 h-16 text-[#004B23] animate-spin mx-auto" />
            <h2 className="text-xl font-bold text-gray-900">
              {currentLanguage === 'en' ? 'Verifying your account...' : 'आपका खाता सत्यापित किया जा रहा है...'}
            </h2>
            <p className="text-gray-500 text-sm">
              {currentLanguage === 'en' ? 'Please wait while we confirm your email address.' : 'कृपया प्रतीक्षा करें जबकि हम आपके ईमेल पते की पुष्टि कर रहे हैं।'}
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {currentLanguage === 'en' ? 'Email Verified Successfully!' : 'ईमेल सफलतापूर्वक सत्यापित!'}
            </h2>
            <p className="text-gray-500 text-sm">
              {currentLanguage === 'en' ? 'Your account is now active and you have been logged in.' : 'आपका खाता अब सक्रिय है और आपको लॉग इन कर दिया गया है।'}
            </p>
            <button
              onClick={handleContinue}
              className="w-full bg-[#004B23] text-white py-3 px-4 rounded-lg font-bold hover:bg-[#00381a] transition flex items-center justify-center space-x-2"
            >
              <span>{currentLanguage === 'en' ? 'Go to Dashboard' : 'डैशबोर्ड पर जाएं'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <XCircle className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {currentLanguage === 'en' ? 'Verification Failed' : 'सत्यापन विफल'}
            </h2>
            <p className="text-red-600 font-medium">
              {errorMessage}
            </p>
            
            {errorMessage.includes('expired') || errorMessage.includes('invalid') ? (
              <div className="mt-6 space-y-4">
                {!resendSuccess ? (
                  <>
                    <input
                      type="email"
                      placeholder={currentLanguage === 'en' ? 'Enter your email address' : 'अपना ईमेल पता दर्ज करें'}
                      value={emailToResend}
                      onChange={(e) => setEmailToResend(e.target.value)}
                      className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                    <button
                      onClick={handleResend}
                      disabled={resending || !emailToResend}
                      className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-bold hover:bg-amber-600 transition flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {resending ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <RefreshCcw className="w-4 h-4" />
                      )}
                      <span>{currentLanguage === 'en' ? 'Resend Verification Email' : 'सत्यापन ईमेल पुनः भेजें'}</span>
                    </button>
                  </>
                ) : (
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg text-sm font-medium">
                    {currentLanguage === 'en' ? 'Verification email resent successfully. Please check your inbox.' : 'सत्यापन ईमेल सफलतापूर्वक पुनः भेजा गया। कृपया अपना इनबॉक्स जांचें।'}
                  </div>
                )}
              </div>
            ) : null}

            <button
              onClick={() => setActiveTab('membership')}
              className="w-full border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-bold hover:bg-gray-50 transition mt-4"
            >
              {currentLanguage === 'en' ? 'Back to Login' : 'लॉगिन पर वापस जाएं'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
