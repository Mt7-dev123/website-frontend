"use client";

import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Quote, CheckCircle2 } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const founderQuotes = [
  {
    name: "Rahul M.",
    role: "SaaS Founder, Bangalore",
    quote:
      "I'm managing 4 different agencies right now. Every Monday is 5 back-to-back calls. I don't have time to actually run my business.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya S.",
    role: "E-commerce Founder, Mumbai",
    quote:
      "Our marketing agency kept missing deadlines. When we tried to switch, they held our content hostage. Took 3 months to transition.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit K.",
    role: "Fintech Founder, Delhi",
    quote:
      "We're paying ₹3.5L/month across finance, marketing, and HR. No one talks to each other. It's complete chaos.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const ClientsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    // Explicitly set bg-transparent here
    <section id="clients" className="relative py-24 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={reduceMotion ? { opacity: 0.35 } : { opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-orange-900/10 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
              WHAT FOUNDERS SAY
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2 className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6 leading-[1.15] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]`}>
            The Problem Every Startup Faces
          </h2>
          <p className={`${montserrat.className} text-gray-400 text-lg leading-relaxed`}>
            We spoke to dozens of founders about their operation struggles. <br className="hidden md:block" />
            The feedback was always the same.
          </p>
        </div>

        {/* Founder Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {founderQuotes.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-sm flex flex-col h-full"
            >
              <Quote size={40} className="text-orange-500/20 mb-6" />
              <p className={`${montserrat.className} text-gray-300 italic mb-8 flex-1 leading-relaxed text-base`}>
                “{t.quote}”
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={t.img}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full grayscale"
                />
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-orange-500/80 text-[10px] uppercase font-bold tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Area */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="p-10 rounded-[3rem] border border-orange-500/20 bg-gradient-to-br from-orange-600/5 to-transparent text-center flex flex-col items-center gap-6"
        >
          <p className={`${montserrat.className} text-zinc-300 text-xl font-medium`}>
            These are the founders <span className="text-orange-500 font-bold">Mt7</span> was built for.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-white text-lg font-bold">Ready to end the chaos?</h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-lg shadow-orange-900/20 flex items-center gap-2 group"
            >
              Book Free Consultation
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Re-entry of Founder Beta Offer */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-orange-500" /> Founder pricing (30% off)
             </div>
             <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-orange-500" /> Priority Onboarding
             </div>
             <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-orange-500" /> Lifetime Benefits
             </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ClientsSection);