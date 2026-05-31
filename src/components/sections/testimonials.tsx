"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "../../data/content";

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 420; // Matches card width + gap step
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-24 bg-[#231F20] overflow-hidden border-t border-white/5">
      
      {/* Structural Mirror Blueprint Background Overlays */}
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none opacity-10 z-0">
        <Image src="/lay.png" alt="Layout vector left" fill className="object-contain object-left scale-120" />
      </div>
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none opacity-10 z-0 transform scale-x-[-1]">
        <Image src="/lay.png" alt="Layout vector right" fill className="object-contain object-right scale-120" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Fixed Header Context Box */}
        <div className="col-span-1 lg:col-span-4 space-y-5">
          <span className="text-[#52B7C4] text-base font-medium tracking-wider uppercase block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
            What They’re Talking About <br />
            <span className="text-white/90">Ideal Factory?</span>
          </h2>
          
          {/* Custom Navigation Action Links */}
          <div className="flex items-center space-x-4 pt-4">
            <button
              onClick={() => scrollSlider("left")}
              className="p-3.5 border border-white/30 rounded-full text-white hover:text-[#52B7C4] hover:border-[#52B7C4] bg-transparent hover:bg-white/5 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="p-3.5 border border-white/30 rounded-full text-white hover:text-[#52B7C4] hover:border-[#52B7C4] bg-transparent hover:bg-white/5 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Snap-Scroll Overflowing Container Canvas */}
        <div className="col-span-1 lg:col-span-8 relative">
          <div
            ref={sliderRef}
            className="w-full flex items-stretch space-x-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {TESTIMONIALS_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="w-[300px] sm:w-[380px] shrink-0 snap-start bg-[#1C191A] border border-white/5 rounded-2xl p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#52B7C4]/20 group"
              >
                <div>
                  {/* Glowing Premium Teal Quote Icon Decoration */}
                  <div className="text-[#52B7C4] opacity-80 mb-6 group-hover:scale-105 transition-transform duration-300 origin-left">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                    </svg>
                  </div>

                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light font-sans tracking-wide">
                    {item.quote}
                  </p>
                </div>

                {/* User Context Footer Block */}
                <div className="flex items-center space-x-4 pt-8 mt-6 border-t border-white/5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-700 bg-neutral-800">
                    {/* Next.js Opt Image implementation */}
                    <div className="w-full h-full bg-neutral-700 flex items-center justify-center text-white text-xs font-bold">
                      {item.author[0]}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#52B7C4] text-base font-medium tracking-wide">
                      {item.author}
                    </h4>
                    <p className="text-neutral-500 text-xs tracking-wider uppercase font-medium mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}