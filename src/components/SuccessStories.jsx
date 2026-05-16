import React from 'react';
import { Play, TrendingUp, Dumbbell } from 'lucide-react';
import { Header } from './body/Header';

const SuccessStories = () => {
  return (
    <div className="bg-[#0A0A0A] text-white font-sans selection:bg-[#E2FF00] selection:text-black">
      {/* Navigation */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-start pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-40" 
              alt="Elite gym interior"
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 px-6 md:px-16 w-full">
            <p className="text-[#E2FF00] font-semibold text-[0.75rem] uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-12 h-px bg-[#E2FF00]"></span> PROVEN RESULTS
            </p>
            <h1 className="font-black text-[12vw] leading-[0.85] mb-6 font-['Anybody'] uppercase">
              ELITE<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>TRANSFORMATIONS</span>
            </h1>
            <div className="max-w-md border-l-4 border-[#E2FF00] pl-6">
              <p className="text-[#A1A1A1] text-lg leading-relaxed">
                The obsidian path isn't for everyone. These are the stories of those who embraced the grind and emerged as elite versions of themselves.
              </p>
            </div>
          </div>
        </section>

        {/* Video Reviews (Reels Style) */}
        <section className="py-24 px-6 md:px-16 bg-[#050505]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="font-black text-4xl md:text-5xl uppercase font-['Anybody']">TESTIMONIALS IN MOTION</h2>
            <span className="font-semibold text-[0.75rem] uppercase tracking-widest text-[#A1A1A1]">SCROLL TO WITNESS [08]</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: 'MARCUS K.', tag: 'The 12-Week Protocol', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80', offset: false },
              { name: 'SARAH L.', tag: 'Powerlifting PR', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80', offset: true },
              { name: 'JAXON D.', tag: 'Hyper-Strength Gainz', img: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80', offset: false },
              { name: 'ELENA R.', tag: 'Bodyfat % Cut', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80', offset: true }
            ].map((video, idx) => (
              <div 
                key={idx} 
                className={`relative aspect-[9/16] group cursor-pointer overflow-hidden bg-[#1A1A1A] ${video.offset ? 'md:mt-12' : ''}`}
              >
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src={video.img} alt={video.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#E2FF00] flex items-center justify-center rounded-full">
                    <Play className="text-black fill-current" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-semibold text-[0.75rem] uppercase tracking-widest text-[#E2FF00] mb-1">{video.name}</p>
                  <p className="text-[10px] text-[#A1A1A1] uppercase tracking-tighter">{video.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transformation Case Studies */}
        <section className="py-24 px-6 md:px-16 overflow-hidden">
          <h2 className="font-black text-5xl uppercase font-['Anybody'] mb-16 text-center md:text-left">PROTOCOLS EXECUTED</h2>
          
          <div className="space-y-32">
            {/* Case Study 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex relative">
                <div className="w-1/2 overflow-hidden border-r-2 border-[#E2FF00]">
                  <img className="w-full h-[600px] object-cover grayscale" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80" alt="Before" />
                </div>
                <div className="w-1/2 overflow-hidden">
                  <img className="w-full h-[600px] object-cover" src="https://images.unsplash.com/photo-1507398941214-57f596a40e51?auto=format&fit=crop&q=80" alt="After" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-[#E2FF00] text-black px-4 py-1 font-semibold text-[0.75rem] uppercase tracking-widest transform -rotate-90">12 WEEKS</div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-black text-4xl uppercase font-['Anybody'] mb-4">THE 12-WEEK PROTOCOL</h3>
                <p className="text-[#A1A1A1] mb-8 text-lg">A systematic demolition of the previous self. Targeted hypertrophy combined with metabolic conditioning.</p>
                <div className="space-y-4">
                  {[
                    { label: 'Weight Variation', val: '-14 KG' },
                    { label: 'Body Fat', val: '22% → 9%' },
                    { label: 'Strength Rating', val: '+40%' }
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between border-b border-[#2E2E2E] pb-2">
                      <span className="font-semibold text-[0.75rem] uppercase tracking-widest">{stat.label}</span>
                      <span className="text-[#E2FF00] font-bold">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Member Achievements (Bento) */}
        <section className="py-24 px-6 md:px-16 bg-[#121212]">
          <div className="mb-16">
            <p className="text-[#E2FF00] font-semibold text-[0.75rem] uppercase tracking-widest mb-2">HALL OF POWER</p>
            <h2 className="font-black text-5xl uppercase font-['Anybody']">MILESTONES CRUSHED</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
            <div className="md:col-span-2 md:row-span-1 bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#E2FF00]/10 p-12 flex flex-col justify-end relative overflow-hidden group border-t-4 border-t-[#E2FF00]">
              <div className="absolute top-0 right-0 p-8">
                <Dumbbell size={120} className="opacity-10 text-[#E2FF00]" />
              </div>
              <div className="relative z-10">
                <h4 className="font-black text-6xl md:text-8xl leading-none mb-2 font-['Anybody']">1000LB CLUB</h4>
                <p className="font-semibold text-[0.75rem] uppercase tracking-widest text-[#E2FF00]">42 MEMBERS JOINED IN 2024</p>
                <p className="mt-4 text-[#A1A1A1] max-w-sm">The ultimate testament of raw strength. Combined total of Bench, Squat, and Deadlift exceeding the half-ton mark.</p>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-2 bg-[#E2FF00] text-black p-12 flex flex-col justify-between">
              <div>
                <TrendingUp size={40} className="mb-8" />
                <h4 className="font-black text-5xl leading-tight font-['Anybody'] uppercase">THE SHRED<br />MATRIX</h4>
              </div>
              <div>
                <div className="text-[80px] font-black leading-none mb-2">-15%</div>
                <p className="font-semibold text-[0.75rem] uppercase tracking-widest border-t-2 border-black pt-4">AVERAGE FAT LOSS ACROSS COMPETITION PREP GROUPS</p>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#E2FF00]/10 p-8 border-l-4 border-l-[#E2FF00]">
              <div className="flex justify-between items-start mb-12">
                <TrendingUp className="text-[#E2FF00]" />
                <span className="font-semibold text-[0.75rem] uppercase tracking-widest text-[#A1A1A1]">Q3 DATA</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 font-['Anybody'] uppercase">POWERLIFTING PRs</h4>
              <p className="text-[#A1A1A1] mb-6">Total volume lifted by members has increased by 142% vs last year.</p>
              <div className="h-2 w-full bg-[#1A1A1A]">
                <div className="h-full bg-[#E2FF00] w-[75%]"></div>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#E2FF00]/10 p-8 border-r-4 border-r-[#E2FF00] flex flex-col justify-center text-center">
              <p className="font-semibold text-[0.75rem] uppercase tracking-widest text-[#E2FF00] mb-2">IRON DISCIPLINE</p>
              <div className="font-black text-6xl font-['Anybody']">94%</div>
              <p className="font-semibold text-[0.75rem] uppercase tracking-widest text-[#A1A1A1]">RETENTION RATE FOR ELITE TIER</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-16 bg-black overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200px] bg-[#E2FF00]/10 -rotate-12 blur-3xl"></div>
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="font-black text-[10vw] md:text-[8vw] leading-none mb-12 italic font-['Anybody']">
              START YOUR<br />
              <span className="text-[#E2FF00] not-italic">OWN STORY.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
              <button className="bg-[#E2FF00] text-black px-12 py-5 font-black text-2xl uppercase font-['Anybody'] hover:scale-105 active:scale-95 transition-all duration-300">
                JOIN THE ELITE
              </button>
              <button className="border-2 border-white text-white px-12 py-5 font-black text-2xl uppercase font-['Anybody'] hover:bg-white hover:text-black transition-all duration-300">
                BOOK CONSULTATION
              </button>
            </div>
            <p className="mt-12 font-semibold text-[0.75rem] uppercase tracking-widest text-[#A1A1A1]">NO EXCUSES. ONLY PROTOCOLS.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#050505] border-t border-[#3F3F3F]/20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-12 gap-8 max-w-[1440px] mx-auto">
          <div className="font-black text-5xl text-[#E2FF00] opacity-20 tracking-tighter font-['Anybody'] uppercase">DYNAMO</div>
          <div className="flex flex-col md:flex-row gap-8 items-center font-semibold text-[0.75rem] uppercase tracking-widest text-[#A1A1A1]">
            <div className="flex gap-6">
              <a className="hover:text-[#E2FF00] transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-[#E2FF00] transition-colors" href="#">Terms of Service</a>
            </div>
            <div className="flex gap-6">
              <a className="hover:text-[#E2FF00] transition-colors" href="#">WhatsApp Support</a>
              <a className="hover:text-[#E2FF00] transition-colors" href="#">Contact</a>
            </div>
          </div>
          <div className="text-[#A1A1A1] font-semibold text-[10px] uppercase tracking-widest text-center md:text-right">
            © 2024 DYNAMO FITNESS. BUILT FOR THE ELITE.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SuccessStories;