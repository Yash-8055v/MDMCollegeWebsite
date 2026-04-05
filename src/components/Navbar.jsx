import { useState } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Academics', href: '#departments' },
  { label: 'Research', href: '#achievements' },
  { label: 'Placements', href: '#placements' },
  { label: 'Student Life', href: '#gallery' },
  { label: 'Campus', href: '#gallery' },
];

// scrolled is passed from Home.jsx which owns the shared scroll state
export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-blue-900/85 backdrop-blur-xl shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 py-3.5 flex items-center justify-between gap-6">

        {/* Logo + VCET — slides in when scrolled */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className={`flex items-center gap-3 shrink-0 transition-all duration-500 ${
            scrolled
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-3 pointer-events-none w-0 overflow-hidden'
          }`}
          aria-hidden={!scrolled}
        >
          <img
            src={logo}
            alt="VCET Logo"
            className="w-9 h-9 rounded-full bg-white p-0.5 shadow-md"
          />
          <span className="text-white font-bold text-lg tracking-tight font-jakarta whitespace-nowrap">
            VCET
          </span>
        </a>

        {/* Desktop Nav Links — centered */}
        <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/90 text-sm font-medium hover:text-white transition-colors relative group whitespace-nowrap"
            >
              {link.label}
              {/* Underline slide-in on hover */}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA Button + Hamburger — always on the right */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap ${
              scrolled
                ? 'bg-white text-blue-900 shadow-lg hover:bg-blue-50 hover:shadow-xl'
                : 'bg-white/20 text-white border border-white/50 hover:bg-white/30 backdrop-blur-sm shadow-md'
            }`}
          >
            Contact Us
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-blue-900/95 backdrop-blur-md`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/90 text-sm font-medium hover:text-white transition-colors py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="sm:hidden bg-white text-blue-900 px-6 py-2 rounded-full font-semibold text-sm text-center mt-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
