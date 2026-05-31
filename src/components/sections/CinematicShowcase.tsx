'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CinematicShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    { id: '01', title: 'The Marble Oasis', category: 'Penthouse Residence' },
    { id: '02', title: 'Minimalist Monolith', category: 'Luxury Kitchen Studio' },
    { id: '03', title: 'Verdant Atrium', category: 'Bespoke Architectural Villa' },
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#0A0D10] text-white flex flex-col justify-between overflow-hidden px-6 py-12 md:px-16 md:py-16 select-none"
    >
      {/* 1. Immersive Video / Image Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/Interiour-BG.jpg" // Swap with your actual project video poster asset
          alt="Cinematic Space Showcase"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft Luxury Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D10] via-black/30 to-[#0A0D10]/80" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* 2. Top Navigation & Minimalist Branding */}
      <div className="relative z-10 w-full flex items-center justify-between border-b border-white/[0.06] pb-6">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#46BCC7] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
            Featured Reel
          </span>
        </div>
        <div className="text-[10px] md:text-xs font-mono tracking-widest text-gray-400 uppercase">
          [ DXB // 2026 ]
        </div>
      </div>

      {/* 3. Central Frame: Main Headline & Play Trigger */}
      <div className="relative z-10 my-auto max-w-4xl w-full flex flex-col items-start gap-6 mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2"
        >
          <span className="text-[#46BCC7] text-xs font-bold tracking-[0.3em] uppercase block mb-1">
            Crafting Experiences
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95]">
            Spaces That <br />
            <span className="text-transparent style-stroke" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.85)' }}>
              Tell A Story
            </span>
          </h2>
        </motion.div>

        {/* Minimal Player Toggle Button */}
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-4 flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md px-6 py-4 rounded-full transition-all duration-300"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#46BCC7] text-black shadow-lg shadow-[#46BCC7]/20">
            {isPlaying ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </div>
          <div className="text-left pr-2">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              {isPlaying ? 'Pause Experience' : 'Play Cinematic Tour'}
            </div>
            <div className="text-[10px] text-gray-400 font-mono mt-0.5">2:45 MIN // HDR QUALITY</div>
          </div>
        </motion.button>
      </div>

      {/* 4. Bottom Frame: Luxury Navigation & Timeline Controller */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 pt-6 border-t border-white/[0.06]">
        
        {/* Cinematic Timeline Scrub Indicator */}
        <div className="w-full md:max-w-xs flex flex-col gap-2">
          <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span>00:42</span>
            <span>02:45</span>
          </div>
          <div className="h-[2px] w-full bg-white/10 relative overflow-hidden rounded-full">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-[#46BCC7]" 
              animate={{ width: isPlaying ? '100%' : '35%' }}
              transition={{ duration: isPlaying ? 120 : 0.5, ease: 'linear' }}
            />
          </div>
        </div>

        {/* Project Track Selector */}
        <div className="flex items-center gap-8 md:gap-12 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(idx)}
              className="group relative flex items-start gap-4 text-left outline-none shrink-0"
            >
              <span className={`font-mono text-xs font-bold transition-colors duration-300 ${
                activeProject === idx ? 'text-[#46BCC7]' : 'text-gray-500'
              }`}>
                {project.id}
              </span>
              <div>
                <h4 className={`text-sm font-bold tracking-tight uppercase transition-colors duration-300 ${
                  activeProject === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {project.title}
                </h4>
                <p className="text-[11px] text-gray-500 mt-0.5 hidden sm:block">
                  {project.category}
                </p>
              </div>

              {/* Active Slide Accent Indicator Line */}
              {activeProject === idx && (
                <motion.div 
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#46BCC7]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}