import React from 'react';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import { Header } from './body/Header';

const ContactPage = () => {
  return (
    <div className="bg-[#131313] text-[#e5e2e1] min-h-screen flex flex-col font-sans selection:bg-[#c3f400] selection:text-[#131313]">
      {/* Navigation */}
      <Header />

      {/* Main Canvas */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-6 md:px-16 py-32 md:py-40 flex flex-col gap-16">
        {/* Page Header */}
        <section className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            Initiate <br />
            <span className="text-[#c3f400]">Protocol</span>
          </h1>
          <p className="text-lg md:text-xl text-[#c4c9ac] mt-8 max-w-xl border-l-2 border-[#c3f400] pl-6">
            Direct comms to DYNAMO HQ. Submit your inquiry below. Our operators monitor this channel 24/7.
          </p>
        </section>

        {/* Bento Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Left: Minimalist Form (Bento Large) */}
          <div className="md:col-span-7 bg-[#2a2a2a]/40 backdrop-blur-3xl border border-[#444933]/30 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c3f400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <form className="flex flex-col gap-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#8e9379] uppercase">Identification</label>
                  <input 
                    className="bg-transparent border-0 border-b border-[#444933]/50 focus:border-[#c3f400] focus:ring-0 px-0 py-2 text-lg text-white placeholder:text-[#353534] transition-colors uppercase outline-none" 
                    placeholder="Full Name" 
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#8e9379] uppercase">Comms Channel</label>
                  <input 
                    className="bg-transparent border-0 border-b border-[#444933]/50 focus:border-[#c3f400] focus:ring-0 px-0 py-2 text-lg text-white placeholder:text-[#353534] transition-colors uppercase outline-none" 
                    placeholder="Email Address" 
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#8e9379] uppercase">Objective</label>
                <select className="bg-transparent border-0 border-b border-[#444933]/50 focus:border-[#c3f400] focus:ring-0 px-0 py-2 text-lg text-white appearance-none cursor-pointer uppercase outline-none">
                  <option className="bg-[#1c1b1b]">Membership Inquiry</option>
                  <option className="bg-[#1c1b1b]">Personal Training</option>
                  <option className="bg-[#1c1b1b]">Facility Access</option>
                  <option className="bg-[#1c1b1b]">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#8e9379] uppercase">Transmission</label>
                <textarea 
                  className="bg-transparent border-0 border-b border-[#444933]/50 focus:border-[#c3f400] focus:ring-0 px-0 py-2 text-lg text-white placeholder:text-[#353534] transition-colors resize-none uppercase outline-none" 
                  placeholder="Enter Message" 
                  rows="4"
                ></textarea>
              </div>

              <button className="self-start mt-4 bg-[#c3f400] text-[#161e00] font-mono text-xs font-bold tracking-widest px-10 py-4 hover:bg-[#abd600] transition-all flex items-center gap-3 active:scale-95 group">
                TRANSMIT DATA
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right Column (Bento Stack) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            {/* Quick Actions (Bento Medium) */}
            <div className="bg-[#2a2a2a]/40 backdrop-blur-3xl border border-[#444933]/30 p-8 flex flex-col justify-center gap-10 flex-grow">
              <div className="flex items-start gap-6 group">
                <div className="p-3 border border-[#444933]/30 group-hover:border-[#c3f400] transition-colors">
                  <MapPin size={20} className="text-[#c3f400]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#c4c9ac] uppercase">Sector 7G Command</h3>
                  <p className="text-md text-white font-medium">101 Industrial Way<br />Metro City, MC 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-3 border border-[#444933]/30 group-hover:border-[#c3f400] transition-colors">
                  <Phone size={20} className="text-[#c3f400]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#c4c9ac] uppercase">Secure Voice Line</h3>
                  <p className="font-mono text-xl text-white font-bold tracking-tighter">+1 800 DYNAMO</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-3 border border-[#444933]/30 group-hover:border-[#c3f400] transition-colors">
                  <Mail size={20} className="text-[#c3f400]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#c4c9ac] uppercase">Encrypted Email</h3>
                  <p className="text-md text-white hover:text-[#c3f400] transition-colors cursor-pointer font-medium">comms@dynamo.elite</p>
                </div>
              </div>
            </div>

            {/* Tactical Map (Bento Map) */}
            <div className="h-64 bg-[#0e0e0e] border border-[#444933]/30 relative overflow-hidden group">
              <img 
                alt="Tactical Map" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent"></div>
              <div className="absolute bottom-4 right-4 bg-[#131313]/90 backdrop-blur-md border border-[#c3f400]/50 px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#c3f400] rounded-full animate-pulse"></div>
                <span className="font-mono text-[10px] font-bold text-[#c3f400] tracking-widest uppercase">HQ Located</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-[#0e0e0e] border-t border-[#444933]/20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-12 gap-8 max-w-[1440px] mx-auto">
          <div className="text-4xl font-black text-white opacity-10 tracking-tighter uppercase">
            DYNAMO
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'WhatsApp Support'].map((link) => (
              <a key={link} className="font-mono text-[10px] font-bold tracking-widest text-[#c4c9ac] hover:text-[#c3f400] transition-colors uppercase" href="#">
                {link}
              </a>
            ))}
            <a className="font-mono text-[10px] font-bold tracking-widest text-white underline decoration-[#c3f400] decoration-2 underline-offset-4 uppercase" href="#">
              Contact
            </a>
          </nav>

          <div className="font-mono text-[10px] font-bold text-[#8e9379] tracking-widest uppercase text-center md:text-right">
            © 2024 DYNAMO FITNESS. <br className="md:hidden" /> BUILT FOR THE ELITE.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;