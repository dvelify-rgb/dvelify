import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-1.5 z-50">
          Dvelify<span className="w-2 h-2 rounded-full bg-brand-green mt-1"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block z-50">
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-brand-green text-black font-semibold text-sm hover:bg-[#00e65c] transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)] hover:shadow-[0_0_25px_rgba(0,255,102,0.5)]">
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-white tracking-tight">Services</a>
        <a href="#use-cases" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-white tracking-tight">Use Cases</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-white tracking-tight">Contact</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-8 px-8 py-4 rounded-full bg-brand-green text-black font-semibold text-lg hover:bg-[#00e65c] transition-all">
          Get Started
        </a>
      </div>
    </nav>
  );
}