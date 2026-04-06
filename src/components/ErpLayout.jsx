import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import junoLogo from '../assets/juno-logo.png';

export default function ErpLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: 'Dashboard', icon: 'dashboard', active: true },
    { name: 'Profile', icon: 'person' },
    { name: 'Syllabus', icon: 'menu_book' },
    { name: 'Calendar', icon: 'calendar_month' },
    { name: 'Time Table', icon: 'schedule' },
    { name: 'Library (0 Issued)', icon: 'local_library' },
    { name: 'Fees Details', icon: 'payments' },
    { name: 'Leave Details', icon: 'event_busy' },
    { name: 'Hostel', icon: 'apartment' },
    { name: 'Contact Mentor', icon: 'support_agent' },
    { name: 'Blogs', icon: 'article' },
  ];

  const topMenuItems = [
    { label: 'Institute', type: 'dropdown', items: [] },
    { label: 'Personal', type: 'dropdown', items: [] },
    { label: 'Academic Schedules', type: 'dropdown', items: [] },
    { 
      label: 'Academic Functions', 
      type: 'dropdown', 
      items: [
        { label: 'Online Assessment', link: '/online-assessment' }
      ] 
    },
    { label: 'Communication', type: 'dropdown', items: [] }
  ];

  return (
    <div className="min-h-screen bg-lavender-blush font-jakarta flex flex-col transition-opacity duration-500">
      
      {/* --- TOP HEADER --- */}
      <header className="fixed top-0 inset-x-0 h-16 bg-shadow-grey text-white z-50 flex items-center justify-between px-4 lg:px-6 shadow-md">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={junoLogo} alt="Juno Campus" className="h-10 w-auto bg-white rounded-full p-1 border-2 border-white/20" />
            <span className="font-bold text-xl tracking-tight hidden sm:block">Campus ERP</span>
          </Link>
          <div className="hidden lg:flex items-center gap-3 text-lavender-blush">
            <button className="p-2 hover:bg-blue-slate rounded-full transition-colors"><span className="material-symbols-outlined text-xl">campaign</span></button>
            <button className="p-2 hover:bg-blue-slate rounded-full transition-colors"><span className="material-symbols-outlined text-xl">dashboard_customize</span></button>
            <button className="p-2 hover:bg-blue-slate rounded-full transition-colors"><span className="material-symbols-outlined text-xl">open_in_new</span></button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold leading-tight text-white">YASH VILAS KARANDE</p>
            <p className="text-xs text-lilac-ash">Student</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-thistle bg-blue-slate flex items-center justify-center">
            <span className="material-symbols-outlined text-white">person</span>
          </div>
          <button className="p-1 hover:bg-blue-slate rounded-full transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      {/* --- SECONDARY HEADER (Navigation) --- */}
      <div className="fixed top-16 inset-x-0 h-12 bg-white border-b border-thistle z-40 flex items-center px-4 lg:px-6 overflow-visible shadow-sm">
        <div className="flex gap-1 md:gap-4 w-full relative">
          {topMenuItems.map((menu, idx) => (
            <div key={idx} className="relative group flex items-center h-full py-2">
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-slate group-hover:text-shadow-grey group-hover:bg-thistle rounded-md transition-colors">
                {menu.label}
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              
              {/* Dropdown Menu */}
              {menu.items && menu.items.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-thistle rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {menu.items.map((item, itemIdx) => (
                      <Link 
                        key={itemIdx} 
                        to={item.link || "#"} 
                        className="block px-4 py-2 text-sm text-blue-slate hover:bg-lavender-blush hover:text-shadow-grey transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex pt-28 h-screen w-full">
        {/* --- LEFT SIDEBAR --- */}
        <aside className="w-64 bg-white border-r border-thistle hidden lg:flex flex-col h-[calc(100vh-7rem)] sticky top-28 overflow-y-auto z-30">
          {/* User Widget */}
          <div className="p-4 border-b border-lavender-blush flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-thistle to-lavender-blush overflow-hidden shrink-0 flex items-center justify-center shadow-inner">
               <span className="material-symbols-outlined text-shadow-grey text-3xl">person</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-shadow-grey truncate">YASH V. KARANDE</h3>
              <p className="text-[11px] text-blue-slate mt-1">Roll: <span className="font-medium text-shadow-grey">2406527108</span></p>
              <p className="text-[11px] text-blue-slate">SEM IV | AI | Div 1</p>
            </div>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  link.active 
                    ? 'bg-blue-slate text-white shadow-md shadow-blue-slate/20' 
                    : 'text-blue-slate hover:bg-thistle hover:text-shadow-grey'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className={`max-w-6xl mx-auto space-y-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
