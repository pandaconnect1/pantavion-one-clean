export default function MainNav() {
  return (
    <nav className="w-full py-4 border-b border-white/10 mb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">
          Pantavion One
        </h1>
        <div className="flex gap-4 text-sm text-white/80">
          <a href="/pulse">Pulse</a>
          <a href="/people">People</a>
          <a href="/chat">Chat</a>
          <a href="/voice">Voice</a>
        </div>
      </div>
    </nav>
  );
}
