"use client";

import { useEffect, useState } from "react";

export default function DetectionPage() {
  const [image, setImage] = useState<string | null>(null);
  const [species, setSpecies] = useState("");
  const [risk, setRisk] = useState("");
  const [location, setLocation] = useState("");
  const [explanation, setExplanation] = useState("");
  const [markerColor, setMarkerColor] = useState("green");

  useEffect(() => {
    // Retrieve all data saved by the Upload page from LocalStorage
    setImage(localStorage.getItem("uploadedImage"));
    setSpecies(localStorage.getItem("species") || "Unknown");
    setRisk(localStorage.getItem("risk") || "0");
    setLocation(localStorage.getItem("location") || "Lat: 27.17, Lon: 78.08");
    setExplanation(localStorage.getItem("explanation") || "");
    setMarkerColor(localStorage.getItem("markerColor") || "green");
  }, []);

  return (
    <div className="space-y-16 pb-20">
      {/* HEADER SECTION */}
      <section className="rounded-3xl bg-gradient-to-r from-green-900 via-green-800 to-cyan-700 text-white py-16 px-10 text-center shadow-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight">
          AI Detection Results
        </h1>
        <p className="mt-4 text-green-100 text-lg">
          Real-time analysis complete. Review the ecological impact and suggested actions below.
        </p>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="grid lg:grid-cols-2 gap-12">
        
        {/* LEFT SIDE: UPLOADED IMAGE */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
            <span className="mr-2">📸</span> Uploaded Image
          </h2>
          <div className="overflow-hidden rounded-2xl border-4 border-gray-50 bg-gray-50">
            {image ? (
              <img
                src={image}
                alt="Uploaded Wildlife"
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
              />
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-400 italic">
                No image found in local storage.
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE: DETECTION METRICS & AI REPORT */}
        <div className="space-y-8">
          
          {/* STATS CARD */}
          <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-3xl shadow-xl border border-white">
            <h2 className="text-2xl font-bold text-green-800 mb-8 flex items-center">
              <span className="mr-2">📊</span> Analysis Metadata
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                <p className="text-xs text-gray-500 uppercase font-bold">Detected Species</p>
                <p className="text-xl font-extrabold text-green-700 capitalize">{species}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-100">
                <p className="text-xs text-gray-500 uppercase font-bold">Risk Score</p>
                <p className={`text-xl font-extrabold ${markerColor === 'red' ? 'text-red-600' : 'text-orange-500'}`}>
                  {risk}/100
                </p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-green-100 col-span-2">
                <p className="text-xs text-gray-500 uppercase font-bold">GPS Context</p>
                <p className="text-md font-semibold text-gray-700">{location}</p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between bg-green-700 text-white p-4 rounded-2xl">
              <span className="font-bold">AI Confidence Level</span>
              <span className="text-2xl font-black">92%</span>
            </div>
          </div>

          {/* AI REPORT CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-green-600">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
              <span className="mr-2">🌿</span> AI Conservation Intelligence Report
            </h3>
            <hr className="mb-6 border-gray-100" />
            <div className="whitespace-pre-wrap text-base text-gray-700 leading-relaxed max-h-[400px] overflow-y-auto pr-4 custom-scrollbar italic">
              {explanation || "Fetching detailed analysis from Cohere AI..."}
            </div>
            
            {/* ACTION FOOTER */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
              <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg">
                Alert Rangers
              </button>
              <button className="flex-1 border-2 border-green-700 text-green-700 py-3 rounded-xl font-bold hover:bg-green-50 transition">
                Log to Registry
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}