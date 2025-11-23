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
    <section className="py-16">
      <h3 className="text-2xl font-semibold mb-6">Explore Pantavion</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {sections.map((s) => (
          <div
            key={s}
            className="p-4 rounded-xl border border-white/10 hover:border-white/40 transition cursor-pointer text-center"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
