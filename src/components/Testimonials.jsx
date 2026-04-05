import { useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 on desktop, 1 on mobile
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) return 3;
    }
    return 1;
  };

  const maxIndex = Math.max(0, testimonials.length - getVisibleCount());

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-wider font-jakarta">
            Testimonials
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6 md:gap-8"
            style={{
              transform: `translateX(-${currentIndex * (100 / getVisibleCount() + 2)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 shrink-0 w-full md:w-[calc(33.333%-1.5rem)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover bg-gray-200"
                  />
                  <div>
                    <h5 className="font-bold text-slate-800">{t.name}</h5>
                    <p className="text-xs text-slate-500">{t.dept}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">
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
