"use client";
import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decoración de fondo: un aura de luz cian */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-medium mb-6 animate-fade-in">
          <Terminal size={14} />
          <span>Nivel 1: Institutional Landing Page</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
          TRANSFORMAMOS IDEAS <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            EN CÓDIGO SÓLIDO
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10">
          Software Factory especializada en soluciones de alto rendimiento. 
          Forjamos el futuro digital de tu empresa con tecnología de vanguardia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group">
            Ver Portafolio
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-black border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-all">
            Nuestros Servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;