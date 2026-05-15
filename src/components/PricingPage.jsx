import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Bolt, 
  Menu, 
  ArrowRight 
} from 'lucide-react';

const PricingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const plans = [
    {
      name: "Base Access",
      price: "89",
      description: "Fundamental access for the dedicated individual.",
      features: [
        { text: "24/7 Facility Access", included: true },
        { text: "Standard Strength & Cardio Zones", included: true },
        { text: "Locker Room Access", included: true },
        { text: "Group Classes", included: false },
      ],
      cta: "Select Base",
      featured: false
    },
    {
      name: "Elite Access",
      price: "149",
      description: "Our most popular tier for high-performance athletes.",
      features: [
        { text: "Everything in Base", included: true },
        { text: "Unlimited Group Classes", included: true },
        { text: "Recovery Zone (Sauna/Cold Plunge)", included: true },
        { text: "1 PT Session / Month", included: true },
      ],
      cta: "Join Elite Now",
      featured: true
    },
    {
      name: "Pro Competitor",
      price: "299",
      description: "The ultimate package for professional results.",
      features: [
        { text: "Everything in Elite", included: true },
        { text: "Weekly 1-on-1 PT Sessions", included: true },
        { text: "Custom Nutrition Planning", included: true },
        { text: "Private Locker Reserve", included: true },
      ],
      cta: "Select Pro",
      featured: false
    }
  ];

  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen font-sans selection:bg-[#c3f400] selection:text-[#131313]">
      {/* Brutalist Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-2xl border-b border-[#444933]/30">
        <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-[1440px] mx-auto">
          <a href="#" className="font-black text-2xl md:text-3xl tracking-tighter uppercase text-white">
            DYNAMO
          </a>

          <div className="hidden md:flex items-center gap-8 text-[12px] font-mono tracking-widest uppercase font-bold">
            <a href="#" className="text-[#c4c9ac] hover:text-white transition-colors">Home</a>
            <a href="#" className="text-[#c4c9ac] hover:text-white transition-colors">About</a>
            <a href="#" className="text-[#c4c9ac] hover:text-white transition-colors">Facilities</a>
            <a href="#" className="text-[#c4c9ac] hover:text-white transition-colors">Classes</a>
            <a href="#" className="text-[#c4c9ac] hover:text-white transition-colors">Trainers</a>
            <a href="#" className="text-[#c3f400] border-b-2 border-[#c3f400] pb-1">Pricing</a>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:block bg-[#c3f400] text-[#131313] font-mono text-[12px] px-6 py-3 uppercase font-bold tracking-widest hover:bg-[#abd600] transition-all active:scale-95">
              JOIN ELITE
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-40 pb-24 px-6 md:px-16 max-w-[1440px] mx-auto w-full relative z-10">
        {/* Hero Header */}
        <header className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
              Commit to <br />
              <span className="text-[#c3f400]">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-[#c4c9ac] border-l-2 border-[#c3f400] pl-6 max-w-2xl">
              No gimmicks. No compromises. Just elite facilities, world-class coaching, and a community forged in discipline. Choose your access level.
            </p>
          </div>
        </header>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`md:col-span-4 p-10 flex flex-col transition-all duration-500 relative ${
                plan.featured 
                ? 'bg-[#1A1A1A]/90 border-2 border-[#c3f400] md:-mt-8 md:mb-8 shadow-[0_0_50px_rgba(195,244,0,0.1)] z-20' 
                : 'bg-[#1A1A1A]/60 border border-[#262626] z-10'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-10 bg-[#c3f400] text-[#131313] font-mono text-[10px] px-4 py-1.5 uppercase font-black tracking-[0.2em]">
                  Most Popular
                </div>
              )}

              <div className={`mb-10 border-b pb-8 ${plan.featured ? 'border-[#c3f400]/30' : 'border-[#262626]'}`}>
                <h2 className={`font-mono text-xs uppercase tracking-[0.2em] mb-4 font-bold flex items-center gap-2 ${plan.featured ? 'text-[#c3f400]' : 'text-[#c4c9ac]'}`}>
                  {plan.featured && <Bolt size={14} className="fill-current" />}
                  {plan.name}
                </h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-white tracking-tighter">${plan.price}</span>
                  <span className="font-mono text-xs text-[#c4c9ac] uppercase font-bold">/mo</span>
                </div>
              </div>

              <ul className="flex-grow flex flex-col gap-5 mb-12">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-start gap-4 ${!feature.included && 'opacity-30'}`}>
                    {feature.included ? (
                      <Check size={18} className={plan.featured ? 'text-[#c3f400]' : 'text-[#c4c9ac]'} />
                    ) : (
                      <X size={18} className="text-[#c4c9ac]" />
                    )}
                    <span className={`text-sm md:text-base font-medium ${!feature.included && 'line-through'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 font-mono text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group ${
                plan.featured 
                ? 'bg-[#c3f400] text-[#131313] hover:bg-white hover:shadow-[0_0_30px_rgba(195,244,0,0.3)]' 
                : 'border border-[#444933] text-white hover:border-white hover:bg-[#201f1f]'
              }`}>
                {plan.cta}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] w-full mt-auto border-t border-[#444933]/20 relative overflow-hidden">
        {/* Massive Background Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-black text-white opacity-[0.02] whitespace-nowrap pointer-events-none select-none tracking-tighter italic">
          DYNAMO
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-16 gap-10 relative z-10 max-w-[1440px] mx-auto">
          <div className="font-mono text-[10px] text-[#c4c9ac] uppercase font-bold tracking-widest text-center md:text-left">
            © 2024 DYNAMO FITNESS. <br className="md:hidden" /> BUILT FOR THE ELITE.
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
            {['Privacy Policy', 'Terms of Service', 'WhatsApp Support', 'Contact'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="font-mono text-[10px] text-[#c4c9ac] uppercase font-bold tracking-widest hover:text-[#c3f400] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;