"use client";

import { useForm } from "react-hook-form";

export default function LeadForm({ onSuccess }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert("Submission failed");
      return;
    }

    reset();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("name", { required: true })}
        placeholder="Your Name"
        className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2 text-sm"
      />

      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Your Email"
        className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2 text-sm"
      />

      <input
        {...register("phone", { required: true })}
        placeholder="+91 9876543210"
        className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2 text-sm"
      />

      <div className="flex gap-6 text-sm text-zinc-300">
        <label className="flex items-center gap-2">
          <input type="radio" value="Business" {...register("type", { required: true })} />
          Business
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" value="Support" {...register("type", { required: true })} />
          Support
        </label>
      </div>

      <textarea
        {...register("description")}
        placeholder="What you want..."
        className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-2 text-sm min-h-[90px]"
      />

      <button
        type="submit"
        className="w-full bg-[#ff4500] hover:bg-orange-600 text-black font-semibold px-4 py-2 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
