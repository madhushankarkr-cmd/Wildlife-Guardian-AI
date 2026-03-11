"use client";

export default function Dashboard() {
  return (
    <div className="space-y-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 p-2">

      {/* HERO */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-900 via-emerald-800 to-cyan-800 text-white px-14 py-24 shadow-2xl">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_60%)] opacity-30"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl font-extrabold tracking-tight leading-tight">
            Wildlife Guardian AI
          </h1>

          <p className="mt-8 text-lg text-green-100 leading-relaxed">
            Advanced AI-driven monitoring and predictive intelligence system
            built for forest departments and wildlife protection authorities.
          </p>

          <div className="mt-12 flex gap-6">
            <button className="bg-white text-green-900 px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition">
              Open Live Map
            </button>

            <button className="border border-white px-10 py-4 rounded-2xl hover:bg-white hover:text-green-900 transition">
              New Detection
            </button>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="grid md:grid-cols-4 gap-10">

        {[
          { title: "Animals Detected", value: "1,248", tone: "green" },
          { title: "Active Alerts", value: "12", tone: "red" },
          { title: "Monitoring Zones", value: "24", tone: "cyan" },
          { title: "AI Accuracy", value: "98.7%", tone: "green" },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative p-[2px] rounded-3xl bg-gradient-to-r from-green-400 to-cyan-400 shadow-md hover:shadow-xl transition"
          >
            <div className="bg-white rounded-3xl p-10">

              <p className="text-gray-500 text-sm tracking-wide uppercase">
                {item.title}
              </p>

              <h2
                className={`text-5xl font-bold mt-6 ${
                  item.tone === "green"
                    ? "text-green-700"
                    : item.tone === "red"
                    ? "text-red-600"
                    : "text-cyan-700"
                }`}
              >
                {item.value}
              </h2>

            </div>
          </div>
        ))}

      </section>


      {/* MAIN GRID */}
      <section className="grid lg:grid-cols-3 gap-12">

        {/* ACTIVITY */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-12 shadow-xl border border-gray-100">

          <h3 className="text-3xl font-bold text-green-800 mb-10">
            Recent Wildlife Activity
          </h3>

          <div className="space-y-6">

            {[
              { animal: "Tiger", zone: "Zone C", risk: "High" },
              { animal: "Elephant", zone: "Zone A", risk: "Moderate" },
              { animal: "Leopard", zone: "Zone B", risk: "Low" },
            ].map((event, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition"
              >
                <div>
                  <p className="text-lg font-semibold text-green-800">
                    {event.animal}
                  </p>
                  <p className="text-sm text-gray-500">
                    {event.zone}
                  </p>
                </div>

                <span
                  className={`px-5 py-2 rounded-full text-sm font-semibold ${
                    event.risk === "High"
                      ? "bg-red-500 text-white"
                      : event.risk === "Moderate"
                      ? "bg-yellow-400 text-black"
                      : "bg-green-600 text-white"
                  }`}
                >
                  {event.risk}
                </span>
              </div>
            ))}

          </div>
        </div>


        {/* AI PANEL */}
        <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-green-500 to-cyan-500 shadow-xl">
          <div className="bg-white rounded-3xl p-12">

            <h3 className="text-3xl font-bold text-green-800 mb-8">
              AI Insight Engine
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Model forecasts increased tiger activity in Zone C.
              Ranger deployment optimization recommended within 18 hours.
            </p>

            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-green-100 to-cyan-100">
              <p className="text-sm text-gray-600">
                Prediction Confidence
              </p>
              <p className="text-4xl font-bold text-green-800 mt-3">
                92%
              </p>
            </div>

          </div>
        </div>

      </section>


      {/* FOOTER STATEMENT */}
      <section className="rounded-3xl bg-gradient-to-r from-green-800 to-cyan-700 text-white p-20 text-center shadow-2xl">

        <h2 className="text-4xl font-bold">
          Intelligence. Protection. Sustainability.
        </h2>

        <p className="mt-8 text-green-100 max-w-3xl mx-auto text-lg">
          Empowering forest authorities with AI-driven risk detection,
          predictive analytics, and real-time operational control.
        </p>

      </section>

    </div>
  );
}