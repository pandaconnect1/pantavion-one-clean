import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-pantavion-dark to-black">
      <div className="pv-container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-pantavion-primary mb-3">
            Pantavion One
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Here We Are One. <br /> For All Humanity.
          </h1>
          <p className="text-sm md:text-base text-white/70 mb-6">
            Μία ενιαία πλατφόρμα για όλους τους ανθρώπους, όλες τις γλώσσες,
            όλες τις γενιές. Από καθημερινούς ανθρώπους μέχρι ηγέτες και
            βασιλικές οικογένειες – ένα επίπεδο υπηρεσιών που δεν προσφέρεται
            πουθενά αλλού.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/pulse"
              className="px-5 py-2 rounded-full bg-pantavion-primary text-black text-sm font-medium hover:brightness-110 transition"
            >
              Enter Pantavion Pulse
            </Link>
            <Link
              href="/elite"
              className="px-5 py-2 rounded-full border border-pantavion-gold text-pantavion-gold text-sm hover:bg-pantavion-gold/10 transition"
            >
              Elite / Royal Access
            </Link>
          </div>
        </div>
        <div className="space-y-4 text-sm text-white/75">
          <div className="border border-white/10 rounded-2xl p-4">
            <h3 className="text-sm font-semibold mb-1">
              Live Voice Translator
            </h3>
            <p>
              Αμφίδρομη ζωντανή μετάφραση φωνής με auto-detect γλώσσας, για
              συναντήσεις, ταξίδια και παγκόσμια συνεργασία.
            </p>
          </div>
          <div className="border border-white/10 rounded-2xl p-4">
            <h3 className="text-sm font-semibold mb-1">
              Global Knowledge & People Graph
            </h3>
            <p>
              Neo4j-style γράφος γνώσης – άνθρωποι, οργανισμοί, πόλεις,
              πανεπιστήμια, έρευνα, όλα συνδεδεμένα σε μία ζωντανή πλατφόρμα.
            </p>
          </div>
          <div className="border border-white/10 rounded-2xl p-4">
            <h3 className="text-sm font-semibold mb-1">Elite Layer</h3>
            <p>
              Ιδιωτικά κανάλια, bespoke υπηρεσίες, discretion και παγκόσμια
              πρόσβαση για VIP, leaders και royal houses, πάντα πάνω από το
              βασικό κοινωνικό στρώμα.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
