import { useState, useEffect } from 'react';
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="VCET Logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
          <span className="text-white font-bold text-xl tracking-tight font-jakarta">VCET</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/90 text-sm font-medium hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:block bg-white text-primary px-6 py-2 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us
          </a>

          {/* Hamburger */}
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-primary/95 backdrop-blur-md`}
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
            className="sm:hidden bg-white text-primary px-6 py-2 rounded-full font-semibold text-sm text-center mt-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
