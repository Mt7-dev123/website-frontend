"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  MapPin, // Added MapPin import
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Footer() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(null);

  const handleSubscribe = useCallback(
    async (e) => {
      e.preventDefault();
      if (!email) return;

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
            email,
            subject: "New Newsletter Subscription",
            from_name: "MT7 Website",
          }),
        });

        if (!res.ok) throw new Error("Request failed");

        setToast({
          type: "success",
          message: "Subscribed successfully 🚀",
        });
        setEmail("");
      } catch {
        setToast({
          type: "error",
          message: "Something went wrong. Try again.",
        });
      }

      setTimeout(() => setToast(null), 3000);
    },
    [email],
  );

  const footerLinks = {
    Quick: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/#pricing" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Contact", href: "/register" },
    ],
    Services: [
      { label: "Coordinator", href: "/services/coordinator" },
      { label: "Sourcing", href: "/services/sourcing" },
      { label: "Full Stack", href: "/services/full-stack" },
      { label: "Mini (Beta)", href: "/services/mini" },
    ],
    Company: [
      { label: "About", href: "/#about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    Legal: [
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund", href: "/refund-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter/X" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { isWhatsApp: true, href: "https://wa.me/917800007500", label: "WhatsApp" },
  ];

  return (
    <>
      {/* TOAST (non-blocking, fixed) */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl text-sm font-medium shadow-lg
              ${
                toast.type === "success"
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="relative bg-zinc-900/40 backdrop-blur-md pt-14 pb-6 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/"
                  className={`${montserrat.className} text-3xl font-bold text-white w-fit mr-6`}
                >
                  Mt7<span className="text-red-500">.in</span>
                </Link>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/50"
                      whileHover={{ y: -2 }}
                    >
                      {social.isWhatsApp ? (
                        <FaWhatsapp
                          size={17}
                          className="text-gray-400 hover:text-[#25D366]"
                        />
                      ) : (
                        <social.icon
                          size={17}
                          className="text-gray-400 hover:text-white"
                        />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                <strong className="text-white">Mt7</strong> — The 7
                Layers Multi Tasking Company. Your business operations system
                for marketing, finance, and HR management.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                />
                <motion.button
                  layout={false}
                  type="submit"
                  className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe <ArrowRight size={15} />
                </motion.button>
              </form>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="text-white text-[10px] uppercase tracking-widest font-bold mb-4">
                    {title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-gray-400 text-sm hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          <div className="flex flex-col items-center gap-4 text-center text-sm text-gray-400">
            {/* Contact Row: Emails, Phone, and Address */}
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
              <a
                href="mailto:founder@Mt7.in"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-red-500" />
                founder@Mt7.in
              </a>
              <a
                href="mailto:support@Mt7.in"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-red-500" />
                support@Mt7.in
              </a>
              <a
                href="tel:+917800007500"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-red-500" />
                +91 7800007500
              </a>

              {/* Added Address Link Here */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bahraich,+Uttar+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MapPin size={14} className="text-red-500" />
                Bahraich, Uttar Pradesh, India
              </a>
            </div>

            {/* GSTIN & Disclaimer */}
            <div className="text-xs text-gray-500 max-w-3xl leading-relaxed mt-2">
              <div>Mt7 | GSTIN: 09AATCM9258Q1Z2</div>
              <div className="mt-1">
                Services delivered through vetted agency partners.
              </div>
            </div>

            <div className="text-xs text-gray-500">
              © 2026 Mt7 All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
