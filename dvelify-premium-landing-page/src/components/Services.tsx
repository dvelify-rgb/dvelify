import React, { useRef, useState } from 'react';
import { Mic, Package, Presentation } from 'lucide-react';

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={`relative group bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 hover:border-brand-green/50 hover:shadow-[0_0_30px_rgba(0,255,102,0.1)] transition-colors duration-500 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
      <div style={{ transform: 'translateZ(30px)' }}>{children}</div>
    </div>
  );
};

export function Services() {
  const services = [
    {
      title: "AI Agents (Dveli)",
      description: "Custom AI agent structures meticulously designed to the exact requirements of your local business, featuring seamless WhatsApp integration for fully automated workflows.",
      icon: <Mic className="w-8 h-8 text-brand-green" />,
      tag: "Automation"
    },
    {
      title: "Startup Box",
      description: "A complete 'Business-in-a-Box' launchpad providing turnkey business models, core technical infrastructure, and day-one brand authority for rapid market entry.",
      icon: <Package className="w-8 h-8 text-brand-green" />,
      tag: "Launchpad"
    },
    {
      title: "Social Media & Brand Growth",
      description: "End-to-end content creation, including high-retention short-form video production and professional brand development tailored to your identity.",
      icon: <Presentation className="w-8 h-8 text-brand-green" />,
      tag: "Marketing"
    }
  ];

  return (
    <section id="services" className="py-32 bg-brand-black relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-brand-green uppercase mb-3">Core Offerings</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Engineered to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Scale.</span></h3>
          <p className="mt-6 text-zinc-400 max-w-2xl text-lg">We provide an elite suite of tools designed to automate, analyze, and accelerate your business growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <TiltCard key={index} className="flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-8 border border-brand-green/20">
                {service.icon}
              </div>
              <span className="text-xs font-bold text-brand-green tracking-wider uppercase mb-4">{service.tag}</span>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed font-light flex-grow">{service.description}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}