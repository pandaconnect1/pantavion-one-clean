import { MainNav } from "@/components/MainNav";
import { Hero } from "@/components/Hero";
import { SectionOverview } from "@/components/SectionOverview";

export default function HomePage() {
  return (
    <>
      <MainNav />
      <main>
        <Hero />
        <SectionOverview />
        <section className="py-12">
          <div className="pv-container text-sm text-white/70 space-y-4">
            <h2 className="text-lg font-semibold">
              A Platform Built for Centuries, Not Seasons
            </h2>
            <p>
              Το Pantavion One δεν είναι απλά άλλο ένα social app. Είναι
              αρχιτεκτονική ζωής για 10–15+ χρόνια, σχεδιασμένη για κλιμάκωση
              σε επίπεδο πλανήτη και για όλους – από παιδιά μέχρι
              αρχηγούς κρατών.
            </p>
            <p>
              Οι βασικές λειτουργίες είναι ανοιχτές για όλη την ανθρωπότητα.
              Πάνω από αυτές, ειδικά στρώματα Elite & Royal προσφέρουν
              επίπεδο ασφάλειας, διακριτικότητας και bespoke υποστήριξης που
              δεν παρέχεται πουθενά αλλού.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
