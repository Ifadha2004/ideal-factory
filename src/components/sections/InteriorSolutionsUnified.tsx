'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function InteriorSolutionsUnified() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1: white stroke outline fades in
  const textStrokeOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  // Phase 2: villa fill INSIDE letters fades in
  const textFillOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  // Phase 2→3: ONLY the text zooms
  const textScale = useTransform(scrollYProgress, [0.35, 0.72], [1, 28]);

  // Phase 3: text fades as it zooms off
  const textOpacity = useTransform(scrollYProgress, [0.58, 0.72], [1, 0]);

  // Phase 3: full villa hero reveals
  const villaHeroOpacity = useTransform(scrollYProgress, [0.60, 0.78], [0, 1]);

  // Phase 4: villa blurs as grid arrives
  const villaBlur = useTransform(scrollYProgress, [0.78, 0.92], ['blur(0px)', 'blur(14px)']);
  const villaDarken = useTransform(scrollYProgress, [0.78, 0.92], [0.35, 0.75]);

  // Phase 4: hero header floats upward
  const heroHeaderY = useTransform(scrollYProgress, [0.80, 0.95], [0, -60]);
  const heroHeaderOpacity = useTransform(scrollYProgress, [0.80, 0.93], [1, 0]);

  // Phase 4: grid slides up
  const gridY = useTransform(scrollYProgress, [0.82, 0.96], [80, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0.82, 1.0], [0, 1]);

  const services = [
    {
      title: 'Kitchens',
      description: 'Designed for daily use, built for long-term performance',
      image: '/IMG01.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        </svg>
      ),
    },
    {
      title: 'Wardrobes & Closets',
      description: 'Structured storage that stays organized over time',
      image: '/IMG02.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="2"/><path d="M12 2v20M7 8h2M15 8h2"/>
        </svg>
      ),
    },
    {
      title: 'Wooden Doors',
      description: 'Precise finishes that hold up with everyday use',
      image: '/IMG03.png',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <rect x="4" y="2" width="16" height="20" rx="1"/><circle cx="15.5" cy="12" r="1"/>
        </svg>
      ),
    },
    {
      title: 'Premium Window Systems',
      description: 'Sealed systems for better comfort and control',
      image: '/IMG04.jpg',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <rect x="2" y="3" width="20" height="18" rx="2"/><path d="M12 3v18M2 12h20"/>
        </svg>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#0A0D10]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* ── LAYER 0 — Dark marble base — always the background ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Sec02_BG.jpg"
            alt="Dark Marble Background"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D10] via-transparent to-[#0A0D10]" />
        </div>

        {/* ── LAYER 1 — Zooming text (Phases 1 → 3) ──
            The scale transform lives HERE only.
            The villa fill uses backgroundAttachment:'fixed' so it is
            painted relative to the viewport, not the scaled element.
            Result: letters zoom but the image window inside them stays put. ── */}
        <motion.div
          style={{ scale: textScale, opacity: textOpacity, zIndex: 10 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none"
        >
          <motion.h2
            style={{ opacity: textStrokeOpacity }}
            className="font-sans text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] font-black tracking-[0.08em] uppercase leading-[0.9] text-center flex flex-col items-center gap-3"
          >
            {['Our', 'Interior', 'Solutions'].map((word) => (
              <span key={word} className="relative block">

                {/* White stroke outline — always present once faded in */}
                <span
                  style={{ WebkitTextStroke: '2px rgba(255,255,255,0.90)' }}
                  className="text-transparent block"
                >
                  {word}
                </span>

                {/* Villa image clipped to letter shapes.
                    backgroundAttachment:'fixed' pins the image to the
                    viewport coordinate system, so as the parent scales up
                    the crop window moves across the same fixed image —
                    the image itself never enlarges. */}
                <motion.span
                  style={{
                    opacity: textFillOpacity,
                    backgroundImage: "url('/Interiour-BG.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(255,255,255,0.15)',
                  }}
                  className="absolute inset-0 block"
                >
                  {word}
                </motion.span>

              </span>
            ))}
          </motion.h2>
        </motion.div>

        {/* ── LAYER 2 — Full villa hero (Phase 3 onward) ── */}
        <motion.div
          style={{ opacity: villaHeroOpacity }}
          className="absolute inset-0 z-20"
        >
          <motion.div style={{ filter: villaBlur }} className="absolute inset-0">
            <Image
              src="/Interiour-BG.jpg"
              alt="Realized Interior Design Project"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div style={{ opacity: villaDarken }} className="absolute inset-0 bg-black" />

          {/* Hero header — fades + floats up as grid arrives */}
          <motion.div
            style={{ y: heroHeaderY, opacity: heroHeaderOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="mb-5 text-[#46BCC7] drop-shadow-lg">
              <svg width="54" height="46" viewBox="0 0 28 24" fill="none" className="w-14 h-14">
                <path d="M2 6V18M8 2V22M14 5V19M20 3V21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-sans text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl uppercase text-white drop-shadow-xl">
              Our Solutions
            </h3>
            <p className="mt-4 text-sm font-medium tracking-wide sm:text-base max-w-xl opacity-95 leading-relaxed text-gray-200 drop-shadow">
              We provide all type of integrated{' '}
              <span className="text-[#46BCC7] font-bold block sm:inline">
                KITCHEN, CLOSET, DOOR Services
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* ── LAYER 3 — Grid section (Phase 4) ── */}
        <motion.div
          style={{ opacity: gridOpacity }}
          className="absolute inset-0 z-30"
        >
          {/* Own villa bg — blurred, matches Layer 2 */}
          <motion.div style={{ filter: villaBlur }} className="absolute inset-0">
            <Image
              src="/Interiour-BG.jpg"
              alt="Interior Background"
              fill
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/70" />

          <motion.div
            style={{ y: gridY }}
            className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-6 pb-10 overflow-y-auto"
          >
            <div className="text-center text-white flex flex-col items-center mb-8">
              <div className="mb-3 text-[#46BCC7]">
                <svg width="54" height="46" viewBox="0 0 28 24" fill="none" className="w-10 h-10 drop-shadow-lg">
                  <path d="M2 6V18M8 2V22M14 5V19M20 3V21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-sans text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl uppercase drop-shadow-md">
                Our Solutions
              </h3>
              <p className="mt-3 text-sm font-medium tracking-wide sm:text-base max-w-xl opacity-95 leading-relaxed text-gray-200">
                We provide all type of modular{' '}
                <span className="text-[#46BCC7] font-bold block sm:inline">
                  KITCHEN, CLOSET, DOOR Services
                </span>
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 w-full max-w-5xl">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-black/40 border border-white/[0.08] backdrop-blur-md transition-all duration-300 aspect-[16/9.5] sm:aspect-[16/8.5] shadow-2xl cursor-pointer"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  </div>

                  <div className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                    {service.icon}
                  </div>

                  <div className="relative p-4 sm:p-5 w-full flex items-end justify-between gap-4">
                    <div>
                      <h4 className="font-sans text-base font-bold tracking-tight text-white sm:text-lg transition-colors duration-300 group-hover:text-[#46BCC7]">
                        {service.title}
                      </h4>
                      <p className="text-[11px] font-normal text-gray-300 leading-normal mt-0.5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[40px] transition-all duration-500 ease-in-out hidden sm:block">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/[0.06] border border-white/[0.1] text-white transition-all duration-300 group-hover:bg-[#46BCC7] group-hover:text-black group-hover:border-[#46BCC7]">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full border border-[#46BCC7] text-[#46BCC7] text-sm font-semibold tracking-wide hover:bg-[#46BCC7] hover:text-black transition-all duration-300">
              Explore Our Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}