export default function SectionOverview() {
  const sections = [
    "Pulse",
    "People",
    "Chat",
    "Voice",
    "Elite",
    "Compass",
    "Mind",
    "Create",
  ];

  return (
    <section className="pv-container pb-16">
      <h2 className="text-xl font-semibold mb-4">
        Pantavion Sections
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sections.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-white/5 py-3 px-4 text-center text-sm font-medium tracking-wide hover:border-emerald-400 hover:bg-emerald-400/10 transition-all cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
