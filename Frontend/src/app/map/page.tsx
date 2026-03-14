"use client";

<<<<<<< HEAD
import LeafletMap from "@/components/LeafletMap";
=======
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), { 
  ssr: false,
  loading: () => <div className="h-[600px] flex items-center justify-center bg-gray-100 rounded-3xl">Loading Satellite Map...</div>
});
>>>>>>> 2d54265 (feat: integrated Roboflow detection and Cohere intelligence reports)

export default function MapPage() {
  return (
    <div className="space-y-16">
<<<<<<< HEAD

      <section className="rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-cyan-700 text-white py-16 px-10 text-center">
        <h1 className="text-5xl font-extrabold">
          Wildlife Monitoring Map
        </h1>
        <p className="mt-6 text-green-100 text-lg">
          Real-time AI geographic tracking of wildlife.
        </p>
=======
      <section className="rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-cyan-700 text-white py-16 px-10 text-center">
        <h1 className="text-5xl font-extrabold">Wildlife Monitoring Map</h1>
        <p className="mt-6 text-green-100 text-lg">Real-time AI geographic tracking of wildlife.</p>
>>>>>>> 2d54265 (feat: integrated Roboflow detection and Cohere intelligence reports)
      </section>

      <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
        <LeafletMap />
      </div>
<<<<<<< HEAD

=======
>>>>>>> 2d54265 (feat: integrated Roboflow detection and Cohere intelligence reports)
    </div>
  );
}