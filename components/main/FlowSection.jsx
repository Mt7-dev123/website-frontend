// "use client";

// import React, { memo } from "react";
// import { motion } from "framer-motion";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
//   display: "swap",
// });

// const STACK = Array.from({ length: 4 });
// const OUTCOMES = Array.from({ length: 2 });

// const FlowSection = () => {
//   const draw = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { duration: 1.5, ease: "easeInOut" },
//         opacity: { duration: 0.2 }
//       }
//     }
//   };

//   return (
//     <section className="relative py-10 md:py-20 bg-transparent overflow-hidden flex justify-center w-full">
//       <div className="relative z-30 w-full max-w-[1300px] px-6 md:px-12">
//         {/* Section Header */}
//         <div className="mb-10 max-w-2xl flex flex-col items-start">
//           <div className="inline-block">
//             <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
//               How it works
//             </p>
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: "circOut" }}
//               className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
//             />
//           </div>
//           <h2 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-[1.15] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]`}>
//             Placeholder headline for system flow
//           </h2>
//         </div>

//         {/* ================= FLOW GRID ================= */}
//         <div className="flex flex-col lg:grid lg:grid-cols-[0.8fr_2.5fr_0.8fr] gap-10 lg:gap-4 items-center">

//           {/* 1. LEFT STACK (Entering Flow) */}
//           <div className="relative flex flex-row lg:flex-col gap-3 w-full lg:w-auto justify-center">
//              <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-[#f97316] lg:hidden">
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
//                 >
//                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                     <path d="M0 0 L5 5 L10 0" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </motion.div>
//              </div>

//             {STACK.map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md px-4 py-3 md:px-5 md:py-4 flex-shrink-0"
//               >
//                 <div className="h-2 w-12 md:w-16 bg-white/10 rounded" />
//               </motion.div>
//             ))}
//           </div>

//           {/* 2. MIDDLE AREA (Concave Flow Hub) */}
//           <div className="relative w-full max-w-[600px] aspect-[16/11] md:aspect-[16/9] min-h-[280px] md:min-h-[300px] flex items-center justify-center scale-90 md:scale-100">

//             <svg
//               className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
//               viewBox="0 0 600 400"
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <defs>
//                 <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
//                   <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316" />
//                 </marker>
//               </defs>

//               <motion.path className="hidden lg:block" d="M -50,200 L 100,200" stroke="#f97316" strokeWidth="1.5" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={draw} />
//               <motion.path d="M 200,170 C 200,50 400,50 450,170" stroke="#f97316" strokeWidth="1.5" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={draw} markerEnd="url(#arrow)" />
//               <motion.path d="M 450,230 C 400,350 200,350 200,230" stroke="#f97316" strokeWidth="1.5" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={draw} markerEnd="url(#arrow)" />
//               <motion.path d="M 230,200 L 380,200" stroke="#f97316" strokeWidth="1.5" fill="none" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={draw} markerEnd="url(#arrow)" />

//               {/* UPDATED: Path extended to 750 for a longer horizontal arrow */}
//               <path className="hidden lg:block" d="M 520,200 L 750,200" stroke="#f97316" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" />

//               <circle r="2.5" fill="#fb923c">
//                 <animateMotion dur="3s" repeatCount="indefinite" path="M 200,170 C 200,50 400,50 450,170" />
//               </circle>
//               <circle r="2.5" fill="#fb923c">
//                 <animateMotion dur="3s" repeatCount="indefinite" path="M 450,230 C 400,350 200,350 200,230" />
//               </circle>
//             </svg>

//             <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="absolute left-[18%] md:left-[22%] w-20 h-20 md:w-28 md:h-28 border-2 border-orange-500 rounded-2xl bg-black flex items-center justify-center z-10 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
//               <span className="text-white font-bold text-sm md:text-xl">MT7</span>
//             </motion.div>

//             <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="absolute right-[5%] md:right-[10%] w-32 h-16 md:w-44 md:h-20 border border-white/20 rounded-xl bg-zinc-900/40 backdrop-blur-md flex items-center justify-center z-10">
//               <span className="text-white font-bold text-xs md:text-lg uppercase tracking-widest">Clients</span>
//             </motion.div>

//             <div className="absolute top-[14.5%] md:top-[15%] left-[55%] -translate-x-1/2 text-orange-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Service</div>
//             <div className="absolute bottom-[14.5%] md:bottom-[15%] left-[55%] -translate-x-1/2 text-orange-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Request</div>
//           </div>

//           {/* 3. FAR RIGHT: OUTCOMES (Exiting Flow) */}
//           <div className="relative flex flex-row lg:flex-col gap-4 w-full lg:w-auto justify-center">
//             <div className="absolute -top-8 left-1/2 w-px h-8 bg-[#f97316] lg:hidden">
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
//                 >
//                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                     <path d="M0 0 L5 5 L10 0" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </motion.div>
//             </div>

//             {OUTCOMES.map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-md p-4 md:p-6 shadow-lg flex-shrink-0"
//               >
//                 <div className="h-3 w-16 md:w-24 bg-white/10 rounded" />
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default memo(FlowSection);

//new flowsection code :

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import {
  FiSearch,
  FiLayers,
  FiShield,
  FiArrowRight,
  FiArrowDown,
} from "react-icons/fi";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const STEPS = [
  {
    id: "01",
    icon: <FiSearch className="text-orange-500" aria-hidden="true" />,
    title: "WE FIND THE RIGHT AGENCIES",
    description:
      "Tell us your needs and budget. We match you with pre-vetted agencies (Budget tier to Premium).",
    footer: "No more endless research. We've done the vetting.",
  },
  {
    id: "02",
    icon: <FiLayers className="text-orange-500" aria-hidden="true" />,
    title: "WE MANAGE EVERYTHING DAILY",
    description:
      "Your dedicated Mt7 manager coordinates all agencies, tracks deadlines, and checks quality.",
    footer: "You get weekly updates, not daily headaches.",
  },
  {
    id: "03",
    icon: <FiShield className="text-orange-500" aria-hidden="true" />,
    title: "WE OPTIMIZE RESULTS",
    description:
      "Agency underperforming? We replace them within 7-15 days at zero cost to you.",
    footer: "3 strikes and they're out. You're never stuck.",
  },
];

const scrollToHowItWorks = () => {
  const el = document.getElementById("plans");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const FlowSection = () => {
  return (
    <section
      id="flow"
      className="relative py-10 bg-transparent overflow-hidden flex flex-col items-center w-full antialiased"
    >
      <div className="relative z-30 w-full max-w-7xl px-6 md:px-14 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-black text-orange-500 mb-2`}>
              HOW IT WORKS
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-orange-500 to-transparent"
              aria-hidden="true"
            />
          </div>
          <h2 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4 leading-[1.15] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.3)]`}>
            Your Complete Operations Team In 3 Simple Steps
          </h2>
        </div>

        {/* 3-STEP PROCESS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group p-8 rounded-[2rem] border border-white/10 bg-zinc-900/60 backdrop-blur-xl flex flex-col shadow-2xl"
            >
              <div className="absolute top-6 right-8 text-4xl font-black text-white/5 italic group-hover:text-orange-500/10 transition-colors" aria-hidden="true">
                {step.id}
              </div>
              <div className="mb-6 p-4 w-fit rounded-2xl bg-orange-500/10 border border-orange-500/20 text-2xl">
                {step.icon}
              </div>
              <h3 className={`${montserrat.className} text-sm font-black text-white tracking-widest mb-4`}>
                {step.title}
              </h3>
              {/* ACCESSIBILITY FIX: Bumped to zinc-100 */}
              <p className={`${montserrat.className} text-zinc-100 text-sm leading-relaxed mb-6 font-medium`}>
                {step.description}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 italic text-xs text-orange-400 font-semibold">
                {step.footer}
              </div>
            </motion.div>
          ))}
        </div>

        {/* VISUAL DIAGRAM AREA */}
        <div className="relative w-full max-w-[1100px] mx-auto p-6 md:py-10 md:px-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center justify-center w-full gap-8 md:gap-0">
            {/* LEFT: YOU */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-zinc-600 bg-zinc-800 flex items-center justify-center text-white font-black shadow-lg text-sm md:text-base">
                  YOU
                </div>
                <span className="text-[9px] md:text-[10px] text-zinc-300 uppercase tracking-widest font-black">
                  Client
                </span>
              </div>

              {/* Desktop Arrow */}
              <div className="flex-1 h-[2px] bg-orange-500/20 hidden md:flex items-center justify-end relative min-w-[80px]" aria-hidden="true">
                <div className="absolute left-0 w-full h-full bg-gradient-to-r from-transparent to-orange-500" />
                <FiArrowRight className="text-orange-400 text-xl relative z-10 translate-x-1 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]" />
              </div>

              {/* Mobile Arrow Down */}
              <div className="md:hidden flex flex-col items-center py-2" aria-hidden="true">
                <FiArrowDown className="text-orange-500 text-2xl" />
              </div>
            </div>

            {/* CENTRE: MANAGER */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative p-5 md:p-6 px-8 md:px-14 rounded-2xl border-2 border-orange-500 bg-black shadow-[0_0_40px_rgba(249,115,22,0.3)] flex flex-col items-center gap-1 z-20 shrink-0 mx-auto"
            >
              <span className="text-orange-500 text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                Dedicated
              </span>
              <span className={`${montserrat.className} text-white font-black text-base md:text-xl tracking-tight text-center`}>
                MT7 MANAGER
              </span>
              <div className="md:absolute md:-bottom-10 mt-2 md:mt-0 text-[10px] md:text-xs text-zinc-300 font-medium italic whitespace-nowrap bg-black/60 px-3 py-1 rounded-full border border-white/5">
                One point of contact
              </div>
            </motion.div>

            {/* RIGHT: AGENCIES */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4">
              <div className="flex-1 h-[2px] bg-orange-500/20 hidden md:flex items-center justify-end relative min-w-[80px]" aria-hidden="true">
                <div className="absolute left-0 w-full h-full bg-gradient-to-r from-transparent to-orange-500" />
                <FiArrowRight className="text-orange-400 text-xl relative z-10 translate-x-1 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]" />
              </div>

              <div className="md:hidden flex flex-col items-center py-2" aria-hidden="true">
                <FiArrowDown className="text-orange-500 text-2xl" />
              </div>

              <div className="flex flex-col gap-3 w-full md:w-auto">
                {["Marketing Agency", "Finance Agency", "HR Agency"].map((agency, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 rounded-xl border border-white/20 bg-zinc-900 text-[11px] md:text-[12px] text-white font-black whitespace-nowrap shadow-xl border-l-4 border-l-orange-500 text-center md:text-left"
                  >
                    {agency}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-14 md:mt-16 flex justify-center w-full">
          <motion.button
            onClick={scrollToHowItWorks}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 69, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className={`${montserrat.className} px-8 md:px-12 py-4 md:py-5 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-black flex items-center gap-3 shadow-[0_10px_30px_rgba(249,115,22,0.3)] cursor-pointer transition-shadow`}
          >
            See Our Plans & Pricing
            <FiArrowRight strokeWidth={3} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default memo(FlowSection);