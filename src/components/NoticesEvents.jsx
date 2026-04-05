import { useRef, useEffect } from 'react';

const notices = [
  { date: '01 Apr 2025', text: 'Circular: End Semester Examination (ESE) Schedule for Even Semester 2024–25 Released', type: 'exam' },
  { date: '28 Mar 2025', text: 'Admission Open for B.E. and M.E. Programs – Academic Year 2025–26', type: 'admission' },
  { date: '20 Mar 2025', text: 'Guest Lecture on Generative AI & Large Language Models by Mr. Rahul Mehta, Google India', type: 'event' },
  { date: '15 Mar 2025', text: 'Application Portal Open: VCET Research Scholarship 2025 – Last Date 10 April 2025', type: 'scholarship' },
  { date: '10 Mar 2025', text: 'Winter Break Commencement Notice – College Reopens 15 March 2025', type: 'general' },
  { date: '05 Mar 2025', text: 'Workshop on Embedded Systems & IoT – Registration Mandatory for Final Year Students', type: 'workshop' },
  { date: '28 Feb 2025', text: 'NBA Accreditation Inspection Visit Scheduled – Students to Maintain Decorum', type: 'important' },
  { date: '20 Feb 2025', text: 'Industry Visit to Tata Consultancy Services, Mumbai – Apply Before 25 Feb', type: 'event' },
  { date: '14 Feb 2025', text: 'Internal Assessment (IA) Results for Odd Semester Published on Student Portal', type: 'exam' },
  { date: '01 Feb 2025', text: 'Circular: Updated Anti-Ragging Policy 2025 – Mandatory Acknowledgment by All Students', type: 'important' },
  { date: '25 Jan 2025', text: 'Hackathon 3.0 – 24-Hour Coding Competition. Teams of 3. Register at vcet.edu.in', type: 'event' },
  { date: '15 Jan 2025', text: 'NAAC Site Visit – Students Requested to Carry ID Cards at All Times', type: 'important' },
];

const typeColors = {
  exam:        'bg-blue-600',
  admission:   'bg-green-600',
  event:       'bg-purple-600',
  scholarship: 'bg-orange-500',
  general:     'bg-slate-500',
  workshop:    'bg-teal-600',
  important:   'bg-red-600',
};

const events = [
  {
    date: '26 Jan 2025',
    title: 'Tech Fest 2025 – Annual Innovation Summit',
    category: 'Technical',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop',
  },
  {
    date: '10 Feb 2025',
    title: 'Annual Day Celebrations & Awards Ceremony 2025',
    category: 'Cultural',
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop',
  },
  {
    date: '22 Feb 2025',
    title: 'National Level Paper Presentation – TECHNOVISTA',
    category: 'Academic',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop',
  },
  {
    date: '05 Mar 2025',
    title: 'Placement Drive 2025 – TCS, Infosys, Wipro on Campus',
    category: 'Placement',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop',
  },
  {
    date: '20 Mar 2025',
    title: 'Sports Day & Inter-Department Tournament 2025',
    category: 'Sports',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop',
  },
  {
    date: '02 Apr 2025',
    title: 'Robotics Workshop – Build & Program Your First Bot',
    category: 'Technical',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop',
  },
  {
    date: '15 Apr 2025',
    title: 'Entrepreneurship Summit & Startup Pitch Competition',
    category: 'Academic',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop',
  },
];

const categoryColors = {
  Technical:  'bg-blue-100 text-blue-700',
  Cultural:   'bg-pink-100 text-pink-700',
  Academic:   'bg-purple-100 text-purple-700',
  Placement:  'bg-green-100 text-green-700',
  Sports:     'bg-orange-100 text-orange-700',
};

// Fixed height shared by BOTH columns — keeps them equal
const COLUMN_H = 'h-[460px]';

export default function NoticesEvents() {
  const innerRef = useRef(null);   // ref on the inner list div (we move this)
  const animRef  = useRef(null);
  const posRef   = useRef(0);      // current translateY offset in px

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const speed = 0.8; // px per frame — upward movement

    const tick = () => {
      posRef.current += speed;
      // The inner div is duplicated, so its total height = 2× one copy.
      // Reset seamlessly once we've moved one full copy upward.
      const half = inner.scrollHeight / 2;
      if (posRef.current >= half) {
        posRef.current = 0;
      }
      // Move the inner list upward
      inner.style.transform = `translateY(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);

    // Pause on hover so user can read
    const pause  = () => cancelAnimationFrame(animRef.current);
    const resume = () => { animRef.current = requestAnimationFrame(tick); };
    inner.parentElement.addEventListener('mouseenter', pause);
    inner.parentElement.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(animRef.current);
      inner.parentElement?.removeEventListener('mouseenter', pause);
      inner.parentElement?.removeEventListener('mouseleave', resume);
    };
  }, []);

  // Duplicate for seamless infinite loop
  const allNotices = [...notices, ...notices];

  return (
    <section className="w-full -mt-10 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

          {/* ── Section Header ── */}
          <div className="px-8 pt-7 pb-4 border-b border-gray-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 font-jakarta tracking-tight">
              📋 Notices &amp; Events
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Stay up to date with the latest announcements and campus events
            </p>
          </div>

          {/* ── Two Columns ── */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

            {/* ════ NOTICES — auto-scroll ════ */}
            <div className="p-6 md:p-8 flex flex-col">
              {/* Column header */}
              <div className="flex items-center gap-2 mb-4 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <h3 className="text-lg md:text-xl font-bold text-slate-700 font-jakarta">
                  Latest Notices
                </h3>
                <span className="ml-auto text-xs bg-red-50 text-red-600 font-semibold px-2.5 py-1 rounded-full border border-red-100">
                  LIVE
                </span>
              </div>

              {/* Scroll area with fade overlays */}
              <div className={`relative ${COLUMN_H}`}>
                {/* Clip container — overflow-hidden hides content outside bounds */}
                <div className="h-full overflow-hidden">
                  {/* Inner list — we translateY this upward via JS */}
                  <div ref={innerRef} className="will-change-transform">
                    <div className="space-y-3 pb-4">
                      {allNotices.map((notice, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 group cursor-pointer px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div
                            className={`${typeColors[notice.type] || 'bg-slate-500'} text-white text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 leading-tight text-center min-w-[90px]`}
                          >
                            {notice.date}
                          </div>
                          <p className="text-slate-700 font-medium group-hover:text-blue-700 transition-colors text-sm md:text-[15px] leading-snug">
                            {notice.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top fade */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
              </div>
            </div>

            {/* ════ EVENTS — manual scroll ════ */}
            <div className="p-6 md:p-8 flex flex-col">
              {/* Column header */}
              <div className="flex items-center gap-2 mb-4 shrink-0">
                <span className="text-xl">🗓</span>
                <h3 className="text-lg md:text-xl font-bold text-slate-700 font-jakarta">
                  Upcoming Events
                </h3>
                <span className="ml-auto text-xs text-slate-400 font-medium">
                  Scroll ↕
                </span>
              </div>

              {/* Manual scrollable area */}
              <div className={`relative ${COLUMN_H}`}>
                <div
                  className="h-full overflow-y-auto pr-1"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}
                >
                  <div className="space-y-4 pb-4">
                    {events.map((event, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 group cursor-pointer px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      >
                        <img
                          src={event.img}
                          alt={event.title}
                          className="w-24 h-16 md:w-28 md:h-[72px] object-cover rounded-xl shrink-0 shadow-sm group-hover:shadow-md transition-shadow"
                        />
                        <div className="flex-1 min-w-0">
                          <span
                            className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full mb-1 ${categoryColors[event.category] || 'bg-gray-100 text-gray-600'}`}
                          >
                            {event.category}
                          </span>
                          <p className="text-xs font-bold text-blue-600 mb-1 tracking-wide">
                            {event.date}
                          </p>
                          <p className="text-sm md:text-[15px] font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug">
                            {event.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom fade hint */}
                <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
