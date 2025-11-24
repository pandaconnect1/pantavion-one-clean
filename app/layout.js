
import './globals.css';

export const metadata = {
  title: "Pantavion One — Here We Are One",
  description:
    "Global unified platform for all humanity — Pulse · People · Chat · Voice · Compass · Mind · Create · Elite.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
