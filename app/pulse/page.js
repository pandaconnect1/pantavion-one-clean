// app/pulse/page.js
import Link from "next/link";

export const metadata = {
  title: "Pantavion One · Pulse",
};

export default function PulsePage() {
  return (
    <main className="pv-container py-12 space-y-4">
      <Link href="/" className="text-xs text-emerald-400 hover:underline">
        ← Back to Pantavion One
      </Link>

      <h1 className="text-3xl font-semibold">Pulse</h1>
      <p className="text-sm text-white/70">
        Live heartbeat of the world – real-time activity, global feed, and more.
      </p>
    </main>
  );
}
