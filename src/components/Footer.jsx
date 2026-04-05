import facebookIcon from '../assets/contact/facebook.png';
import instagramIcon from '../assets/contact/instagram.png';
import linkedinIcon from '../assets/contact/linkedin.png';
import youtubeIcon from '../assets/contact/youtube.png';
import emailIcon from '../assets/contact/info-1.png';

const homeLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Mandatory Disclosure', href: '#' },
  { label: 'German Language Club', href: '#' },
  { label: 'FRA FEE PROPOSAL 2025-26-ENGG', href: '#' },
  { label: 'FRA FEE PROPOSAL 2025-26-ME', href: '#' },
  { label: 'FRA FEE PROPOSAL 2025-26-MBA', href: '#' },
  { label: 'Fee Approved By FRA for 25-26', href: '#' },
  { label: 'Audited Statement', href: '#' },
  { label: 'EOA 1994 to 2024', href: '#' },
  { label: 'EOA Report 25-26', href: '#' },
  { label: 'Certificate – Medium of Instruction', href: '#' },
];

const usefulLinks = [
  { label: 'Procedure for Student Educational Verification.', href: '#' },
  { label: 'Mumbai University.', href: '#' },
  { label: 'AICTE', href: '#' },
  { label: 'DTE', href: '#' },
  { label: 'Helpline for Divyagjan', href: '#' },
  { label: 'Online Grievance Form', href: '#' },
  { label: 'AICTE FeedBack', href: '#' },
  { label: 'VCET HR policy', href: '#' },
  { label: 'Institute Research Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0b1121] text-slate-300 pt-12 pb-6 font-jakarta border-t border-slate-800 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-10">
          
          {/* Column 1: Info & Links (spans 4 cols on larger max-ws) */}
          <div className="md:col-span-4">
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              QUICK LINKS
            </h4>
            <ul className="space-y-4">
              {homeLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-center text-sm md:text-[15px] hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-[16px] mr-2 text-slate-600 group-hover:text-blue-500 transition-colors">chevron_right</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Useful Links (spans 4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              USEFUL LINKS
            </h4>
            <ul className="space-y-4 text-sm md:text-[15px]">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group flex items-center hover:text-white transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-3 group-hover:bg-blue-500 transition-colors duration-300 shadow-[0_0_8px_rgba(59,130,246,0)] group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 leading-snug">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (spans 4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              CONTACT US
            </h4>
            <div className="space-y-6 text-sm md:text-[15px]">
              {/* Contact Details Cards */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-400 text-xl">location_on</span>
                </div>
                <p className="leading-relaxed pt-1">
                  K.T. Marg, Vartak College Campus, Vasai Road (W), Dist-Palghar, Vasai, Maharashtra 401202
                </p>
              </div>
              
              {/* Stacked contact lines to prevent tight box wrapping */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-400 text-xl">work</span>
                </div>
                <div className="pt-0.5 font-medium text-white flex flex-col gap-1">
                  <span>+91 7972019446</span>
                  <span>+91 7558351747</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-400 text-xl">call</span>
                </div>
                <div className="pt-0.5 font-medium text-white flex flex-col">
                  <span>0250 233 8234</span>
                  <span className="text-slate-400 text-xs font-normal">(6 Lines)</span>
                </div>
              </div>

              {/* Email Button */}
              <a href="mailto:vcet_inbox@vcet.edu.in" className="flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white p-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 group">
                <div className="bg-white/20 p-2 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                  <img src={emailIcon} alt="Email" className="w-5 h-5 object-contain brightness-0 invert" />
                </div>
                <span className="font-semibold tracking-wide flex-1 text-center pr-2">vcet_inbox@vcet.edu.in</span>
              </a>

              {/* Social Media Row */}
              <div className="pt-2">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-3 pl-1">Connect With Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:-translate-y-1 transition-all shadow-md group">
                    <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:-translate-y-1 transition-all shadow-md group">
                    <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:-translate-y-1 transition-all shadow-md group">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:-translate-y-1 transition-all shadow-md group">
                    <img src={youtubeIcon} alt="YouTube" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p className="flex items-center gap-2">
            © Copyright 2026 <span className="font-bold text-white tracking-wider">VCET</span> All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700/50">
            Designed by <span className="font-bold text-blue-400">Yash Karande</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
