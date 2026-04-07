import { useState, useEffect, useRef } from 'react';

const departments = [
  {
    name: 'Computer Engineering',
    short: 'CE',
    icon: 'computer',
    desc: 'Algorithms, systems software, hardware design and modern computing paradigms.',
    intake: 120,
    accent: '#2563EB',
    light: '#EFF6FF',
  },
  {
    name: 'Computer Science & Engineering (Data Science)',
    short: 'CSE-DS',
    icon: 'analytics',
    desc: 'Big data, machine learning pipelines, statistical modeling and data engineering.',
    intake: 60,
    accent: '#7C3AED',
    light: '#F5F3FF',
  },
  {
    name: 'Information Technology',
    short: 'IT',
    icon: 'lan',
    desc: 'Networks, cybersecurity, cloud infrastructure and enterprise IT solutions.',
    intake: 60,
    accent: '#059669',
    light: '#ECFDF5',
  },
  {
    name: 'Artificial Intelligence & Data Science',
    short: 'AI-DS',
    icon: 'psychology',
    desc: 'Neural networks, deep learning, NLP and intelligent system design.',
    intake: 60,
    accent: '#D97706',
    light: '#FFFBEB',
  },
  {
    name: 'Mechanical Engineering',
    short: 'MECH',
    icon: 'settings',
    desc: 'Thermodynamics, manufacturing, CAD/CAM and mechatronics systems.',
    intake: 120,
    accent: '#DC2626',
    light: '#FFF1F2',
  },
  {
    name: 'Electronics & Telecommunication Engineering',
    short: 'E&TC',
    icon: 'sensors',
    desc: 'Signal processing, embedded systems, VLSI and wireless communication.',
    intake: 60,
    accent: '#0891B2',
    light: '#ECFEFF',
  },
  {
    name: 'Civil Engineering',
    short: 'CIVIL',
    icon: 'apartment',
    desc: 'Structural design, geotechnics, construction management and urban infrastructure.',
    intake: 60,
    accent: '#EA580C',
    light: '#FFF7ED',
  },
];

export default function Departments() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const active = activeIdx !== null ? departments[activeIdx] : null;

  return (
    <section id="departments" className="w-full py-10 sm:py-12 md:py-24 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4 md:px-10 lg:px-20">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-wider mb-2">
            Departments
          </h2>
          <p className="text-slate-400 text-sm max-w-lg">
            Seven specialised branches under one roof — explore what drives us.
          </p>
        </div>

        {/* Split layout: left = list, right = detail panel */}
        <div className="dept-split">

          {/* LEFT — department list */}
          <div className="dept-list">
            {departments.map((dept, i) => {
              const isActive = activeIdx === i;
              const delay = i * 0.07;
              return (
                <button
                  key={i}
                  className={`dept-row ${isActive ? 'dept-row--active' : ''} ${visible ? 'dept-row--visible' : ''}`}
                  style={{
                    '--accent': dept.accent,
                    '--light': dept.light,
                    transitionDelay: `${delay}s`,
                  }}
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onClick={() => setActiveIdx(isActive ? null : i)}
                  aria-label={dept.name}
                >
                  {/* Number */}
                  <span className="dept-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <span
                    className="dept-icon-wrap material-symbols-outlined"
                  >
                    {dept.icon}
                  </span>

                  {/* Name + short code */}
                  <div className="dept-name-block">
                    <span className="dept-name">{dept.name}</span>
                    <span className="dept-code">{dept.short}</span>
                  </div>

                  {/* Arrow */}
                  <span className="dept-arrow material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT — detail panel */}
          <div
            className={`dept-panel ${active ? 'dept-panel--show' : ''}`}
            style={{ '--accent': active?.accent || '#2563EB', '--light': active?.light || '#EFF6FF' }}
          >
            {active ? (
              <>
                {/* Icon */}
                <div className="dept-panel-icon-wrap">
                  <span className="material-symbols-outlined dept-panel-icon">
                    {active.icon}
                  </span>
                </div>

                {/* Code badge */}
                <span className="dept-panel-code">{active.short}</span>

                {/* Name */}
                <h3 className="dept-panel-name">{active.name}</h3>

                {/* Divider */}
                <div className="dept-panel-divider" />

                {/* Description */}
                <p className="dept-panel-desc">{active.desc}</p>

                {/* Intake */}
                <div className="dept-panel-intake">
                  <span className="dept-panel-intake-num">{active.intake}</span>
                  <span className="dept-panel-intake-label">Intake Capacity (seats/year)</span>
                </div>

                {/* CTA */}
                <button className="dept-panel-cta">
                  Explore Department
                  <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                </button>
              </>
            ) : (
              <div className="dept-panel-empty">
                <span className="material-symbols-outlined dept-panel-empty-icon">
                  school
                </span>
                <p>Hover over a department<br />to see details</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
