import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { UseCases } from './components/UseCases';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-green selection:text-black overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <UseCases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}