import "./globals.css";
import Navbar from "@/components/NavBar";
import "leaflet/dist/leaflet.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}