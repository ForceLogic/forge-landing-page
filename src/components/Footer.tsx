"use client";
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Logo y Nombre */}
        <div className="flex items-center gap-3 mb-6 opacity-80 hover:opacity-100 transition-opacity">
          <Image 
            src="/logo.png" // Asegúrate que el nombre sea el correcto
            alt="Forge Logic Logo" 
            width={32} 
            height={32} 
          />
          <span className="text-white font-bold tracking-tighter text-lg">FORGE LOGIC</span>
        </div>

        {/* Eslogan Corto */}
        <p className="text-gray-500 text-sm mb-8 text-center max-w-xs">
          Forjando soluciones digitales de alto rendimiento con precisión artesanal.
        </p>

        {/* Links Rápidos (Placeholder para cuando tengas redes) */}
        <div className="flex gap-6 mb-10 text-gray-400 text-sm">
          <span className="hover:text-cyan-400 cursor-help transition-colors">LinkedIn</span>
          <span className="hover:text-cyan-400 cursor-help transition-colors">GitHub</span>
          <span className="hover:text-cyan-400 cursor-help transition-colors">Twitter (X)</span>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/5 pt-8 w-full">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            © {currentYear} Forge Logic. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;