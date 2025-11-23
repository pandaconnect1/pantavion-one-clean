import Link from "next/link";

const sections = [
  { slug: "", label: "Home" },

  { slug: "pulse", label: "Pulse" },
  { slug: "people", label: "People" },
  { slug: "chat", label: "Chat" },
  { slug: "voice", label: "Voice Translator" },
  { slug: "compass", label: "Compass" },
  { slug: "mind", label: "Mind" },
  { slug: "create", label: "Create" },

  { slug: "health", label: "Health" },
  { slug: "education", label: "Education" },
  { slug: "culture", label: "Culture" },
  { slug: "sports", label: "Sports" },
  { slug: "news", label: "News" },
  { slug: "economy", label: "Economy" },
  { slug: "travel", label: "Travel" },
  { slug: "family", label: "Family & Friends" },
  { slug: "business", label: "Work & Business" },
  { slug: "environment", label: "Environment" },
  { slug: "research", label: "Research & Universities" },
  { slug: "media", label: "Media & Streaming" },
  { slug: "events", label: "Events" },
  { slug: "faith", label: "Faiths" },
  { slug: "vr", label: "VR / AR" },
  { slug: "contacts", label: "Contacts" },

  { slug: "elite", label: "Elite Society" },
  { slug: "royal", label: "Royal Circle" }
];

export function MainNav() {
  return (
    <header className="border-b border-white/10 sticky top-0 z-40 backdrop-blur">
      <div className="pv-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight">
            Pantavion <span className="text-pantavion-primary">One</span>
          </span>
        </Link>
        <nav className="hidden md:flex flex-wrap gap-3 max-w-3xl justify-end">
          {sections.map((s) => (
            <Link
              key={s.slug || "home"}
              href={s.slug ? `/${s.slug}` : "/"}
              className="text-xs px-3 py-1 rounded-full border border-white/20 hover:border-pantavion-primary hover:text-pantavion-primary transition"
            >
              {s.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
