"use client";
import React from 'react';
import { Wrench, Monitor, Home, MapPin, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* ICONOS DE SERVICIO: Con espaciado amplio (Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 mb-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col items-center gap-3">
            <Wrench className="text-cyan-400" size={22} />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Hardware</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Monitor className="text-cyan-400" size={22} />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Software</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Home className="text-cyan-400" size={22} />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Domicilio</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin className="text-cyan-400" size={22} />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Alderetes</span>
          </div>
        </div>

        {/* Logo y Nombre (Estilo Original) */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-black text-black text-xs">FL</div>
          <span className="text-white font-black tracking-tighter text-xl uppercase">FORGE LOGIC</span>
        </div>

        {/* Eslogan Actualizado (Soporte, no Software) */}
        <p className="text-gray-500 text-sm mb-10 text-center max-w-sm font-medium leading-relaxed">
          Especialistas en optimización de hardware profesional y puesta a punto integral de sistemas.
        </p>

        {/* Links de Contacto Directo */}
        <div className="flex gap-8 mb-12">
          <a href="#" className="text-gray-400 hover:text-emerald-400 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors">
            <Instagram size={16} /> Instagram
          </a>
        </div>

        {/* Copyright (Estilo Original) */}
        <div className="text-center border-t border-white/5 pt-10 w-full">
          <p className="text-gray-600 text-[10px] font-bold tracking-[0.4em] uppercase">
            © {currentYear} FORGE LOGIC • SERVICIO TÉCNICO PROFESIONAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;