import { Play, MessageCircle, Zap, Target, Dumbbell, ArrowRight } from 'lucide-react';
import { Header } from './body/Header';

const AboutPage = () => {
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
        .glass-panel {
          background-color: rgba(26, 26, 26, 0.6);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(68, 73, 51, 0.3);
        }
      `}</style>

      <div className="obsidian-bg min-h-screen">
        {/* Navigation */}
        <Header />

        <main className="pt-32 pb-24 max-w-[1440px] mx-auto px-6 md:px-16 w-full">
          {/* Hero Section */}
          <section className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
              <div className="md:col-span-8 glass-panel rounded-xl p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group min-h-[400px]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale group-hover:scale-105 transition-transform duration-700" 
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80" 
                  alt="Gym Interior"
                />
                <div className="relative z-10">
                  <span className="font-['Space_Mono'] text-[12px] font-bold text-[#c3f400] mb-4 block tracking-[0.3em] uppercase">The Genesis</span>
                  <h1 className="font-['Anybody'] text-5xl md:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
                    BUILT FOR<br/>THE ELITE.
                  </h1>
                  <p className="text-lg md:text-xl text-[#c4c9ac] max-w-2xl leading-relaxed">
                    We didn't build a gym. We engineered a proving ground. Dynamo is a brutalist sanctuary for those who demand more from their training, combining raw iron with precision coaching.
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 grid grid-cols-1 grid-rows-2 gap-4">
                <div className="glass-panel rounded-xl p-8 flex flex-col justify-between hover:border-[#c3f400] transition-colors">
                  <span className="font-['Space_Mono'] text-[12px] font-bold text-[#c4c9ac] tracking-widest uppercase">EST.</span>
                  <div className="font-['Anybody'] text-7xl font-extrabold text-white">2018</div>
                </div>
                <div className="glass-panel rounded-xl p-8 flex flex-col justify-between bg-[#201f1f] group cursor-pointer hover:border-[#c3f400] transition-colors">
                  <Play className="text-[#c3f400] group-hover:scale-110 transition-transform" fill="currentColor" size={40} />
                  <span className="font-['Space_Mono'] text-[12px] font-bold text-white tracking-widest uppercase group-hover:text-[#c3f400] transition-colors">WATCH THE REEL</span>
                </div>
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <h2 className="font-['Anybody'] text-4xl md:text-6xl font-bold text-white leading-none uppercase">
                UNYIELDING<br/>STANDARDS.
              </h2>
              <p className="text-[#c4c9ac] text-lg w-full md:w-1/3 leading-relaxed border-l-2 border-[#c3f400] pl-6">
                We strip away the non-essential. What remains is a hyper-focused environment designed to forge resilience and raw power.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: '01', title: 'ARSENAL', desc: 'Curated, competition-grade equipment. No gimmicks, only the tools necessary to build undeniable strength.', icon: <Dumbbell size={32}/> },
                { id: '02', title: 'CULTIVATION', desc: 'Expert-led programming tailored to push the boundaries of human performance. Data-driven, results-obsessed.', icon: <Target size={32}/> },
                { id: '03', title: 'ATMOSPHERE', desc: 'A sanctuary of focus. Dark spaces, brutalist concrete, and an auditory landscape designed to trigger flow state.', icon: <Zap size={32}/> }
              ].map((usp) => (
                <div key={usp.id} className="glass-panel rounded-xl p-8 min-h-[320px] flex flex-col relative group hover:border-[#c3f400] transition-all duration-300">
                  <div className="font-['Anybody'] text-[120px] text-[#2a2a2a] leading-none absolute top-4 right-4 opacity-30 z-0 group-hover:text-[#c3f400]/10 transition-colors">
                    {usp.id}
                  </div>
                  <div className="text-[#c3f400] mb-8 relative z-10">
                    {usp.icon}
                  </div>
                  <div className="relative z-10 mt-auto">
                    <h3 className="font-['Anybody'] text-2xl font-bold text-white mb-4 uppercase">{usp.title}</h3>
                    <p className="text-[#c4c9ac] leading-relaxed">{usp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WhatsApp Integration */}
          <section className="mb-32">
            <div className="bg-[#c3f400] rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-[0_0_40px_rgba(195,244,0,0.15)] relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10 mb-8 md:mb-0 md:w-2/3 text-center md:text-left">
                <h2 className="font-['Anybody'] text-4xl md:text-6xl font-extrabold text-[#161e00] mb-4 uppercase tracking-tighter">
                  SKIP THE WAITING LIST.
                </h2>
                <p className="text-[#3c4d00] text-lg md:text-xl font-medium">
                  Connect directly with our coaching staff to discuss membership approval and initial assessments.
                </p>
              </div>
              <a 
                href="#" 
                className="relative z-10 bg-[#131313] text-[#c3f400] font-['Space_Mono'] text-[12px] font-bold px-10 py-5 rounded uppercase border border-transparent hover:border-[#c3f400] hover:bg-[#201f1f] transition-all duration-300 flex items-center gap-3 shadow-2xl"
              >
                <MessageCircle size={20} />
                CHAT ON WHATSAPP
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#0e0e0e] border-t border-[#444933]/20 w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-12 gap-8 max-w-[1440px] mx-auto">
          <div className="font-['Anybody'] text-6xl font-extrabold text-white opacity-10 uppercase tracking-tighter">
            DYNAMO
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            {['Privacy Policy', 'Terms of Service', 'WhatsApp Support', 'Contact'].map((link) => (
              <a 
                key={link} 
                className="text-[#c4c9ac] hover:text-[#c3f400] font-['Space_Mono'] text-[12px] font-bold transition-colors duration-300" 
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="text-[#c4c9ac] font-['Hanken_Grotesk'] text-[12px]">
            © 2024 DYNAMO FITNESS. BUILT FOR THE ELITE.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;