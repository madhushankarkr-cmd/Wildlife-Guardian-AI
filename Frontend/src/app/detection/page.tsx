"use client";

import { useEffect, useState } from "react";

export default function DetectionPage() {
  const [image, setImage] = useState<string | null>(null);
  const [species, setSpecies] = useState("");
  const [risk, setRisk] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    setImage(localStorage.getItem("uploadedImage"));
    setSpecies(localStorage.getItem("species") || "");
    setRisk(localStorage.getItem("risk") || "");
    setLocation(localStorage.getItem("location") || "");
  }, []);

  return (
    <div className="space-y-16">

      <section className="rounded-3xl bg-gradient-to-r from-green-900 via-green-800 to-cyan-700 text-white py-16 px-10 text-center">
        <h1 className="text-5xl font-extrabold">
          AI Detection Results
        </h1>
      </section>

      <section className="grid lg:grid-cols-2 gap-12">

        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Uploaded Image
          </h2>
          {image && (
            <img
              src={image}
              alt="Uploaded"
              className="rounded-2xl w-full object-cover"
            />
          )}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-green-800 mb-8">
            Detection Details
          </h2>

          <div className="space-y-6 text-lg">
            <p><strong>Species:</strong> {species}</p>
            <p><strong>Risk:</strong> {risk}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>AI Confidence:</strong> 92%</p>

            <div className="bg-green-700 text-white p-6 rounded-xl mt-8">
              AI suggests increased ranger patrol in this zone.
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}