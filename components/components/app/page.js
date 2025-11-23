import MainNav from "../components/MainNav";
import Hero from "../components/Hero";
import SectionOverview from "../components/SectionOverview";

export default function HomePage() {
  return (
    <main className="pv-container py-10">
      <MainNav />
      <Hero />
      <SectionOverview />
    </main>
  );
}
