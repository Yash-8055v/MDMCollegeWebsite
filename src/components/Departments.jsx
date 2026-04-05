const departments = [
  {
    name: 'Computer Science & Eng.',
    icon: 'computer',
    bg: 'bg-indigo-50 hover:bg-indigo-100',
    border: 'border-indigo-100',
    iconColor: 'text-primary',
    nameColor: 'text-primary',
    linkColor: 'text-indigo-700',
  },
  {
    name: 'Mechanical Eng.',
    icon: 'settings',
    bg: 'bg-cyan-50 hover:bg-cyan-100',
    border: 'border-cyan-100',
    iconColor: 'text-cyan-600',
    nameColor: 'text-slate-800',
    linkColor: 'text-cyan-600',
  },
  {
    name: 'Civil Eng.',
    icon: 'apartment',
    bg: 'bg-orange-50 hover:bg-orange-100',
    border: 'border-orange-100',
    iconColor: 'text-orange-600',
    nameColor: 'text-slate-800',
    linkColor: 'text-orange-600',
  },
  {
    name: 'Information Technology',
    icon: 'lan',
    bg: 'bg-green-50 hover:bg-green-100',
    border: 'border-green-100',
    iconColor: 'text-green-600',
    nameColor: 'text-slate-800',
    linkColor: 'text-green-600',
  },
];

export default function Departments() {
  return (
    <section id="departments" className="w-full py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 text-slate-800 uppercase tracking-wider font-jakarta">
          Departments
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, i) => (
            <div
              key={i}
              className={`${dept.bg} p-6 rounded-xl border ${dept.border} flex items-start gap-4 transition-colors cursor-pointer group`}
            >
              <span className={`material-symbols-outlined text-3xl ${dept.iconColor}`}>
                {dept.icon}
              </span>
              <div>
                <h4 className={`font-bold ${dept.nameColor}`}>{dept.name}</h4>
                <p className={`text-xs ${dept.linkColor} mt-1 font-semibold group-hover:underline`}>
                  Learn More
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
