import { Mail, Phone, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-brand-black relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Form */}
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-3">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">Let's build the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Future.</span></h3>
              <p className="mt-6 text-zinc-400 font-light text-lg leading-relaxed max-w-md">Send us a message and our elite team will be in touch shortly to discuss your custom operational solution.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Full Name</label>
                  <input type="text" id="name" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-all placeholder:text-zinc-700 font-light" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email Address</label>
                  <input type="email" id="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-all placeholder:text-zinc-700 font-light" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500">Message</label>
                <textarea id="message" rows={5} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-all placeholder:text-zinc-700 resize-none font-light" placeholder="How can we help you scale?"></textarea>
              </div>
              <button type="submit" className="w-full py-4.5 rounded-xl bg-brand-green text-black font-bold text-lg hover:bg-[#00e65c] transition-all shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:shadow-[0_0_35px_rgba(0,255,102,0.4)] uppercase tracking-wide mt-2">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="lg:pl-16 lg:border-l border-white/5 space-y-12 h-full flex flex-col justify-center">
            <div>
              <h4 className="text-2xl font-bold text-white mb-10 tracking-tight">Direct Lines</h4>
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-[#0f0f0f] border border-white/5 flex items-center justify-center group-hover:border-brand-green/50 group-hover:bg-brand-green/5 transition-all duration-300">
                    <Mail size={22} className="text-zinc-500 group-hover:text-brand-green transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">Email</p>
                    <a href="mailto:dvelify@gmail.com" className="text-xl font-medium text-zinc-200 hover:text-brand-green transition-colors">dvelify@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-[#0f0f0f] border border-white/5 flex items-center justify-center group-hover:border-brand-green/50 group-hover:bg-brand-green/5 transition-all duration-300">
                    <Phone size={22} className="text-zinc-500 group-hover:text-brand-green transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">Phone</p>
                    <a href="tel:+91959294670" className="text-xl font-medium text-zinc-200 hover:text-brand-green transition-colors">+91 959294670</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-[#0f0f0f] border border-white/5 flex items-center justify-center group-hover:border-brand-green/50 group-hover:bg-brand-green/5 transition-all duration-300">
                    <Instagram size={22} className="text-zinc-500 group-hover:text-brand-green transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-1">Social</p>
                    <a href="https://www.instagram.com/dvelify/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-zinc-200 hover:text-brand-green transition-colors">@dvelify</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-brand-green/5 border border-brand-green/20 relative overflow-hidden mt-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-[40px] pointer-events-none"></div>
              <h5 className="text-brand-green font-bold text-lg mb-3 tracking-tight">Enterprise Support</h5>
              <p className="text-zinc-400 text-sm leading-relaxed font-light relative z-10">
                Looking for a fully customized AI node cluster or proprietary video rendering pipeline? Contact us directly for priority enterprise consultation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}