import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Northgate College Station — Nightlife, Bars, Events & The Culture",
  description:
    "Northgate College Station is the heartbeat of Aggieland — bars, clubs, events, and street culture all in one district. Northgate TV is your insider guide to the Northgate District.",
  keywords: [
    "Northgate College Station",
    "Northgate District College Station",
    "Northgate bars",
    "Northgate nightlife",
    "College Station nightlife",
    "Aggieland bars",
    "Texas A&M nightlife",
    "Northgate events",
    "things to do College Station",
    "Northgate TV",
    "bars near Texas A&M",
    "College Station bars 2026",
  ],
  openGraph: {
    title: "Northgate College Station — Nightlife, Bars, Events & The Culture",
    description:
      "Northgate TV is the insider guide to Northgate College Station — 450K+ monthly views, real coverage, real culture.",
    url: "https://northgatetv.com/northgate-college-station",
    type: "website",
  },
  alternates: {
    canonical: "https://northgatetv.com/northgate-college-station",
  },
};

const stats = [
  { number: "450K+", label: "Monthly Views" },
  { number: "10K+", label: "Followers" },
  { number: "20+", label: "Venues Covered" },
  { number: "#1", label: "Local Media Source" },
];

const infoCards = [
  {
    icon: "📍",
    title: "Location",
    body: "North Gate Street & University Drive, College Station TX 77840 — directly across from Texas A&M campus",
  },
  {
    icon: "🕙",
    title: "When It Pops",
    body: "Thursday–Saturday nights, game days, and major A&M events. Bars open as early as 11am, most stay open until 2am",
  },
  {
    icon: "🆔",
    title: "Age Rules",
    body: "Most venues are 18+ or 21+ depending on the night. Harry's is 18+. Check specific venues — rules change by event",
  },
  {
    icon: "🚗",
    title: "Getting There",
    body: "Park in the Northgate Parking Garage on Church Ave. Uber and Lyft run constantly on weekend nights — the smart move",
  },
];

const venues = [
  {
    name: "Dixie Chicken",
    tags: ["Classic", "Landmark"],
    tagColors: ["bg-indigo-950 text-indigo-300 border border-indigo-900", "bg-green-950 text-green-400 border border-green-900"],
    desc: "The bar that started it all. Open since 1974, Dixie Chicken is the soul of Northgate — cheap beer, pool tables, and generations of Aggies. If you've never been, you haven't done Northgate.",
  },
  {
    name: "Harry's Bar & Grill",
    tags: ["Country", "18+ Welcome"],
    tagColors: ["bg-yellow-950 text-yellow-400 border border-yellow-900", "bg-green-950 text-green-400 border border-green-900"],
    desc: "Aggieland's go-to for country dancing and live concerts. One of the few spots on Northgate that's 18+ — makes it a first stop for a lot of freshmen. Big dance floor, big energy.",
  },
  {
    name: "12 Rooftop Bar & Lounge",
    tags: ["Rooftop", "Dance Club"],
    tagColors: ["bg-orange-950 text-orange-400 border border-orange-900", "bg-green-950 text-green-400 border border-green-900"],
    desc: "Two experiences in one: rooftop bar with views above the district, and a full-on dance club downstairs. The spot if you want to actually go out-out.",
  },
  {
    name: "Duddley's Draw",
    tags: ["Classic", "Outdoor"],
    tagColors: ["bg-indigo-950 text-indigo-300 border border-indigo-900", "bg-orange-950 text-orange-400 border border-orange-900"],
    desc: "Open-air bar with a laid-back patio vibe. Great for early evening drinks when you want the Northgate energy without the full-send crowd. One of the most Yelp-recognized spots in the district.",
  },
  {
    name: "The Spot on Northgate",
    tags: ["Bar", "Games"],
    tagColors: ["bg-green-950 text-green-400 border border-green-900", "bg-orange-950 text-orange-400 border border-orange-900"],
    desc: "A classic bar with games, TVs, and a crowd that's always down to hang. One of the most recognizable names on the strip.",
  },
  {
    name: "Northgate Proper · Block T · + More",
    tags: ["See Full Coverage →"],
    tagColors: ["bg-red-950 text-red-400 border border-red-900"],
    desc: "The district has 20+ active venues. Northgate TV has covered them all. Browse our full guide for the complete picture — including what's new, what changed, and what's worth your time this weekend.",
  },
];

const relatedLinks = [
  {
    label: "Coverage",
    title: "Every Bar in the Northgate District 2026 — The Complete Guide",
    href: "/blog",
  },
  {
    label: "Interviews",
    title: "Street Interviews — Real People, Real Conversations from Northgate",
    href: "/videos",
  },
  {
    label: "For Businesses",
    title: "Advertise on Northgate TV — Reach 450K Monthly Views",
    href: "/advertise",
  },
  {
    label: "Photos",
    title: "Northgate District Photo Gallery — Events, Bars & Nightlife",
    href: "/photos",
  },
];

export default function NorthgateCollegeStation() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* HERO */}
      <div>
        <span className="inline-block bg-red-600 text-white text-xs font-mono tracking-widest uppercase px-3 py-1 rounded mb-4">
          The District
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
          Northgate<br />College Station
        </h1>
        <p className="text-lg text-gray-400 border-l-4 border-red-600 pl-5 leading-relaxed max-w-2xl mb-10">
          Northgate isn&apos;t just a street. It&apos;s where Aggieland comes alive — packed dance floors on game nights, late-night conversations on the curb, the same bartenders who&apos;ve been pouring since your older brother came through. Northgate TV has been embedded in this culture since day one. These are the bars, the people, the events, and the moments nobody else is capturing.
        </p>
      </div>

      {/* STAT BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-14">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-black text-white font-mono">
              {s.number.replace(/[0-9K+#]/g, (c) =>
                ["0","1","2","3","4","5","6","7","8","9","K","+","#"].includes(c) ? c : c
              )}
              {/* Render number with red accent on last char */}
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* WHAT IS NORTHGATE */}
      <div className="mb-4">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 flex items-center gap-3 mb-6">
          The District
          <span className="flex-1 h-px bg-zinc-800" />
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Is the Northgate District?</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Located directly across the street from Texas A&amp;M University on University Drive, the Northgate Entertainment District is College Station&apos;s premier nightlife and entertainment hub. Stretching along North Gate Street, the district packs dozens of bars, clubs, restaurants, and live music venues into a walkable stretch that never really sleeps — especially on weekends, game days, and the week after finals.
        </p>
        <p className="text-gray-400 leading-relaxed mb-8">
          For Aggies, Northgate is a rite of passage. For College Station locals, it&apos;s a neighborhood. For everyone else passing through BCS — it&apos;s a reason to stay another night.
        </p>
      </div>

      {/* INFO CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
        {infoCards.map((card) => (
          <div key={card.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors">
            <div className="text-2xl mb-3">{card.icon}</div>
            <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>

      {/* VENUES */}
      <div>
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 flex items-center gap-3 mb-6">
          Where to Go
          <span className="flex-1 h-px bg-zinc-800" />
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Bars &amp; Venues</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          From Dixie Chicken — a Northgate institution since 1974 — to rooftop bars, country dance halls, and late-night clubs, the district has something for every vibe. Here&apos;s what&apos;s poppin on the gate:
        </p>
        <div className="flex flex-col gap-3 mb-14">
          {venues.map((v) => (
            <div key={v.name} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors flex gap-4">
              <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
              <div>
                <div className="text-base font-bold text-white mb-2">{v.name}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {v.tags.map((tag, i) => (
                    <span key={tag} className={`text-xs font-mono px-2 py-0.5 rounded-full ${v.tagColors[i] ?? v.tagColors[0]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PULL QUOTE */}
      <blockquote className="my-10 px-6 py-6 bg-zinc-950 border-l-4 border-red-600 rounded-r-xl">
        <p className="text-lg text-zinc-300 italic leading-relaxed">
          &ldquo;What makes Northgate different isn&apos;t the drinks — it&apos;s the people. Every weekend, thousands of people show up to be part of something. We just show up to document it.&rdquo;
        </p>
      </blockquote>

      {/* EVENTS */}
      <div className="mb-14">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 flex items-center gap-3 mb-6">
          What&apos;s Happening
          <span className="flex-1 h-px bg-zinc-800" />
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Northgate Events</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Game days. Themed bar nights. Live music. DJ sets. Block parties. Northgate&apos;s event calendar is relentless — something&apos;s always going down. The district goes from 0 to 100 on any given Thursday, and the weekend never really ends until Sunday afternoon.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Northgate TV covers events in real time — from the pre-game energy to the last call stragglers. Follow us on Instagram for same-night drops or check our coverage section for recaps and previews.
        </p>
      </div>

      {/* PEOPLE */}
      <div className="mb-14">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 flex items-center gap-3 mb-6">
          The People
          <span className="flex-1 h-px bg-zinc-800" />
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Voices of Northgate</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          The bars are the backdrop. The people are the story. Northgate TV built its audience — 450K+ monthly views — on one thing: real conversations with real people on the street. Students, locals, bartenders, bouncers, visitors, regulars. The ones who make Northgate what it is.
        </p>
        <p className="text-gray-400 leading-relaxed mb-8">
          Our street interviews are the pulse of the district. Raw, unscripted, and genuinely entertaining. Browse our interview archive to see what people are actually saying about Northgate.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: "🎙️", label: "Street Interview" },
            { icon: "📸", label: "Night Coverage" },
            { icon: "🎬", label: "Event Recap" },
          ].map((item) => (
            <div key={item.label} className="bg-zinc-900 border border-zinc-800 rounded-xl aspect-[9/16] flex flex-col items-center justify-center gap-2">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest text-center px-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT NTV */}
      <div className="mb-14">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 flex items-center gap-3 mb-6">
          Who We Are
          <span className="flex-1 h-px bg-zinc-800" />
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Northgate TV — College Station&apos;s Local Media Platform</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Northgate TV isn&apos;t a bar guide. It&apos;s not a tourist site. It&apos;s a media platform built inside the district, for the district. Every photo was taken by someone who showed up. Every interview happened on the street. Every post is rooted in what&apos;s actually happening in College Station right now.
        </p>
        <p className="text-gray-400 leading-relaxed">
          That&apos;s why 450,000+ people tune in every month. And that&apos;s why local businesses come to us when they want to reach the people who actually go out in BCS.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center mb-14">
        <h2 className="text-xl font-bold text-white mb-3">Stay Plugged In to Northgate</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-7 leading-relaxed">
          Follow along for weekly drops, event coverage, street interviews, and everything happening on the gate — straight from the source.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://www.instagram.com/northgatetv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-mono tracking-widest uppercase px-6 py-3 rounded-lg transition-colors"
          >
            Follow on Instagram
          </a>
          <Link
            href="/#newsletter"
            className="border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white text-xs font-mono tracking-widest uppercase px-6 py-3 rounded-lg transition-colors"
          >
            Get the Weekly Drop
          </Link>
        </div>
      </div>

      {/* RELATED LINKS */}
      <div className="pt-8 border-t border-zinc-800">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-5">More from Northgate TV</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {relatedLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors block"
            >
              <div className="text-xs font-mono text-red-500 uppercase tracking-widest mb-1">{link.label}</div>
              <div className="text-sm text-zinc-300 font-semibold leading-snug">{link.title}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Northgate College Station — Nightlife, Bars, Events & The Culture",
            url: "https://northgatetv.com/northgate-college-station",
            description:
              "The insider guide to Northgate College Station — bars, nightlife, events, and street culture from Northgate TV.",
            publisher: {
              "@type": "Organization",
              name: "Northgate TV",
              url: "https://northgatetv.com",
              sameAs: ["https://www.instagram.com/northgatetv"],
            },
            about: {
              "@type": "Place",
              name: "Northgate District",
              address: {
                "@type": "PostalAddress",
                streetAddress: "North Gate Street",
                addressLocality: "College Station",
                addressRegion: "TX",
                postalCode: "77840",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.6186,
                longitude: -96.3407,
              },
            },
          }),
        }}
      />
    </div>
  );
}
