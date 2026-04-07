import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center">
      {/* Background Image – covers entire section including space behind fixed header */}
      <img
        src={heroImg}
        alt="VCET Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/50 to-black/30" />

      {/* Content – padded top to clear fixed header */}
      <div className="relative z-10 max-w-[600px] px-4 sm:px-6 md:px-10 lg:px-20 pt-44 sm:pt-52 md:pt-60 lg:pt-64 pb-16 sm:pb-20 md:pb-24">
        <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.15] sm:leading-tight mb-4 sm:mb-6 font-jakarta drop-shadow-lg">
          SHAPING<br />FUTURE<br />ENGINEERS
        </h1>

        <p className="text-white/85 text-[14px] sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-[480px]">
          Empowering students with world-class education, cutting-edge research, and industry-ready skills since 1994.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
          <a
            href="#admissions"
            className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold text-center hover:bg-primary-light transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm sm:text-base"
          >
            Apply Now
          </a>
          <a
            href="#departments"
            className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold text-center hover:bg-white/15 transition-all duration-300 text-sm sm:text-base"
          >
            Explore Programs
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-start sm:gap-6 md:gap-10 mt-8 sm:mt-10 md:mt-12 text-center sm:text-left">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-jakarta">30+</p>
            <p className="text-white/70 text-[10px] sm:text-xs md:text-sm mt-1">Years of Excellence</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-jakarta">95%</p>
            <p className="text-white/70 text-[10px] sm:text-xs md:text-sm mt-1">Placement Rate</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-jakarta">50+</p>
            <p className="text-white/70 text-[10px] sm:text-xs md:text-sm mt-1">Top Recruiters</p>
          </div>
        </div>
      </div>
    </section>
  );
}

