import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NorthgateTV — a nightlife and street interview content brand capturing the real Northgate experience.",
  openGraph: {
    title: "About NorthgateTV",
    description: "The story behind NorthgateTV.",
  },
};

const crew = [
  { name: "The Creator", role: "Founder & Host", bio: "Started NorthgateTV with a phone and a mission to capture the real Northgate experience." },
  { name: "The Editor", role: "Video Editor", bio: "Turns hours of chaotic footage into content that actually slaps." },
  { name: "The Shooter", role: "Videographer", bio: "Behind the camera catching every wild moment on the strip." },
  { name: "The Strategist", role: "Social Media", bio: "Makes sure the content reaches every feed." },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Brand Story */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-white">About NorthgateTV</h1>
        <div className="mt-6 space-y-4 text-gray-300 leading-relaxed">
          <p>
            NorthgateTV started with a simple idea: capture the real Northgate experience and share it with everyone. What began as a few street interviews on a Thursday night has grown into the go-to source for nightlife content, bar reviews, and the unfiltered chaos that makes Northgate legendary.
          </p>
          <p>
            We&apos;re not a news outlet. We&apos;re not a production studio. We&apos;re a crew that loves Northgate and wants to document the culture, the energy, and the people that make it special. From game day madness to late-night street interviews, we&apos;re out there every week capturing what it&apos;s really like.
          </p>
          <p>
            Our content reaches tens of thousands of people across YouTube, TikTok, and Instagram. Whether you&apos;re a regular or just visiting, NorthgateTV is your window into the heart of Northgate nightlife.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white">Our Mission</h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          To be the definitive nightlife content brand for Northgate — entertaining, authentic, and always real.
        </p>
      </section>

      {/* Crew */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-8">The Crew</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {crew.map((member) => (
            <div key={member.name} className="bg-dark-card border border-dark-border rounded-lg p-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-primary-light">{member.role}</p>
              <p className="mt-2 text-sm text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
