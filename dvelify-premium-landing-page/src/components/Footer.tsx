export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 py-12 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" className="text-xl font-bold tracking-tighter text-white flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all duration-500">
          Dvelify<span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1"></span>
        </a>
        
        <p className="text-sm text-zinc-600 font-light tracking-wide">
          &copy; {currentYear} Dvelify. All rights reserved.
        </p>
        
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-zinc-600">
          <a href="#" className="hover:text-brand-green transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-brand-green transition-colors duration-300">Terms</a>
        </div>
      </div>
    </footer>
  );
}