"use client";

import { useState } from "react";

export default function AlertsPage() {
  const [filter, setFilter] = useState("All");

  const alerts = [
    { id: 1, zone: "Zone C", severity: "Critical", status: "Pending" },
    { id: 2, zone: "Zone A", severity: "High", status: "In Progress" },
    { id: 3, zone: "Zone B", severity: "Moderate", status: "Resolved" },
  ];

  const getColor = (level: string) => {
    if (level === "Critical") return "text-red-600";
    if (level === "High") return "text-orange-500";
    if (level === "Moderate") return "text-yellow-500";
    return "text-green-600";
  };

  return (
    <div className="space-y-20">

      {/* HEADER */}
      <section className="rounded-3xl bg-gradient-to-r from-red-900 via-black to-green-900 text-white py-16 px-10 shadow-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          <div>
            <h1 className="text-5xl font-extrabold">
              Wildlife Emergency Alert System
            </h1>
            <p className="mt-4 text-red-200 text-lg">
              Real-time monitoring & ranger deployment coordination.
            </p>
          </div>

          <select
            onChange={(e) => setFilter(e.target.value)}
            className="p-3 rounded-xl text-black"
          >
            <option>All</option>
            <option>Critical</option>
            <option>High</option>
            <option>Moderate</option>
            <option>Low</option>
          </select>

        </div>
      </section>

      {/* ALERT STATS */}
      <section className="grid md:grid-cols-4 gap-8">
        {[
          { title: "Critical Alerts", value: "2" },
          { title: "Active Deployments", value: "5" },
          { title: "Resolved Today", value: "12" },
          { title: "Avg Response Time", value: "14 min" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl shadow-md text-center border border-gray-100"
          >
            <p className="text-gray-500 text-sm">{item.title}</p>
            <h2 className="text-3xl font-bold text-red-700 mt-4">
              {item.value}
            </h2>
          </div>
        ))}
      </section>

      {/* MAIN GRID */}
      <section className="grid lg:grid-cols-3 gap-10">

        {/* ALERT FEED */}
        <div className="lg:col-span-2 space-y-6">

          {alerts
            .filter((a) => filter === "All" || a.severity === filter)
            .map((alert) => (
              <div
                key={alert.id}
                className="bg-white p-8 rounded-3xl shadow-md border border-gray-100"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-green-800">
                    {alert.zone}
                  </h3>
                  <span className={`font-semibold ${getColor(alert.severity)}`}>
                    {alert.severity}
                  </span>
                </div>

                <p className="mt-4 text-gray-600">
                  Status: <strong>{alert.status}</strong>
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <button className="px-6 py-2 bg-green-700 text-white rounded-xl">
                    Assign Ranger
                  </button>
                  <button className="px-6 py-2 bg-red-600 text-white rounded-xl">
                    Escalate
                  </button>
                  <button className="px-6 py-2 border border-gray-300 rounded-xl">
                    Mark Resolved
                  </button>
                </div>
              </div>
            ))}

        </div>

        {/* COMMAND PANEL */}
        <div className="space-y-8">

          {/* CONTACT PANEL */}
          <div className="bg-gradient-to-br from-green-800 to-cyan-700 text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-6">
              Forest Control Room
            </h3>

            <p>📞 Emergency: +91 1800-FOREST</p>
            <p className="mt-3">📧 forest-control@wildlife.ai</p>

            <button className="mt-6 w-full bg-white text-green-900 py-3 rounded-xl font-semibold">
              Notify All Rangers
            </button>
          </div>

          {/* DEPLOYMENT STATUS */}
          <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-green-800 mb-6">
              Deployment Zones
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>Zone A - 2 Rangers Active</li>
              <li>Zone B - 1 Ranger Active</li>
              <li>Zone C - 3 Rangers Active</li>
            </ul>
          </div>

        </div>

      </section>

    </div>
  );
}