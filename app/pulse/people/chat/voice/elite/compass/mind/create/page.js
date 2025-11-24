// app/create/page.js
import Link from "next/link";

export const metadata = {
  title: "Pantavion One · Create",
};

export default function CreatePage() {
  return (
    <main className="pv-container py-12 space-y-4">
      <Link href="/" className="text-xs text-emerald-400 hover:underline">
        ← Back to Pantavion One
      </Link>

      <h1 className="text-3xl font-semibold">Create</h1>
      <p className="text-sm text-slate-300">
        A studio for everything you want to create — content, apps, experiences,
        businesses and more.
      </p>
    </main>
  );
}
