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
  return (
    <div className="min-h-screen bg-gray-50 font-jakarta text-slate-900">
      <Navbar />
      <Hero />
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
