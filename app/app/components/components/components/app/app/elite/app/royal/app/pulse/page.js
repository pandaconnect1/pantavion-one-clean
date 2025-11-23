import { MainNav } from "@/components/MainNav";

export default function PulsePage() {
  return (
    <>
      <MainNav />
      <main className="pv-container py-10 space-y-4 text-sm">
        <h1 className="text-2xl font-semibold mb-2">Pantavion Pulse</h1>
        <p className="text-white/70">
          Η ζωντανή καρδιά του Pantavion. Εδώ θα συγκεντρώνονται real-time
          ροές: γεγονότα, alerts, trends, κινήσεις πόλεων, συστημάτων,
          ανθρώπων.
        </p>
        <p className="text-white/60">
          Στη μελλοντική πλήρη υλοποίηση θα συνδέεται απευθείας με Neo4j
          γράφο, APIs, αισθητήρες και παγκόσμιες πηγές δεδομένων.
        </p>
      </main>
    </>
  );
}
