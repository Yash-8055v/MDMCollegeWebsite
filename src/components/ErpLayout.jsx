import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import junoLogo from '../assets/juno-logo.png';

export default function ErpLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="min-h-[100dvh] max-w-[100vw] bg-lavender-blush font-jakarta flex flex-col transition-opacity duration-500 overflow-x-hidden">
      
      {/* --- TOP HEADER --- */}
      <header className="fixed top-0 inset-x-0 h-16 bg-shadow-grey text-white z-50 flex items-center justify-between px-4 lg:px-6 shadow-md w-full">
        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={junoLogo} alt="Juno Campus" className="h-8 w-8 sm:h-10 sm:w-auto bg-white rounded-full p-1 border-2 border-white/20" />
            <span className="font-bold sm:text-xl tracking-tight hidden sm:block">Campus ERP</span>
          </Link>
          <div className="hidden lg:flex items-center gap-3 text-lavender-blush shrink-0">
            <button className="p-2 hover:bg-blue-slate rounded-full transition-colors"><span className="material-symbols-outlined text-xl">campaign</span></button>
            <button className="p-2 hover:bg-blue-slate rounded-full transition-colors"><span className="material-symbols-outlined text-xl">dashboard_customize</span></button>
            <button className="p-2 hover:bg-blue-slate rounded-full transition-colors"><span className="material-symbols-outlined text-xl">open_in_new</span></button>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold leading-tight text-white">YASH VILAS KARANDE</p>
            <p className="text-xs text-lilac-ash">Student</p>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-thistle bg-blue-slate flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-sm sm:text-base">person</span>
          </div>
          <button className="hidden lg:block p-1 hover:bg-blue-slate rounded-full transition-colors shrink-0">
            <span className="material-symbols-outlined">settings</span>
          </button>
          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-1.5 hover:bg-blue-slate text-white rounded-md border border-white/20 transition-colors shrink-0 flex items-center justify-center bg-white/10"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* --- SECONDARY HEADER (Navigation) - DESKTOP ONLY --- */}
      <div className="hidden lg:flex fixed top-16 inset-x-0 h-auto min-h-[3rem] bg-white border-b border-thistle z-40 items-center px-2 sm:px-4 lg:px-6 shadow-sm w-full">
        <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-4 w-full relative pb-2 pt-2">
          {topMenuItems.map((menu, idx) => (
            <div key={idx} className="relative group flex items-center sm:h-full py-1 shrink-0">
              <button className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs md:text-sm font-medium text-blue-slate group-hover:text-shadow-grey group-hover:bg-thistle rounded-md transition-colors border border-transparent group-hover:border-thistle bg-lavender-blush/50 sm:bg-transparent">
                {menu.label}
                <span className="material-symbols-outlined text-[14px] sm:text-[16px]">expand_more</span>
              </button>
              
              {/* Dropdown Menu */}
              {menu.items && menu.items.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-48 sm:w-56 bg-white border border-thistle rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {menu.items.map((item, itemIdx) => (
                      <Link 
                        key={itemIdx} 
                        to={item.link || "#"} 
                        className="block px-4 py-2 text-xs sm:text-sm text-blue-slate hover:bg-lavender-blush hover:text-shadow-grey transition-colors whitespace-normal"
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

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      <div className={`fixed inset-0 bg-shadow-grey/60 backdrop-blur-sm z-[100] transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div 
          className={`absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between p-4 border-b border-thistle bg-lavender-blush shrink-0">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={junoLogo} alt="Juno Campus" className="h-8 w-auto border-2 border-white rounded-full bg-white shadow-sm" />
              <span className="font-bold text-shadow-grey text-lg">Menu</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-thistle rounded-full text-shadow-grey transition-colors flex items-center justify-center bg-white border border-thistle shadow-sm">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto hide-scrollbar p-0">
            {/* User Widget in Mobile Drawer */}
            <div className="p-5 border-b border-lavender-blush flex items-center gap-4 bg-[#f8f9fc]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-slate to-shadow-grey overflow-hidden shrink-0 flex items-center justify-center shadow-md">
                 <span className="material-symbols-outlined text-white text-3xl">person</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-shadow-grey truncate">YASH V. KARANDE</h3>
                <p className="text-xs text-blue-slate mt-0.5 font-medium">Roll: 2406527108</p>
                <div className="inline-block mt-1.5 bg-thistle text-shadow-grey px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                  SEM IV | AI | Div 1
                </div>
              </div>
            </div>

            {/* Top Menu Items (Mobile version) */}
            <div className="py-2 border-b border-thistle">
              <h4 className="px-5 py-2 text-[10px] font-bold text-lilac-ash uppercase tracking-widest">Academics & Tools</h4>
              <nav className="flex flex-col px-3 space-y-1">
                {topMenuItems.map((menu, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="px-3 py-2.5 flex items-center justify-between text-sm font-bold text-shadow-grey hover:bg-lavender-blush rounded-lg transition-colors cursor-pointer group">
                      <span>{menu.label}</span>
                      {menu.items && menu.items.length > 0 && <span className="material-symbols-outlined text-lilac-ash group-hover:text-shadow-grey transition-colors">chevron_right</span>}
                    </div>
                    {/* Simplified dropdown items visibility for demo - they can just be expanded in mobile */}
                    {menu.items && menu.items.length > 0 && (
                      <div className="flex flex-col pl-6 pr-3 py-1 space-y-1 border-l-2 border-lavender-blush ml-5 my-1">
                        {menu.items.map((item, itemIdx) => (
                          <Link 
                            key={itemIdx} 
                            to={item.link || "#"}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-3 py-2 text-sm font-semibold text-blue-slate hover:text-shadow-grey hover:bg-thistle rounded-md transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Sidebar navLinks (Mobile version) */}
            <div className="py-2 mb-6">
              <h4 className="px-5 py-2 text-[10px] font-bold text-lilac-ash uppercase tracking-widest">Main Modules</h4>
              <nav className="flex flex-col px-3 space-y-1">
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      link.active 
                        ? 'bg-blue-slate text-white shadow-md shadow-blue-slate/20' 
                        : 'text-shadow-grey font-semibold hover:bg-thistle text-sm'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                ))}
              </nav>
            </div>

          </div>
        </div>
      </div>

      <div className="flex pt-16 lg:pt-28 h-screen w-full relative overflow-hidden">
        {/* --- LEFT SIDEBAR --- */}
        <aside className="w-64 bg-white border-r border-thistle hidden lg:flex flex-col h-[calc(100vh-7rem)] sticky top-28 overflow-y-auto hide-scrollbar z-30 shrink-0">
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
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8 w-full max-w-full">
          <div className={`max-w-6xl mx-auto space-y-6 sm:space-y-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} pb-10`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
