"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Home, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

const Hero = ({ onExplore }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black font-sans">
      {/* Efectos de Iluminación de Fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Home size={14} />
            <span>Servicio Técnico a Domicilio</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] mb-10 tracking-tighter">
            TU PC AL <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
              100% DE POTENCIA
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-tight font-medium">
            Especialistas en optimización de hardware y software profesional. Mantenimiento preventivo, limpieza profunda y puesta a punto integral.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onExplore}
              className="px-10 py-5 bg-cyan-500 text-black font-black rounded-2xl shadow-[0_10px_30px_rgba(34,211,238,0.3)] hover:bg-white transition-all duration-300 flex items-center gap-3 group uppercase text-sm tracking-widest"
            >
              VER CATÁLOGO DE SERVICIOS 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <div className="flex items-center gap-3 px-8 py-5 border-2 border-white/10 rounded-2xl text-white font-bold text-sm bg-white/5 italic">
              <MapPin size={20} className="text-cyan-400" />
              <span>Tucumán - Alderetes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;