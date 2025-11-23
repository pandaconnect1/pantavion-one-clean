import { MainNav } from "@/components/MainNav";

export default function RoyalPage() {
  return (
    <>
      <MainNav />
      <main className="pv-container py-10 space-y-5 text-sm">
        <h1 className="text-2xl font-semibold mb-2 text-pantavion-gold">
          Royal Circle
        </h1>
        <p className="text-white/75">
          Διακριτικό επίπεδο για βασιλικές οικογένειες και ανώτατους θεσμικούς.
          Στόχος είναι η διατήρηση πολιτιστικής κληρονομιάς, η ασφαλής
          επικοινωνία και η υποστήριξη ανθρωπιστικών πρωτοβουλιών.
        </p>
        <p className="text-white/70">
          Δεν είναι χώρος επίδειξης· είναι πρακτικό εργαλείο οργάνωσης,
          συντονισμού και υποστήριξης, στο ίδιο ενιαίο οικοσύστημα με όλους
          τους υπόλοιπους ανθρώπους.
        </p>
      </main>
    </>
  );
}
