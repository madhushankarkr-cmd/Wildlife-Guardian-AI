export default function AboutPage() {
  return (
    <div className="space-y-28">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-cyan-700 text-white py-24 px-10 text-center">
        
        <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Protecting Wildlife
          <span className="block text-cyan-300">With Intelligent AI</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-green-100 leading-relaxed">
          Wildlife Guardian AI combines artificial intelligence, predictive analytics,
          and environmental monitoring to safeguard endangered species and prevent
          human-wildlife conflict in real time.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-white text-green-800 font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition">
            Explore Dashboard
          </button>
          <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-green-800 transition">
            Learn More
          </button>
        </div>
      </section>


      {/* MISSION & VISION SECTION */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-800">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            To empower conservation teams with real-time AI detection, predictive
            forecasting, and data-driven intelligence that helps prevent ecological
            threats before they escalate.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-10 rounded-3xl shadow-md">
          <h2 className="text-3xl font-bold text-green-800">
            Our Vision
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            A sustainable future where artificial intelligence supports wildlife
            ecosystems and enables smarter environmental decision-making globally.
          </p>
        </div>

      </section>


      {/* CORE FEATURES */}
      <section>
        <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
          Core Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          <div className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 text-2xl">
              🐅
            </div>
            <h3 className="mt-6 text-xl font-semibold text-green-800">
              AI Wildlife Detection
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Advanced computer vision identifies species and unusual behavior
              patterns using camera trap inputs.
            </p>
          </div>

          <div className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700 text-2xl">
              📍
            </div>
            <h3 className="mt-6 text-xl font-semibold text-green-800">
              Risk Heatmap Analysis
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              AI-driven spatial mapping highlights high-risk zones and movement
              trends in dynamic environments.
            </p>
          </div>

          <div className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 text-2xl">
              🚨
            </div>
            <h3 className="mt-6 text-xl font-semibold text-green-800">
              Real-Time Alerts
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Instant notifications help authorities respond quickly to
              potential threats and unusual activity.
            </p>
          </div>

        </div>
      </section>


      {/* IMPACT SECTION */}
      <section className="bg-gradient-to-r from-green-700 to-cyan-600 text-white rounded-3xl py-20 px-12 text-center shadow-lg">
        
        <h2 className="text-4xl font-bold">
          Why Wildlife Guardian AI Matters
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed text-green-100">
          With increasing environmental challenges, conservation requires
          intelligent systems. Wildlife Guardian AI transforms raw data into
          actionable insights — enabling faster response, smarter patrol
          planning, and safer ecosystems.
        </p>

      </section>

    </div>
  );
}