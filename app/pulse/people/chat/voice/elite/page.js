// app/elite/page.js
import Link from "next/link";

export const metadata = {
  title: "Pantavion One · Elite",
};

export default function ElitePage() {
  return (
    <main className="pv-container py-12 space-y-4">
      <Link href="/" className="text-xs text-emerald-400 hover:underline">
        ← Back to Pantavion One
      </Link>

      <h1 className="text-3xl font-semibold">Elite</h1>
      <p className="text-sm text-slate-300">
        Special access, advanced tools and premium features for creators, teams and
        organizations.
      </p>
    </main>
  );
}
