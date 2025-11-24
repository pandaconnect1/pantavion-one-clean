// app/chat/page.js
import Link from "next/link";

export const metadata = {
  title: "Pantavion One · Chat",
};

export default function ChatPage() {
  return (
    <main className="pv-container py-12 space-y-4">
      <Link href="/" className="text-xs text-emerald-400 hover:underline">
        ← Back to Pantavion One
      </Link>

      <h1 className="text-3xl font-semibold">Chat</h1>
      <p className="text-sm text-slate-300">
        Real-time conversations, groups and channels — with translation and AI
        assistance in the future.
      </p>
    </main>
  );
}
