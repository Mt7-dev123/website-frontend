"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

export default function LeadModal({ open, onClose }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      reset();
      onClose();
    } else {
      alert("Submission failed");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            className="relative bg-black/80 text-white rounded-2xl p-6 w-[90%] max-w-md 
                       border border-white/10 backdrop-blur-xl
                       shadow-[0_0_60px_rgba(255,69,0,0.15)]"
          >
            {/* CLOSE ICON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition"
            >
              <X size={18} />
            </button>

            {/* HEADER */}
            <h2 className="text-xl font-semibold mb-1 bg-gradient-to-r from-white via-[#ffae42] to-[#ff4500] bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-sm text-zinc-400 mb-6">
              Let’s discuss how we can help you.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2 text-sm 
                           placeholder:text-zinc-500 focus:outline-none focus:border-orange-500"
              />

              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2 text-sm 
                           placeholder:text-zinc-500 focus:outline-none focus:border-orange-500"
              />

              <input
                {...register("phone", { required: true })}
                placeholder="+91 9876543210"
                className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2 text-sm 
                           placeholder:text-zinc-500 focus:outline-none focus:border-orange-500"
              />

              <div className="flex gap-6 text-sm text-zinc-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="Business" {...register("type", { required: true })} />
                  Business
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="Support" {...register("type", { required: true })} />
                  Support
                </label>
              </div>

              <textarea
                {...register("description")}
                placeholder="What you want..."
                className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2 text-sm 
                           placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 min-h-[90px]"
              />

              <button
                type="submit"
                className="w-full mt-2 bg-[#ff4500] hover:bg-orange-600 text-black 
                           font-semibold px-4 py-2 rounded-lg transition
                           shadow-[0_0_25px_rgba(255,69,0,0.35)]"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
