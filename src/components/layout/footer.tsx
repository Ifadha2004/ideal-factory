import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail, Phone } from 'lucide-react';
import { FOOTER_LINKS, CONTACT_INFO } from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0A0D10] px-4 pt-16 pb-8 text-white sm:px-6 lg:px-8 overflow-hidden">
      {/* Optimized Background Ambience Layer */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Image
          src="/footer_BG_01.jpg"
          alt="Footer Background Ambience"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle dark overlay to maintain readability of contact texts */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D10]/90 via-[#0A0D10]/40 to-[#000000]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Ideal Factory Logo"
                width={140}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">
              Our kitchens may not be able to whisk you away to sun-kissed foreign shores, 
              but our collection boasts all the quality craftsmanship and style.
            </p>
          </div>

          {/* Dynamic Link Menus */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-[#46BCC7] text-sm font-semibold tracking-wider uppercase">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-white/60">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors duration-150">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#46BCC7] text-sm font-semibold tracking-wider uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5 text-xs text-white/60">
              <li className="flex items-center gap-2.5">
                <Globe size={14} className="text-[#46BCC7]" />
                <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noreferrer" className="hover:text-white">
                  {CONTACT_INFO.website}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#46BCC7]" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-[#46BCC7] mt-0.5" />
                <div className="flex flex-col gap-1">
                  {CONTACT_INFO.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-white">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Divider Line */}
        <div className="border-white/10 mt-16 flex flex-col flex-wrap items-center justify-between gap-4 border-t pt-6 text-[11px] tracking-wide text-white/40 sm:flex-row">
          <p>Copyright ©2025 lumicore all rights reserved</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Condition</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}