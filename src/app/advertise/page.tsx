import ContactForm from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise",
  description: "Advertise your bar, restaurant, or business with NorthgateTV. Reach an engaged nightlife audience through video, social, and more.",
  openGraph: {
    title: "Advertise with NorthgateTV",
    description: "Reach an engaged nightlife audience with NorthgateTV advertising.",
  },
};

export default function AdvertisePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Advertise with NorthgateTV</h1>
        <p className="mt-4 text-lg text-gray-400">
          Reach a local, engaged nightlife audience where they actually pay attention — on their phones and out on the strip.
        </p>
      </div>

      {/* Why advertise */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Local Audience", desc: "Our content reaches the people who go out every week" },
          { label: "Engaged Community", desc: "Real followers who watch, comment, and share" },
          { label: "Nightlife Audience", desc: "The exact demographic bars and brands want to reach" },
        ].map((item) => (
          <div key={item.label} className="bg-dark-card border border-dark-border rounded-lg p-6 text-center">
            <p className="text-lg font-bold text-white">{item.label}</p>
            <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* What we offer */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">What We Offer</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          From Instagram and TikTok story features to dedicated feed posts, video integrations, event coverage, and long-term brand partnerships — we work with bars, restaurants, and local businesses to build custom advertising that actually connects with the Northgate crowd.
        </p>
        <p className="text-gray-400 text-lg leading-relaxed mt-4">
          Fill out the form below and we&apos;ll reach out to discuss what works best for your business.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Get in Touch</h2>
        <ContactForm />
      </div>
    </div>
  );
}
