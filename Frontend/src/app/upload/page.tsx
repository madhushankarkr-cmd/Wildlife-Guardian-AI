"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UploadPage() {
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectedSpecies, setDetectedSpecies] = useState("");
  const [detectedRisk, setDetectedRisk] = useState("");
  
  // State for coordinates
  const [locationValue, setLocationValue] = useState("Fetching location...");
  const [coords, setCoords] = useState({ lat: 27.17, lon: 78.08 }); // Default fallback

  const router = useRouter();

  // EFFECT: Fetch Live GPS on Load
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lon = pos.coords.longitude.toFixed(4);
          setLocationValue(`Lat: ${lat}, Lon: ${lon}`);
          setCoords({ lat: parseFloat(lat), lon: parseFloat(lon) });
          
          // Save for Map Page
          localStorage.setItem("lastLat", lat);
          localStorage.setItem("lastLon", lon);
        },
        () => {
          setLocationValue("Location permission denied (Using Default)");
          localStorage.setItem("lastLat", "27.17");
          localStorage.setItem("lastLon", "78.08");
        }
      );
    } else {
      setLocationValue("Geolocation not supported");
    }
  }, []);

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
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-cyan-700 text-white py-20 px-10 text-center shadow-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight">
          AI Wildlife Detection Upload
        </h1>
        <p className="mt-6 text-green-100 max-w-3xl mx-auto text-lg leading-relaxed">
          Upload wildlife images for real-time AI analysis. Our system identifies species, 
          calculates survival risk, and provides professional conservation strategies.
        </p>
      </section>

      {/* MAIN UPLOAD PANEL */}
      <section className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT - UPLOAD BOX */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-green-800 mb-8 flex items-center">
            <span className="mr-3">📂</span> Image Source
          </h2>

          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className={`border-4 border-dashed rounded-3xl p-12 text-center transition-all cursor-pointer ${
              image ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-400 hover:bg-green-50'
            }`}
          >
            {!image ? (
              <>
                <p className="text-green-700 font-bold text-xl">Drag & Drop Image Here</p>
                <p className="text-gray-400 mt-2">or click below to select from files</p>
              </>
            ) : (
              <p className="text-green-600 font-bold">✓ Image Ready for AI Analysis</p>
            )}

            <input
              type="file"
              accept="image/*"
              className="mt-6 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
              onChange={(e) => e.target.files && handleImageChange(e.target.files[0])}
            />
          </div>

          {image && (
            <div className="mt-8 animate-in fade-in zoom-in duration-500">
              <p className="text-green-800 font-bold mb-4 flex items-center">
                ✨ Image Preview:
              </p>
              <img
                src={image}
                alt="Preview"
                className="rounded-2xl shadow-2xl max-h-80 w-full object-cover border-4 border-white"
              />
            </div>
          )}
        </div>

        {/* RIGHT - AI METADATA FORM */}
        <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-10 rounded-3xl shadow-xl border border-white">
          <h2 className="text-3xl font-bold text-green-800 mb-8 flex items-center">
            <span className="mr-3">🧬</span> Detection Intelligence
          </h2>

          <form className="space-y-6">
            {/* Species Field */}
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wider">
                Detected Species
              </label>
              <select 
                value={detectedSpecies}
                onChange={(e) => setDetectedSpecies(e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-white bg-white/80 shadow-sm focus:ring-2 focus:ring-green-600 outline-none transition capitalize font-semibold text-green-800"
              >
                <option value="">{isAnalyzing ? "🧠 Detecting..." : "Select or Wait for AI"}</option>
                <option value="rhino">Rhino</option>
                <option value="elephant">Elephant</option>
                <option value="tiger">Tiger</option>
                <option value="buffalo">Buffalo</option>
                <option value="zebra">Zebra</option>
              </select>
            </div>

            {/* Risk Level Field */}
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wider">
                Assessed Risk Level
              </label>
              <select 
                value={detectedRisk}
                onChange={(e) => setDetectedRisk(e.target.value)}
                className={`w-full p-4 rounded-xl border-2 border-white bg-white/80 shadow-sm focus:ring-2 outline-none transition font-bold ${
                  detectedRisk === 'Critical' ? 'text-red-600' : 'text-green-700'
                }`}
              >
                <option value="">{isAnalyzing ? "⏳ Calculating..." : "AI Assessment"}</option>
                <option value="Low">Low Risk</option>
                <option value="Moderate">Moderate Risk</option>
                <option value="High">High Risk</option>
                <option value="Critical">Critical Alert</option>
              </select>
            </div>

            {/* Location Input (Dynamic GPS) */}
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2 uppercase tracking-wider">
                Live Location (GPS)
              </label>
              <input
                type="text"
                value={locationValue}
                readOnly
                className="w-full p-4 rounded-xl border-2 border-white bg-gray-100 text-gray-700 font-mono text-sm cursor-not-allowed font-bold"
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              disabled={!image || isAnalyzing}
              onClick={async () => {
                setIsAnalyzing(true);
                try {
                  const formData = new FormData();
                  const response_blob = await fetch(image!);
                  const blob = await response_blob.blob();
                  formData.append("file", blob, "wildlife_capture.jpg");

                  // CALL THE AI BACKEND with dynamic Coords
                  const api_res = await axios.post(
                    `http://127.0.0.1:8000/analyze-wildlife?lat=${coords.lat}&lon=${coords.lon}`,
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                  );

                  const data = api_res.data;

                  // Update the Form fields in real-time
                  setDetectedSpecies(data.primary_animal);
                  setDetectedRisk(data.risk_score > 70 ? "Critical" : "Moderate");

                  // Save results to localStorage
                  localStorage.setItem("uploadedImage", image!);
                  localStorage.setItem("species", data.primary_animal);
                  localStorage.setItem("risk", data.risk_score.toString());
                  localStorage.setItem("location", locationValue);
                  localStorage.setItem("explanation", data.explanation);
                  localStorage.setItem("markerColor", data.map_marker_color);

                  setTimeout(() => {
                    router.push("/detection");
                  }, 1200);

                } catch (err) {
                  console.error("Integration Error:", err);
                  alert("Backend Offline: Ensure your Python FastAPI server is running.");
                } finally {
                  setIsAnalyzing(false);
                }
              }}
              className={`w-full py-5 rounded-2xl font-black text-xl tracking-widest uppercase transition-all shadow-2xl ${
                isAnalyzing 
                ? "bg-gray-400 cursor-wait" 
                : "bg-gradient-to-r from-green-600 to-cyan-600 text-white hover:scale-[1.03] hover:from-green-500 hover:to-cyan-500"
              }`}
            >
              {isAnalyzing ? "⚙️ AI ANALYZING..." : "Analyze with AI"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}