"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Users,
  Zap,
  Briefcase,
  Star,
  Rocket,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plans = [
  {
    id: 1,
    title: "COORDINATOR",
    subtitle: "Manage Your Existing Agencies",
    description: "You already have agencies? We'll manage them for you.",
    icon: <Users className="text-blue-400" size={24} />,
    features: [
      "Daily task coordination",
      "Quality oversight",
      "Deadline tracking",
      "Weekly reports",
    ],
    perfectFor: "Companies with existing vendors who need professional management",
    cta: "Get Custom Quote",
    themeColor: "blue",
  },
  {
    id: 2,
    title: "SOURCING",
    subtitle: "We Find, You Manage",
    description: "Need agencies but want to manage them yourself?",
    icon: <Zap className="text-yellow-400" size={24} />,
    features: [
      "Pre-vetted agency matching",
      "Budget-tier options",
      "Contract negotiation",
      "Then you take over",
    ],
    perfectFor: "DIY founders who want quality partners without the search",
    cta: "Get Custom Quote",
    themeColor: "yellow",
  },
  {
    id: 3,
    title: "FULL STACK",
    subtitle: "We Find + Manage Everything",
    description: "Complete hands-off operations. We handle it all.",
    icon: <ShieldCheck className="text-orange-500" size={24} />,
    features: [
      "Agency matching & vetting",
      "Daily coordination & QA",
      "Performance tracking",
      "Free agency switching",
      "Dedicated manager (your POC)",
    ],
    extra: "Choose: Marketing, Finance, HR (or all 3 bundled)",
    perfectFor: "Founders who want professional ops without the overhead",
    badge: "MOST POPULAR",
    highlight: true,
    cta: "See Full Stack Details",
    themeColor: "orange",
  },
  {
    id: 4,
    title: "MINI (BETA)",
    subtitle: "For Bootstrap Startups",
    description: "Budget-friendly bundled ops for early-stage companies.",
    icon: <Briefcase className="text-purple-400" size={24} />,
    features: [
      "2+ departments minimum",
      "Budget-tier agencies",
      "Full management included",
      "12-month commitment",
    ],
    perfectFor: "Pre-seed to Seed startups with tight budgets",
    badge: "LIMITED SLOTS",
    slots: "Only 10 slots available",
    cta: "Apply for Beta",
    themeColor: "purple",
  },
];

/* ---------------- COMPONENT ---------------- */

const PlansAndPricing = () => {
  return (
    // Updated padding to py-10 as requested
    <section id="plans" className="relative py-10 bg-transparent overflow-hidden antialiased">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
        {/* ================= HEADER ================= */}
        {/* Balanced spacing at mb-10 */}
        <div className="max-w-3xl mb-10">
          <div className="inline-block">
            <p className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-black text-orange-500 mb-2`}>
              Choose Your Plan
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2 className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-4 leading-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent`}>
            From Coordination to Complete Management
          </h2>

          <p className="text-zinc-200 mt-4 font-medium opacity-90">
            Whether you have agencies or need us to find them, we have a plan that fits.
          </p>
        </div>

        {/* ================= PLANS GRID ================= */}
        {/* Balanced bottom margin at mb-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2rem] border backdrop-blur-xl flex flex-col transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-zinc-900/80 border-orange-500 shadow-2xl shadow-orange-900/30 scale-105 z-20"
                    : "bg-zinc-950/60 border-white/10 hover:border-white/20"
                }
              `}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-black text-black flex items-center gap-1.5 whitespace-nowrap shadow-xl bg-orange-500`}>
                  {plan.highlight ? <Star size={12} fill="black" /> : <Rocket size={12} fill="black" />}
                  {plan.badge}
                </div>
              )}

              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit shadow-inner">
                {plan.icon}
              </div>

              <h3 className="text-white text-xl font-bold tracking-tight mb-1">{plan.title}</h3>
              <p className="text-orange-500 text-xs font-black tracking-wide mb-4 uppercase">
                {plan.subtitle}
              </p>

              <p className="text-zinc-100 text-sm mb-6 leading-relaxed font-medium">
                {plan.description}
              </p>

              <ul className="space-y-3 text-xs text-zinc-200 mb-8 flex-1">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              {plan.extra && (
                <p className="text-orange-400 text-xs italic mb-6 font-medium bg-orange-500/5 p-2 rounded-lg border border-orange-500/10">
                  {plan.extra}
                </p>
              )}

              <div className="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <p className="text-[11px] text-zinc-100 leading-relaxed font-medium">
                  <span className="text-white font-black uppercase text-[10px] tracking-widest block mb-1">Perfect for:</span>
                  {plan.perfectFor}
                </p>
              </div>

              {plan.slots && (
                <p className="text-red-500 text-[11px] font-black uppercase tracking-tighter mb-4 text-center">
                  {plan.slots}
                </p>
              )}

              <Link href="/lead" passHref>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-2xl text-xs font-black tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer
                    ${
                      plan.highlight
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-600/40 hover:bg-orange-600"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                    } 
                  `}
                >
                  {plan.cta}
                  <ArrowRight size={16} strokeWidth={3} />
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PlansAndPricing);