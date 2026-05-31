'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// ── Reusable fade-up wrapper ──
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

// ── Pain point item ──
function PainPoint({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#46BCC7]/60">
        <svg viewBox="0 0 24 24" fill="none" stroke="#46BCC7" strokeWidth="2" className="w-3.5 h-3.5">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" d="M15 9l-6 6M9 9l6 6" />
        </svg>
      </div>
      <span className="text-sm font-semibold text-white/90 tracking-wide">{label}</span>
    </div>
  );
}

// ── Feature card ──
function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <FadeUp delay={delay}>
      <div className="flex flex-col gap-3 p-1">
        <div className="text-[#46BCC7] w-8 h-8">{icon}</div>
        <h4 className="text-sm font-bold text-[#46BCC7] tracking-wide uppercase">{title}</h4>
        <p className="text-xs text-white/60 leading-relaxed">{description}</p>
      </div>
    </FadeUp>
  );
}

export default function WhyIdealFactory() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setVideoPlaying(true);
    videoRef.current?.play();
  };

  const painPoints = [
    'Quality Problems',
    'Delays during execution',
    'Poor value for money',
    'Weak after-sales support',
  ];

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
      title: 'Multiple Interior Systems',
      description: 'One Factory. Kitchens, wardrobes, doors, and premium window systems—manufactured together in one facility for coordinated villa interiors.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      title: 'Coordinated Design',
      description: 'Our designers ensure that kitchens, closets, doors, & window systems complement each other in style & proportion.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: 'After-Sales Support & Maintenance',
      description: 'Our team installs every product with precision to ensure the final result reflects the original design.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: 'Precision Manufacturing & Installation',
      description: 'Manufactured in-house. Installed with precision. One accountable team.',
    },
  ];

  return (
    <section className="w-full bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* ── CARD 1: Why Villa Projects Fail ── */}
        <FadeUp>
          <div className="rounded-2xl bg-[#231F20] border border-white/[0.06] p-7 sm:p-10 shadow-2xl">

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug mb-3">
              Why Villa Interior Projects Often Become Difficult?
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-2xl">
              When interior systems are sourced from multiple suppliers, the process becomes fragmented,
              making it difficult to coordinate a consistent final result. The lack of commitment leads to :
            </p>

            {/* Pain points grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-10">
              {painPoints.map((p, i) => (
                <FadeUp key={p} delay={0.1 * i}>
                  <PainPoint label={p} />
                </FadeUp>
              ))}
            </div>

            {/* Video player */}
            <FadeUp delay={0.3}>
              <div
                className="relative w-full overflow-hidden rounded-xl aspect-video bg-black cursor-pointer group"
                onClick={handlePlay}
              >
                {/* Thumbnail / poster */}
                {!videoPlaying && (
                  <>
                    <Image
                      src="/Video.png"
                      alt="Craftsman working with wood"
                      fill
                      className="object-cover object-center"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
                {/* Actual video — hidden until play clicked */}
                <video
                  ref={videoRef}
                  src="/why-ideal-factory.mp4"
                  controls={videoPlaying}
                  className={`absolute inset-0 w-full h-full object-cover ${videoPlaying ? 'opacity-100' : 'opacity-0'}`}
                  onEnded={() => setVideoPlaying(false)}
                />
              </div>
            </FadeUp>
          </div>
        </FadeUp>

        {/* ── CARD 2: The Ideal Factory Approach ── */}
        <FadeUp delay={0.1}>
          <div className="rounded-2xl bg-[#231F20] border border-white/[0.06] p-7 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-14">

              {/* Left: heading */}
              <div className="md:w-52 shrink-0">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  The Ideal Factory Approach
                </h2>
              </div>

              {/* Right: 2×2 feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {features.map((f, i) => (
                  <FeatureCard key={f.title} {...f} delay={0.1 * i} />
                ))}
              </div>

            </div>
          </div>
        </FadeUp>

        {/* ── CARD 3: Design Your Villa CTA ── */}
        <FadeUp delay={0.15}>
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl min-h-[260px]">
            {/* Background image */}
            <Image
              src="/slider2.jpg"
              alt="Villa Interior"
              fill
              className="object-cover object-center"
            />
            {/* Dark gradient overlay — heavier on left so text reads */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D10]/95 via-[#0A0D10]/70 to-[#0A0D10]/20" />

            <div className="relative z-10 p-7 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              {/* Left: copy */}
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-1">
                  Design Your Villa Interiors
                </h2>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#46BCC7] leading-snug mb-4">
                  Before Spending a Dirham
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-sm">
                  Upload your villa floor plan and collaborate live with our designers
                  to create a full 3D interior concept within an hour.
                </p>

                {/* Checkpoints */}
                <div className="flex flex-col gap-2 mb-6">
                  {['No guessing', 'No Expensive Redesigns', 'No Delays'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#46BCC7]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-2.5 h-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#46BCC7] text-black text-sm font-bold tracking-wide hover:bg-[#3aa8b3] transition-colors duration-300 shadow-lg shadow-[#46BCC7]/20">
                  Start Your 3D Interior Design
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l4 4-4 4" />
                  </svg>
                </button>
              </div>

              {/* Right: 3 step cards */}
              <div className="flex gap-3 justify-center md:justify-end">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <path strokeLinecap="round" d="M3 9h18M9 3v18"/>
                      </svg>
                    ),
                    label: 'Upload Floor Plan',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                      </svg>
                    ),
                    label: 'Get 3D Design',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <path strokeLinecap="round" d="M8 21h8M12 17v4"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l2 2 4-4"/>
                      </svg>
                    ),
                    label: 'Live Design Edit',
                  },
                ].map((step) => (
                  <div
                    key={step.label}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-[#46BCC7]/30 bg-white/5 backdrop-blur-sm px-4 py-5 text-center w-28 sm:w-32 hover:border-[#46BCC7]/60 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#46BCC7]/15 text-[#46BCC7]">
                      {step.icon}
                    </div>
                    <span className="text-xs font-semibold text-white/80 leading-tight">{step.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}