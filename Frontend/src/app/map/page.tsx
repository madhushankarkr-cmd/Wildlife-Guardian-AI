"use client";

import LeafletMap from "@/components/LeafletMap";

export default function MapPage() {
  return (
    <div className="space-y-16">

      <section className="rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-cyan-700 text-white py-16 px-10 text-center">
        <h1 className="text-5xl font-extrabold">
          Wildlife Monitoring Map
        </h1>
        <p className="mt-6 text-green-100 text-lg">
          Real-time AI geographic tracking of wildlife.
        </p>
      </section>

      <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
        <LeafletMap />
      </div>

    </div>
  );
}