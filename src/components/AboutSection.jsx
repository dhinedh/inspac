import React from 'react';
import { 
  Users, 
  Lightbulb, 
  Settings, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';

export default function AboutSection({ onOpenContact }) {
  const features = [
    {
      icon: Settings,
      title: "Technology Consulting",
      subtitle: "Expert IT strategy & digital guidance."
    },
    {
      icon: Lightbulb,
      title: "Enterprise Solutions",
      subtitle: "Scalable software & workflow apps."
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      subtitle: "Cloud, data & process automation."
    },
    {
      icon: Users,
      title: "Professional Training",
      subtitle: "Enterprise skill upgrade & masterclasses."
    }
  ];

  const stats = [
    { value: "100+", label: "Happy Clients" },
    { value: "150+", label: "Projects Delivered" },
    { value: "10+", label: "Years of Experience" }
  ];

  const handleCtaClick = () => {
    if (onOpenContact) {
      onOpenContact("General Inquiry - Technology Solutions Designed Around Your Business");
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white text-slate-800 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
            
            {/* Header Section */}
            <div className="space-y-3">
              {/* Top Subtitle with horizontal line */}
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                  WELCOME TO INSPAC SOLUTIONS
                </span>
                <span className="w-12 h-[1px] bg-slate-300"></span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#071026]">
                About <span className="text-[#1d4ed8]">Us</span>
              </h2>

              {/* Spaced Categories Sub-line */}
              <div className="text-[10px] sm:text-xs font-extrabold tracking-[0.22em] text-slate-400 uppercase pt-0.5">
                INDIA &nbsp;|&nbsp; AUSTRALIA &nbsp;|&nbsp; SINGAPORE &nbsp;|&nbsp; GLOBAL RESOURCE
              </div>

              {/* Sub-heading */}
              <div className="pt-3 space-y-0.5">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071026] tracking-tight leading-tight">
                  Technology Solutions
                </h3>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1d4ed8] tracking-tight leading-tight">
                  Designed Around Your Business
                </h3>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              <p>
                Inspac Solutions is a technology and consulting company providing innovative IT solutions to businesses across India, Australia, and Singapore. We combine technology expertise, consulting experience, and practical business knowledge to help organizations improve digital capabilities and achieve sustainable growth.
              </p>
              <p>
                Our services cover IT consulting, data & analytics, enterprise business software, cloud engineering, cybersecurity governance, process automation, and professional corporate training.
              </p>
            </div>

            {/* 4 Feature Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-2">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#dbeafe] text-[#1d4ed8] flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-[#071026] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote Block */}
            <div className="border-l-[3.5px] border-[#1d4ed8] pl-4 py-1 my-2">
              <p className="text-sm sm:text-base font-bold text-slate-700 italic leading-snug">
                “ Technology is our tool, <br className="hidden sm:inline" />
                <span className="text-[#1d4ed8] font-bold not-italic">
                  but people are our purpose. ”
                </span>
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN - Image, Slanted Geometry, Dark Stats Card & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between relative min-h-[460px] lg:min-h-full pt-4 lg:pt-0">
            
            {/* Main Visual Composition Container */}
            <div className="relative w-full flex-1 flex flex-col justify-between">
              
              {/* Top Office Image Box with Geometric Angled Cut */}
              <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[390px] rounded-3xl overflow-hidden shadow-xl">
                
                {/* Soft Blue Polygon Accent Layer behind left edge */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] to-[#1d4ed8]"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 16% 100%)'
                  }}
                />

                {/* Main Office Image with Diagonal Left Slash Clip-path */}
                <div 
                  className="absolute inset-0 z-10 overflow-hidden"
                  style={{
                    clipPath: 'polygon(14% 0, 100% 0, 100% 100%, 0% 100%)'
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80" 
                    alt="Modern Corporate Office" 
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Dark Gradient Overlay on right side */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#071026]/30 to-[#071026]/90" />

                  {/* Right Dark Door/Wall Panel with Wall Typography */}
                  <div className="absolute top-0 right-0 bottom-0 w-[42%] sm:w-[38%] bg-[#081029]/90 backdrop-blur-xs p-6 flex flex-col justify-center text-white border-l border-white/10 space-y-2">
                    <div className="text-xs sm:text-sm lg:text-base font-extrabold tracking-widest leading-relaxed uppercase text-slate-200 font-sans">
                      <p className="text-slate-300">IDEAS</p>
                      <p className="text-slate-300">PEOPLE</p>
                      <p className="text-slate-300">TECHNOLOGY</p>
                      <p className="text-white">REAL IMPACT</p>
                    </div>
                    <div className="w-10 h-[2px] bg-slate-300/60 mt-2" />
                  </div>
                </div>

              </div>

              {/* Floating Dark Navy Stats Box & CTA Pill */}
              <div className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24 space-y-4">
                
                {/* Geometric Soft Blue Accent Ribbon behind Dark Card */}
                <div 
                  className="absolute -left-3 -top-3 bottom-8 w-24 bg-gradient-to-br from-[#93c5fd] via-[#3b82f6] to-[#1d4ed8] rounded-3xl -z-10 opacity-90"
                  style={{
                    clipPath: 'polygon(0 0, 100% 20%, 80% 100%, 0 80%)'
                  }}
                />

                {/* Dark Navy Stats Card */}
                <div 
                  className="bg-[#071026] text-white p-6 sm:p-7 shadow-2xl rounded-3xl border border-slate-800/80 relative overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 20px, 20px 0, 100% 0, 100% 100%, 0 100%)'
                  }}
                >
                  <div className="grid grid-cols-3 divide-x divide-slate-700/70 text-center gap-1 sm:gap-2">
                    {stats.map((st, i) => (
                      <div key={i} className="px-1 sm:px-3 py-1 flex flex-col items-center justify-center">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
                          {st.value}
                        </span>
                        <span className="text-[10px] sm:text-xs font-medium text-slate-300 mt-1 leading-tight">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Right CTA Bar */}
                <div className="flex justify-end pt-1">
                  <button
                    onClick={handleCtaClick}
                    className="group inline-flex items-center space-x-3 bg-white hover:bg-blue-50 text-[#071026] px-5 py-3 rounded-full shadow-md border border-slate-200 transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase">
                      LET'S BUILD A SMARTER TOMORROW
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#1d4ed8] stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


