// "use client";

// import { useState, type FormEvent } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import type { ContactFormData, FormState } from "../../types/contact.types";

// export default function ContactSection() {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [formState, setFormState] = useState<FormState>({
//     status: "idle",
//     message: null,
//   });

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setFormState({ status: "submitting", message: null });

//     // Simulate real-world API latency pipeline
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       setFormState({ status: "success", message: "Thank you! Our design specialists will contact you shortly." });
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     } catch {
//       setFormState({ status: "error", message: "Something went wrong. Please try again." });
//     }
//   };

//   return (
//     <section className="relative w-full py-24 bg-[#0A0909] overflow-hidden" id="contact">
      
//       {/* Corner Geometric Spiral Line-Art Accents */}
//       <div className="absolute top-0 right-0 w-[240px] h-[240px] opacity-20 pointer-events-none z-0">
//         <Image src="/lay.png" alt="Geometric line accent right" fill className="object-contain object-right-top" />
//       </div>
//       <div className="absolute bottom-0 left-0 w-[240px] h-[240px] opacity-20 pointer-events-none z-0 transform rotate-180">
//         <Image src="/lay.png" alt="Geometric line accent left" fill className="object-contain object-right-top" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
//         {/* Left Column: Call-to-Action Context Block */}
//         <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
//           <div className="inline-block px-4 py-1.5 bg-[#52B7C4]/10 border border-[#52B7C4]/20 rounded-md text-[#52B7C4] text-xs font-semibold tracking-wider uppercase">
//             Get in touch
//           </div>
          
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
//             Let's discuss <br /> your project!
//           </h2>
          
//           <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-md">
//             Contact us today and learn more about how our interior fit out & custom manufacturing services can bring your ideas to life.
//           </p>
//         </div>

//         {/* Right Column: High-End Conversion Input Form */}
//         <div className="lg:col-span-7 w-full">
//           <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-wide mb-8">
//             We Love to Hear From You
//           </h3>

//           <form onSubmit={handleSubmit} className="space-y-5 w-full">
            
//             {/* Row 1: Split Name & Email Input Mesh */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
//               <div className="w-full">
//                 <input
//                   type="text"
//                   required
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full bg-white text-neutral-900 placeholder-neutral-400 font-sans text-sm sm:text-base px-5 py-4 rounded-lg outline-none border border-transparent focus:border-[#52B7C4] transition-all duration-300"
//                 />
//               </div>
//               <div className="w-full">
//                 <input
//                   type="email"
//                   required
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="w-full bg-white text-neutral-900 placeholder-neutral-400 font-sans text-sm sm:text-base px-5 py-4 rounded-lg outline-none border border-transparent focus:border-[#52B7C4] transition-all duration-300"
//                 />
//               </div>
//             </div>

//             {/* Row 2: Full-Width Phone Input Box */}
//             <div className="w-full">
//               <input
//                 type="tel"
//                 required
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 className="w-full bg-white text-neutral-900 placeholder-neutral-400 font-sans text-sm sm:text-base px-5 py-4 rounded-lg outline-none border border-transparent focus:border-[#52B7C4] transition-all duration-300"
//               />
//             </div>

//             {/* Row 3: Rich Text Message Textarea Area */}
//             <div className="w-full">
//               <textarea
//                 required
//                 rows={5}
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full bg-white text-neutral-900 placeholder-neutral-400 font-sans text-sm sm:text-base px-5 py-4 rounded-lg outline-none border border-transparent focus:border-[#52B7C4] transition-all duration-300 resize-none"
//               />
//             </div>

//             {/* Status Alert Notification Callouts */}
//             {formState.message && (
//               <motion.div
//                 initial={{ opacity: 0, y: -5 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className={`p-4 rounded-lg text-sm font-medium ${
//                   formState.status === "success" 
//                     ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" 
//                     : "bg-rose-500/10 border border-rose-500/20 text-rose-400"
//                 }`}
//               >
//                 {formState.message}
//               </motion.div>
//             )}

//             {/* Row 4: Submit Button Trigger */}
//             <div className="pt-2 w-full">
//               <button
//                 type="submit"
//                 disabled={formState.status === "submitting"}
//                 className="w-full sm:w-auto min-w-[160px] px-8 py-3.5 bg-[#52B7C4] hover:bg-[#43a1ad] disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-medium text-sm tracking-wider rounded-lg transition-all shadow-xl shadow-[#52B7C4]/10 transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center"
//               >
//                 {formState.status === "submitting" ? (
//                   <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                 ) : (
//                   "Submit"
//                 )}
//               </button>
//             </div>

//           </form>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../ui/background-beams";
import type { ContactFormData, FormState } from "../../types/contact.types";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: null,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: null });

    // Simulate real-world API latency pipeline
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState({ status: "success", message: "Thank you! Our design specialists will contact you shortly." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setFormState({ status: "error", message: "Something went wrong. Please try again." });
    }
  };

  return (
    <section className="relative w-full py-24 bg-[#0A0909] overflow-hidden" id="contact">
      
      {/* Corner Geometric Spiral Line-Art Accents - Low Z-Index */}
      <div className="absolute top-0 right-0 w-[240px] h-[240px] opacity-20 pointer-events-none z-10">
        <Image src="/lay.png" alt="Geometric line accent right" fill className="object-contain object-right-top" />
      </div>
      <div className="absolute bottom-0 left-0 w-[240px] h-[240px] opacity-20 pointer-events-none z-10 transform rotate-180">
        <Image src="/lay.png" alt="Geometric line accent left" fill className="object-contain object-right-top" />
      </div>

      {/* Main Grid Wrapper elevated to z-20 to maintain perfect interaction states */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Call-to-Action Context Block */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <div className="inline-block px-4 py-1.5 bg-[#52B7C4]/10 border border-[#52B7C4]/20 rounded-md text-[#52B7C4] text-xs font-semibold tracking-wider uppercase">
            Get in touch
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Let's discuss <br /> your project!
          </h2>
          
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-md">
            Contact us today and learn more about how our interior fit out & custom manufacturing services can bring your ideas to life.
          </p>
        </div>

        {/* Right Column: High-End Conversion Input Form */}
        <div className="lg:col-span-7 w-full">
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-wide mb-8">
            We Love to Hear From You
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            
            {/* Row 1: Split Name & Email Input Mesh */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <div className="w-full">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white text-neutral-900 placeholder-neutral-400 font-sans text-sm sm:text-base px-5 py-4 rounded-lg outline-none border border-transparent focus:border-[#52B7C4] transition-all duration-300"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white text-neutral-900 placeholder-neutral-400 font-sans text-sm sm:text-base px-5 py-4 rounded-lg outline-none border border-transparent focus:border-[#52B7C4] transition-all duration-300"
                />
              </div>
            </div>

            {/* Row 2: Full-Width Phone Input Box */}
            <div className="w-full">
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white text-neutral-900 placeholder-neutral-400 font-sans text-sm sm:text-base px-5 py-4 rounded-lg outline-none border border-transparent focus:border-[#52B7C4] transition-all duration-300"
              />
            </div>

            {/* Row 3: Rich Text Message Textarea Area */}
            <div className="w-full">
              <textarea
                required
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white text-neutral-900 placeholder-neutral-400 font-sans text-sm sm:text-base px-5 py-4 rounded-lg outline-none border border-transparent focus:border-[#52B7C4] transition-all duration-300 resize-none"
              />
            </div>

            {/* Status Alert Notification Callouts */}
            {formState.message && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-sm font-medium ${
                  formState.status === "success" 
                    ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" 
                    : "bg-rose-500/10 border border-rose-500/20 text-rose-400"
                }`}
              >
                {formState.message}
              </motion.div>
            )}

            {/* Row 4: Submit Button Trigger */}
            <div className="pt-2 w-full">
              <button
                type="submit"
                disabled={formState.status === "submitting"}
                className="w-full sm:w-auto min-w-[160px] px-8 py-3.5 bg-[#52B7C4] hover:bg-[#43a1ad] disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-medium text-sm tracking-wider rounded-lg transition-all shadow-xl shadow-[#52B7C4]/10 transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center"
              >
                {formState.status === "submitting" ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Submit"
                )}
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Aceternity Background Beams Engine - Runs behind text layout at z-0 */}
      <BackgroundBeams />
    </section>
  );
}