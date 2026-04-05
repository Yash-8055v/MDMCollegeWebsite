import logo from '../assets/logo.png';

const quickLinks = [
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
  { label: 'Careers', href: '#' },
  { label: 'Departments', href: '#departments' },
];

const resources = [
  { label: 'Library', href: '#' },
  { label: 'E-Learning', href: '#' },
  { label: 'Research', href: '#achievements' },
  { label: 'Student Portal', href: '#' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="VCET" className="w-10 h-10 rounded-full bg-white p-0.5" />
              <h4 className="text-xl font-bold">VCET</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Vidyavardhini&apos;s College of Engineering & Technology is a premier institution committed to academic excellence, innovation, and holistic development, shaping future-ready engineers since its establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">QUICK LINKS</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6">RESOURCES</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">CONTACT</h4>
            <div className="space-y-4 text-slate-300 text-sm">
              <p className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent shrink-0">location_on</span>
                K.T. Marg, Vasai Road (W), Palghar, Maharashtra - 401202
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent shrink-0">call</span>
                +91 250 2338234
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent shrink-0">mail</span>
                info@vcet.edu.in
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <span className="material-symbols-outlined text-sm">language</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} Vidyavardhini&apos;s College of Engineering & Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
