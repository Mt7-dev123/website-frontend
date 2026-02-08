"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const scrollToHowItWorks = () => {
  const el = document.getElementById("flow");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function HeroSection() {
  const memberImages = [
    "/person1.jpeg",
    "/person2.jpeg",
    "/person3.jpeg",
    "/person4.jpeg",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-transparent overflow-hidden flex items-center pt-24 pb-20 md:pb-0"
    >
      <div className="absolute inset-0 z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-14 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6"></div>
            <motion.h1
              className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6`}
            >
              <span className="block text-sm tracking-wider uppercase mb-3 bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent opacity-90">
                For Startups Drowning in Agency Chaos
              </span>

              <span className="block bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent">
                Stop Juggling Agencies.
              </span>

              <span className="block relative mt-2">
                <span className="bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,69,0,0.2)]">
                  Start Growing Your Business.
                </span>
                <motion.span
                  className="absolute -bottom-3 left-0 h-1 bg-[#ff4500] rounded-full shadow-[0_0_15px_#ff4500]"
                  initial={{ width: 0 }}
                  animate={{ width: "220px" }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </span>
            </motion.h1>

            <p
              className={`${montserrat.className} text-lg text-gray-200 font-light leading-relaxed mb-10 max-w-xl opacity-90`}
            >
              We find, vet, and manage all your Marketing, Finance & HR
              agencies— so you get professional operations without the
              headaches. One point of contact. One invoice. Zero vendor drama.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {memberImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-9 h-9 rounded-full border-2 border-black overflow-hidden bg-red-900"
                    >
                      <Image
                        src={src}
                        alt={`Member ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p
                  className={`${montserrat.className} text-gray-300 text-sm font-medium`}
                >
                  Currently onboarding founding clients
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={scrollToHowItWorks}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 69, 0, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`${montserrat.className} px-8 py-4 bg-[#ff4500] text-white font-semibold rounded-xl shadow-lg cursor-pointer`}
                >
                  See How It Works →
                </motion.button>

                <Link href="/lead">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${montserrat.className} px-8 py-4 border border-[#ff4500] text-[#ffae42] font-semibold rounded-xl cursor-pointer`}
                  >
                    Book Free Consultation
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div className="relative mt-20 md:mt-12 lg:mt-0 mb-10 md:mb-0">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-[320px] md:h-[450px] rounded-3xl overflow-hidden bg-red-950/10 backdrop-blur-xl border border-white/10 shadow-2xl shadow-red-500/5"
            >
              <Image
                src="/work.png"
                alt="Digital Business"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-transparent to-transparent" />
            </motion.div>

            {/* FIXED: 100+ AGENCY PARTNERS CARD */}
            <div className="absolute -bottom-8 md:-bottom-5 -left-4 md:-left-8 w-44 h-24 md:w-60 md:h-28 flex items-center justify-center">
              {/* Pulse effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 md:border-4 border-[#ff4500]/20 blur-[2px] animate-pulse" />

              <div className="relative w-full h-full rounded-2xl bg-black/90 backdrop-blur-xl border-2 md:border-4 border-[#ff4500]/50 px-4 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,69,0,0.25)]">
                <div className="text-gray-300 text-[9px] md:text-[10px] mb-1 font-medium tracking-widest uppercase">
                  Connected
                </div>
                <div className="text-sm md:text-base lg:text-lg font-bold text-[#ff4500] drop-shadow-[0_0_12px_rgba(255,69,0,0.6)] whitespace-nowrap text-center">
                  100+ Agency Partners
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}