import React from 'react';
import { 
  ExternalLink, 
  Mail, 
  Dumbbell, 
  Activity, 
  Target, 
  ArrowUpRight
} from 'lucide-react';
import { Header } from './body/Header';

const TrainersPage = () => {

  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen font-sans selection:bg-[#c3f400] selection:text-[#131313]">
      {/* Background Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      {/* Navigation */}
      <Header />

      <main className="pt-32 pb-24 px-6 md:px-16 max-w-[1440px] mx-auto w-full">
        {/* Header Section */}
        <header className="mb-16 md:mb-24 relative">
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] relative z-10">
            The Elite<br />Squad
          </h1>
          <div className="absolute -top-12 -left-4 text-[10rem] md:text-[15rem] font-black text-[#2a2a2a]/40 z-0 select-none pointer-events-none">
            002
          </div>
          <p className="text-lg md:text-xl text-[#c4c9ac] max-w-2xl mt-8 relative z-10 border-l-2 pl-6 border-[#c3f400] leading-relaxed">
            Meet the architects of human performance. Our roster of industry-leading coaches merges brutal discipline with scientific precision to shatter your limits.
          </p>
        </header>

        {/* Bento Grid: Trainers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
          
          {/* Lead Trainer: Marcus Vance */}
          <article className="md:col-span-8 bg-[#201f1f]/60 backdrop-blur-xl border border-[#444933] flex flex-col md:flex-row overflow-hidden group hover:border-[#c3f400] transition-colors duration-300">
            <div className="w-full md:w-1/2 h-80 md:h-auto relative overflow-hidden">
              <img 
                alt="Marcus Vance" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#131313]/80 to-transparent"></div>
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#c3f400] text-[#131313] font-mono text-[10px] px-2 py-1 uppercase font-bold tracking-widest mb-4">Head Coach</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-none mb-4 tracking-tighter">Marcus<br />Vance</h2>
                <p className="text-[#c4c9ac] mb-6 text-sm leading-relaxed">Former tactical conditioning specialist. Vance breaks down biomechanics to reconstruct your raw power. No compromises.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Powerlifting', 'Biomechanics', 'Kettlebell'].map(tag => (
                    <span key={tag} className="border border-[#444933] px-3 py-1 font-mono text-[10px] text-[#e5e2e1] uppercase">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 border-t border-[#444933]/30 pt-6">
                <a href="#" className="text-[#c4c9ac] hover:text-[#c3f400] transition-colors"><ExternalLink size={20} /></a>
                <a href="#" className="text-[#c4c9ac] hover:text-[#c3f400] transition-colors"><Mail size={20} /></a>
                {/* <a href="#" className="text-[#c4c9ac] hover:text-[#c3f400] transition-colors"><Instagram size={20} /></a> */}
              </div>
            </div>
          </article>

          {/* Portrait Trainer: Elena Rostova */}
          <article className="md:col-span-4 md:row-span-2 bg-[#201f1f]/60 backdrop-blur-xl border border-[#444933] relative overflow-hidden group hover:border-[#c3f400] transition-colors duration-300 min-h-[500px]">
            <img 
              alt="Elena Rostova" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60" 
              src="https://images.unsplash.com/photo-1548690312-e3b507d17a47?q=80&w=1974&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 z-10">
              <h2 className="text-4xl font-bold text-white uppercase leading-none mb-2 tracking-tighter">Elena<br />Rostova</h2>
              <p className="font-mono text-[#c3f400] text-xs uppercase tracking-widest mb-6 font-bold">Elite Agility & Core</p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#131313]/80 backdrop-blur-md border border-[#444933] px-3 py-1 font-mono text-[10px] uppercase">HIIT</span>
                <span className="bg-[#131313]/80 backdrop-blur-md border border-[#444933] px-3 py-1 font-mono text-[10px] uppercase">Mobility</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 border border-[#444933] py-4 font-mono text-xs text-white hover:bg-[#c3f400] hover:text-[#131313] hover:border-[#c3f400] transition-all font-bold uppercase tracking-widest">
                View Profile <ArrowUpRight size={14} />
              </button>
            </div>
          </article>

          {/* Standard Trainer: Jax Teller */}
          <article className="md:col-span-4 bg-[#201f1f]/60 backdrop-blur-xl border border-[#444933] p-8 flex flex-col group hover:border-[#c3f400] transition-colors duration-300">
            <div className="flex justify-between items-start mb-8">
              <div className="w-20 h-20 rounded-none border border-[#444933] overflow-hidden">
                <img 
                  alt="Jax Teller" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop"
                />
              </div>
              <div className="p-2 border border-[#444933] text-[#c4c9ac] group-hover:text-[#c3f400]">
                <Target size={20} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white uppercase leading-none mb-2 tracking-tighter">Jax<br />Teller</h2>
            <p className="font-mono text-[#c4c9ac] text-[10px] uppercase tracking-widest mb-auto">Combat Athletics</p>
            <div className="mt-10 pt-6 border-t border-[#444933]/30 flex justify-between items-center">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-[#c3f400]"></div>
                <div className="w-2 h-2 bg-[#444933]"></div>
              </div>
              <span className="font-mono text-[9px] text-[#c4c9ac] uppercase font-bold">Accepting Clients</span>
            </div>
          </article>

          {/* Standard Trainer: Sarah Chen */}
          <article className="md:col-span-4 bg-[#201f1f]/60 backdrop-blur-xl border border-[#444933] p-8 flex flex-col group hover:border-[#c3f400] transition-colors duration-300">
            <div className="flex justify-between items-start mb-8">
              <div className="w-20 h-20 rounded-none border border-[#444933] overflow-hidden">
                <img 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop"
                />
              </div>
              <div className="p-2 border border-[#444933] text-[#c4c9ac] group-hover:text-[#ff5357]">
                <Activity size={20} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white uppercase leading-none mb-2 tracking-tighter">Sarah<br />Chen</h2>
            <p className="font-mono text-[#c4c9ac] text-[10px] uppercase tracking-widest mb-auto">Performance Nutrition</p>
            <div className="mt-10 pt-6 border-t border-[#444933]/30 flex justify-between items-center">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-[#ff5357]"></div>
              </div>
              <span className="font-mono text-[9px] text-[#c4c9ac] uppercase font-bold italic">Waitlist Only</span>
            </div>
          </article>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] w-full mt-auto border-t border-[#444933]/20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-12 gap-8 max-w-[1440px] mx-auto">
          <div className="text-5xl font-black text-white opacity-10 uppercase tracking-tighter leading-none select-none italic">
            DYNAMO
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-mono text-[11px] text-[#c4c9ac] uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-[#c3f400] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c3f400] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#c3f400] transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-[#c3f400] transition-colors">Contact</a>
          </div>
          <div className="text-[11px] text-[#c4c9ac] font-mono font-bold">
            © 2024 DYNAMO FITNESS.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainersPage;