import { useState, useEffect, useRef } from 'react';

const yearData = [
  { year: 2020, placed: 180, highest: '₹8 LPA', recruiters: 32 },
  { year: 2021, placed: 240, highest: '₹12 LPA', recruiters: 45 },
  { year: 2022, placed: 350, highest: '₹18 LPA', recruiters: 60 },
  { year: 2023, placed: 430, highest: '₹24 LPA', recruiters: 78 },
  { year: 2024, placed: 520, highest: '₹32 LPA', recruiters: 95 },
  { year: 2025, placed: 650, highest: '₹38 LPA', recruiters: 115 },
  { year: 2026, placed: 750, highest: '₹45 LPA', recruiters: 140 },
];

const maxPlaced = Math.max(...yearData.map((d) => d.placed));

export default function Placements() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const active = activeIdx !== null ? yearData[activeIdx] : yearData[yearData.length - 1];

  return (
    <section id="placements" className="w-full py-16 md:py-24" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-wider">
              Placements
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-md">
              Year-over-year growth — hover on a bar to see the full breakdown.
            </p>
          </div>
          {/* Active year detail — desktop only */}
          <div className="hidden md:flex items-center gap-8 text-right">
            <div className="pr-8 border-r border-slate-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Year</p>
              <p className="text-2xl font-extrabold text-primary tabular-nums">{active.year}</p>
            </div>
            <div className="pr-8 border-r border-slate-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Students Placed</p>
              <p className="text-2xl font-extrabold text-slate-800 tabular-nums">{active.placed}+</p>
            </div>
            <div className="pr-8 border-r border-slate-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Highest Package</p>
              <p className="text-2xl font-extrabold text-slate-800">{active.highest}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Recruiters</p>
              <p className="text-2xl font-extrabold text-slate-800 tabular-nums">{active.recruiters}+</p>
            </div>
          </div>
        </div>

        {/* Bar chart timeline */}
        <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
          <div className="pl-timeline-wrap min-w-[500px] md:min-w-0">
            {/* Y-axis label */}
            <div className="pl-y-axis">
              <span>{maxPlaced}+</span>
              <span>{Math.round(maxPlaced / 2)}</span>
              <span>0</span>
            </div>

            {/* Bars */}
            <div className="pl-bars">
              {yearData.map((d, i) => {
                const pct = (d.placed / maxPlaced) * 100;
                const isLatest = i === yearData.length - 1;
                const isActive = activeIdx === i;
                const delay = i * 0.12;

                return (
                  <div
                    key={d.year}
                    className="pl-bar-col"
                    onMouseEnter={() => setActiveIdx(i)}
                    onMouseLeave={() => setActiveIdx(null)}
                    onClick={() => setActiveIdx(isActive ? null : i)}
                  >
                    {/* Mobile tooltip */}
                    <div className={`pl-mobile-tip ${isActive ? 'pl-mobile-tip--show' : ''}`}>
                      <strong>{d.placed}+</strong> placed · {d.highest} · {d.recruiters} cos.
                    </div>

                    {/* Bar */}
                    <div className="pl-bar-track">
                      <div
                        className={`pl-bar ${isLatest ? 'pl-bar--accent' : ''} ${isActive ? 'pl-bar--hover' : ''}`}
                        style={{
                          height: visible ? `${pct}%` : '0%',
                          transitionDelay: `${delay}s`,
                        }}
                      >
                        {/* Count label on top of bar */}
                        <span
                          className="pl-bar-label"
                          style={{
                            opacity: visible ? 1 : 0,
                            transitionDelay: `${delay + 0.5}s`,
                          }}
                        >
                          {d.placed}+
                        </span>
                      </div>
                    </div>

                    {/* Year label */}
                    <span className={`pl-year ${isLatest ? 'pl-year--accent' : ''} ${isActive ? 'pl-year--active' : ''}`}>
                      {d.year}
                    </span>

                    {/* Growth arrow for latest */}
                    {isLatest && (
                      <span className="pl-latest-badge">Latest</span>
                    )}
                  </div>
                );
              })}

              {/* Horizontal grid lines */}
              <div className="pl-grid-line" style={{ bottom: '0%' }} />
              <div className="pl-grid-line" style={{ bottom: '50%' }} />
              <div className="pl-grid-line" style={{ bottom: '100%' }} />
            </div>
          </div>
        </div>

        {/* Mobile detail card */}
        <div className="md:hidden mt-8 bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
            {active.year} Highlights
          </p>
          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{active.placed}+</p>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase">Placed</p>
            </div>
            <div className="text-right">
              <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{active.highest}</p>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase">Highest Pkg</p>
            </div>
            <div className="col-span-2 text-center pt-2 border-t border-slate-100">
              <p className="text-xl sm:text-2xl font-extrabold text-slate-800">{active.recruiters}+</p>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase">Recruiters</p>
            </div>
          </div>
        </div>

        {/* Bottom summary strip */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {[
            { label: 'Highest Package', value: '₹45 LPA' },
            { label: 'Avg Package', value: '₹12 LPA' },
            { label: 'Total Offers 2026', value: '750+' },
          ].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white border border-slate-100 rounded-full px-5 py-2.5 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{s.label}</span>
              <span className="text-sm font-extrabold text-slate-800">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
