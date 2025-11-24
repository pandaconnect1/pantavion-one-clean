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
      <p className="text-sm text-slate-300">
        Live heartbeat of Pantavion One — real-time activity, global feed, and what
        is happening across the platform.
      </p>
    </main>
  );
}
