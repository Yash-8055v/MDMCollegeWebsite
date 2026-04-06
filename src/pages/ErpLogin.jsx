import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero.jpg';

export default function ErpLogin() {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!email.endsWith('@vcet.edu.in')) {
      setErrorMsg('Access denied. Only @vcet.edu.in emails are allowed.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        navigate('/erp-dashboard');
      } else {
        setErrorMsg(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      setErrorMsg('Unable to connect to server. Please ensure the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Add a slight delay to trigger entrance animations
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 flex font-jakarta overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Campus Background"
          className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-sky-900/80 to-transparent"></div>
      </div>

      {/* Floating Back to Home button */}
      <Link
        to="/"
        className={`absolute top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <span className="material-symbols-outlined text-2xl group-hover:-translate-x-1 transition-transform">
          arrow_back
        </span>
        <span className="font-semibold tracking-wide text-sm">Back to Home</span>
      </Link>

      {/* Main Content Container */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24">
        
        {/* LEFT PANEL: Vision & Mission */}
        <div
          className={`w-full lg:w-[55%] max-w-2xl pt-24 lg:pt-0 transition-all duration-1000 ease-out delay-100 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-snug drop-shadow-lg">
              Vidyavardhini's College Of<br className="hidden md:block"/> Engineering &amp; Technology
            </h1>
            <div className="h-1.5 w-24 bg-cyan-400 rounded-full mt-2 lg:mt-6 shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
          </div>

          <div className="space-y-10 pr-0 lg:pr-10">
            {/* Vision */}
            <div className="group">
              <h2 className="flex items-center gap-2 text-cyan-300 text-lg md:text-xl font-bold uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-2xl animate-pulse">visibility</span>
                Vision
              </h2>
              <div className="pl-8 border-l-2 border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500">
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
                  To be a premier institution of technical education, aiming at becoming a valuable resource for industry and society.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group">
              <h2 className="flex items-center gap-2 text-cyan-300 text-lg md:text-xl font-bold uppercase tracking-widest mb-4">
                <span className="material-symbols-outlined text-2xl animate-pulse">track_changes</span>
                Mission
              </h2>
              <div className="pl-8 border-l-2 border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500 space-y-3">
                {[
                  "To provide technologically inspiring environment for learning.",
                  "To promote creativity, innovation and professional activities.",
                  "To inculcate ethical and moral values.",
                  "To cater personal, professional and societal needs through quality education."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-cyan-400/70 text-lg mt-0.5 shrink-0">radio_button_checked</span>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Login Form Card */}
        <div
          className={`w-full lg:w-[400px] mt-16 lg:mt-0 transition-all duration-1000 ease-out delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-white/30 transition-colors duration-500">
            {/* Glow accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-[50px] pointer-events-none"></div>

            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/10 mb-4 shadow-inner ring-1 ring-white/20">
                <span className="material-symbols-outlined text-3xl text-cyan-300">lock</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
              <p className="text-cyan-200/80 text-sm font-medium">Please login to access your portal</p>
            </div>

            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 animate-pulse">
                <span className="material-symbols-outlined text-red-400 shrink-0">error</span>
                <p className="text-sm font-medium text-red-200/90 leading-tight">{errorMsg}</p>
              </div>
            )}

            <form className="space-y-6 relative z-10" onSubmit={handleLogin}>
              <div className="space-y-4">
                {/* Username Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-white/50 group-focus-within:text-cyan-400 transition-colors">person</span>
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-12 pr-4 py-3.5 bg-slate-900/40 border border-white/10 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all shadow-inner outline-none text-sm md:text-base font-medium"
                    placeholder="Enter email (@vcet.edu.in)"
                  />
                </div>

                {/* Password Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-white/50 group-focus-within:text-cyan-400 transition-colors">key</span>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-12 pr-12 py-3.5 bg-slate-900/40 border border-white/10 rounded-xl text-white placeholder-white/40 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all shadow-inner outline-none text-sm md:text-base font-medium"
                    placeholder="Enter password"
                  />
                  <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white transition-colors focus:outline-none">
                    <span className="material-symbols-outlined">visibility_off</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <a href="#" className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors hover:underline underline-offset-2">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-3.5 px-4 rounded-xl text-white font-bold tracking-wide overflow-hidden bg-blue-600 transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-[0.98] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {!isLoading && <div className="absolute inset-0 w-1/4 h-full bg-white/20 skew-x-[-25deg] -translate-x-[250%] group-hover:animate-shine"></div>}
                <span className="relative z-10 flex items-center gap-2">
                  {isLoading ? 'Authenticating...' : 'Login Securely'}
                  <span className={`material-symbols-outlined text-lg transition-transform ${isLoading ? 'animate-spin' : 'group-hover:translate-x-1'}`}>
                    {isLoading ? 'progress_activity' : 'login'}
                  </span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Global Footer specifically for Login Page matching ref image */}
      <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-md border-t border-white/10 text-white/50 text-[11px] md:text-xs py-3 px-6 lg:px-12 flex justify-between items-center z-20">
        <div className="space-x-3">
          <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <div>
          Powered by <span className="font-bold text-white/70">JUNO Campus</span>
        </div>
      </div>
    </div>
  );
}
