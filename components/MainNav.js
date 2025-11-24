export default function MainNav() {
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
    <header className="border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="pv-container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-emerald-500/80" />
          <span className="text-lg font-semibold tracking-tight">
            Pantavion One
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-4 text-sm text-white/70">
          {sections.map((item) => (
            <button
              key={item}
              className="hover:text-white transition-colors duration-150"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
