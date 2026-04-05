"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30" />
      <div className="absolute inset-0 bg-dark/80" />
      <div className="relative z-10 px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          Get the Inside Scoop
        </h2>
        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-lg mx-auto">
          Weekly drops, bar guides, and exclusive content. No spam.
        </p>
        {status === "success" ? (
          <p className="mt-8 text-green-400 font-bold uppercase tracking-wider text-sm">You&apos;re in! Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 bg-dark border border-dark-border rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-black text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === "loading" ? "..." : "JOIN"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-400 text-sm">Something went wrong. Try again.</p>
        )}
      </div>
    </section>
  );
}
