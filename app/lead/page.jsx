"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  Briefcase,
  LifeBuoy,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      type: "Business", // Default selection
    },
  });

  const selectedType = watch("type");

  const onSubmit = async (data) => {
    setServerError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Submission failed. Please try again.");
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-zinc-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-14">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT SIDE: INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className={`${montserrat.className} uppercase tracking-[0.2em] text-xs font-bold text-orange-500 mb-4 block`}
            >
              Get in Touch
            </span>
            <h1
              className={`${montserrat.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight`}
            >
              Let's Scale Your <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Operations.
              </span>
            </h1>
            <p
              className={`${montserrat.className} text-zinc-400 text-lg mb-12 max-w-md leading-relaxed`}
            >
              Whether you need to source new agencies or manage existing ones,
              we are ready to build your system.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                    Email Us
                  </p>
                  <a
                    href="mailto:founder@mt7.in"
                    className="text-white text-lg font-medium hover:text-orange-500 transition-colors"
                  >
                    founder@Mt7.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                    Call Us
                  </p>
                  <a
                    href="tel:+917800007500"
                    className="text-white text-lg font-medium hover:text-orange-500 transition-colors"
                  >
                    +91 7800007500
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
                    Visit Us
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bahraich,+Uttar+Pradesh,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    Bahraich, Uttar Pradesh, India
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Form Container */}
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* --- SUCCESS STATE --- */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3
                      className={`${montserrat.className} text-2xl font-bold text-white mb-2`}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-zinc-400 max-w-xs mb-8">
                      Thank you for reaching out. Our team will review your
                      request and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-orange-500 text-sm font-semibold hover:text-orange-400 underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* --- FORM STATE --- */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div>
                      <h3
                        className={`${montserrat.className} text-2xl font-bold text-white mb-1`}
                      >
                        Start a Conversation
                      </h3>
                      <p className="text-zinc-400 text-sm">
                        Fill out the form below to get a custom quote.
                      </p>
                    </div>

                    {/* Name */}
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-zinc-500 group-focus-within:text-orange-500 transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your Full Name"
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs mt-1 pl-2">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <div className="absolute left-4 top-3.5 text-zinc-500 group-focus-within:text-orange-500 transition-colors">
                          <Mail size={18} />
                        </div>
                        <input
                          {...register("email", {
                            required: "Email is required",
                          })}
                          type="email"
                          placeholder="Email Address"
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-xs mt-1 pl-2">
                            {errors.email.message}
                          </span>
                        )}
                      </div>

                      <div className="relative group">
                        <div className="absolute left-4 top-3.5 text-zinc-500 group-focus-within:text-orange-500 transition-colors">
                          <Phone size={18} />
                        </div>
                        <input
                          {...register("phone", {
                            required: "Phone is required",
                          })}
                          placeholder="Phone Number"
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm"
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-xs mt-1 pl-2">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Enquiry Type (Radio Buttons styled as Cards) */}
                    <div>
                      <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3 block ml-1">
                        I am interested in:
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <label
                          className={`cursor-pointer border rounded-xl p-3 flex items-center gap-3 transition-all ${selectedType === "Business" ? "bg-orange-500/10 border-orange-500" : "bg-black/20 border-white/5 hover:bg-white/5"}`}
                        >
                          <input
                            type="radio"
                            value="Business"
                            {...register("type", { required: true })}
                            className="hidden"
                          />
                          <div
                            className={`p-1.5 rounded-full ${selectedType === "Business" ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-500"}`}
                          >
                            <Briefcase size={14} />
                          </div>
                          <span
                            className={`text-sm font-medium ${selectedType === "Business" ? "text-white" : "text-zinc-400"}`}
                          >
                            Business
                          </span>
                        </label>

                        <label
                          className={`cursor-pointer border rounded-xl p-3 flex items-center gap-3 transition-all ${selectedType === "Support" ? "bg-orange-500/10 border-orange-500" : "bg-black/20 border-white/5 hover:bg-white/5"}`}
                        >
                          <input
                            type="radio"
                            value="Support"
                            {...register("type", { required: true })}
                            className="hidden"
                          />
                          <div
                            className={`p-1.5 rounded-full ${selectedType === "Support" ? "bg-orange-500 text-white" : "bg-zinc-800 text-zinc-500"}`}
                          >
                            <LifeBuoy size={14} />
                          </div>
                          <span
                            className={`text-sm font-medium ${selectedType === "Support" ? "text-white" : "text-zinc-400"}`}
                          >
                            Support
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-zinc-500 group-focus-within:text-orange-500 transition-colors">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        {...register("description")}
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-sm min-h-[120px] resize-none"
                      />
                    </div>

                    {/* Error Message */}
                    {serverError && (
                      <div className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded-lg border border-red-500/20">
                        {serverError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ff4500] hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
