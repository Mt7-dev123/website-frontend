"use client";

import React, { useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Clock,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const AboutSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY],
  );

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="relative py-10 bg-transparent overflow-hidden flex justify-center w-full"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Container aligned with Plans component (max-w-[1300px]) */}
      <div className="relative z-30 w-full max-w-[1300px] px-6 md:px-14">
        {/* --- HEADER SECTION ALIGNED WITH PLANS --- */}
        <div className="flex flex-col items-start md:-mt-5 max-w-3xl mb-16">
          <div className="inline-block">
            <p
              className={`${montserrat.className} uppercase tracking-[0.3em] text-xs font-bold text-orange-500 mb-2`}
            >
              About MT7
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
            The 7 Layers Multi Tasking Company
          </h2>

          <p
            className={`${montserrat.className} text-zinc-400 text-sm md:text-base leading-relaxed`}
          >
            We exist because founders shouldn&apos;t waste time managing
            agencies.
          </p>
        </div>

        {/* --- REST OF THE CONTENT (Narrative Grid) --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* THE PROBLEM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-[1.2rem] border border-white/5 bg-zinc-900/40 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-red-500/10 rounded-full text-red-500">
                <Clock size={20} />
              </div>
              <h3
                className={`${montserrat.className} text-xl font-bold text-white`}
              >
                The Problem We Saw
              </h3>
            </div>
            <p
              className={`${montserrat.className} text-zinc-400 text-sm leading-relaxed mb-5`}
            >
              Every startup we talked to had the same pain. Founders were
              spending more time managing vendors than building their business.
            </p>
            <ul className="space-y-3">
              {[
                "Managing 5 different agencies simultaneously",
                "15+ hours per week lost on coordination",
                "No accountability when things go wrong",
                "Expensive and painful to switch vendors",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-zinc-300 text-xs md:text-sm"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* THE SOLUTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-[1.2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.05] to-transparent backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full" />

            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-orange-500/10 rounded-full text-orange-500">
                <ShieldCheck size={20} />
              </div>
              <h3
                className={`${montserrat.className} text-xl font-bold text-white`}
              >
                Our Solution
              </h3>
            </div>

            <p
              className={`${montserrat.className} text-zinc-400 text-sm leading-relaxed mb-5`}
            >
              Mt7 is not an agency or a marketplace. We are a business
              operations system acting as your single operational manager.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Find & Vet",
                  desc: "Access to agencies across all budget tiers.",
                },
                {
                  title: "Daily Management",
                  desc: "A single point of contact for everything.",
                },
                {
                  title: "Guaranteed Quality",
                  desc: "Free replacement if standards drop.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold text-[10px]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {item.title}
                    </p>
                    <p className="text-zinc-500 text-[10px] sm:text-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- OUR APPROACH --- */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3
              className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-4`}
            >
              Our Approach
            </h3>
            <p
              className={`${montserrat.className} text-zinc-400 text-sm md:text-base max-w-2xl mx-auto`}
            >
              The &quot;7 Layers&quot; represent our systematic approach to
              covering every operational need of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Marketing",
                items: ["Social Media", "Content", "SEO", "Ads"],
              },
              {
                title: "Finance",
                items: ["Bookkeeping", "CFO Services", "Tax", "Reporting"],
              },
              {
                title: "HR & Ops",
                items: ["Payroll", "Benefits", "Compliance", "Recruiting"],
              },
            ].map((domain, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-[1.2rem] border border-white/10 bg-zinc-900/40 flex flex-col items-center text-center hover:border-orange-500/30 transition-colors"
              >
                <Layers className="text-orange-500 mb-4" size={28} />
                <h4 className="text-white font-bold text-lg mb-3">
                  {domain.title}
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {domain.items.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- TEAM SECTION (COMMENTED OUT AS REQUESTED) --- */}
        {/* <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-20 bg-zinc-900/20 p-6 md:p-10 rounded-[1.5rem] border border-white/5">
          <div className="md:col-span-4 relative group">
            <div className="aspect-[4/5] relative rounded-xl overflow-hidden bg-zinc-800 border border-white/10">
              <Image
                src="/abdul-adnan.jpg"
                alt="Abdul Adnan"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-600 font-bold text-xs pointer-events-none">
                [Founder Photo]
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <p className="text-orange-500 font-bold tracking-widest text-[10px] mb-2 uppercase">
              Meet The Founder
            </p>
            <h3
              className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-2`}
            >
              Abdul Adnan
            </h3>
            <p className="text-zinc-500 text-xs md:text-sm mb-6">
              Founder & CEO
            </p>

            <div className="space-y-4 text-zinc-300 text-sm leading-relaxed font-light">
              <p>
                Abdul has managed operations for multiple startups across
                hospitality, e-commerce, SaaS, and AI. He&apos;s built systems
                that scale from ₹0 to ₹10Cr+ revenue.
              </p>
              <p>
                After watching too many founders waste time on vendor
                management, he created Mt7 to solve this problem systematically.
              </p>
            </div>
          </div>
        </div> 
        */}

        {/* --- VALUES GRID --- */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Transparency",
                desc: "You see what agencies cost + our margin.",
              },
              {
                title: "Quality",
                desc: "3-strike system ensures high standards.",
              },
              { title: "Flexibility", desc: "Month-to-month, no lock-ins." },
              { title: "Alignment", desc: "We only succeed when you succeed." },
            ].map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[1rem] bg-zinc-900/30 border border-white/5 hover:border-orange-500/30 transition-colors"
              >
                <CheckCircle2 className="text-orange-500 mb-3" size={20} />
                <h4 className="text-white font-bold text-sm mb-1">
                  {val.title}
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="flex flex-col items-center justify-center text-center pb-10">
          <h2
            className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-6`}
          >
            Ready to simplify your operations?
          </h2>
          <Link href="/lead">
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 69, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className={`${montserrat.className} px-8 py-4 bg-[#ff4500] text-white font-bold text-sm md:text-base rounded-full transition-all shadow-lg shadow-orange-900/20 cursor-pointer`}
            >
              <span className="flex items-center gap-3">
                Book Free Consultation
                <ArrowRight size={18} />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;