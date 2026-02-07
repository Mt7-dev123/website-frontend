"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import {
  Mail,
  Phone,
  User,
  Send,
  Loader2,
  CheckCircle2,
  Building2,
  ChevronDown,
  Check,
  Shield,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function ContactPage() {
  const [alert, setAlert] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      services: [],
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setAlert({
        type: "success",
        message: "Request submitted successfully. We'll contact you shortly.",
      });

      reset();
    } catch {
      setAlert({
        type: "error",
        message: "Submission failed. Please try again.",
      });
    }

    setTimeout(() => setAlert(null), 3500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24">
      <AnimatePresence>
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}
      </AnimatePresence>

      <div className="w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] p-10 bg-zinc-900/60 backdrop-blur-xl border border-white/10"
        >
          <h1
            className={`${montserrat.className} text-4xl font-bold text-white mb-2`}
          >
            Book a Free Consultation
          </h1>
          <p className="text-zinc-400 mb-10">
            Tell us about your business and we’ll craft a custom plan.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-5">
              <Input
                icon={User}
                placeholder="Full Name"
                {...register("name", { required: true })}
                error={errors.name}
              />
              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
                error={errors.email}
              />
            </div>

            {/* Phone + Company */}
            <div className="grid md:grid-cols-2 gap-5">
              <Input
                icon={Phone}
                placeholder="Phone Number"
                {...register("phone", { required: true })}
                error={errors.phone}
              />
              <Input
                icon={Building2}
                placeholder="Company Name"
                {...register("company")}
              />
            </div>

            {/* Role */}
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <CustomDropdown
                  label="Your Role"
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    "Founder / Co-Founder",
                    "CXO",
                    "Ops / Marketing Lead",
                    "Other",
                  ]}
                />
              )}
            />

            {/* Company Stage */}
            <Controller
              name="stage"
              control={control}
              render={({ field }) => (
                <CustomDropdown
                  label="Company Stage"
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    "Bootstrapped / Pre-seed",
                    "Seed",
                    "Series A+",
                    "₹1Cr–₹10Cr ARR",
                  ]}
                />
              )}
            />

            {/* Interested Plan */}
            <Controller
              name="plan"
              control={control}
              render={({ field }) => (
                <CustomDropdown
                  label="Interested Plan"
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    "Coordinator",
                    "Sourcing",
                    "Full Stack",
                    "Mini (Beta)",
                    "Not sure yet",
                  ]}
                />
              )}
            />

            {/* Services */}
            <CustomCheckboxGroup
              label="Services Needed"
              options={[
                "Marketing",
                "Finance",
                "HR",
                "Multiple / Full Stack",
              ]}
              register={register("services")}
            />

            {/* Current Setup */}
            <Controller
              name="currentSetup"
              control={control}
              render={({ field }) => (
                <CustomDropdown
                  label="Current Situation"
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    "Already working with agencies",
                    "Need to find agencies",
                    "Mixed setup",
                    "Exploring options",
                  ]}
                />
              )}
            />

            {/* Budget */}
            <Controller
              name="budget"
              control={control}
              render={({ field }) => (
                <CustomDropdown
                  label="Monthly Ops Spend (Optional)"
                  value={field.value}
                  onChange={field.onChange}
                  options={[
                    "< ₹50k",
                    "₹50k – ₹2L",
                    "₹2L – ₹5L",
                    "₹5L+",
                  ]}
                />
              )}
            />

            {/* Urgency */}
            <Controller
              name="urgency"
              control={control}
              render={({ field }) => (
                <CustomDropdown
                  label="When do you need this?"
                  value={field.value}
                  onChange={field.onChange}
                  options={["ASAP", "2–4 weeks", "Just exploring"]}
                />
              )}
            />

            {/* Description */}
            <textarea
              {...register("description")}
              placeholder="Additional details (optional)"
              className={`${montserrat.className} w-full bg-black/40 border border-white/10 rounded-xl py-4 px-4 text-white text-sm min-h-[120px] focus:border-orange-500/50 focus:outline-none`}
            />

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.97 }}
              className={`${montserrat.className} w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Submitting…
                </>
              ) : (
                <>
                  Submit Request
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

const Alert = ({ type, message, onClose }) => (
  <motion.div
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -40, opacity: 0 }}
    className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl backdrop-blur-xl border
      ${
        type === "success"
          ? "bg-green-500/15 border-green-500/30 text-green-400"
          : "bg-red-500/15 border-red-500/30 text-red-400"
      }`}
  >
    <div className="flex items-center gap-3 text-sm font-semibold">
      {type === "success" ? <CheckCircle2 size={18} /> : <Shield size={18} />}
      {message}
    </div>
    <button onClick={onClose} className="absolute top-2 right-3 text-xs">
      ✕
    </button>
  </motion.div>
);

const Input = React.forwardRef(({ icon: Icon, error, ...props }, ref) => (
  <div>
    <div className="relative">
      {Icon && (
        <Icon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />
      )}
      <input
        ref={ref}
        {...props}
        className={`${montserrat.className} w-full bg-black/40 border ${
          error ? "border-red-500/40" : "border-white/10"
        } rounded-xl py-4 ${Icon ? "pl-12" : "pl-4"} pr-4 text-white text-sm`}
      />
    </div>
    {error && (
      <p className="text-red-400 text-xs mt-1">This field is required</p>
    )}
  </div>
));
Input.displayName = "Input";

const CustomDropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="text-zinc-400 text-xs font-semibold mb-2 block">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 flex justify-between items-center text-sm text-white"
      >
        {value || "Select option"}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute mt-2 w-full bg-zinc-900 border border-white/10 rounded-xl overflow-hidden z-50"
          >
            {options.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="px-4 py-3 text-sm cursor-pointer hover:bg-orange-500/10 hover:text-orange-400"
              >
                {opt}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const CustomCheckboxGroup = ({ label, options, register }) => (
  <div>
    <label className="text-zinc-400 text-xs font-semibold mb-3 block">
      {label}
    </label>

    <div className="grid grid-cols-2 gap-3">
      {options.map((opt) => (
        <label
          key={opt}
          className="group flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/10 cursor-pointer hover:border-orange-500/40 transition-all"
        >
          <input
            type="checkbox"
            value={opt}
            {...register}
            className="peer sr-only"
          />

          <div className="w-5 h-5 rounded-md border-2 border-white/20 flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500 transition-all">
            <Check
              size={14}
              className="text-white opacity-0 peer-checked:opacity-100"
            />
          </div>

          <span className="text-zinc-300 text-sm peer-checked:text-white">
            {opt}
          </span>
        </label>
      ))}
    </div>
  </div>
);
