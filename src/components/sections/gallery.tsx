"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type Category } from "../../data/content";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <section 
      className="relative w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#231F20] overflow-hidden"
      id="projects"
    >
      {/* Blueprint Architectural Overlay (lay.png) */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 pointer-events-none mix-blend-screen opacity-25 z-0">
        <Image
          src="/lay.png"
          alt="Architectural Vector Blueprint Layout Background"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight text-center mb-8">
          Designed. Built. Delivered
        </h2>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12 max-w-2xl">
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.value;
            return (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "px-5 py-2 text-sm font-medium border rounded-md transition-all duration-300 tracking-wide",
                  isActive
                    ? "bg-white text-[#231F20] border-white font-semibold"
                    : "bg-transparent text-gray-300 border-gray-600 hover:border-gray-400 hover:text-white"
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Masonry Grid Layout */}
        <motion.div 
          layout 
          className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={cn(
                  "relative w-full overflow-hidden rounded-xl group border border-neutral-800",
                  item.className
                )}
              >
                {/* Optimized Next.js Image wrapper */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Elegant subtle hover dimming layer */}
                <div className="absolute inset-0 bg-black/10 opacity-100 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <button className="px-10 py-3.5 bg-[#52B7C4] hover:bg-[#43a1ad] text-white font-medium text-sm tracking-wider rounded-md transition-all shadow-lg shadow-[#52B7C4]/10 transform hover:-translate-y-0.5 active:translate-y-0">
            Explore Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}