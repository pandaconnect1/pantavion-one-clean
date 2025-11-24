// app/voice/page.js
import Link from "next/link";

export const metadata = {
  title: "Pantavion One · Voice",
};

export default function VoicePage() {
  return (
    <main className="pv-container py-12 space-y-4">
      <Link href="/" className="text-xs text-emerald-400 hover:underline">
        ← Back to Pantavion One
      </Link>

      <h1 className="text-3xl font-semibold">Voice</h1>
      <p className="text-sm text-slate-300">
        Hands-free, real-time voice translator and communication hub — the core
        of your global conversations.
      </p>
    </main>
  );
}
