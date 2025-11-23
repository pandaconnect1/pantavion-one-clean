import { MainNav } from "@/components/MainNav";

export default function ElitePage() {
  return (
    <>
      <MainNav />
      <main className="pv-container py-10 space-y-5 text-sm">
        <h1 className="text-2xl font-semibold mb-2 text-pantavion-gold">
          Pantavion Elite Society
        </h1>
        <p className="text-white/75">
          Ένα προστατευμένο επίπεδο πάνω από το δημόσιο Pantavion. Σχεδιασμένο
          για ανθρώπους που διαχειρίζονται κράτη, μεγάλους οργανισμούς ή
          κρίσιμες αποστολές. Χωρίς διαφημίσεις, μόνο εμπιστοσύνη,
          διακριτικότητα και ακριβής πληροφόρηση.
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/70">
          <li>Ιδιωτικά encrypted κανάλια επικοινωνίας και συμβουλευτικής.</li>
          <li>Προσωποποιημένα dashboards με global κίνηση, ρίσκα, ευκαιρίες.</li>
          <li>
            Συνδυασμός ανθρώπινης ομάδας & AI για 24/7 στρατηγική υποστήριξη.
          </li>
        </ul>
        <p className="text-white/60">
          Η πρόσβαση είναι μόνο κατόπιν εξακρίβωσης και bespoke συμφωνίας.
          Καμία λειτουργία Elite δεν περιορίζει τα δικαιώματα των καθημερινών
          χρηστών – η πλατφόρμα μένει πάντα ανοιχτή για όλους.
        </p>
      </main>
    </>
  );
}
