"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-dark-card border border-dark-border rounded-lg p-8 text-center">
        <p className="text-green-400 font-medium text-lg">Message sent! We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-dark-card border border-dark-border rounded-lg p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-1">Business Name</label>
          <input
            type="text"
            id="business"
            name="business"
            required
            className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Tell us about your business</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What kind of advertising are you interested in? Any upcoming events or promotions?"
          className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
