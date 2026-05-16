import { Menu } from 'lucide-react';

export const Header = () => {
    return (
                <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-2xl border-b border-[#444933]/30 flex justify-between items-center px-6 md:px-16 py-4 max-w-[1440px] mx-auto left-0 right-0">
          <div className="font-['Anybody'] text-2xl font-extrabold tracking-tighter text-white">
            DYNAMO
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {['Home', 'About', 'Facilities', 'Classes', 'Trainers', 'Pricing'].map((item, idx) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`font-['Space_Mono'] text-[12px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-white ${idx === 0 ? 'text-[#c3f400] border-b-2 border-[#c3f400] pb-1' : 'text-[#c4c9ac]'}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#c3f400] text-[#161e00] font-['Space_Mono'] text-[12px] font-bold px-6 py-3 rounded hover:bg-[#abd600] transition-colors uppercase">
              JOIN ELITE
            </button>
            <button className="text-[#c3f400] md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </nav>
    )
}