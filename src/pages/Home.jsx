import { useState, useEffect } from 'react';
import CollegeHeader from '../components/CollegeHeader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NoticesEvents from '../components/NoticesEvents';
import Placements from '../components/Placements';
import Recruiters from '../components/Recruiters';
import Departments from '../components/Departments';
import Achievements from '../components/Achievements';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-jakarta text-slate-900 w-full overflow-x-hidden max-w-[100vw]">
      {/* Fixed overlay header: CollegeHeader (fades out) + Navbar (becomes solid) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <CollegeHeader scrolled={scrolled} />
        <Navbar scrolled={scrolled} />
      </div>

      {/* Hero fills the full viewport – sits behind the fixed header */}
      <Hero />

      {/* Rest of page */}
      <NoticesEvents />
      <Placements />
      <Recruiters />
      <Departments />
      <Achievements />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}
