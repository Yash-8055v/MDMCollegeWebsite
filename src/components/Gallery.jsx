import galleryImg1 from '../assets/gallery/MARATHI-BHASHA-DIWAS-GROUP-PIC--scaled-e1752914345495.jpg';
import galleryImg2 from '../assets/gallery/9e48a27b-38f9-4179-a390-557f999d191a.jpg';
import galleryImg3 from '../assets/gallery/IMG_4193-e1751968562696.jpg';
import galleryImg4 from '../assets/gallery/Literati4.jpeg';
import galleryImg5 from '../assets/gallery/Literati6.jpeg';

const galleryImages = [
  { src: galleryImg1, span: 'sm:col-span-2 sm:row-span-2 h-[200px] sm:h-[300px] md:h-[400px]' },
  { src: galleryImg2, span: 'h-[160px] sm:h-[180px] md:h-[192px]' },
  { src: galleryImg3, span: 'h-[160px] sm:h-[180px] md:h-[192px]' },
  { src: galleryImg4, span: 'h-[160px] sm:h-[180px] md:h-[192px]' },
  { src: galleryImg5, span: 'h-[160px] sm:h-[180px] md:h-[192px]' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-gray-50 py-10 sm:py-16 md:py-20 overflow-x-hidden max-w-full">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4 md:px-10 lg:px-20">
        <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-wider font-jakarta">
            Campus Gallery
          </h2>
          <a href="#" className="text-primary font-bold hover:underline text-xs sm:text-sm md:text-base">
            See full tour
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className={`${img.span} rounded-xl overflow-hidden shadow-lg`}>
              <img
                src={img.src}
                alt={`Campus ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 bg-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

