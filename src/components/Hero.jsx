import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[85vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="VCET Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-[500px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8 font-jakarta">
            SHAPING<br />FUTURE<br />ENGINEERS
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#admissions"
              className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-center hover:bg-primary-light transition-all hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </a>
            <a
              href="#departments"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-center hover:bg-white/10 transition-all"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
