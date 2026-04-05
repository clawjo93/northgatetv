"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { label: "YouTube", href: "https://youtube.com/@northgatetv", icon: "M23.5 6.5a3 3 0 00-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 00.5 6.5S0 8.7 0 10.9v2.2c0 2.2.5 4.4.5 4.4a3 3 0 002.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 002.1-2.1s.5-2.2.5-4.4v-2.2c0-2.2-.5-4.4-.5-4.4zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { label: "TikTok", href: "https://tiktok.com/@northgatetv", icon: "M12.5 2h3a5 5 0 005 5v3a8 8 0 01-5-1.8V16a6.5 6.5 0 11-5.6-6.4v3.2A3.3 3.3 0 1013 16V2h-.5z" },
  { label: "Instagram", href: "https://instagram.com/northgatetv", icon: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 01-1.4-.9c-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.7-2.2 1.4C1.2 2.6.8 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.2 2.2.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.2-.5-2.9-.3-.8-.7-1.5-1.4-2.2C21.4 1.2 20.7.8 19.9.6 19.1.3 18.2.1 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" },
  { label: "X", href: "https://x.com/northgatetv", icon: "M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.8-7.6-6.7 7.6H.3l8.7-9.9L0 1.2h7.7l5.3 7 6-7zM17.6 20.6h2l-13-13.4h-2.2l13.2 13.4z" },
];

export default function Footer() {
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
    <footer className="bg-dark border-t border-dark-border">
      {/* Newsletter signup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white">Stay in the loop</h3>
          <p className="mt-2 text-sm text-gray-400">Get the latest videos, events, and exclusive content straight to your inbox.</p>
          {status === "success" ? (
            <p className="mt-4 text-green-400 font-medium">You&apos;re in! Check your inbox.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-dark border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-5 py-2.5 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors disabled:opacity-50 text-sm"
              >
                {status === "loading" ? "Joining..." : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-2 text-red-400 text-sm">Something went wrong. Try again.</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="NorthgateTV" width={56} height={56} className="h-12 w-auto" />
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Nightlife and street interview content brand. Real stories from the strip.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Pages</h3>
            <div className="space-y-2">
              {["Videos", "Gallery", "Blog", "Merch", "Advertise", "About"].map((page) => (
                <Link
                  key={page}
                  href={`/${page.toLowerCase()}`}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-dark-border text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NorthgateTV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
