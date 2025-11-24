// app/compass/page.js
import Link from "next/link";

export const metadata = {
  title: "Pantavion One — Compass",
};

export default function CompassPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 p-10">
      <Link
        href="/"
        className="text-sm text-emerald-400 hover:underline inline-block mb-8"
      >
        ← Back to Pantavion One
      </Link>

      <h1 className="text-4xl font-bold text-emerald-400 mb-4">Compass</h1>

      <p className="text-lg text-gray-300 max-w-2xl">
        Το Compass είναι η πυξίδα του Pantavion One: στόχοι, κατευθύνσεις,
        διαδρομές, προτεραιότητες, alerts. Σε βοηθά να ξέρεις πάντα πού
        βρίσκεσαι και προς τα πού πας.
      </p>
    </main>
  );
}
