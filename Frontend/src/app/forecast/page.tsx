"use client";

import { useState } from "react";

export default function ForecastPage() {
  const [range, setRange] = useState("72H");

  return (
    <div className="space-y-20">

      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-r from-green-900 via-green-800 to-cyan-700 text-white py-16 px-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          <div>
            <h1 className="text-5xl font-extrabold">
              AI Wildlife Forecast Engine
            </h1>
            <p className="mt-4 text-green-200 text-lg">
              Predictive modeling of wildlife movement & risk escalation.
            </p>
          </div>

          <div className="flex gap-3">
            {["24H", "72H", "7D"].map((item) => (
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

      {/* PREDICTION TREND VISUAL */}
      <section className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">

        <h2 className="text-3xl font-bold text-green-800 mb-8">
          Risk Escalation Trend ({range})
        </h2>

        {/* Fake Trend Graph Visual */}
        <div className="h-64 bg-gradient-to-r from-green-100 via-yellow-100 to-red-100 rounded-2xl flex items-center justify-center relative overflow-hidden">

          <div className="absolute w-full h-full bg-gradient-to-t from-green-400/20 to-red-500/20 animate-pulse"></div>

          <p className="text-green-900 font-semibold text-lg">
            AI Risk Probability Projection Curve
          </p>
        </div>

      </section>

      {/* ZONE FORECAST GRID */}
      <section className="grid md:grid-cols-3 gap-10">

        {[
          { zone: "Zone A", risk: "Low", trend: "+5%" },
          { zone: "Zone B", risk: "Moderate", trend: "+18%" },
          { zone: "Zone C", risk: "High", trend: "+34%" },
        ].map((zone, i) => (
          <div
            key={i}
            className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition border border-gray-100"
          >
            <h3 className="text-xl font-bold text-green-800">
              {zone.zone}
            </h3>

            <p className="mt-4 text-gray-600">
              Forecasted Risk Level:
            </p>

            <p
              className={`mt-2 text-2xl font-bold ${
                zone.risk === "High"
                  ? "text-red-500"
                  : zone.risk === "Moderate"
                  ? "text-yellow-500"
                  : "text-green-600"
              }`}
            >
              {zone.risk}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Movement Increase:
            </p>

            <p className="text-lg font-semibold text-green-700">
              {zone.trend}
            </p>
          </div>
        ))}

      </section>

      {/* AI EXPLANATION */}
      <section className="bg-gradient-to-r from-green-800 to-cyan-700 text-white p-14 rounded-3xl shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          AI Forecast Analysis
        </h2>

        <p className="text-green-100 leading-relaxed text-lg">
          Based on historical migration data, climate patterns, and
          real-time detection inputs, the AI model predicts a 34%
          probability increase of high-density wildlife movement
          in Zone C within the next {range}. Ranger deployment is recommended.
        </p>

        <div className="mt-10 bg-white/20 p-6 rounded-xl">
          <p className="text-sm">Prediction Confidence</p>
          <p className="text-4xl font-bold mt-2">96.4%</p>
        </div>

      </section>

      {/* SUMMARY METRICS */}
      <section className="grid md:grid-cols-4 gap-8">

        {[
          { title: "Projected High Risk Zones", value: "3" },
          { title: "Average Risk Growth", value: "18%" },
          { title: "Forecast Accuracy", value: "97.8%" },
          { title: "Next Peak Window", value: "18 Hrs" },
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