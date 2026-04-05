const stats = [
  {
    label: 'Highest Package',
    value: '₹ 45 LPA',
    icon: 'arrow_upward',
    border: 'border-primary',
    hover: 'bg-indigo-50',
  },
  {
    label: 'Average Package',
    value: '₹ 12 LPA',
    icon: null,
    border: 'border-accent',
    hover: 'bg-cyan-50',
  },
  {
    label: 'Total Offers',
    value: '750+',
    icon: null,
    border: 'border-primary',
    hover: 'bg-indigo-50',
  },
];

export default function Placements() {
  return (
    <section id="placements" className="w-full py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 text-slate-800 uppercase tracking-wider">
          Placements
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-xl shadow-sm border-b-4 ${stat.border} relative overflow-hidden group hover:shadow-xl transition-all duration-300`}
            >
              <div className={`absolute -right-4 -top-4 w-24 h-24 ${stat.hover} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <p className="text-slate-500 font-bold text-xs uppercase mb-2 relative z-10">
                {stat.label}
              </p>
              <p className="text-4xl font-extrabold text-primary relative z-10 flex items-center gap-2">
                {stat.value}
                {stat.icon && (
                  <span className="material-symbols-outlined text-2xl text-accent">
                    {stat.icon}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
