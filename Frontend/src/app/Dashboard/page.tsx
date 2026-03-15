export default function Dashboard() {
  return (
    /* We use a negative margin-top to pull it closer to the Navbar 
       and remove the max-w constraint to let the gradient breathe */
    <div className="w-full pb-20">
      
      {/* 1. HERO SECTION - BREAKING THE BOUNDARIES */}
      <div className="px-4 md:px-8">
        <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#114232] via-[#0F3D2E] to-[#0D3126] text-white p-12 lg:p-20 shadow-2xl mt-4">
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
              Wildlife Guardian AI
            </h1>
            <p className="text-xl md:text-2xl text-green-50/80 leading-relaxed mb-10 max-w-2xl">
              Advanced AI-driven monitoring and predictive intelligence system built 
              for forest departments and wildlife protection authorities.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#114232] px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all active:scale-95">
                Open Live Map
              </button>
              <button className="bg-transparent border-2 border-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
                New Detection
              </button>
            </div>
          </div>

          {/* This creates the 'glow' effect in the corner of your screenshot */}
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </section>
      </div>

      {/* 2. STATS GRID - ALIGNING WITH THE HERO */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-12">
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-2">Animals Detected</p>
            <h2 className="text-5xl font-black text-[#114232]">1,248</h2>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-2">Active Alerts</p>
            <h2 className="text-5xl font-black text-red-500">12</h2>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-2">Monitoring Zones</p>
            <h2 className="text-5xl font-black text-cyan-600">24</h2>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-2">AI Accuracy</p>
            <h2 className="text-5xl font-black text-green-500">98.7%</h2>
          </div>

        </section>
      </div>

    </div>
  );
}