'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VideoShowcase() {
  return (
    <section className="relative w-full bg-[#0A0D10] py-20 px-4 sm:px-6 lg:px-8">
      {/* Structural layout container */}
      <div className="max-w-6xl mx-auto">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px] sm:auto-rows-[280px]">
          
          {/* CARD 1: Text Intro (Top Left - Spans 4 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 flex flex-col justify-center p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05]"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#46BCC7]">
              Showcase
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-2 leading-tight">
              Watch <br /> Video.
            </h2>
            <p className="text-xs text-gray-400 mt-3 max-w-[200px] leading-relaxed">
              Experience our seamless integration of technology and luxury execution.
            </p>
          </motion.div>

          {/* CARD 2: Main Video Banner (Top Right - Spans 8 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative md:col-span-8 rounded-2xl overflow-hidden border border-white/[0.08] bg-black/40 shadow-xl cursor-pointer"
          >
            <Image
              src="/Video.png"
              alt="Main Video Frame"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            {/* Soft dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition-all duration-300 ease-out group-hover:bg-[#46BCC7] group-hover:scale-110 shadow-lg shadow-black/40">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 translate-x-[1px]">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Corner Tag */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              <p className="text-[10px] font-mono font-medium text-white/90">PLAY SHREEL — 02:45</p>
            </div>
          </motion.div>

          {/* CARD 3: Tall Vertical Feature (Bottom Left - Spans 4 cols, 2 rows deep on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative md:col-span-4 md:row-span-2 rounded-2xl overflow-hidden border border-white/[0.08] bg-black/40 min-h-[300px] md:min-h-auto"
          >
            <Image
              src="/IMG01.png" 
              alt="Craftsmanship Process"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#46BCC7]">Engineering</span>
              <h3 className="text-base font-bold text-white uppercase mt-0.5 tracking-wide">Precision Cut Structures</h3>
            </div>
          </motion.div>

          {/* CARD 4: Wide Horizontal Feature (Bottom Right - Spans 8 cols on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative md:col-span-8 rounded-2xl overflow-hidden border border-white/[0.08] bg-black/40"
          >
            <Image
              src="/IMG02.png" 
              alt="Raw Material Preparation"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="text-[9px] font-bold tracking-widest uppercase text-gray-400">Production Studio</span>
              <h3 className="text-base font-bold text-white uppercase mt-0.5 tracking-wide">Premium Finish Processing</h3>
            </div>
          </motion.div>

          {/* CARD 5: Text Stats / Minimalist Filler (Fills the final bottom right spot nicely) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-8 flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/[0.01] to-white/[0.03] border border-white/[0.04]"
          >
            <div className="mb-4 sm:mb-0">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Seamless Production Workflow</h4>
              <p className="text-xs text-gray-400 mt-1 max-w-md">Every detail is thoroughly integrated into our automated production tracking pipeline.</p>
            </div>
            <div className="flex gap-6 border-t border-white/5 pt-4 sm:pt-0 sm:border-none">
              <div>
                <p className="text-xl font-mono font-bold text-[#46BCC7]">100%</p>
                <p className="text-[9px] uppercase tracking-wider text-gray-500">Accurate</p>
              </div>
              <div>
                <p className="text-xl font-mono font-bold text-white">2026</p>
                <p className="text-[9px] uppercase tracking-wider text-gray-500">Standard</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}