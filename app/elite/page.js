// app/elite/page.js
import Link from "next/link";

export const metadata = {
  title: "Pantavion One — Elite",
};

export default function ElitePage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 p-10">
      <Link
        href="/"
        className="text-sm text-emerald-400 hover:underline inline-block mb-8"
      >
        ← Back to Pantavion One
      </Link>

      <h1 className="text-4xl font-bold text-emerald-400 mb-4">Elite</h1>

      <p className="text-lg text-gray-300 max-w-2xl">
        Premium spaces, high–impact work, στρατηγικές αποφάσεις, συνεργασίες
        κορυφής. Το Elite είναι ο χώρος για ανθρώπους και ομάδες που χτίζουν
        το επόμενο επίπεδο.
      </p>
    </main>
  );
}
