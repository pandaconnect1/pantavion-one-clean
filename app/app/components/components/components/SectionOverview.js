import Link from "next/link";

const coreSections = [
  {
    slug: "pulse",
    title: "Pulse",
    description:
      "Ζωντανή καρδιά του κόσμου: ροές γεγονότων, trends, alerts, real-time signals."
  },
  {
    slug: "people",
    title: "People",
    description:
      "Προφίλ ανθρώπων, ρόλοι, σχέσεις, οικογένεια, επαγγέλματα – global graph."
  },
  {
    slug: "chat",
    title: "Chat",
    description:
      "Μηνύματα, ιστορίες, ιδιωτικά κανάλια και ομαδικά δωμάτια με ασφάλεια."
  },
  {
    slug: "voice",
    title: "Voice Translator",
    description:
      "Hands-free διερμηνέας φωνής με αυτόματη αναγνώριση γλώσσας."
  },
  {
    slug: "compass",
    title: "Compass",
    description:
      "Νευρικό σύστημα πλοήγησης: χάρτες ρόλων, πόλεων, ευκαιριών, κατευθύνσεων."
  },
  {
    slug: "mind",
    title: "Mind",
    description:
      "Προσωπικό κέντρο γνώσης, ιδεών, στόχων, βιβλιοθήκες, σημειώσεις."
  },
  {
    slug: "create",
    title: "Create",
    description:
      "Δημιουργία περιεχομένου, projects, media, marketplaces και συνεργασιών."
  },
  {
    slug: "elite",
    title: "Elite / Royal",
    description:
      "Διακριτική σφαίρα για υψηλού προφίλ άτομα, οργανισμούς και βασιλικές οικογένειες."
  }
];

export function SectionOverview() {
  return (
    <section className="py-12 border-b border-white/10">
      <div className="pv-container">
        <h2 className="text-xl font-semibold mb-2">The Seven Core Layers</h2>
        <p className="text-sm text-white/70 mb-6">
          Όλα όσα χρειάζεται ένας άνθρωπος, από την καθημερινότητα μέχρι την
          κορυφαία στρατηγική. Μία πλατφόρμα, πολλαπλά επίπεδα πρόσβασης.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreSections.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="border border-white/10 rounded-2xl p-4 hover:border-pantavion-primary transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-white/70">{s.description}</p>
              </div>
              <span className="mt-3 text-xs text-pantavion-primary">
                Open {s.title} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
