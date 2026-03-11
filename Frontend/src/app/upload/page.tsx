"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function UploadPage() {
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-24">

      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-cyan-700 text-white py-20 px-10 text-center">
        <h1 className="text-5xl font-extrabold">
          AI Wildlife Detection Upload
        </h1>
        <p className="mt-6 text-green-100 max-w-3xl mx-auto text-lg">
          Upload wildlife images for AI-powered analysis, species recognition,
          and environmental risk assessment.
        </p>
      </section>

      {/* MAIN UPLOAD PANEL */}
      <section className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT - UPLOAD BOX */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">

          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Upload Wildlife Image
          </h2>

          {/* Drag & Drop */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="border-2 border-dashed border-green-400 rounded-2xl p-12 text-center hover:bg-green-50 transition cursor-pointer"
          >
            <p className="text-green-700 font-semibold">
              Drag & Drop Image Here
            </p>
            <p className="text-gray-500 mt-2">
              or click below to select
            </p>

            <input
              type="file"
              accept="image/*"
              className="mt-6"
              onChange={(e) =>
                e.target.files && handleImageChange(e.target.files[0])
              }
            />
          </div>

          {/* Image Preview */}
          {image && (
            <div className="mt-8">
              <p className="text-green-700 font-semibold mb-4">
                Image Preview:
              </p>
              <img
                src={image}
                alt="Preview"
                className="rounded-2xl shadow-lg max-h-72 w-full object-cover"
              />
            </div>
          )}

        </div>


        {/* RIGHT - AI METADATA FORM */}
        <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-10 rounded-3xl shadow-xl">

          <h2 className="text-3xl font-bold text-green-800 mb-8">
            Detection Details
          </h2>

          <form className="space-y-6">

            {/* Species Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Select Species
              </label>
              <select className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 outline-none">
                <option>Tiger</option>
                <option>Elephant</option>
                <option>Leopard</option>
                <option>Deer</option>
                <option>Other</option>
              </select>
            </div>

            {/* Risk Level Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Risk Level
              </label>
              <select className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-600 outline-none">
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>

            {/* Location Input */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter forest zone or GPS coordinates"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Additional Comments
              </label>
              <textarea
                rows={4}
                placeholder="Add notes about wildlife behavior or observations..."
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-cyan-600 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
  type="button"
  onClick={() => {
    if (!image) {
      alert("Please upload an image first");
      return;
    }

    // Save data in localStorage
    localStorage.setItem("uploadedImage", image);
    localStorage.setItem("species", "Tiger");
    localStorage.setItem("risk", "High");
    localStorage.setItem("location", "Zone-C");

    router.push("/detection");
  }}
  className="w-full bg-gradient-to-r from-green-700 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:scale-[1.02] transition shadow-lg"
>
  Analyze with AI
</button>

          </form>

        </div>

      </section>

    </div>
  );
}