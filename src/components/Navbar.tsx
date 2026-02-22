"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ExternalLink } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Forge Logic Logo" 
              width={40} 
              height={40}
              className="rounded-sm"
            />
            <span className="text-xl font-bold tracking-tighter text-white">
              FORGE <span className="text-cyan-400">LOGIC</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link>
            <Link href="#proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            <Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link>
            <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-all flex items-center gap-2">
              Cotizar Proyecto <ExternalLink size={16} />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white">
            <Menu size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;