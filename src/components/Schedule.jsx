import React from 'react';
import { Clock, User, ChevronDown } from 'lucide-react';
import { Header } from './body/Header';

const Schedule = () => {
  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen font-['Hanken_Grotesk'] selection:bg-[#c3f400] selection:text-[#161e00]">
      {/* Custom Styles for Text Stroke, Noise, and Scrollbars */}
      <style>{`
        .obsidian-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #131313; }
        ::-webkit-scrollbar-thumb { background: #353534; }
        ::-webkit-scrollbar-thumb:hover { background: #c3f400; }
      `}</style>

      <div className="obsidian-bg min-h-screen flex flex-col">
        {/* Top Navigation */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow pt-[120px] pb-24 px-6 md:px-16 max-w-[1440px] mx-auto w-full flex flex-col gap-12">
          
          {/* Hero Section */}
          <section className="relative border-b border-[#444933]/30 pb-12">
            <h1 className="font-['Anybody'] text-5xl md:text-8xl font-extrabold text-white uppercase tracking-tighter leading-[0.9]">
              Elite <br/><span className="text-[#c4c9ac]">Timetable</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#c4c9ac] max-w-2xl border-l-2 border-[#c3f400] pl-6 leading-relaxed">
              Precision scheduling for high-performance training. Filter by discipline, intensity, and lead trainer to lock in your daily operations.
            </p>
          </section>

          {/* Bento Filter Bar */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 bg-[#1c1b1b]/50 backdrop-blur-md border border-[#444933]/30 rounded p-2">
            {/* Horizontal Day Selector */}
            <div className="lg:col-span-8 flex overflow-x-auto gap-2 pb-2 lg:pb-0 hide-scrollbar items-center">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <button 
                  key={day}
                  className={`flex-shrink-0 px-6 py-3 border font-['Space_Mono'] text-[12px] font-bold rounded transition-colors ${day === 'WED' ? 'border-[#c3f400] bg-[#c3f400]/10 text-[#c3f400]' : 'border-[#444933] text-[#c4c9ac] hover:border-[#c3f400] hover:text-white'} ${['SAT', 'SUN'].includes(day) ? 'opacity-50' : ''}`}
                >
                  {day}
                </button>
              ))}
            </div>
            
            {/* Select Dropdowns */}
            <div className="lg:col-span-4 flex gap-3">
              <div className="relative w-full">
                <select className="w-full appearance-none bg-[#131313] border border-[#444933] text-[#e5e2e1] font-['Space_Mono'] text-[12px] font-bold py-3 pl-4 pr-10 rounded focus:outline-none focus:border-[#c3f400] focus:ring-1 focus:ring-[#c3f400] transition-colors cursor-pointer">
                  <option value="">ALL TRAINERS</option>
                  <option value="rex">REX (STRENGTH)</option>
                  <option value="sarah">SARAH (METCON)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c4c9ac] pointer-events-none" size={16} />
              </div>
              <div className="relative w-full">
                <select className="w-full appearance-none bg-[#131313] border border-[#444933] text-[#e5e2e1] font-['Space_Mono'] text-[12px] font-bold py-3 pl-4 pr-10 rounded focus:outline-none focus:border-[#c3f400] focus:ring-1 focus:ring-[#c3f400] transition-colors cursor-pointer">
                  <option value="">INTENSITY: ALL</option>
                  <option value="high">HIGH</option>
                  <option value="extreme">EXTREME</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c4c9ac] pointer-events-none" size={16} />
              </div>
            </div>
          </section>

          {/* Schedule Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            
            {/* Card: Hypertrophy */}
            <div className="bg-[#201f1f]/60 backdrop-blur-xl border border-[#444933]/50 rounded p-6 flex flex-col justify-between group hover:border-[#c3f400] transition-colors relative overflow-hidden h-[300px]">
              <div className="absolute -right-4 -bottom-4 font-['Anybody'] text-[120px] text-[#3a3939]/20 pointer-events-none select-none">06</div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-['Space_Mono'] text-[12px] font-bold text-[#c4c9ac] flex items-center gap-2">
                    <Clock size={14} /> 06:00 AM
                  </span>
                  <span className="bg-[#c3f400] text-[#161e00] font-['Space_Mono'] text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">HIGH</span>
                </div>
                <h3 className="font-['Anybody'] text-2xl font-bold text-white uppercase leading-tight mb-2">Hypertrophy<br/>Protocol</h3>
                <p className="text-[#c4c9ac] text-sm font-medium">Focus: Back & Biceps</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#444933]/30 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3a3939] flex items-center justify-center border border-[#444933]">
                    <User size={16} className="text-[#e5e2e1]" />
                  </div>
                  <span className="font-['Space_Mono'] text-[10px] font-bold text-white">REX</span>
                </div>
                <button className="text-[#c3f400] font-['Space_Mono'] text-[12px] font-bold border border-[#c3f400] px-4 py-2 rounded group-hover:bg-[#c3f400] group-hover:text-[#161e00] transition-all">
                  BOOK
                </button>
              </div>
            </div>

            {/* Card: Metcon Burner */}
            <div className="bg-[#201f1f]/60 backdrop-blur-xl border border-[#444933]/50 rounded p-6 flex flex-col justify-between group hover:border-[#ff5357] transition-colors relative overflow-hidden h-[300px]">
              <div className="absolute -right-4 -bottom-4 font-['Anybody'] text-[120px] text-[#3a3939]/20 pointer-events-none select-none">07</div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-['Space_Mono'] text-[12px] font-bold text-[#c4c9ac] flex items-center gap-2">
                    <Clock size={14} /> 07:30 AM
                  </span>
                  <span className="bg-[#ff5357] text-[#5c000b] font-['Space_Mono'] text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">EXTREME</span>
                </div>
                <h3 className="font-['Anybody'] text-2xl font-bold text-white uppercase leading-tight mb-2">Metcon<br/>Burner</h3>
                <p className="text-[#c4c9ac] text-sm font-medium">Focus: Full Body Conditioning</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#444933]/30 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3a3939] flex items-center justify-center border border-[#444933]">
                    <User size={16} className="text-[#e5e2e1]" />
                  </div>
                  <span className="font-['Space_Mono'] text-[10px] font-bold text-white">SARAH</span>
                </div>
                <button className="text-[#c4c9ac] font-['Space_Mono'] text-[12px] font-bold border border-[#444933] px-4 py-2 rounded opacity-50 cursor-not-allowed">
                  FULL
                </button>
              </div>
            </div>

            {/* Card: Dynamic Mobility */}
            <div className="bg-[#201f1f]/60 backdrop-blur-xl border border-[#444933]/50 rounded p-6 flex flex-col justify-between group hover:border-[#d2e5f5] transition-colors relative overflow-hidden h-[300px]">
              <div className="absolute -right-4 -bottom-4 font-['Anybody'] text-[120px] text-[#3a3939]/20 pointer-events-none select-none">09</div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-['Space_Mono'] text-[12px] font-bold text-[#c4c9ac] flex items-center gap-2">
                    <Clock size={14} /> 09:00 AM
                  </span>
                  <span className="border border-[#d2e5f5] text-[#d2e5f5] font-['Space_Mono'] text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">RECOVERY</span>
                </div>
                <h3 className="font-['Anybody'] text-2xl font-bold text-white uppercase leading-tight mb-2">Dynamic<br/>Mobility</h3>
                <p className="text-[#c4c9ac] text-sm font-medium">Focus: Range of Motion</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#444933]/30 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3a3939] flex items-center justify-center border border-[#444933]">
                    <User size={16} className="text-[#e5e2e1]" />
                  </div>
                  <span className="font-['Space_Mono'] text-[10px] font-bold text-white">EMMA</span>
                </div>
                <button className="text-[#d2e5f5] font-['Space_Mono'] text-[12px] font-bold border border-[#d2e5f5] px-4 py-2 rounded group-hover:bg-[#d2e5f5] group-hover:text-[#0b1d29] transition-all">
                  BOOK
                </button>
              </div>
            </div>

            {/* Card: Olympic Lifting */}
            <div className="bg-[#201f1f]/60 backdrop-blur-xl border border-[#444933]/50 rounded p-6 flex flex-col justify-between group hover:border-[#c3f400] transition-colors relative overflow-hidden h-[300px]">
              <div className="absolute -right-4 -bottom-4 font-['Anybody'] text-[120px] text-[#3a3939]/20 pointer-events-none select-none">12</div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-['Space_Mono'] text-[12px] font-bold text-[#c4c9ac] flex items-center gap-2">
                    <Clock size={14} /> 12:00 PM
                  </span>
                  <span className="bg-[#c3f400] text-[#161e00] font-['Space_Mono'] text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">HIGH</span>
                </div>
                <h3 className="font-['Anybody'] text-2xl font-bold text-white uppercase leading-tight mb-2">Olympic<br/>Lifting</h3>
                <p className="text-[#c4c9ac] text-sm font-medium">Focus: Snatch & C&J</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#444933]/30 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3a3939] flex items-center justify-center border border-[#444933]">
                    <User size={16} className="text-[#e5e2e1]" />
                  </div>
                  <span className="font-['Space_Mono'] text-[10px] font-bold text-white">REX</span>
                </div>
                <button className="text-[#c3f400] font-['Space_Mono'] text-[12px] font-bold border border-[#c3f400] px-4 py-2 rounded group-hover:bg-[#c3f400] group-hover:text-[#161e00] transition-all">
                  BOOK
                </button>
              </div>
            </div>

            {/* Large Card: Endurance Engine (Spans full width on desktop) */}
            <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 bg-[#2a2a2a]/40 backdrop-blur-xl border border-[#444933]/30 rounded p-8 flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-[#c3f400] transition-colors relative overflow-hidden gap-6 min-h-[220px]">
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#3a3939]/20 to-transparent pointer-events-none"></div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-['Space_Mono'] text-[12px] font-bold text-[#c4c9ac] flex items-center gap-2">
                    <Clock size={14} /> 05:30 PM - 07:00 PM (90 MIN)
                  </span>
                </div>
                <h3 className="font-['Anybody'] text-3xl font-bold text-white uppercase leading-tight mb-2">Endurance Engine</h3>
                <p className="text-[#c4c9ac] text-base max-w-2xl leading-relaxed">
                  A sustained cardiovascular assault. Long-domain aerobic capacity training utilizing ergs, runners, and light cyclical movements to build an unbreakable engine.
                </p>
              </div>
              <div className="w-full md:w-auto min-w-[200px] border-t md:border-t-0 md:border-l border-[#444933]/30 pt-6 md:pt-0 md:pl-8 flex flex-col gap-4 z-10 relative">
                <div className="flex items-center gap-3 justify-between md:justify-start">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#3a3939] flex items-center justify-center border border-[#444933]">
                      <User size={16} className="text-[#e5e2e1]" />
                    </div>
                    <span className="font-['Space_Mono'] text-[10px] font-bold text-white">DAVID</span>
                  </div>
                  <span className="border border-[#c4c9ac] text-[#c4c9ac] font-['Space_Mono'] text-[10px] font-bold px-2 py-1 rounded tracking-widest">MED</span>
                </div>
                <button className="w-full text-white font-['Space_Mono'] text-[12px] font-bold border border-[#444933] py-4 rounded hover:bg-[#3a3939] transition-all uppercase tracking-widest">
                  JOIN WAITLIST
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full mt-auto border-t border-[#444933]/20 bg-[#0e0e0e] flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 gap-8">
          <span className="font-['Space_Mono'] text-[10px] font-bold text-[#c4c9ac] tracking-widest">
            © 2024 DYNAMO FITNESS. BUILT FOR THE ELITE.
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'WhatsApp Support', 'Contact'].map((link) => (
              <a 
                key={link}
                className="font-['Space_Mono'] text-[10px] font-bold text-[#c4c9ac] hover:text-[#c3f400] transition-colors uppercase tracking-widest" 
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
          <span className="font-['Anybody'] text-5xl font-extrabold text-white opacity-10 hidden lg:block tracking-tighter">
            DYNAMO
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Schedule;