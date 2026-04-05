import { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home',        href: '#home' },
  { label: 'About Us',    href: '#about' },
  { label: 'Admissions',  href: '#admissions' },
  { label: 'Academics',   href: '#departments' },
  { label: 'Research',    href: '#achievements' },
  { label: 'Placements',  href: '#placements' },
  { label: 'Student Life',href: '#gallery' },
  { label: 'Campus',      href: '#gallery' },
  { label: 'Contact Us',  href: '#contact' },
];

const exploreLinks = [
  { label: 'Video',        icon: 'play_circle',  href: '#video' },
  { label: 'ERP Portal',   icon: 'manage_accounts', href: '#erp' },
  { label: 'Convocation',  icon: 'school',       href: '#convocation' },
];

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen]       = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const dropRef = useRef(null);

  /* close explore dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setExploreOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-blue-950/90 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center gap-6 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >

        {/* ── LEFT: Logo + Name ── */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className={`flex items-center gap-3 shrink-0 transition-all duration-500 ${
            scrolled
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          aria-hidden={!scrolled}
        >
          <img
            src={logo}
            alt="VCET Logo"
            className="w-9 h-9 rounded-full bg-white p-0.5 shadow-lg"
          />
          <span className="text-white font-extrabold text-lg tracking-tight whitespace-nowrap">
            VCET
          </span>
        </a>

        {/* ── CENTER: Nav links ── */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="navbar-link"
            >
              {link.label}
              <span className="navbar-link-bar" />
            </a>
          ))}
        </div>

        {/* ── RIGHT: Explore Us ── */}
        <div ref={dropRef} className="hidden lg:block relative shrink-0">
          <button
            onClick={() => setExploreOpen(!exploreOpen)}
            className={`explore-btn ${exploreOpen ? 'explore-btn--open' : ''} ${
              scrolled ? 'explore-btn--scrolled' : ''
            }`}
          >
            Explore Us
            <span
              className="material-symbols-outlined text-base ml-1 transition-transform duration-300"
              style={{ transform: exploreOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              expand_more
            </span>
          </button>

          {/* Dropdown */}
          <div className={`explore-dropdown ${exploreOpen ? 'explore-dropdown--open' : ''}`}>
            <p className="explore-dropdown-label">Quick Access</p>
            {exploreLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="explore-item"
              >
                <span className="material-symbols-outlined explore-item-icon">
                  {item.icon}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 ml-auto focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } bg-blue-950/95`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/85 text-[15px] font-semibold hover:text-white hover:pl-2 transition-all duration-200 py-2.5 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Explore Us */}
          <div className="mt-3">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">
              Quick Access
            </p>
            {exploreLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex items-center gap-3 text-white/80 text-[14px] font-semibold py-2.5 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-cyan-400">
                  {item.icon}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
