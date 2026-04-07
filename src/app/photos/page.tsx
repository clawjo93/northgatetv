"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function PhotosPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
    instagram: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/photo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-dark py-20 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3">
            Get Your Photos 📸
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Were you photographed by Northgate TV? Fill out the form below and we&apos;ll send your photos straight to your inbox.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-dark-card border border-dark-border rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-xl font-black text-white mb-2">Request Received!</h2>
            <p className="text-gray-400 text-sm">
              We&apos;ll find your photos and send them to your email within 48 hours. Check your inbox!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-dark-card border border-dark-border rounded-2xl p-8 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Date of the Night *
              </label>
              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Where on Northgate? *
              </label>
              <input
                type="text"
                name="location"
                required
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Northgate main strip, Cowboy's, The Tap..."
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Instagram */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Instagram Handle <span className="text-gray-600 normal-case font-normal">(optional)</span>
              </label>
              <input
                type="text"
                name="instagram"
                value={form.instagram}
                onChange={handleChange}
                placeholder="@yourhandle"
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 bg-primary hover:bg-primary-light text-white font-black text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Request My Photos →"}
            </button>

            <p className="text-center text-xs text-gray-600">
              Photos are typically delivered within 48 hours. By submitting you&apos;re joining the Northgate TV email list.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
