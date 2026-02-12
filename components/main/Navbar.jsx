"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Link from "next/link"; // Imported Link
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

/* ================= CONFIG ================= */

const SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "clients", label: "Clients" },
  { id: "flow", label: "How It Works" },
  { id: "plans", label: "Pricing" },
  { id: "comparison", label: "Comparison" },
  { id: "faq", label: "FAQ" },
  { id: "about", label: "About" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/mt7.in",
    icon: Instagram,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/mt7_in",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/mt7",
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+917800007500",
    icon: MessageCircle,
  },
];

const TOP_OFFSET = 80;

/* ================= COMPONENT ================= */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const isAtTopRef = useRef(true);
  const rafRef = useRef(false);

  const toggleMenu = useCallback(() => setOpen((p) => !p), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  /* ================= SMOOTH SCROLL ================= */

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  /* ================= SCROLL LISTENER ================= */

  useEffect(() => {
    if (open) return;

    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = true;
      requestAnimationFrame(() => {
        const atTop = window.scrollY < TOP_OFFSET;

        if (isAtTopRef.current !== atTop) {
          isAtTopRef.current = atTop;
          if (atTop) setActiveSection(null);
        }

        rafRef.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  /* ================= INTERSECTION OBSERVER ================= */

  useEffect(() => {
    if (open) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isAtTopRef.current) return;

        let closest = null;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const offset = Math.abs(
            entry.boundingClientRect.top - window.innerHeight / 2
          );

          if (!closest || offset < closest.offset) {
            closest = { id: entry.target.id, offset };
          }
        }

        if (closest) {
          setActiveSection((prev) =>
            prev === closest.id ? prev : closest.id
          );
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [open]);

  const activeLabel =
    SECTIONS.find((s) => s.id === activeSection)?.label ?? "";

  /* ================= RENDER ================= */

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <div className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="pointer-events-auto flex items-center justify-between px-6 sm:px-8 lg:px-10 py-3 rounded-full w-full max-w-screen-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl"
        >
          {/* LOGO */}
          <span className={`${montserrat.className} font-bold text-white text-xl`}>
            Mt7<span className="text-red-500">.in</span>
          </span>

          {/* NAV LINKS */}
          <div className={`${montserrat.className} flex gap-10 text-sm`}>
            {SECTIONS.map(({ id, label }) => {
              const active = activeSection === id;

              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative py-1 transition-colors ${
                    active ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-red-500 transition-all ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA LINKED TO /LEAD */}
          <Link
            href="/lead"
            className="px-6 py-2 rounded-full bg-red-600 text-white text-sm font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="fixed top-4 left-4 right-4 z-50 md:hidden h-14">
        <div className="relative flex items-center justify-between px-5 h-full rounded-2xl bg-black/60 backdrop-blur-lg border border-white/10">
          <span className={`${montserrat.className} font-bold text-white text-lg`}>
            MT7<span className="text-red-500">.in</span>
          </span>

          <div className="absolute left-1/2 -translate-x-1/2">
            <AnimatePresence mode="wait">
              {activeSection && (
                <motion.span
                  key={activeSection}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`${montserrat.className} text-sm font-semibold text-white`}
                >
                  {activeLabel}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <button onClick={toggleMenu} className="text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="fixed inset-y-0 right-0 z-70 w-full sm:max-w-sm bg-zinc-950 border-l border-white/10 p-6 sm:p-8 flex flex-col shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="flex justify-between items-center mb-10">
                <span className={`${montserrat.className} text-xl font-bold text-white`}>
                  MT7<span className="text-red-500">.in</span>
                </span>
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {SECTIONS.map(({ id, label }, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    onClick={() => {
                      scrollToSection(id);
                      closeMenu();
                    }}
                    className="group flex items-center justify-between py-4 border-b border-white/5"
                  >
                    <span
                      className={`${montserrat.className} text-base ${
                        activeSection === id
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {label}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-red-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </motion.button>
                ))}
              </nav>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center gap-6 mt-8 text-gray-400">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:text-white transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              {/* SIDEBAR CTA LINKED TO /LEAD */}
              <div className="mt-auto pt-8">
                <Link
                  href="/lead"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-red-600 text-white font-bold shadow-lg shadow-red-900/20 transition-transform active:scale-95"
                >
                  Book Free Consultation <ArrowRight size={18} />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}