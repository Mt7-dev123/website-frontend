"use client";

import React, { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { CheckCircle2, Star, Rocket, ArrowRight } from "lucide-react";

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
    features: [
      "Daily task coordination",
      "Quality oversight",
      "Deadline tracking",
      "Weekly reports",
    ],
    perfectFor: "Companies with existing vendors who need professional management",
    buttonText: "Get Custom Quote",
    badge: null,
  },
  {
    id: 2,
    title: "SOURCING",
    subtitle: "We Find, You Manage",
    description: "Need agencies but want to manage them yourself?",
    features: [
      "Pre-vetted agency matching",
      "Budget-tier options",
      "Contract negotiation",
      "Then you take over",
    ],
    perfectFor: "DIY founders who want quality partners without the search",
    buttonText: "Get Custom Quote",
    badge: null,
  },
  {
    id: 3,
    title: "FULL STACK",
    subtitle: "We Find + Manage Everything",
    description: "Complete hands-off operations. We handle it all.",
    features: [
      "Agency matching & vetting",
      "Daily coordination & QA",
      "Performance tracking",
      "Free agency switching",
      "Dedicated manager (your POC)",
    ],
    additionalInfo: "Choose: Marketing, Finance, HR (or all 3 bundled)",
    perfectFor: "Founders who want professional ops without the overhead",
    buttonText: "See Full Stack Details",
    badge: "MOST POPULAR",
    highlight: true,
  },
  {
    id: 4,
    title: "MINI (BETA)",
    subtitle: "For Bootstrap Startups",
    description: "Budget-friendly bundled ops for early-stage companies.",
    features: [
      "2+ departments minimum",
      "Budget-tier agencies",
      "Full management included",
      "12-month commitment",
    ],
    perfectFor: "Pre-seed to Seed startups with tight budgets",
    buttonText: "Apply for Beta",
    badge: "LIMITED SLOTS",
    slots: "Only 10 slots available",
  },
];

const Plans = forwardRef(function Plans(_, ref) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      ref={ref}
      id="plans"
      className="relative py-10 bg-transparent overflow-hidden flex justify-center w-full"
    >
      <div className="relative z-30 w-full max-w-[1300px] px-6 md:px-14">
        {/* HEADER */}
        <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
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
              transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2
            className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4 leading-[1.15] bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]`}
          >
            From Coordination to Complete Management
          </h2>

          <p
            className={`${montserrat.className} text-zinc-400 text-sm md:text-base leading-relaxed`}
          >
            Whether you have agencies or need us to find them, we have a plan
            that fits.
          </p>
        </div>

        {/* PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              onMouseEnter={() => setHoveredId(plan.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: plan.id * 0.1 }}
              className={`group relative p-6 md:p-8 rounded-[1.2rem] 
                bg-zinc-900/40 backdrop-blur-md
                border overflow-hidden
                ${
                  plan.highlight
                    ? "border-orange-500/40 bg-gradient-to-br from-orange-900/10 to-zinc-900/40"
                    : "border-white/5"
                }
                ${
                  hoveredId === plan.id && !plan.highlight
                    ? "border-orange-500/20 bg-zinc-800/40"
                    : ""
                }
                transition-all duration-300
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold ${
                      plan.highlight
                        ? "bg-orange-500 text-white"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {plan.highlight ? (
                      <Star size={12} fill="currentColor" />
                    ) : (
                      <Rocket size={12} />
                    )}
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="relative z-10">
                {/* Title */}
                <h3
                  className={`${montserrat.className} text-lg md:text-xl font-bold text-white mb-1`}
                >
                  {plan.title}
                </h3>
                <p
                  className={`${montserrat.className} text-orange-400 text-sm font-semibold mb-3`}
                >
                  {plan.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`${montserrat.className} text-zinc-300 text-sm leading-relaxed mb-5`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2
                        className="text-orange-500 mt-0.5 flex-shrink-0"
                        size={16}
                      />
                      <span
                        className={`${montserrat.className} text-zinc-300 text-xs`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                {plan.additionalInfo && (
                  <p
                    className={`${montserrat.className} text-orange-400/80 text-xs italic mb-4 pb-4 border-b border-white/10`}
                  >
                    {plan.additionalInfo}
                  </p>
                )}

                {/* Perfect For */}
                <div className="mb-5 pt-4 border-t border-white/10">
                  <p
                    className={`${montserrat.className} text-zinc-500 text-[10px] uppercase tracking-wider mb-1`}
                  >
                    Perfect for:
                  </p>
                  <p
                    className={`${montserrat.className} text-zinc-300 text-xs leading-relaxed`}
                  >
                    {plan.perfectFor}
                  </p>
                </div>

                {/* Slots Badge (for Mini plan) */}
                {plan.slots && (
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-red-900/30 border border-red-500/30">
                      <span
                        className={`${montserrat.className} text-red-400 text-[10px] font-semibold`}
                      >
                        {plan.slots}
                      </span>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${montserrat.className} w-full px-5 py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black"
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight size={14} />
                </motion.button>
              </div>

              {/* Hover Effect Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p
            className={`${montserrat.className} text-zinc-400 text-sm mb-3`}
          >
            Not sure which plan?{" "}
            <button className="text-orange-500 hover:text-orange-400 font-semibold underline underline-offset-2 transition-colors">
              Book a consultation →
            </button>
          </p>
          <p
            className={`${montserrat.className} text-zinc-500 text-xs`}
          >
            We&apos;ll recommend the best fit for your needs.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Plans;