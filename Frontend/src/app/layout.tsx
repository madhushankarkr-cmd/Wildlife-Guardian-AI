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
      {/* Changed bg to slate-50 for a more professional 'app' look */}
      <body className="bg-slate-50 text-gray-900 min-h-screen">
        <Navbar />
        {/* REMOVED max-w-7xl and px-6 from here. 
            Now pages can decide their own width. 
        */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}