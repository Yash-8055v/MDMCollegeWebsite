const notices = [
  { date: '01 Jan 2025', text: 'Exam Schedule for Odd Semesters Released', color: 'bg-primary' },
  { date: '15 Dec 2024', text: 'Winter Break Commencement Notice', color: 'bg-accent' },
  { date: '20 Nov 2024', text: 'Guest Lecture on AI/ML by Industry Expert', color: 'bg-primary' },
];

const events = [
  {
    date: '26 Jan 2025',
    title: 'Tech Fest 2025 - Annual Innovation Summit',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=140&fit=crop',
  },
  {
    date: '10 Feb 2025',
    title: 'Annual Day Celebrations & Awards',
    img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=200&h=140&fit=crop',
  },
];

export default function NoticesEvents() {
  return (
    <section className="w-full -mt-10 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 font-jakarta">
            NOTICES & EVENTS
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Notices */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-600">Latest Notices</h3>
              <div className="space-y-4">
                {notices.map((notice, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className={`${notice.color} text-white text-[10px] font-bold px-3 py-1 rounded whitespace-nowrap shrink-0`}>
                      {notice.date}
                    </div>
                    <p className="text-slate-800 font-medium group-hover:text-primary transition-colors text-sm md:text-base">
                      {notice.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-600">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-20 h-14 object-cover rounded-lg shrink-0"
                    />
                    <div>
                      <p className="text-xs font-bold text-primary">{event.date}</p>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">
                        {event.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
