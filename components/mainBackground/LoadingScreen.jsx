"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  "Initializing interface",
  "Loading core modules",
  "Compiling experience",
  "Preparing final output",
];

export default function LoadingScreen() {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) =>
        prev < steps.length - 1 ? prev + 1 : prev
      );
    }, 1500); // Changed from 650ms to 1500ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const target = ((stepIndex + 1) / steps.length) * 100;
        const diff = target - prev;
        return prev + diff * 0.1;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [stepIndex]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden"
    >
      {/* RADIAL GRADIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent" />

      {/* SCANNING LIGHT */}
      <motion.div
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff4500] to-transparent blur-sm"
        animate={{ y: ["0%", "100%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ opacity: 0.4 }}
      />

      {/* FLOATING PARTICLES */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500/30 rounded-full"
          initial={{
            // eslint-disable-next-line react-hooks/purity
            x: Math.random() * window.innerWidth,
            // eslint-disable-next-line react-hooks/purity
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            // eslint-disable-next-line react-hooks/purity
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            // eslint-disable-next-line react-hooks/purity
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            // eslint-disable-next-line react-hooks/purity
            delay: Math.random() * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative flex flex-col items-center text-center px-6">
        {/* LOGO WITH GLOW */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-baseline gap-2 mb-12 relative"
        >
          <div className="absolute inset-0 blur-2xl bg-red-500/20 scale-150" />
          <span className="text-5xl md:text-6xl font-light tracking-tight text-white relative">
            MT7
          </span>
          <span className="text-4xl md:text-5xl font-light tracking-tight text-red-500 relative drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]">
            .in
          </span>
        </motion.div>

        {/* HEXAGON LOADER */}
        <div className="relative w-24 h-24 mb-8">
          {/* Hexagon Shape */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            {/* Background Hexagon */}
            <motion.path
              d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
              fill="none"
              stroke="rgba(255, 69, 0, 0.2)"
              strokeWidth="2"
            />
            
            {/* Animated Hexagon */}
            <motion.path
              d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4500" stopOpacity="0" />
                <stop offset="50%" stopColor="#ff4500" stopOpacity="1" />
                <stop offset="100%" stopColor="#ff6347" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Rotating Inner Lines */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <line x1="50" y1="20" x2="50" y2="80" stroke="#ff4500" strokeWidth="1.5" opacity="0.6" />
              <line x1="20" y1="50" x2="80" y2="50" stroke="#ff4500" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </motion.div>

          {/* CENTER DOT */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,69,0,0.8)]" />
          </motion.div>
        </div>

        {/* STATUS TEXT */}
        <div className="h-6 overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={stepIndex}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Slightly longer transition
              className="text-sm tracking-[0.3em] uppercase text-gray-400 font-light"
            >
              {steps[stepIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-64 md:w-80 h-1 bg-gray-900 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-full shadow-[0_0_10px_rgba(255,69,0,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          
          {/* SHIMMER EFFECT */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* PERCENTAGE */}
        <motion.p
          className="text-xs text-gray-500 mt-3 font-mono tabular-nums"
          key={Math.floor(progress)}
        >
          {Math.floor(progress)}%
        </motion.p>
      </div>

      {/* CORNER ACCENTS */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => {
        const positions = {
          "top-left": "top-0 left-0",
          "top-right": "top-0 right-0 rotate-90",
          "bottom-left": "bottom-0 left-0 -rotate-90",
          "bottom-right": "bottom-0 right-0 rotate-180",
        };
        
        return (
          <motion.div
            key={corner}
            className={`absolute ${positions[corner]} w-24 h-24 opacity-20`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-full h-[2px] bg-gradient-to-r from-red-500 to-transparent" />
            <div className="w-[2px] h-full bg-gradient-to-b from-red-500 to-transparent" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}