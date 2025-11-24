import Link from "next/link";

export const metadata = {
  title: "Pantavion One – Pulse",
};

export default function PulsePage() {
  return (
    <main className="pv-container py-10 space-y-4">
      <Link href="/" className="text-xs text-emerald-400 hover:underline">
        ← Back to Pantavion One
      </Link>

      <h1 className="text-3xl font-semibold">Pulse</h1>
      <p className="text-sm text-slate-300 max-w-2xl">
        Live heartbeat of global activity, feeds and real-time updates.
      </p>
    </main>
  );
}
