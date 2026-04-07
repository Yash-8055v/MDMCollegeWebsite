import { useRef, useEffect } from 'react';
import t1 from '../assets/testimonials/1-1.jpg';
import t2 from '../assets/testimonials/2-1.jpg';
import t3 from '../assets/testimonials/2-2.jpg';
import t4 from '../assets/testimonials/3-2.jpg';

const testimonials = [
  {
    name: 'Saurav Patil',
    dept: 'BE Computer Engineering',
    img: t1,
    quote: 'VCET gave me the perfect blend of academics and practical exposure. The placement cell worked tirelessly to prepare us, and I landed my dream job at a top MNC. Forever grateful to the faculty!',
  },
  {
    name: 'Emile D\'Souza',
    dept: 'BE Information Technology',
    img: t2,
    quote: 'The engineering culture at VCET is truly exceptional. From hackathons to industry projects, the opportunities here shaped me into a confident professional ready for the tech world.',
  },
  {
    name: 'Jamna Sharma',
    dept: 'BE Mechanical Engineering',
    img: t3,
    quote: 'The state-of-the-art labs and research facilities at VCET helped me publish my first research paper. The mentorship from professors made all the difference in my academic journey.',
  },
  {
    name: 'Rahul Verma',
    dept: 'BE Civil Engineering',
    img: t4,
    quote: 'VCET\'s focus on innovation and entrepreneurship inspired me to start my own venture. The college ecosystem nurtures creativity and provides amazing networking opportunities.',
  },
];

export default function Testimonials() {
  const innerRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);

  // Duplicate for seamless infinite loop
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const speed = 0.5; // px per frame

    const tick = () => {
      posRef.current += speed;
      // Reset seamlessly once we've moved past 1 set of testimonials
      // Since we duplicated 3 times, we can safely reset at 1/3 of the total scroll width
      const resetPoint = inner.scrollWidth / 3;
      if (posRef.current >= resetPoint) {
        posRef.current = 0;
      }
      inner.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);

    const pause = () => cancelAnimationFrame(animRef.current);
    const resume = () => { animRef.current = requestAnimationFrame(tick); };

    // Pause on hover
    inner.parentElement.addEventListener('mouseenter', pause);
    inner.parentElement.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animRef.current);
      inner.parentElement?.removeEventListener('mouseenter', pause);
      inner.parentElement?.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <section className="w-full py-16 md:py-20 overflow-x-hidden max-w-full">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-wider font-jakarta">
            Testimonials
          </h2>
        </div>

        <div className="overflow-hidden relative w-full">
          {/* Fade gradients on edges for smooth entry/exit */}
          <div className="absolute top-0 left-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Inner scrolling container */}
          <div
            ref={innerRef}
            className="flex gap-4 md:gap-8 will-change-transform w-max py-2"
          >
            {allTestimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-5 md:p-8 rounded-xl shadow-sm border border-gray-100 shrink-0 w-[280px] md:w-[350px] lg:w-[380px]"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-gray-200 shrink-0"
                  />
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm md:text-base">{t.name}</h5>
                    <p className="text-[10px] md:text-xs text-slate-500 line-clamp-1">{t.dept}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
