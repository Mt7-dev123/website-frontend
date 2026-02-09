"use client";

import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { BarChart3, IndianRupee, Clock, ShieldAlert } from "lucide-react"; // Added ShieldAlert for quality context

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const painPoints = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "VENDOR CHAOS",
    lines: [
      "5 agencies = 5 different calls,",
      "5 invoices, 5 excuses.",
      "You spend 15+ hours per week",
      "just coordinating.",
    ],
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />, // Updated icon for quality
    title: "QUALITY COMPROMISE", // Updated Heading
    lines: [
      "Paying premium for junior-level", // Updated content
      "work and generic templates.",
      "Endless rounds of revisions",
      "that never quite hit the mark.",
    ],
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "TIME CONSUMING",
    lines: [
      "Follow-ups eat your entire morning.",
      "Zero time left for actual strategy.",
      "Operational bottlenecks stalling",
      "your business growth.",
    ],
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="relative py-20 md:py-10 bg-transparent overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + i * 10}%` }}
            animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-14 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-block">
            <p
              className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}
            >
              THE FOUNDER&apos;S NIGHTMARE
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-orange-500 to-transparent"
            />
          </div>

          <h2
            className={`
              ${montserrat.className}
              text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-4 leading-[1.15]
              bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500]
              bg-clip-text text-transparent
              drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]
            `}
          >
            Managing Agencies Is Killing Your Productivity
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div
                className={`
                  ${montserrat.className}
                  relative h-full rounded-2xl p-8
                  bg-black/50 backdrop-blur-xl
                  border border-white/10
                  group-hover:border-orange-500/30
                  transition-all duration-300
                  flex flex-col
                `}
              >
                {/* Icon */}
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 w-fit">
                  <div className="text-orange-500">{point.icon}</div>
                </div>

                {/* Title */}
                <h3
                  className={`
                    text-lg font-bold mb-4
                    bg-gradient-to-r from-white to-gray-300
                    bg-clip-text text-transparent
                    tracking-wide
                  `}
                >
                  {point.title}
                </h3>

                {/* Description Lines */}
                <div className="space-y-2 flex-1">
                  {point.lines.map((line, i) => (
                    <p
                      key={i}
                      className="text-gray-400 text-sm leading-relaxed font-light"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
                  className="mt-6 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <p
            className={`
              ${montserrat.className}
              text-xl md:text-2xl font-bold
              bg-gradient-to-r from-white via-[#ffae42] to-white
              bg-clip-text text-transparent
              mb-3
            `}
          >
            There&apos;s a better way.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;