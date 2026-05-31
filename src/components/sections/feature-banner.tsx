"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FEATURE_BANNER_CONTENT } from "../../data/content";

export default function FeatureBanner() {
  const { title, imageSrc, imageAlt, bullets, ctaText } = FEATURE_BANNER_CONTENT;

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Core Container Card with Custom Dark Teal Gradient */}
        <div className="relative rounded-2xl bg-gradient-to-br from-neutral-950 via-[#163333] to-[#1F4747] border border-white/5 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Negative Margin Overflowing Isometric Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1 lg:col-span-5 relative z-10 flex justify-center lg:block"
          >
            <div className="w-[280px] sm:w-[400px] lg:w-[480px] h-[240px] sm:h-[340px] lg:h-[400px] relative lg:-ml-24 xl:-ml-32 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 400px, 480px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: High-Contrast Value Proposition Copy */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-6 lg:pl-4">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight"
            >
              {title}
            </motion.h2>

            {/* Bullet Lists Map */}
            <ul className="space-y-4">
              {bullets.map((text, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start space-x-3 text-neutral-300 text-sm sm:text-base font-light"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#163333]">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Premium Icon-Callout CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-4"
            >
              <button className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white hover:bg-neutral-100 text-[#52B7C4] hover:text-[#43a1ad] font-semibold text-sm tracking-wide rounded-lg transition-all shadow-xl shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 group">
                {/* Embedded Phone/Call Icon matching Figma token */}
                <svg 
                  className="w-4 h-4 transition-transform group-hover:rotate-12" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{ctaText}</span>
              </button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}