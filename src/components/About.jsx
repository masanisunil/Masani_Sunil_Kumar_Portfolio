import stackImage from '../assets/sunil/sunil-hero-image.jpeg';
import { aboutContent } from '../data/sunilPortfolioData';

// Tech stack SVG icons rendered inline for crisp, dependency-free rendering.
const TechLogoCard = ({ label, delay, children }) => (
  <div
    data-aos="zoom-in"
    data-aos-delay={delay}
    className="group flex flex-col items-center gap-3"
  >
    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] border border-black/10 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-[0_24px_50px_rgba(0,0,0,0.3)]">
      {children}
    </div>
    <span className="text-xs md:text-sm font-black text-white uppercase tracking-wider drop-shadow-sm">
      {label}
    </span>
  </div>
);

const PythonLogo = () => (
  <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" aria-hidden="true">
    <path fill="#3776AB" d="M63.8 10c-25.2 0-23.7 10.9-23.7 10.9v11.3h24.1v3.4H30.7S14 33.7 14 60.1s14.6 25.4 14.6 25.4h8.7V73.2s-.5-14.6 14.3-14.6h23.9s13.5.2 13.5-13V23.9S91.1 10 63.8 10zM50.5 18.1a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8z" />
    <path fill="#FFD43B" d="M64.2 118c25.2 0 23.7-10.9 23.7-10.9V95.8H63.8v-3.4h33.5S114 94.3 114 67.9s-14.6-25.4-14.6-25.4h-8.7v12.3s.5 14.6-14.3 14.6H52.5s-13.5-.2-13.5 13v21.7S36.9 118 64.2 118zm13.3-8.1a4.4 4.4 0 1 1 0-8.8 4.4 4.4 0 0 1 0 8.8z" />
  </svg>
);

const NodeLogo = () => (
  <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" aria-hidden="true">
    <path fill="#339933" d="M64 8 16 35.7v55.4L64 119l48-27.9V35.7L64 8z" />
    <path fill="#fff" d="M42 84.8c0 4.8 2.5 7.6 6.7 7.6 4.1 0 6.4-2.5 6.4-7.5V45.6h9.4v39.7c0 10.6-6.1 16.2-15.8 16.2-9.8 0-16-5.8-16-16.7H42zm32.3 5.8 7.1-4.1c1.9 3.3 4.4 5.7 9.4 5.7 3.9 0 6.5-1.9 6.5-4.7 0-3.3-2.6-4.5-7-6.4l-2.5-1.1c-6.9-2.9-11.5-6.5-11.5-14.2 0-7.1 5.4-12.5 13.8-12.5 6 0 10.3 2.1 13.4 7.6l-6.8 4.4c-1.6-2.9-3.4-4-6.6-4-3 0-4.9 1.9-4.9 4.4 0 3.1 1.9 4.3 6.2 6.2l2.5 1.1c8.1 3.5 12.7 7 12.7 15 0 8.6-6.7 13.3-15.8 13.3-8.9 0-14.6-4.2-17.5-9.7z" />
  </svg>
);

const AwsLogo = () => (
  <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" aria-hidden="true">
    <text x="13" y="62" fill="#232F3E" fontSize="38" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900">AWS</text>
    <path fill="none" stroke="#FF9900" strokeWidth="8" strokeLinecap="round" d="M28 78c22 18 49 20 75 2" />
    <path fill="#FF9900" d="M99 75l14-1-8 12z" />
  </svg>
);

const PostgreSqlLogo = () => (
  <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" aria-hidden="true">
    <circle cx="64" cy="64" r="48" fill="#336791" />
    <path fill="#fff" d="M50 89c-12-2-21-12-21-25 0-16 13-29 35-29s35 13 35 29c0 13-8 23-20 25l-3 11c-.8 3-4.4 4.1-6.8 2.1L64 98l-5.2 4.1c-2.4 2-6 .9-6.8-2.1L50 89z" opacity=".95" />
    <circle cx="52" cy="58" r="5" fill="#336791" />
    <circle cx="76" cy="58" r="5" fill="#336791" />
    <path fill="none" stroke="#336791" strokeWidth="7" strokeLinecap="round" d="M64 66v22" />
  </svg>
);

const MySqlLogo = () => (
  <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" aria-hidden="true">
    <path fill="#00758F" d="M17 78c18-20 46-32 75-28 9 1 16 4 20 8-17-4-35-2-52 5-16 6-28 15-43 15z" />
    <path fill="#F29111" d="M69 43c14-13 31-17 44-11-9 2-18 8-25 16 8 3 16 8 22 15-13-7-27-10-42-8 1-4 1-8 1-12z" />
    <text x="20" y="102" fill="#1f2937" fontSize="26" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900">MySQL</text>
  </svg>
);

const ReactLogo = () => (
  <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" aria-hidden="true">
    <g stroke="#00D8FF" strokeWidth="6" fill="none" transform="translate(10 10)">
      <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
      <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
      <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
      <circle cx="54" cy="54" r="8" fill="#00D8FF" stroke="none" />
    </g>
  </svg>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Masani Sunil Kumar - Full Stack Developer" 
                  className="w-full h-full object-cover" style={{ objectPosition: '60% center' }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Tech logo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6 mt-8 max-w-2xl">
            <TechLogoCard label="Python" delay="300">
              <PythonLogo />
            </TechLogoCard>
            <TechLogoCard label="Node.js" delay="400">
              <NodeLogo />
            </TechLogoCard>
            <TechLogoCard label="AWS" delay="500">
              <AwsLogo />
            </TechLogoCard>
            <TechLogoCard label="PostgreSQL" delay="600">
              <PostgreSqlLogo />
            </TechLogoCard>
            <TechLogoCard label="MySQL" delay="700">
              <MySqlLogo />
            </TechLogoCard>
            <TechLogoCard label="React" delay="800">
              <ReactLogo />
            </TechLogoCard>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
