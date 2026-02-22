"use client";
import React from 'react';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Efectos de fondo: Gradientes de profundidad */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold mb-8 animate-pulse">
            <Sparkles size={14} />
            <span className="tracking-widest uppercase">Forge Logic Factory</span>
          </div>
          
          {/* Título Principal */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-tight">
            TRANSFORMAMOS IDEAS <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
              EN CÓDIGO SÓLIDO
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            Software Factory especializada en soluciones de alto rendimiento. 
            Forjamos el futuro digital de tu empresa con ingeniería de vanguardia.
          </p>

          {/* Botones con estilo premium */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg mx-auto">
            <button className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-black rounded-full font-black text-sm uppercase tracking-wider hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 group">
              Ver Portafolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/10 text-white rounded-full font-black text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center gap-2">
              <Terminal size={18} />
              Servicios
            </button>
          </div>

          {/* Stats rápidos o indicadores (Opcional para dar más 'cuerpo') */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Escalable</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">Next.js 15</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Tech Stack</p>
            </div>
            <div className="text-center hidden md:block">
              <p className="text-2xl font-bold text-white">Fast</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Performance</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;