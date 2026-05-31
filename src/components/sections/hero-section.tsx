'use client';

import Image from 'next/image';
import { ArrowRight, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8 bg-black">
      
      {/* 1. Optimized Full-Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero-BG.jpg"
          alt="Luxury Villa Interior Design"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay to balance contrast and match the moody dark atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50" />
      </div>

      {/* Main Content Layout Wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-7xl pt-24 pb-12">
        
        {/* 2. Premium Dark Glassmorphism Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="border-white/10 bg-black/20 backdrop-blur-xl max-w-2xl rounded-2xl border p-8 md:p-12 shadow-2xl"
        >
          {/* Main Structural Typography */}
          <h1 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl leading-[1.15]">
            Design & Delivery of <br />
            Your Villa Interiors <br />
            <span className="text-[#46BCC7] block mt-2">Made Simple</span>
          </h1>

          {/* Core Descriptive Copy */}
          <p className="text-white/80 mt-6 max-w-lg text-sm font-light leading-relaxed tracking-wide md:text-base">
            Kitchens, closets, doors, and premium uPVC windows designed, 
            manufactured, and installed by one trusted Emirati factory.
          </p>

          {/* 3. Specialized Action Pill Button */}
          <div className="mt-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#46BCC7] hover:text-black shadow-lg hover:shadow-cyan-500/20 active:scale-98"
            >
              Get Your FREE 3D Design Now
              <div className="bg-black text-white group-hover:bg-black group-hover:text-white rounded-full p-1 transition-colors duration-300">
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </motion.div>

      </div>

      {/* 4. Floating Fixed Chat / Help Widget on Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#46BCC7] text-black hover:bg-[#3aa9b4] flex h-14 w-14 items-center justify-center rounded-full shadow-xl shadow-cyan-500/20 transition-colors duration-300"
          aria-label="Contact Customer Support"
        >
          {/* Replicating the custom headphone icon aesthetic securely */}
          <Headphones size={26} strokeWidth={2} />
        </motion.button>
      </div>

    </section>
  );
}