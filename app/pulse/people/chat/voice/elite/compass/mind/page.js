// app/mind/page.js
import Link from "next/link";

export const metadata = {
  title: "Pantavion One · Mind",
};

export default function MindPage() {
  return (
    <main className="pv-container py-12 space-y-4">
      <Link href="/" className="text-xs text-emerald-400 hover:underline">
        ← Back to Pantavion One
      </Link>

      <h1 className="text-3xl font-semibold">Mind</h1>
      <p className="text-sm text-slate-300">
        Knowledge, learning, research and inner growth — libraries, AI tools and
        mental wellbeing hubs in one place.
      </p>
    </main>
  );
}
