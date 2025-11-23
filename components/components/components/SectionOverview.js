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
    <section className="py-10 px-6">
      <h3 className="text-2xl font-semibold mb-6">Pantavion Sections</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {sections.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-900 rounded-xl text-center border border-gray-700"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
