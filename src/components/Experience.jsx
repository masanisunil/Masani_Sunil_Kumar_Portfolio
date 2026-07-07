import { experienceList } from '../data/sunilPortfolioData';

const ExperienceCard = ({ item, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-6">
        <div>
          <span className="text-white/50 text-xs font-mono font-bold tracking-widest uppercase">
            {item.duration}
          </span>
          <p className="text-red-100/80 text-xs font-bold uppercase tracking-wider mt-2">
            {item.location}
          </p>
        </div>
        <span className="bg-white/10 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/15 w-fit">
          Experience
        </span>
      </div>

      <h3 className="text-white text-2xl font-black mb-1 tracking-tight">
        {item.role}
      </h3>
      <p className="text-red-200 text-sm font-black tracking-wide mb-5 uppercase">
        {item.organization}
      </p>
      <p className="text-white/90 text-sm font-medium leading-relaxed mb-6">
        {item.summary}
      </p>

      <div className="mb-6">
        <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">Highlights:</h4>
        <ul className="text-white/90 text-sm font-medium space-y-2 pl-4 list-disc">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="pt-4 border-t border-white/10">
      <h4 className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono font-bold text-white bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-2xl mx-auto">
            Professional roles where I built scalable platforms, backend services, analytics systems, and cloud-integrated workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {experienceList.map((item, index) => (
            <ExperienceCard key={`${item.organization}-${item.role}`} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Experience;
