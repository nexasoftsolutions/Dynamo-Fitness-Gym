import React from 'react';
import { Shield, Wind, Activity, Zap, Cpu } from 'lucide-react';
import { Header } from './body/Header';

const FacilitiesPage = () => {

  const classCategories = [
    {
      title: "Apex Strength",
      intensity: "EXTREME",
      description: "Olympic lifting, powerlifting, and structural hypertrophy. Built for the strong.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
      span: "md:col-span-2",
      height: "h-[400px]"
    },
    {
      title: "Velocity HIIT",
      intensity: "HIGH",
      description: "Metabolic conditioning at peak threshold.",
      image: "https://images.unsplash.com/photo-1517963879430-609b209927d9?q=80&w=2070&auto=format&fit=crop",
      span: "md:col-span-1",
      height: "h-[400px]"
    }
  ];

  const scheduleData = [
    { time: "06:00", mon: "APEX STRENGTH", tue: "-", wed: "APEX STRENGTH", thu: "-", fri: "APEX STRENGTH", coach: "COACH VANCE" },
    { time: "09:00", mon: "VELOCITY HIIT", tue: "COMBAT ARTS", wed: "VELOCITY HIIT", thu: "COMBAT ARTS", fri: "VELOCITY HIIT", coach: "SARAH J." },
    { time: "17:00", mon: "RECOVERY", tue: "APEX STRENGTH", wed: "RECOVERY", thu: "APEX STRENGTH", fri: "OPEN FLOOR", coach: "DR. ARIS" },
  ];

  return (
    <div className="bg-[#131313] text-white min-h-screen font-sans selection:bg-[#c3f400] selection:text-black">
      {/* Background Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      {/* Navigation */}
      <Header />

      <main className="pt-[88px]">
        {/* Hero Header */}
        <section className="relative w-full h-[350px] md:h-[500px] flex items-end pb-12 px-6 md:px-16 max-w-[1440px] mx-auto border-b border-[#444933]/30">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              alt="Class Training" 
              className="w-full h-full object-cover opacity-30 grayscale" 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <p className="font-mono text-[12px] text-[#c3f400] mb-4 tracking-widest">SECTOR 02</p>
              <h1 className="text-6xl md:text-9xl font-extrabold uppercase leading-[0.85] tracking-tighter">
                The<br />Program
              </h1>
            </div>
            <div className="max-w-xs text-right hidden md:block">
              <p className="text-[#c4c9ac] text-sm leading-relaxed">
                Military-grade programming designed to shatter plateaus and optimize human performance.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="w-full px-6 md:px-16 py-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {classCategories.map((item, idx) => (
              <div key={idx} className={`${item.span} relative group overflow-hidden border border-[#444933] bg-[#201f1f] ${item.height}`}>
                <img src={item.image} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="bg-[#c3f400] text-black text-[10px] font-mono font-bold px-2 py-1 mb-3 inline-block">INTENSITY: {item.intensity}</span>
                  <h3 className="text-3xl font-bold uppercase tracking-tight">{item.title}</h3>
                  <p className="text-[#c4c9ac] max-w-md mt-2 text-sm">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Icon Card: Combat Arts */}
            <div className="relative group overflow-hidden border border-[#444933] bg-[#201f1f] h-[300px]">
              <div className="p-8 h-full flex flex-col justify-end">
                <Zap className="text-[#c3f400] mb-4" size={40} />
                <h3 className="text-2xl font-bold uppercase">Combat Arts</h3>
                <p className="text-[#c4c9ac] text-sm mt-1">Technical striking and tactical grappling.</p>
              </div>
            </div>

            {/* Neural Recovery Card */}
            <div className="md:col-span-2 relative group overflow-hidden border border-[#444933] bg-[#201f1f] h-[300px]">
              <div className="p-8 relative z-10 flex flex-col h-full justify-center">
                <h3 className="text-4xl font-bold uppercase tracking-tighter">Neural Recovery</h3>
                <p className="text-[#c4c9ac] max-w-sm mt-2">Advanced mobility and restorative bio-mechanics to keep the machine running.</p>
                <div className="mt-6 flex gap-8">
                  <div>
                    <p className="text-2xl font-bold text-white">60m</p>
                    <p className="text-[10px] font-mono text-[#c4c9ac] uppercase">Duration</p>
                  </div>
                  <div className="border-l border-[#c3f400] pl-8">
                    <p className="text-2xl font-bold text-white">LOW</p>
                    <p className="text-[10px] font-mono text-[#c4c9ac] uppercase">Impact</p>
                  </div>
                </div>
              </div>
              <Cpu className="absolute top-1/2 -right-10 -translate-y-1/2 text-white/5" size={240} />
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="w-full px-6 md:px-16 py-24 bg-[#0e0e0e] border-y border-[#444933]/20">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">Deployment Schedule</h2>
              <div className="flex gap-2 font-mono text-[10px]">
                <button className="px-4 py-2 bg-[#c3f400] text-black font-bold">WEEKLY</button>
                <button className="px-4 py-2 border border-[#444933] text-[#c4c9ac]">SPECIAL OPS</button>
              </div>
            </div>

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#444933] text-[12px] font-mono text-[#c4c9ac]">
                    <th className="py-6">TIME</th>
                    <th className="py-6">MON</th>
                    <th className="py-6">TUE</th>
                    <th className="py-6">WED</th>
                    <th className="py-6">THU</th>
                    <th className="py-6">FRI</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {scheduleData.map((row, i) => (
                    <tr key={i} className="border-b border-[#444933]/10 hover:bg-white/5 transition-colors">
                      <td className="py-8 font-mono text-[#c3f400]">{row.time}</td>
                      {[row.mon, row.tue, row.wed, row.thu, row.fri].map((day, dIdx) => (
                        <td key={dIdx} className="py-8">
                          <span className="block font-bold uppercase">{day}</span>
                          {day !== "-" && <span className="text-[10px] text-[#c4c9ac]">{row.coach}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List View */}
            <div className="md:hidden space-y-4">
              {scheduleData.map((row, i) => (
                <div key={i} className="p-6 bg-[#201f1f] border border-[#444933]">
                  <p className="text-[#c3f400] font-mono text-[12px]">{row.time} SESSION</p>
                  <h4 className="text-xl font-bold uppercase mt-1">{row.mon !== "-" ? row.mon : row.tue}</h4>
                  <p className="text-[10px] text-[#c4c9ac] uppercase mt-1 tracking-widest">Instructor: {row.coach}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] w-full mt-auto border-t border-[#444933]/20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-12 gap-8 max-w-[1440px] mx-auto">
          <div className="text-5xl font-bold text-white opacity-10 uppercase tracking-tighter">
            DYNAMO
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-mono text-[12px] text-[#c4c9ac]">
            <a href="#" className="hover:text-[#c3f400] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#c3f400] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#c3f400] transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-[#c3f400] transition-colors">Contact</a>
          </div>
          <div className="text-[12px] text-[#c4c9ac] font-mono">
            © 2024 DYNAMO FITNESS.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FacilitiesPage;