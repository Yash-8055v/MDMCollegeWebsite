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
    <footer id="contact" className="bg-[#374151] text-white pt-16 md:pt-20 pb-8 md:pb-10 font-jakarta">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          
          {/* Column 1: Home Links */}
          <div>
            <ul className="space-y-3 text-slate-300 text-[13px] md:text-sm">
              {homeLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-base font-bold mb-6 tracking-wide uppercase">Useful Links</h4>
            <ul className="space-y-3 text-slate-300 text-[13px] md:text-sm">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-base font-bold mb-6 tracking-wide uppercase">Contact</h4>
            <div className="space-y-4 text-slate-300 text-[13px] md:text-sm">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-white shrink-0 text-xl mt-0.5">location_on</span>
                <p className="leading-relaxed">
                  K.T. Marg, Vartak College Campus, Vasai Road (W), Dist-Palghar, Vasai, Maharashtra 401202
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-white shrink-0 text-xl">work</span>
                <p>+917972019446 +917558351747</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-white shrink-0 text-xl">call</span>
                <p>0250 233 8234 (6 Lines)</p>
              </div>

              {/* Socials / Email with Images */}
              <div className="flex flex-col gap-3 pt-2">
                <a href="#" className="flex items-center gap-4 hover:text-white transition-colors">
                  <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-4 hover:text-white transition-colors">
                  <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-4 hover:text-white transition-colors">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain" />
                  <span>Linkedin</span>
                </a>
                <a href="#" className="flex items-center gap-4 hover:text-white transition-colors">
                  <img src={youtubeIcon} alt="YouTube" className="w-5 h-5 object-contain" />
                  <span>Youtube</span>
                </a>
                <a href="mailto:vcet_inbox@vcet.edu.in" className="flex items-center gap-4 hover:text-white transition-colors">
                  <img src={emailIcon} alt="Email" className="w-5 h-5 object-contain" />
                  <span>vcet_inbox@vcet.edu.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300 text-[13px] md:text-sm">
          <p>© Copyright 2026 VCET All Rights Reserved.</p>
          <p>Designed by Yash</p>
        </div>
      </div>
    </footer>
  );
}
