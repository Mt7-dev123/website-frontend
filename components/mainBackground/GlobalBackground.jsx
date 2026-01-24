/* eslint-disable react-hooks/purity */
"use client";

import React, { useEffect, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import LightPillar from './LightPillar';

const GlobalBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Performance: Memoize particles so they don't regenerate on every mouse move
  const emberParticles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      randomDuration: 5 + Math.random() * 5,
      randomDelay: Math.random() * 5,
      randomScale: 0.8 + Math.random() * 0.5,
      randomXDrift: (Math.random() - 0.5) * 150,
      left: `${20 + Math.random() * 60}%`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#050202]">
      {/* ================= LIGHT PILLAR (One instance for all sections) ================= */}
      <div className="absolute inset-0 z-0">
        <LightPillar
          topColor="#FFA500"
          bottomColor="#E65100"
          intensity={1.1}
          pillarWidth={0.5}
          pillarHeight={1.0}
          pillarRotation={103}
          className="opacity-50"
        />
      </div>

      {/* Interactive Cursor Glow */}
      <motion.div
        style={{
          left: dx,
          top: dy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-150 h-150 bg-orange-600/15 blur-[120px] rounded-full z-10 will-change-transform"
      />

      {/* Static Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-red-900/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-900/10 blur-[150px] rounded-full" />

      {/* Realistic Fire Embers */}
      {emberParticles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: "105vh", scale: 0 }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            y: ["105vh", "10vh"],
            x: [0, p.randomXDrift / 2, p.randomXDrift],
            scale: [0, p.randomScale, p.randomScale * 0.5, 0],
          }}
          transition={{
            duration: p.randomDuration,
            repeat: Infinity,
            delay: p.randomDelay,
            ease: "easeOut",
          }}
          className="absolute w-0.75 h-0.75 bg-amber-200 rounded-full will-change-transform"
          style={{
            left: p.left,
            boxShadow:
              "0 0 6px rgba(255, 120, 0, 0.4), 0 0 12px rgba(255, 60, 0, 0.15)",

            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Added a bottom vignette to ground the sections */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
    </div>
  );
};

export default GlobalBackground;
