// Import all recruiter logos dynamically
const recruiterImages = import.meta.glob('../assets/recruiters/*', { eager: true });
const logos = Object.values(recruiterImages).map((mod) => mod.default);

export default function Recruiters() {
  return (
    <section className="w-full pb-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <p className="text-center text-slate-500 font-bold text-xs uppercase tracking-widest mb-8">
          Our Recruiters
        </p>
      </div>

      {/* Full-width scrolling strip */}
      <div className="relative overflow-hidden w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-12 items-center"
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
              className="flex items-center justify-center w-36 h-20 md:w-48 md:h-24 shrink-0 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all px-4 py-3"
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
