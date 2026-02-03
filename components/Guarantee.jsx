"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { FiAlertCircle, FiShield, FiRefreshCw, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const STRIKES = [
  {
    step: "Strike 1",
    title: "Written Warning",
    desc: "Agency gets formal notice. 48 hours to correct the issue.",
    icon: <FiAlertCircle className="text-orange-500" />,
  },
  {
    step: "Strike 2",
    title: "Management Escalation",
    desc: "Internal audit by Mt7. Backup agency is prepared for takeover.",
    icon: <FiShield className="text-orange-400" />,
  },
  {
    step: "Strike 3",
    title: "Immediate Replacement",
    desc: "Agency removed. 7-15 day transition to new partner at ₹0 cost.",
    icon: <FiRefreshCw className="text-red-500" />,
  },
];

const Guarantee = () => {
  return (
    <section className="relative py-24 overflow-hidden flex flex-col items-center w-full bg-black">
      {/* Background Atmosphere - Flame Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Container aligned with max-w-7xl and px-6 md:px-14 like Pricing */}
      <div className="relative z-30 w-full max-w-7xl px-6 md:px-14 mx-auto">
        
        {/* HEADER SECTION - Left Aligned to match Pricing */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}>
              Performance Guarantee
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-4 leading-tight
            bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
            bg-clip-text text-transparent
            drop-shadow-[0_4px_12px_rgba(255,69,0,0.25)]`}
          >
            You’re Never Stuck With <br />
            <span className="text-orange-500 italic">Bad Vendors</span>
          </h2>
          <p className="text-zinc-400 mt-4">
            Our unique 3-Strike Replacement System ensures your business never loses momentum.
          </p>
        </div>

        {/* STRIKES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {STRIKES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-[2.5rem] border border-white/5 bg-zinc-900/20 backdrop-blur-xl group hover:border-orange-500/30 transition-all"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <span className="text-orange-500 text-[10px] font-black uppercase tracking-widest">{item.step}</span>
              <h3 className={`${montserrat.className} text-xl font-bold text-white mt-2 mb-4`}>{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* COMPARISON BOX */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-10 md:p-16 rounded-[3rem] border border-orange-500/20 bg-gradient-to-br from-orange-600/5 to-red-600/5 backdrop-blur-sm text-center relative overflow-hidden"
        >
          <FiCheckCircle className="absolute -top-10 -right-10 text-[200px] text-orange-500/5 rotate-12" />

          <h4 className={`${montserrat.className} text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed`}>
            Unlike agencies that lock you into 12-month contracts, <br />
            <span className="text-orange-500">we work month-to-month.</span>
          </h4>
          
          <div className="space-y-4 mb-10">
            <p className="text-zinc-300 text-lg">
              If we're not adding value, cancel with <span className="font-bold text-white underline decoration-orange-500">14 days notice.</span>
            </p>
            <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">
              No Penalties • No Breakup Fees
            </p>
          </div>

          <p className="text-zinc-400 italic text-sm">
            "We only succeed when you succeed. That's why we guarantee quality."
          </p>
        </motion.div>

        {/* CTA BUTTON */}
        <div className="mt-20 flex justify-center w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold flex items-center gap-3 shadow-[0_10px_30px_rgba(249,115,22,0.3)] transition-shadow hover:shadow-orange-500/40"
          >
            See Plans & Pricing
            <FiArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;