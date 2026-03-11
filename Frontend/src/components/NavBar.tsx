"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">
          Wildlife Guardian AI
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link href="/">Dashboard</Link>
          <Link href="/about">About</Link>
          <Link href="/upload">Uploads</Link>
          <Link href="/map">Map</Link>
          <Link href="/heatmap">Heatmap</Link>
          <Link href="/forecast">Forecast</Link>
          <Link href="/alerts">Alerts</Link>
          <Link href="/contacts">Contacts</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <Link href="/">Dashboard</Link>
          <Link href="/about">About</Link>
          <Link href="/upload">Uploads</Link>
          <Link href="/map">Map</Link>
          <Link href="/heatmap">Heatmap</Link>
          <Link href="/forecast">Forecast</Link>
          <Link href="/alerts">Alerts</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      )}
    </nav>
  );
}