// app/people/page.js
import Link from "next/link";

export const metadata = {
  title: "Pantavion One – People",
};

export default function PeoplePage() {
  return (
    <div className="py-10 px-6">
      <Link href="/" className="text-emerald-400 text-sm hover:underline">
        ← Back to Pantavion One
      </Link>

      <h1 className="text-3xl font-bold mb-4">People</h1>

      <p className="text-gray-300">
        Explore people, profiles, global communities, and connections.
      </p>
    </div>
  );
}
