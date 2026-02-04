"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { 
  Rocket, 
  Users, 
  Layers, 
  Clock, 
  TrendingUp, 
  XCircle, 
  ArrowRight,
  Check
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const idealProfiles = [
  {
    icon: <Rocket className="text-orange-500" size={28} />,
    title: "Funded Startups",
    subtitle: "Seed to Series B",
    desc: "You have capital (₹50L – ₹100Cr) but need operational speed to hit your next milestone.",
  },
  {
    icon: <Users className="text-blue-400" size={28} />,
    title: "Scaling SMEs",
    subtitle: "10–100 Employees",
    desc: "You are too big to DIY everything, but too small to hire full-time VP-level ops heads.",
  },
  {
    icon: <Layers className="text-purple-400" size={28} />,
    title: "The Multi-Vendor Founder",
    subtitle: "Managing 3+ Agencies",
    desc: "You are drowning in coordination with Marketing, Finance, and HR vendors simultaneously.",
  },
];

const painPoints = [
  {
    icon: <Clock className="text-red-400" size={24} />,
    text: "Teams wasting 10+ hrs/week coordinating contractors.",
  },
  {
    icon: <TrendingUp className="text-green-400" size={24} />,
    text: "Companies preparing for a massive scale-up phase.",
  },
];

export default function WhoThisIsFor() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">

        {/* ================= HEADER (ORIGINAL POSITION RESTORED) ================= */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          
          {/* LABEL + UNDERLINE (Left Aligned) */}
          <div className="inline-flex flex-col items-start">
            <span
              className={`${montserrat.className}
                uppercase tracking-[0.28em] text-xs font-bold text-orange-500`}
            >
              Is MT7 Right For You?
            </span>

            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut", delay: 0.25 }}
              className="origin-left mt-2 h-[2px] w-full
                bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          {/* HEADLINE (Left Aligned) */}
          <h2
            className={`${montserrat.className}
              text-3xl md:text-4xl font-bold mt-4
              bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
              bg-clip-text text-transparent
              leading-tight
            `}
          >
            Built for Growing Startups & SMEs
          </h2>
        </div>

        {/* ================= NEW MAIN CONTENT: PERSONA GRID ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {idealProfiles.map((profile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[1.5rem] bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.5rem]" />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/5 group-hover:border-orange-500/20 transition-colors">
                  {profile.icon}
                </div>
                
                <h3 className={`${montserrat.className} text-xl font-bold text-white mb-1`}>
                  {profile.title}
                </h3>
                <p className={`${montserrat.className} text-orange-500 text-xs font-bold uppercase tracking-wider mb-4`}>
                  {profile.subtitle}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {profile.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= SECONDARY FIT BARS ================= */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
            >
              <div className="shrink-0">{point.icon}</div>
              <p className="text-zinc-300 text-sm font-medium">{point.text}</p>
              <div className="ml-auto">
                <Check size={16} className="text-orange-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= "NOT RIGHT FOR" SECTION ================= */}
        <div className="relative max-w-5xl mx-auto mb-16">
           {/* Red glow behind this specific section */}
          <div className="absolute inset-0 bg-red-500/5 blur-3xl -z-10 rounded-full" />
          
          <div className="bg-zinc-950/80 border border-red-500/10 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className={`${montserrat.className} text-white font-bold text-xl mb-2`}>
                Who is this <span className="text-red-500">NOT</span> for?
              </h4>
              <p className="text-zinc-500 text-sm max-w-xs">
                We believe in transparency. We are likely not a good fit if you are:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {[
                "Enterprise (500+ Staff)",
                "Zero Budget Solopreneur",
                "Need 100% In-House Control",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-3 rounded-full bg-red-500/5 border border-red-500/10 text-red-400/80 text-xs font-medium">
                  <XCircle size={14} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${montserrat.className}
              inline-flex items-center gap-3
              px-10 py-4 rounded-full
              bg-orange-500 text-white
              font-bold text-lg
              shadow-xl shadow-orange-900/30
              hover:bg-orange-600 transition-all
            `}
          >
            Let’s Talk
            <ArrowRight size={18} />
          </motion.button>
        </div>

      </div>
    </section>
  );
}