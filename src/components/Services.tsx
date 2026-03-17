"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Wind, Tool, HardDrive, ShieldCheck, Check } from 'lucide-react';

const services = [
  {
    title: "Mantenimiento Integral",
    price: "$15.000", // Precios de referencia, cámbiados a tu gusto
    desc: "Limpieza física profunda + Cambio de pasta térmica premium.",
    features: ["Limpieza de coolers", "Pasta Artic Silver 5", "Pruebas de estrés"],
    icon: Wind,
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Sistemas y Software",
    price: "$12.000",
    desc: "Instalación de OS y suites profesionales.",
    features: ["Windows 10/11 Pro", "Office LTSC", "AutoCAD / SolidWorks"],
    icon: Monitor,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Optimización Total",
    price: "$18.000",
    desc: "El combo definitivo para que tu PC vuele.",
    features: ["Mantenimiento físico", "Limpieza de software", "Servicio a domicilio"],
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-cyan-500/20"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">
            CATÁLOGO DE <span className="text-cyan-500">SERVICIOS</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto">
            Transparencia total. Elige el servicio que necesitas para tu estación de trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col group relative overflow-hidden"
            >
              {/* Fondo decorativo */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative z-10">
                <item.icon className="text-cyan-400 mb-6" size={40} />
                <h3 className="text-2xl font-black text-white mb-2 uppercase">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                
                <div className="text-4xl font-black text-white mb-8">
                   {item.price} <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Base</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {item.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-300 uppercase tracking-tight">
                      <Check size={14} className="text-cyan-500" /> {f}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 bg-white/10 hover:bg-cyan-500 hover:text-black text-white font-black rounded-xl transition-all uppercase text-xs tracking-widest border border-white/10 group-hover:border-transparent">
                  Pedir Turno
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;