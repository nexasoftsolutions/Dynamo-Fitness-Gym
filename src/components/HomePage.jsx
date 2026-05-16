import { Bolt, Menu, Dumbbell, ArrowRight } from 'lucide-react';
import { Header } from './body/Header';

const HomePage = () => {
  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen font-['Hanken_Grotesk'] selection:bg-[#c3f400] selection:text-[#161e00]">
      {/* Custom Styles for Text Stroke and Noise */}
      <style>{`
        .text-outline {
          -webkit-text-stroke: 1px #c3f400;
        }
        .obsidian-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="obsidian-bg">
        {/* Navigation */}
        <Header/>

        {/* Hero Section */}
        <header className="relative w-full h-screen flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 overflow-hidden max-w-[1440px] mx-auto">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <img 
              alt="Gym Facility" 
              className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity grayscale" 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#c3f400] flex items-center justify-center rounded">
                <Bolt className="text-[#161e00] fill-current" size={24} />
              </div>
              <span className="font-['Space_Mono'] text-[12px] font-bold text-[#c3f400] tracking-[0.2em] uppercase">
                Forge the Unbreakable
              </span>
            </div>
            
            <h1 className="font-['Anybody'] text-4xl md:text-8xl font-extrabold text-white uppercase leading-[0.9] tracking-tighter">
              Redefine Your <br/>
              <span className="text-transparent text-outline">Absolute Limits</span>
            </h1>

            <p className="text-lg text-[#c4c9ac] max-w-xl border-l-2 border-[#c3f400] pl-4 leading-relaxed">
              Welcome to the proving ground. No excuses, just sheer kinetic force and elite programming designed to break you down and build you stronger.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-[#c3f400] text-[#161e00] font-['Space_Mono'] text-[12px] font-bold px-8 py-4 rounded uppercase hover:bg-[#abd600] transition-all shadow-[0_0_20px_rgba(204,255,0,0.15)]">
                START TRIAL
              </button>
              <button className="border border-[#c3f400] text-[#c3f400] font-['Space_Mono'] text-[12px] font-bold px-8 py-4 rounded uppercase hover:bg-[#c3f400]/10 transition-colors">
                EXPLORE FACILITY
              </button>
            </div>
          </div>

          {/* Huge Background Number */}
          <div className="absolute top-1/4 right-0 md:right-10 z-0 font-['Anybody'] text-[200px] md:text-[350px] leading-none text-[#3a3939] opacity-20 pointer-events-none select-none tracking-tighter">
            01
          </div>
        </header>

        {/* Statistics Section */}
        <section className="w-full px-6 md:px-16 py-24 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-end border-b border-[#444933]/30 pb-4">
              <h2 className="font-['Anybody'] text-3xl font-bold text-white uppercase">The Impact</h2>
              <span className="font-['Space_Mono'] text-[12px] text-[#c4c9ac] font-bold">BY THE NUMBERS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Stat Card 1 */}
              <div className="md:col-span-8 bg-[#1a1a1a]/60 backdrop-blur-3xl border border-[#262626] rounded-xl p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#c3f400] transition-colors h-[300px]">
                <div className="absolute -right-10 -bottom-10 font-['Anybody'] text-[180px] text-[#2a2a2a] opacity-30 select-none group-hover:text-[#c3f400]/10 transition-colors">KPI</div>
                <div>
                  <span className="font-['Space_Mono'] text-[10px] text-[#c3f400] border border-[#c3f400] px-2 py-1 rounded uppercase">Active</span>
                </div>
                <div>
                  <div className="font-['Anybody'] text-6xl md:text-8xl text-white tracking-tighter">14,289</div>
                  <div className="text-sm text-[#c4c9ac] uppercase mt-2 font-bold">Elite Members Globally</div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="md:col-span-4 bg-[#1a1a1a]/60 backdrop-blur-3xl border border-[#262626] rounded-xl p-10 flex flex-col justify-between hover:border-[#c3f400] transition-colors h-[300px]">
                <div className="flex justify-between items-start">
                  <Dumbbell className="text-[#c3f400]" size={32} />
                  <span className="font-['Space_Mono'] text-[10px] text-[#ffdad8] bg-[#930019]/20 px-2 py-1 rounded uppercase">Daily Avg</span>
                </div>
                <div>
                  <div className="font-['Anybody'] text-5xl md:text-7xl text-white tracking-tighter">84T</div>
                  <div className="text-sm text-[#c4c9ac] uppercase mt-2 font-bold">Iron Moved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Protocols Section */}
        <section className="w-full px-6 md:px-16 py-24 bg-[#0e0e0e] max-w-[1440px] mx-auto border-y border-[#444933]/20">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <h2 className="font-['Anybody'] text-3xl font-bold text-white uppercase">Core Protocols</h2>
              <p className="text-[#c4c9ac]">Engineered regimens designed to target specific physiological goals with maximal efficiency.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: '01', title: 'Hyper-Strength', desc: 'Pure powerlifting and strongman fundamentals designed to increase raw force output.', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80' },
                { id: '02', title: 'Kinetic Engine', desc: 'High-intensity metabolic conditioning combining assault bikes, rowers, and track sprints.', img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80' },
                { id: '03', title: 'Tactical Recovery', desc: 'Cryotherapy, mobility drills, and active recovery techniques to accelerate tissue repair.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80' }
              ].map((card) => (
                <div key={card.id} className="group relative h-[450px] border border-[#262626] rounded-xl overflow-hidden hover:border-[#c3f400] transition-all cursor-pointer">
                  <div className="absolute inset-0 bg-[#0A0A0A] z-0">
                    <img alt={card.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity mix-blend-luminosity grayscale" src={card.img} />
                  </div>
                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div className="w-10 h-10 border border-[#c3f400] flex items-center justify-center rounded-full text-[#c3f400] font-bold">
                      {card.id}
                    </div>
                    <div>
                      <h3 className="font-['Anybody'] text-2xl text-white uppercase mb-2 group-hover:text-[#c3f400] transition-colors">{card.title}</h3>
                      <p className="text-[#c4c9ac] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[#0e0e0e] border-t border-[#444933]/20 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 gap-8 max-w-[1440px] mx-auto">
          <div className="font-['Anybody'] text-6xl font-extrabold text-white opacity-10 uppercase tracking-tighter">
            DYNAMO
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'WhatsApp Support', 'Contact'].map((link) => (
              <a key={link} className="font-['Space_Mono'] text-[12px] text-[#c4c9ac] font-bold hover:text-[#c3f400] transition-colors" href="#">
                {link}
              </a>
            ))}
          </div>
          <div className="font-['Hanken_Grotesk'] text-[#c4c9ac] text-[12px]">
            © 2024 DYNAMO FITNESS. BUILT FOR THE ELITE.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;