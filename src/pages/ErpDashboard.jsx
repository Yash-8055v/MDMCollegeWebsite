import React from 'react';
import ErpLayout from '../components/ErpLayout';

export default function ErpDashboard() {
  const metrics = [
    { label: 'Announcements', value: '0', icon: 'campaign', bg: 'bg-thistle', text: 'text-shadow-grey', border: 'border-thistle' },
    { label: 'Attendance', value: '80.41%', icon: 'fact_check', bg: 'bg-lavender-blush', text: 'text-shadow-grey', border: 'border-lavender-blush' },
    { label: 'Assessment', value: '26', icon: 'assignment', bg: 'bg-lilac-ash', text: 'text-shadow-grey', border: 'border-lilac-ash' },
    { label: 'Task', value: '110', icon: 'task', bg: 'bg-blue-slate', text: 'text-white', border: 'border-blue-slate' },
    { label: 'DMS', value: 'Files', icon: 'folder', bg: 'bg-shadow-grey', text: 'text-white', border: 'border-shadow-grey' },
  ];

  const bulletinPosts = [
    { id: 1, author: 'Dr. Vaishali Anil Shirsath', time: 'Apr 04, 2026 11:47 AM', title: 'Experiments (ContinuousEvaluation)-10' },
    { id: 2, author: 'Dr. Vaishali Anil Shirsath', time: 'Apr 04, 2026 11:46 AM', title: 'Experiments (ContinuousEvaluation)-9' },
    { id: 3, author: 'Dr. Vaishali Anil Shirsath', time: 'Apr 04, 2026 11:45 AM', title: 'Experiments (ContinuousEvaluation)-8' },
  ];

  return (
    <ErpLayout>
      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className={`relative overflow-hidden bg-white rounded-2xl border ${metric.border} p-5 shadow-sm hover:shadow-md transition-shadow group`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className={`absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full ${metric.bg} opacity-20 group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>
            <div className="relative z-10 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl ${metric.bg} ${metric.text} flex items-center justify-center`}>
                  <span className="material-symbols-outlined">{metric.icon}</span>
                </div>
                <span className="text-2xl font-bold text-shadow-grey tracking-tight">{metric.value}</span>
              </div>
              <span className="text-sm font-semibold text-blue-slate">{metric.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Split: Schedule & Bulletin */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Center/Left Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Schedule Card */}
          <section className="bg-white rounded-2xl border border-thistle shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-thistle flex items-center justify-between bg-lavender-blush">
              <h2 className="flex items-center gap-2 text-base font-bold text-shadow-grey">
                <span className="material-symbols-outlined text-blue-slate">event</span>
                Today's Schedule
              </h2>
              <button className="text-xs font-semibold text-blue-slate hover:text-shadow-grey bg-thistle px-3 py-1.5 rounded-full transition-colors">
                View All
              </button>
            </div>
            <div className="p-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-lavender-blush rounded-full flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-3xl text-lilac-ash">event_busy</span>
              </div>
              <p className="text-blue-slate font-medium">No schedule for today</p>
              <p className="text-sm text-lilac-ash mt-1">Enjoy your free time or catch up on pending tasks.</p>
            </div>
          </section>

          {/* Bulletin Board */}
          <section className="bg-white rounded-2xl border border-thistle shadow-sm overflow-hidden min-w-0">
              <div className="px-4 sm:px-6 py-4 border-b border-thistle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-lavender-blush">
              <h2 className="flex items-center gap-2 text-base font-bold text-shadow-grey w-full sm:w-auto">
                <span className="material-symbols-outlined text-blue-slate">campaign</span>
                Bulletin Board
              </h2>
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                  <button className="text-xs font-semibold text-shadow-grey hover:text-white bg-white hover:bg-shadow-grey border border-thistle px-3 py-1.5 rounded-md transition-colors flex items-center justify-center gap-1 shadow-sm flex-1 sm:flex-none">
                    <span className="material-symbols-outlined text-[14px]">visibility</span> View All
                  </button>
                  <button className="text-xs font-semibold text-white bg-blue-slate hover:bg-shadow-grey border border-transparent px-3 py-1.5 rounded-md transition-colors flex items-center justify-center gap-1 shadow-sm flex-1 sm:flex-none">
                    <span className="material-symbols-outlined text-[14px]">edit_document</span> Compose
                  </button>
              </div>
            </div>

            <div className="divide-y divide-lavender-blush">
              {bulletinPosts.map((post) => (
                <article key={post.id} className="p-6 hover:bg-lavender-blush/50 transition-colors group">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-thistle text-shadow-grey flex items-center justify-center shrink-0">
                      <span className="font-bold text-sm">VS</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-blue-slate">
                        <span className="font-bold text-shadow-grey">{post.author}</span> shared this with <span className="font-semibold text-shadow-grey">You</span>
                      </p>
                      
                      <div className="mt-4 p-4 rounded-xl border border-thistle bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group-hover:border-lilac-ash transition-colors min-w-0 line-clamp-2">
                        <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto overflow-hidden">
                          <div className="w-10 h-10 rounded-lg bg-lavender-blush text-shadow-grey flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined">description</span>
                          </div>
                          <h4 className="font-semibold text-shadow-grey break-all line-clamp-2" style={{wordBreak: "break-word"}}>{post.title}</h4>
                        </div>
                        <div className="flex gap-1 shrink-0 w-full sm:w-auto justify-end mt-2 sm:mt-0">
                          <button className="p-2 text-lilac-ash hover:text-shadow-grey hover:bg-thistle rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">download</span></button>
                          <button className="p-2 text-lilac-ash hover:text-shadow-grey hover:bg-thistle rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">print</span></button>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <p className="text-xs font-medium text-lilac-ash flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">schedule</span> {post.time}
                        </p>
                        <div className="relative w-full sm:w-2/3">
                          <input 
                            type="text" 
                            placeholder="Write a comment..." 
                            className="w-full text-sm py-2 pl-4 pr-10 bg-lavender-blush border-transparent focus:bg-white focus:border-lilac-ash focus:ring-2 focus:ring-thistle rounded-full outline-none transition-all placeholder-lilac-ash text-shadow-grey"
                          />
                          <button className="absolute inset-y-0 right-1 my-1 px-2 text-blue-slate hover:bg-thistle hover:text-shadow-grey rounded-full flex items-center transition-colors">
                            <span className="material-symbols-outlined text-[18px]">send</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar Widget area */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-slate to-shadow-grey rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <h3 className="text-lg font-bold mb-2">Need Help?</h3>
            <p className="text-lilac-ash text-sm mb-4">Contact your academic mentor or the IT support desk for any queries.</p>
            <button className="bg-white text-shadow-grey px-4 py-2 rounded-lg text-sm font-bold hover:bg-thistle hover:shadow-lg hover:-translate-y-0.5 transition-all w-full flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">headset_mic</span>
              Contact Support
            </button>
          </div>
          
          <div className="bg-white rounded-2xl border border-thistle shadow-sm p-6">
            <h3 className="font-bold text-shadow-grey mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-slate">star</span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Exam Registration', 'Result Declaration', 'Library OPAC', 'T&P Portal'].map((link, i) => (
                <li key={i}>
                    <a href="#" className="flex items-center justify-between text-sm text-blue-slate hover:text-shadow-grey group">
                      <span>{link}</span>
                      <span className="material-symbols-outlined text-[16px] text-lilac-ash group-hover:text-shadow-grey group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </ErpLayout>
  );
}
