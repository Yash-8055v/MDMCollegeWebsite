// Import all recruiter logos dynamically
const recruiterImages = import.meta.glob('../assets/recruiters/*', { eager: true });
const logos = Object.values(recruiterImages).map((mod) => mod.default);

export default function Recruiters() {
  return (
    <section className="w-full pb-16 overflow-x-hidden max-w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 text-slate-800 uppercase tracking-wider font-jakarta">
          Our Recruiters
        </h2>
      </div>

      {/* Full-width scrolling strip */}
      <div className="relative overflow-hidden w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-8 md:gap-12 items-center"
          style={{
            animation: 'marquee 35s linear infinite',
            width: 'max-content',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((src, i) => (
            <div 
              key={i}
              className="flex items-center justify-center w-28 h-16 sm:w-36 sm:h-20 md:w-48 md:h-24 shrink-0 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all px-3 py-2 sm:px-4 sm:py-3"
            >
              <img
                src={src}
                alt="Recruiter"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
