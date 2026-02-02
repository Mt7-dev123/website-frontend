"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import {
  Check,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock,
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
    icon: <Users className="text-blue-400" size={22} />,
    features: [
      "Daily task coordination",
      "Quality oversight",
      "Deadline tracking",
      "Weekly reports",
    ],
    perfectFor:
      "Companies with existing vendors who need professional management",
    cta: "Get Custom Quote",
  },
  {
    id: 2,
    title: "SOURCING",
    subtitle: "We Find, You Manage",
    description: "Need agencies but want to manage them yourself?",
    icon: <Zap className="text-yellow-400" size={22} />,
    features: [
      "Pre-vetted agency matching",
      "Budget-tier options",
      "Contract negotiation",
      "Then you take over",
    ],
    perfectFor: "DIY founders who want quality partners without the search",
    cta: "Get Custom Quote",
  },
  {
    id: 3,
    title: "FULL STACK",
    subtitle: "We Find + Manage Everything",
    description: "Complete hands-off operations. We handle it all.",
    icon: <ShieldCheck className="text-orange-500" size={22} />,
    features: [
      "Agency matching & vetting",
      "Daily coordination & QA",
      "Performance tracking",
      "Free agency switching",
      "Dedicated manager (your POC)",
    ],
    extra: "Choose: Marketing, Finance, HR (or all 3 bundled)",
    perfectFor:
      "Founders who want professional ops without the overhead",
    badge: "MOST POPULAR",
    highlight: true,
    cta: "See Full Stack Details",
  },
  {
    id: 4,
    title: "MINI (BETA)",
    subtitle: "For Bootstrap Startups",
    description: "Budget-friendly bundled ops for early-stage companies.",
    icon: <Briefcase className="text-purple-400" size={22} />,
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
  },
];

const steps = [
  { num: "01", title: "Book Consultation", desc: "Tell us what you need." },
  { num: "02", title: "We Get Quotes", desc: "Budget-matched to requirements." },
  { num: "03", title: "Transparent Margin", desc: "You see our markup clearly." },
  { num: "04", title: "You Approve", desc: "7–10 days to go live." },
];

const included = [
  "Dedicated POC",
  "Daily oversight",
  "Weekly updates",
  "Monthly reviews",
  "Free agency switching",
  "24-hour response time",
];

const faqs = [
  {
    q: "Why custom pricing?",
    a: "Every business has different needs. Pricing is based on actual scope: number of agencies, complexity, and hours required.",
  },
  {
    q: "Can pricing change later?",
    a: "Not without approval. Any scope change requires a new quote. No surprises.",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function PlansAndPricing() {
  return (
    <section className="relative py-10 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mb-20">
          {/* Section label + underline */}
          <div className="inline-block">
            <p
              className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}
            >
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

          {/* Gradient headline */}
          <h2
            className={`${montserrat.className} text-3xl md:text-4xl font-bold mt-4 leading-tight
            bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
            bg-clip-text text-transparent
            drop-shadow-[0_4px_12px_rgba(255,69,0,0.25)]`}
          >
            From Coordination to Complete Management
          </h2>

          <p className="text-zinc-400 mt-4">
            Whether you have agencies or need us to find them, we have a plan that fits.
          </p>
        </div>

        {/* ================= PLANS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 rounded-2xl border backdrop-blur-md flex flex-col
                ${plan.highlight
                  ? "bg-zinc-900/90 border-orange-500/50 shadow-xl shadow-orange-900/20"
                  : "bg-zinc-900/50 border-white/10"}
              `}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold bg-orange-500 text-black flex items-center gap-1">
                  {plan.highlight ? <Star size={12} /> : <Rocket size={12} />}
                  {plan.badge}
                </div>
              )}

              <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit">
                {plan.icon}
              </div>

              <h3 className="text-white font-bold">{plan.title}</h3>
              <p className="text-orange-400 text-xs font-semibold mb-3">
                {plan.subtitle}
              </p>

              <p className="text-zinc-300 text-sm mb-5">{plan.description}</p>

              <ul className="space-y-2 text-xs text-zinc-300 mb-5">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <CheckCircle2 size={14} className="text-orange-500 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {plan.extra && (
                <p className="text-orange-400/80 text-xs italic mb-4">
                  {plan.extra}
                </p>
              )}

              <p className="text-[11px] text-zinc-400 mb-5">
                <span className="text-white font-semibold">Perfect for:</span>{" "}
                {plan.perfectFor}
              </p>

              {plan.slots && (
                <p className="text-red-400 text-[10px] font-semibold mb-3">
                  {plan.slots}
                </p>
              )}

              <button
                className={`mt-auto w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2
                  ${plan.highlight
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black"}
                `}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ================= HOW PRICING WORKS ================= */}
        <div className="mb-24">
          <h3 className="text-white text-2xl font-bold mb-10 text-center">
            How Pricing Works
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-4xl font-black text-white/10 mb-3">
                  {s.num}
                </div>
                <h4 className="text-white font-bold mb-1">{s.title}</h4>
                <p className="text-zinc-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INCLUDED + TERMS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <Zap className="text-orange-500" size={18} />
              All Plans Include
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {included.map((item, i) => (
                <div key={i} className="flex gap-2 text-zinc-300 text-sm">
                  <Check className="text-green-500 mt-0.5" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/10">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <Clock className="text-orange-500" size={18} />
              Payment Terms
            </h3>
            <ul className="space-y-2 text-zinc-400 text-sm list-disc list-inside">
              <li>Prepaid monthly</li>
              <li>3-month minimum</li>
              <li>14-day cancellation</li>
              <li>Late fee: ₹1K/day after 5th</li>
            </ul>
          </div>
        </div>

        {/* ================= FAQ ================= */}
        <div className="max-w-3xl mx-auto mb-24">
          <h3 className="text-white text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10"
              >
                <h4 className="text-white font-bold flex items-center gap-2 mb-2">
                  <HelpCircle size={16} className="text-orange-500" />
                  {f.q}
                </h4>
                <p className="text-zinc-400 text-sm pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-orange-500 text-white font-bold text-lg rounded-full shadow-xl hover:bg-orange-600"
          >
            Get Your Custom Quote →
          </motion.button>
        </div>

      </div>
    </section>
  );
}
