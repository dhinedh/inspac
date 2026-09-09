import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      tagline: "INNOVATION · TECHNOLOGY · BUSINESS SOLUTIONS",
      headline: "Smart Technology Solutions for Business",
      subHeadline: "We deliver innovative IT solutions, consulting, and professional services that help businesses improve efficiency, embrace digital transformation, and achieve sustainable growth.",
      buttonText: "Explore Our Services",
      secondaryButtonText: "Get in Touch",
      path: "/services",
      bgGradient: "from-[#001f2c] via-[#00587c] to-[#001f2c]",
      visualType: "executive",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      tagline: "GLOBAL RESOURCE · SMART SOLUTIONS",
      headline: "Empowering Enterprises To Scale Smart Technology",
      subHeadline: "Inspac Solutions provides technology consulting, software and business solutions designed to support organizations across India, Australia, and Singapore.",
      buttonText: "Explore Our Services",
      secondaryButtonText: "Get in Touch",
      path: "/services",
      bgGradient: "from-[#001822] via-[#004e6e] to-[#001822]",
      visualType: "security",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 3,
      tagline: "INDIA · AUSTRALIA · SINGAPORE",
      headline: "Technology Solutions Designed Around Your Business",
      subHeadline: "We combine technology expertise, consulting experience, and practical business knowledge to help organizations improve digital capabilities and achieve sustainable growth.",
      buttonText: "Discover More",
      secondaryButtonText: "Get in Touch",
      path: "/about",
      bgGradient: "from-[#00121a] via-[#00587c] to-[#00121a]",
      visualType: "globe",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section id="home" className="relative w-full min-h-[560px] sm:min-h-[630px] lg:min-h-[680px] h-auto lg:h-[85vh] max-h-[920px] overflow-hidden bg-[#020518]">
      
      {/* Background Slides with Fade Transition */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* High-res Image Backdrop with Dark Overlay */}
          <div className="absolute inset-0">
            <img 
              src={slide.bgImage} 
              alt={slide.headline}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
            />
            {/* Cinematic Gradient Masking Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020518] via-transparent to-black/40"></div>
          </div>

          {/* Abstract 3D Glowing Wireframe Sphere Visual for Slide 3 */}
          {slide.visualType === 'globe' && (
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none hidden lg:block opacity-60">
              <div className="w-full h-full rounded-full border border-cyan-500/30 animate-spin-slow relative flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.3)]">
                <div className="w-4/5 h-4/5 rounded-full border border-blue-500/40 rotate-45 animate-pulse"></div>
                <div className="w-3/5 h-3/5 rounded-full border border-indigo-400/50 -rotate-45"></div>
                <div className="w-2/5 h-2/5 rounded-full border border-emerald-400/60"></div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Main Hero Content Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full relative z-20 flex flex-col justify-center pt-20 sm:pt-24 pb-20 sm:pb-24">
        
        {/* Top/Middle Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center my-auto">
          
          {/* Left Side: Giant Headline & Small Tagline */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[10px] sm:text-xs font-bold text-cyan-300 uppercase tracking-widest">
              <span>{activeSlide.tagline}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-white leading-[1.15] font-sans drop-shadow-lg">
              {activeSlide.headline}
            </h1>
          </div>

          {/* Right Side: Subtitle, Vertical Accent Line & Buttons */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-start pl-0 lg:pl-8 space-y-6">
            <div className="flex items-start space-x-4">
              {/* Animated Loading Progress Vertical Line */}
              <div className="w-[3px] h-28 sm:h-32 bg-white/30 rounded-full relative overflow-hidden shrink-0">
                <div 
                  key={currentSlide} 
                  className="w-full bg-[#00d09c] rounded-full animate-lineProgress"
                />
              </div>
              
              <div className="space-y-5">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed drop-shadow-md font-normal">
                  {activeSlide.subHeadline}
                </p>

                {/* Vibrant Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    to={activeSlide.path}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00d09c] to-[#0ea5e9] text-slate-950 font-extrabold text-xs shadow-xl shadow-[#00d09c]/25 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all group"
                  >
                    <span>{activeSlide.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => {
                      if (onOpenContact) {
                        onOpenContact("Inquiry from Hero Section");
                      } else {
                        const contactEl = document.getElementById('contact');
                        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs backdrop-blur-xs transition-all"
                  >
                    <span>{activeSlide.secondaryButtonText}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Absolute Bottom Navigation Bar (Anchored Flush at Very Bottom Edge) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pb-5 sm:pb-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between border-t border-white/15 pt-6 sm:pt-7">
          
          {/* Circular Navigation Arrow Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 hover:border-white text-white flex items-center justify-center transition-all hover:bg-white/10 active:scale-95"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 hover:border-white text-white flex items-center justify-center transition-all hover:bg-white/10 active:scale-95"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>

            {/* Slide Index Counter */}
            <div className="text-xs font-mono text-slate-400 pl-2">
              <span className="text-white font-bold text-sm">0{currentSlide + 1}</span> / 0{slides.length}
            </div>
          </div>

          {/* Slide Progress Dots */}
          <div className="flex items-center space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'w-8 bg-[#00d09c]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}



