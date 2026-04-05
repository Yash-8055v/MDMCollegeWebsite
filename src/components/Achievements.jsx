import img1 from '../assets/achievements/Devanshi-Solanki-1.jpg';
import img2 from '../assets/achievements/Airnova-25.png';
import img3 from '../assets/achievements/Carrom-25.png';
import img4 from '../assets/achievements/Grant-of-patent-to-vaishali.jpg';

const achievements = [
  { title: 'National Robotics Competition Winner', img: img1 },
  { title: 'Student Innovator Award 2024', img: img2 },
  { title: 'Best Research Paper in AI Conference', img: img3 },
  { title: 'Global Patent Filed by VCET Students', img: img4 },
];

export default function Achievements() {
  return (
    <section id="achievements" className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 text-slate-800 uppercase tracking-wider font-jakarta">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-video lg:aspect-auto lg:h-64 shadow-md cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                <p className="text-white font-bold text-sm">{item.title}</p>
              </div>
            </div>
          ))}
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
