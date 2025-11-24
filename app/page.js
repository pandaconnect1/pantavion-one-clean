// app/page.js
import MainNav from "../components/MainNav";
import Hero from "../components/Hero";
import SectionOverview from "../components/SectionOverview";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Global Navigation */}
      <MainNav />

      {/* Κεντρικό Hero */}
      <Hero />

      {/* Πλέγμα με τα sections */}
      <SectionOverview />
    </main>
  );
}
