export function UseCases() {
  return (
    <section id="use-cases" className="py-32 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-3">Versatility</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Every Stage.</span></h3>
          <p className="mt-6 text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">Whether you are a local shop or a scaling enterprise, our custom tools adapt to your operational needs seamlessly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 lg:h-[650px]">
          {/* Startups */}
          <div className="md:col-span-2 md:row-span-2 bg-[#0a0a0a] rounded-3xl p-8 lg:p-12 border border-white/5 relative overflow-hidden group hover:border-brand-green/30 transition-colors duration-500 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-brand-green/10 transition-all duration-700"></div>
            
            <div className="relative z-10 w-full h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-bold tracking-wide border border-brand-green/20 mb-6">
                  Startups
                </div>
                <h4 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">Complete "Business-in-a-Box" Launchpad</h4>
                <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
                  Dvelify is the ultimate launch partner, taking individuals from an idea to a fully operational, professional brand equipped with next-generation AI and software tools.
                </p>
                
                <div className="space-y-6 lg:mb-0">
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0 shadow-[0_0_10px_#00FF66]"></div>
                    <div>
                      <h5 className="text-white font-semibold tracking-wide mb-1">Turnkey Business Models</h5>
                      <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">We provide fully validated, made-for-you business frameworks designed for rapid deployment and market entry.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0 shadow-[0_0_10px_#00FF66]"></div>
                    <div>
                      <h5 className="text-white font-semibold tracking-wide mb-1">Core Technical Infrastructure</h5>
                      <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">Immediate access to custom AI agents (Dveli) to handle your initial customer interactions, alongside robust SaaS tools tailored to your specific niche.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0 shadow-[0_0_10px_#00FF66]"></div>
                    <div>
                      <h5 className="text-white font-semibold tracking-wide mb-1">Day-One Brand Authority</h5>
                      <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">End-to-end digital setup, including high-retention short-form video production and professional brand development, ensuring you look like an established player from the moment you launch.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local Businesses */}
          <div className="md:col-span-1 md:row-span-1 bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 relative overflow-hidden group hover:border-brand-green/30 transition-colors duration-500">
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div>
                <span className="inline-flex px-3 py-1.5 rounded-full bg-white/5 text-zinc-300 text-xs font-bold tracking-wide border border-white/10 mb-6 uppercase">Local Businesses</span>
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Custom AI Structures</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">Deploy tailored AI agents structured entirely around the unique operational requirements and workflows of your local business.</p>
              </div>
            </div>
          </div>

          {/* Enterprises */}
          <div className="md:col-span-1 md:row-span-1 bg-[#0a0a0a] rounded-3xl p-8 lg:p-10 border border-white/5 relative overflow-hidden group hover:border-brand-green/30 transition-colors duration-500">
             <div className="relative z-10 flex flex-col h-full justify-center">
              <div>
                <span className="inline-flex px-3 py-1.5 rounded-full bg-white/5 text-zinc-300 text-xs font-bold tracking-wide border border-white/10 mb-6 uppercase">Enterprises</span>
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">Robust Internal Tools</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">Deploy comprehensive internal tools, robust data software, and custom AI integration tailored for massive operational scale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}