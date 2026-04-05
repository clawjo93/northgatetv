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

const packages = [
  {
    name: "Story Feature",
    price: "$75 – $150",
    description: "Featured in our Instagram/TikTok stories with tag and link.",
    features: ["1 story set (3-5 slides)", "24-hour exposure", "Direct link/tag", "Great for events & promos"],
  },
  {
    name: "Feed Post",
    price: "$200 – $500",
    description: "Dedicated post on our main feed with your brand front and center.",
    features: ["1 feed post (photo or video)", "Permanent on profile", "Caption mention & tag", "High engagement rate"],
  },
  {
    name: "Monthly Partner",
    price: "$500 – $1,500/mo",
    description: "Ongoing partnership with regular features across all platforms.",
    features: ["4 story features/month", "2 feed posts/month", "Video mention", "Priority scheduling"],
    popular: true,
  },
  {
    name: "Title Sponsor",
    price: "$1,000 – $3,000/mo",
    description: "Full integration across all NorthgateTV content and events.",
    features: ["All Monthly Partner perks", "In-video branding", "Event sponsorship", "Custom content creation", "Analytics report"],
  },
];

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

      {/* Packages */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Advertising Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-dark-card rounded-lg p-6 border ${
                pkg.popular ? "border-primary" : "border-dark-border"
              } relative`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
              <p className="mt-1 text-xl font-bold text-primary-light">{pkg.price}</p>
              <p className="mt-2 text-sm text-gray-400">{pkg.description}</p>
              <ul className="mt-4 space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Get in Touch</h2>
        <ContactForm />
      </div>
    </div>
  );
}
