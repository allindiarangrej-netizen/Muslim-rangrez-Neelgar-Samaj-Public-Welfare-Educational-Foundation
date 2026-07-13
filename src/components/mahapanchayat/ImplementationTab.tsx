import React from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';
import { Language } from './types';
import { getText } from './utils';

interface ImplementationTabProps {
  currentLanguage: Language;
}

export const ImplementationTab: React.FC<ImplementationTabProps> = ({ currentLanguage }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#004B23] via-[#F4C430] to-[#004B23]"></div>
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            📊 {getText('Real-Time Transparency Engine', 'रीयल-टाइम पारदर्शिता इंजन', 'ریئل ٹائم شفافیت انجن', currentLanguage)}
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-black text-emerald-950 tracking-tight leading-tight">
            {getText('State & District Implementation Scorecards', 'राज्य एवं जिला क्रियान्वयन स्कोरकार्ड', 'ریاستی اور ضلعی عمل درآمد اسکور کارڈ', currentLanguage)}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            {getText(
              'We track every passed Mahapanchayat resolution across 28 states and 350+ districts. View compliance percentages, reported violations, and state secretary rankings.',
              'हम 28 राज्यों और 350+ जिलों में पारित प्रत्येक महापंचायत निर्णय की निगरानी करते हैं। अनुपालन प्रतिशत, रिपोर्ट किए गए उल्लंघन और राज्य सचिव रैंकिंग देखें।',
              'ہم 28 ریاستوں اور 350+ اضلاع میں منظور ہونے والے ہر مہاپنچایت فیصلے کی نگرانی کرتے ہیں۔ تعمیل کے فیصد، رپورٹ کردہ خلاف ورزیاں، اور ریاستی سیکرٹری کی درجہ بندی دیکھیں۔',
              currentLanguage
            )}
          </p>
        </div>

        {/* State Performance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {[
            { stateEn: 'Rajasthan State Committee', stateHi: 'राजस्थान राज्य समिति', stateUr: 'راجستھان ریاستی کمیٹی', compliance: 96, rank: '#1 National Leader', status: 'Exemplary Compliance', icon: '🏆' },
            { stateEn: 'Madhya Pradesh Committee', stateHi: 'मध्य प्रदेश राज्य समिति', stateUr: 'مدھیہ پردیش ریاستی کمیٹی', compliance: 92, rank: '#2 Top Performer', status: 'Exemplary Compliance', icon: '🥇' },
            { stateEn: 'Uttar Pradesh (East & West)', stateHi: 'उत्तर प्रदेश (पूर्व व पश्चिम)', stateUr: 'اتر پردیش (مشرق اور مغرب)', compliance: 89, rank: '#3 Strong Performance', status: 'Active Monitoring', icon: '🥈' },
            { stateEn: 'Gujarat State Committee', stateHi: 'गुजरात राज्य समिति', stateUr: 'گجرات ریاستی کمیٹی', compliance: 91, rank: '#4 Top Performer', status: 'Exemplary Compliance', icon: '🥉' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[#F4C430]/30 transition-all duration-300 space-y-3 relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-[#F4C430] opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="flex justify-between items-center">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">{item.rank}</span>
              </div>
              <h4 className="font-serif font-extrabold text-base text-emerald-950 group-hover:text-emerald-800 transition">{getText(item.stateEn, item.stateHi, item.stateUr, currentLanguage)}</h4>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">{getText('Compliance Rate', 'अनुपालन दर', 'تعمیل کی شرح', currentLanguage)}:</span>
                  <span className="font-bold text-emerald-700 font-mono">{item.compliance}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${item.compliance}%` }} />
                </div>
              </div>
              <span className="text-[11px] text-emerald-700 block font-semibold">✓ {item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Citizen Whistleblower / Feedback Channel */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/60 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
        <div className="absolute top-0 inset-x-0 h-1 bg-amber-500"></div>
        <div className="space-y-2 max-w-2xl text-center md:text-left">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-widest flex items-center justify-center md:justify-start">
            <AlertTriangle className="h-4 w-4 mr-1.5 text-amber-600" />
            {getText('Confidential Community Mediation & Reporting', 'गोपनीय सामुदायिक मध्यस्थता एवं सूचना चैनल', 'خفیہ کمیونٹی ثالثی اور رپورٹنگ', currentLanguage)}
          </span>
          <h4 className="text-xl sm:text-2xl font-serif font-black text-emerald-950 leading-tight">
            {getText('Notice a Violation of Mahapanchayat Marriage or Educational Norms?', 'क्या आपने महापंचायत विवाह या शिक्षा नियमों का कोई उल्लंघन देखा है?', 'کیا آپ نے مہاپنچایت کی شادی یا تعلیم کے قوانین کی کوئی خلاف ورزی دیکھی ہے؟', currentLanguage)}
          </h4>
          <p className="text-xs sm:text-sm text-gray-600">
            {getText(
              'Our platform allows confidential reporting of excessive dowry pressure, denial of educational rights, or violation of feast limits. District Qazis and legal elders mediate respectfully to protect family dignity.',
              'हमारा मंच अत्यधिक दहेज दबाव, शिक्षा के अधिकार से इनकार या भोज सीमा के उल्लंघन की गोपनीय रिपोर्टिंग की अनुमति देता है। जिला काजी और कानूनी बुजुर्ग परिवार की गरिमा की रक्षा के लिए सम्मानजनक मध्यस्थता करते हैं।',
              'ہمارا پلیٹ فارم جہیز کے ضرورت سے زیادہ دباؤ، تعلیم کے حق سے انکار، یا دعوت کی حد کی خلاف ورزی کی خفیہ رپورٹنگ کی اجازت دیتا ہے۔ ڈسٹرکٹ قاضی اور قانونی بزرگ خاندان کے وقار کی حفاظت کے لیے احترام کے ساتھ ثالثی کرتے ہیں۔',
              currentLanguage
            )}
          </p>
        </div>
        <button
          onClick={() => {
            alert(getText('Opening Secure confidential reporting channel directly connected with District Sharia & Legal Cell...', 'जिला शरिया एवं कानूनी प्रकोष्ठ से जुड़ा सुरक्षित गोपनीय सूचना चैनल खुल रहा है...', 'ڈسٹرکٹ شریعہ اور لیگل سیل سے جڑا محفوظ خفیہ رپورٹنگ چینل کھل رہا ہے...', currentLanguage));
          }}
          className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shrink-0"
        >
          {getText('Report Violation Confidentially →', 'गोपनीय रूप से सूचना दर्ज करें →', 'خفیہ طور پر رپورٹ کریں →', currentLanguage)}
        </button>
      </div>
    </div>
  );
};
