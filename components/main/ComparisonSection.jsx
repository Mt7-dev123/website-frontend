"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  Check,
  X,
  Zap,
  Shield,
  Globe,
  Cpu,
  Layers,
  Users,
  TrendingUp,
  Rocket,
  BarChart,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Quick Operations Comparison Data
const INFRASTRUCTURE_COMPARISON = [
  {
    feature: "Vendor Coordination",
    desc: "How multiple agencies are managed day-to-day.",
    mt7: "Single Point of Contact",
    legacy: "Founder Manages Everything",
    icon: <Users size={20} />,
  },
  {
    feature: "Accountability System",
    desc: "How underperforming agencies are handled.",
    mt7: "3-Strike Replacement Guarantee",
    legacy: "Blame Shifting & Excuses",
    icon: <Shield size={20} />,
  },
  {
    feature: "Agency Switching Cost",
    desc: "Time and money required to replace vendors.",
    mt7: "₹0 Cost, 7–15 Days",
    legacy: "₹50K+ & 2–3 Months",
    icon: <TrendingUp size={20} />,
  },
  {
    feature: "Founder Time Spent",
    desc: "Weekly hours spent coordinating vendors.",
    mt7: "1–2 Hours / Week",
    legacy: "10–15+ Hours / Week",
    icon: <Zap size={20} />,
  },
  {
    feature: "Operational Structure",
    desc: "How marketing, finance & HR are managed together.",
    mt7: "Centralized Ops Management",
    legacy: "Disconnected Agencies",
    icon: <Layers size={20} />,
  },
];

const scrollToHowItWorks = () => {
  const el = document.getElementById("flow");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const ComparisonSection = () => {
  return (
    <section className="relative py-10 bg-transparent overflow-hidden flex justify-center w-full">
      <div id="comparison" className="absolute top-0 left-0 h-px w-px" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden" />

      <div className="relative z-30 w-full max-w-[1300px] px-6 md:px-14">
        <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
          <div className="inline-block">
            <p
              className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}
            >
              Comparison
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2
            className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4 leading-[1.15] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]`}
          >
            The MT7 Difference
          </h2>

          <p
            className={`${montserrat.className} text-zinc-400 text-sm md:text-base leading-relaxed`}
          >
            Managing agencies directly drains founder time and kills focus. MT7
            replaces chaos with a single, accountable operations layer.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[1.2rem] border border-white/5 bg-zinc-900/40 backdrop-blur-md mb-20">
          <div className="grid grid-cols-12 border-b border-white/5 bg-white/[0.02]">
            <div className="col-span-6 md:col-span-5 p-6 md:p-8">
              <span className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase">
                Area
              </span>
            </div>
            <div className="col-span-3 md:col-span-3 p-6 md:p-8 border-l border-white/5 bg-orange-500/5">
              <span className="text-xs font-bold tracking-[0.3em] text-orange-500 uppercase flex items-center gap-2">
                MT7 Managed <Zap size={14} className="fill-orange-500" />
              </span>
            </div>
            <div className="col-span-3 md:col-span-4 p-6 md:p-8 border-l border-white/5">
              <span className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase">
                Direct Agencies
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            {INFRASTRUCTURE_COMPARISON.map((row, idx) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-12 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="col-span-6 md:col-span-5 p-6 md:p-8 flex gap-4 md:gap-6 items-start">
                  <div className="hidden md:flex w-10 h-10 rounded-xl bg-white/5 border border-white/10 items-center justify-center text-zinc-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all">
                    {row.icon}
                  </div>
                  <div>
                    <h4
                      className={`${montserrat.className} text-white font-bold text-sm md:text-base mb-1`}
                    >
                      {row.feature}
                    </h4>
                    <p
                      className={`${montserrat.className} text-zinc-500 text-[11px] md:text-xs leading-relaxed hidden md:block`}
                    >
                      {row.desc}
                    </p>
                  </div>
                </div>

                <div className="col-span-3 md:col-span-3 p-6 md:p-8 border-l border-white/5 bg-orange-500/[0.02] flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Check size={16} className="text-orange-500" />
                    <span
                      className={`${montserrat.className} text-white font-semibold text-[11px] md:text-sm`}
                    >
                      {row.mt7}
                    </span>
                  </div>
                </div>

                <div className="col-span-3 md:col-span-4 p-6 md:p-8 border-l border-white/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1 opacity-40">
                    <X size={16} className="text-zinc-500" />
                    <span
                      className={`${montserrat.className} text-zinc-400 font-medium text-[11px] md:text-sm`}
                    >
                      {row.legacy}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-10">
            <h3
              className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-4`}
            >
              Why Founders Choose MT7
            </h3>
            <p
              className={`${montserrat.className} text-zinc-400 text-sm md:text-base max-w-2xl mx-auto`}
            >
              Professional operations without hiring in-house or managing chaos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Users,
                title: "Single POC",
                description: "One manager instead of 5 agencies",
              },
              {
                icon: Shield,
                title: "Guaranteed Quality",
                description: "3-strike system with free replacement",
              },
              {
                icon: TrendingUp,
                title: "Founder Time Saved",
                description: "10–15 hours saved every week",
              },
              {
                icon: Layers,
                title: "All Ops Covered",
                description: "Marketing, Finance & HR managed together",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-5 rounded-[1rem] bg-zinc-900/30 border border-white/5 hover:border-orange-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                  <item.icon size={20} />
                </div>
                <h4
                  className={`${montserrat.className} text-white font-bold text-sm mb-1`}
                >
                  {item.title}
                </h4>
                <p
                  className={`${montserrat.className} text-zinc-400 text-xs leading-relaxed`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900/20 p-6 md:p-10 rounded-[1.5rem] border border-white/5 mb-20">
          <div className="max-w-2xl mx-auto text-center">
            <h3
              className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-4`}
            >
              Ready to Stop Managing Agencies?
            </h3>

            <p
              className={`${montserrat.className} text-zinc-400 text-sm md:text-base mb-8`}
            >
              Get professional operations without long contracts or vendor
              drama.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/lead">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(255, 69, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`${montserrat.className} px-8 py-4 bg-[#ff4500] text-white font-bold text-sm rounded-full transition-all shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <Rocket className="w-5 h-5" />
                  Book Free Consultation
                </motion.button>
              </Link>

              <motion.button
                onClick={scrollToHowItWorks}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${montserrat.className} px-8 py-4 bg-transparent border border-white/10 text-white font-bold text-sm rounded-full hover:border-orange-500/50 transition-all flex items-center justify-center gap-2 cursor-pointer`}
              >
                <BarChart className="w-5 h-5" />
                See How It Works
              </motion.button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8 border-t border-white/5">
              <div className="text-center">
                <div
                  className={`${montserrat.className} text-2xl font-bold text-white mb-1`}
                >
                  10–15h
                </div>
                <div
                  className={`${montserrat.className} text-xs text-zinc-400`}
                >
                  Saved Weekly
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`${montserrat.className} text-2xl font-bold text-white mb-1`}
                >
                  ₹0
                </div>
                <div
                  className={`${montserrat.className} text-xs text-zinc-400`}
                >
                  Switching Cost
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`${montserrat.className} text-2xl font-bold text-white mb-1`}
                >
                  7–10 Days
                </div>
                <div
                  className={`${montserrat.className} text-xs text-zinc-400`}
                >
                  To Go Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
