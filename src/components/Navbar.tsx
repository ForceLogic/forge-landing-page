"use client";
import React, { useState, useEffect } from 'react';
import { Wrench, Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto de transparencia al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform">
            <Wrench size={20} />
          </div>
          <span className="text-white font-[900] tracking-tighter text-xl uppercase italic">
            Forge<span className="text-cyan-500 italic">Logic</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-black text-white/60 uppercase tracking-[0.2em] hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button className="px-6 py-3 bg-white text-black rounded-xl font-[900] text-[10px] uppercase tracking-widest hover:bg-cyan-500 transition-all flex items-center gap-2 group">
            <MessageCircle size={14} className="group-hover:animate-bounce" />
            Solicitar Turno
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 flex flex-col p-8 gap-6 md:hidden animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-black text-white uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 bg-cyan-500 text-black rounded-xl font-black uppercase tracking-widest">
            WhatsApp Directo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;