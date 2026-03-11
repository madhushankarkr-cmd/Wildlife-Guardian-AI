"use client";

import { useState } from "react";
import HeatMapLayer from "@/components/HeatMapLayer";

export default function HeatmapPage() {
  const [range, setRange] = useState("7D");

  return (
    <div className="space-y-16">

      {/* HEADER */}
      <section className="rounded-3xl bg-gradient-to-r from-black via-green-900 to-cyan-900 text-white py-16 px-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          <div>
            <h1 className="text-5xl font-extrabold">
              AI Risk Heat Intelligence
            </h1>
            <p className="mt-4 text-green-200 text-lg">
              Predictive wildlife density modeling & risk forecasting.
            </p>
          </div>

          {/* Time Filter */}
          <div className="flex gap-3">
            {["24H", "7D", "30D"].map((item) => (
              <button
                key={item}
                onClick={() => setRange(item)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  range === item
                    ? "bg-white text-green-900"
                    : "border border-white text-white hover:bg-white hover:text-green-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* MAIN GRID */}
      <section className="grid lg:grid-cols-4 gap-10">

        {/* HEATMAP */}
        <div className="lg:col-span-3 relative bg-black rounded-3xl shadow-2xl p-4 overflow-hidden">

          <HeatMapLayer />

          {/* LEGEND */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
            <h4 className="text-sm font-semibold mb-2">Risk Intensity</h4>
            <div className="h-3 w-40 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 rounded-full"></div>
            <div className="flex justify-between text-xs mt-2">
              <span>Low</span>
              <span>Moderate</span>
              <span>High</span>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-8">

          {/* FILTER CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-green-800 mb-6">
              Filter Controls
            </h3>

            <div className="space-y-4">
              <select className="w-full p-3 rounded-xl border">
                <option>All Species</option>
                <option>Tiger</option>
                <option>Elephant</option>
                <option>Leopard</option>
              </select>

              <select className="w-full p-3 rounded-xl border">
                <option>All Zones</option>
                <option>Zone A</option>
                <option>Zone B</option>
                <option>Zone C</option>
              </select>

              <input
                type="range"
                min="0"
                max="100"
                className="w-full"
              />
            </div>
          </div>

          {/* LIVE ACTIVITY */}
          <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-3xl shadow-md">
            <h3 className="text-xl font-bold text-green-800 mb-6">
              Live Risk Activity
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Zone C</span>
                <span className="text-red-500 font-semibold">High</span>
              </div>
              <div className="flex justify-between">
                <span>Zone A</span>
                <span className="text-yellow-500 font-semibold">Moderate</span>
              </div>
              <div className="flex justify-between">
                <span>Zone B</span>
                <span className="text-green-600 font-semibold">Low</span>
              </div>
            </div>
          </div>

          {/* AI FORECAST */}
          <div className="bg-gradient-to-r from-green-800 to-cyan-700 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-4">
              AI Predictive Insight
            </h3>
            <p className="text-green-100">
              High-density movement predicted in central-west corridor.
              Suggest increasing ranger surveillance within 12–18 hours.
            </p>

            <div className="mt-6 bg-white/20 p-4 rounded-xl">
              <p className="text-sm">Prediction Confidence</p>
              <p className="text-3xl font-bold mt-2">94%</p>
            </div>
          </div>

        </div>

      </section>

      {/* FOOTER STATS */}
      <section className="grid md:grid-cols-4 gap-8">

        {[
          { title: "High Risk Zones", value: "4" },
          { title: "Moderate Risk", value: "7" },
          { title: "Low Risk", value: "13" },
          { title: "AI Model Accuracy", value: "97.2%" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl shadow-md text-center border border-gray-100"
          >
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h2 className="text-3xl font-bold text-green-800 mt-4">
              {item.value}
            </h2>
          </div>
        ))}

      </section>

    </div>
  );
}