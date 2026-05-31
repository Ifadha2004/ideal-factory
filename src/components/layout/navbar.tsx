'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, PhoneCall } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-4 sm:px-6 lg:px-8">
      {/* Container with Glassmorphism */}
      <nav className="border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between rounded-xl border px-6 py-3 text-white transition-all duration-300">
        
        {/* Left Side: Mobile Menu Trigger & Desktop Navigation */}
        <div className="flex items-center gap-8">
          <button 
            className="hover:text-cyan-400 block p-1 transition-colors md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white/80 hover:text-white transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: Brand Identity Asset */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="Ideal Factory Logo"
              width={140} // Scaled for logo containing branding text
              height={36}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right Side: CTA Button */}
        <div>
          <Link 
            href="#contact" 
            className="bg-[#46BCC7] hover:bg-[#3aa9b4] text-black hidden items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 active:scale-95 sm:flex"
          >
            <PhoneCall size={14} />
            Start Your Project
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-5 border-white/10 bg-black/95 backdrop-blur-lg absolute top-20 left-4 right-4 z-40 rounded-xl border p-6 text-white md:hidden">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-white/80 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="bg-[#46BCC7] text-black flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold"
              >
                <PhoneCall size={16} />
                Start Your Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}