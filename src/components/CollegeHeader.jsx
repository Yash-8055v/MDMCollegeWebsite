import logo from '../assets/logo.png';

export default function CollegeHeader({ scrolled }) {
  return (
    <div
      className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${
        scrolled
          ? 'max-h-0 opacity-0 py-0'
          : 'max-h-[300px] opacity-100 py-2 sm:py-3 md:py-5'
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto flex flex-col items-center gap-0.5 sm:gap-1 md:gap-1.5 px-3 sm:px-4 transition-transform duration-500 ${
          scrolled ? '-translate-y-4' : 'translate-y-0'
        }`}
      >
        {/* Logo + Title Row */}
        <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 md:gap-4 justify-center text-center sm:text-left">
          <img
            src={logo}
            alt="VCET Logo"
            className="w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[68px] lg:h-[68px] rounded-full bg-white p-0.5 sm:p-1 shadow-md shrink-0"
          />
          <h1 className="text-[13px] sm:text-lg md:text-2xl lg:text-[26px] font-bold text-white leading-snug uppercase tracking-wide font-jakarta drop-shadow-md">
            Vidyavardhini's College Of Engineering &amp; Technology, Vasai Road
          </h1>
        </div>

        {/* Marathi Title */}
        <p className="text-[12px] sm:text-base md:text-lg lg:text-[19px] text-white/90 font-medium drop-shadow-sm text-center px-2">
          विद्यावर्धिनीचे अभियांत्रिकी आणि तंत्रज्ञान महाविद्यालय, वसई रोड
        </p>

        {/* Affiliation */}
        <p className="text-[10px] sm:text-sm md:text-base lg:text-[16px] text-white/85 text-center px-2">
          (Autonomous Institute Affiliated to University of Mumbai, Approved by AICTE &amp; DTE)
        </p>

        {/* Accreditation */}
        <p className="text-[12px] sm:text-base md:text-[17px] font-bold text-yellow-300 tracking-wide drop-shadow-sm">
          NBA &amp; NAAC Accredited
        </p>
      </div>

      {/* ── Separator line between title block and navbar ── */}
      <div
        className={`transition-all duration-500 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 mt-2 sm:mt-3 md:mt-4">
          <div className="border-t border-white/25" />
        </div>
      </div>
    </div>
  );
}
