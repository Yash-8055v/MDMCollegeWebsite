import { useState, useEffect } from 'react';
import img1 from '../assets/achievements/Devanshi-Solanki-1.jpg';
import img2 from '../assets/achievements/Airnova-25.png';
import img3 from '../assets/achievements/Carrom-25.png';
import img4 from '../assets/achievements/Grant-of-patent-to-vaishali.jpg';

const baseAchievements = [
  { title: 'National Robotics Competition Winner', img: img1 },
  { title: 'Student Innovator Award 2024', img: img2 },
  { title: 'Best Research Paper in AI Conference', img: img3 },
  { title: 'Global Patent Filed by VCET Students', img: img4 },
];

// Duplicate items so we have enough to demonstrate the slider on large screens
const achievements = [...baseAchievements, ...baseAchievements];

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive items count
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, achievements.length - visibleCount);

  // Auto-slide step wise every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section id="achievements" className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 text-slate-800 uppercase tracking-wider font-jakarta">
          Achievements
        </h2>
        
        {/* Carousel Container */}
        <div className="relative group">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * (1.5 / visibleCount)}rem))`,
              }}
            >
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl aspect-square md:aspect-[4/5] lg:aspect-auto lg:h-64 shadow-md cursor-pointer shrink-0"
                  style={{ width: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 1.5) / visibleCount}rem)` }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 pointer-events-none">
                    <p className="text-white font-bold text-sm leading-tight">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-6 h-2 bg-primary'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="text-primary font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all group">
            View All Achievements
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
