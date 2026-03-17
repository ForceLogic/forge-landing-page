"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Wind, 
  Settings, 
  MessageSquare, 
  DownloadCloud, 
  LucideIcon,
  CheckCircle2
} from 'lucide-react';

interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  tags: string[];
}

const services: Service[] = [
  {
    title: "Sistemas Operativos",
    desc: "Instalación y optimización de Windows/Linux para máximo rendimiento.",
    icon: Monitor,
    color: "bg-blue-100/50",
    tags: ["Formateo", "Drivers"]
  },
  {
    title: "Mantenimiento Pro",
    desc: "Limpieza profunda y cambio de pasta térmica (Artic Silver / Grizzly).",
    icon: Wind,
    color: "bg-emerald-100/50",
    tags: ["Térmica", "Limpieza"]
  },
  {
    title: "Software Suite",
    desc: "Instalación de herramientas profesionales: Office, AutoCAD, SolidWorks.",
    icon: DownloadCloud,
    color: "bg-indigo-100/50",
    tags: ["Engineering", "Design"]
  },
  {
    title: "Consultoría Tech",
    desc: "Asesoramiento personalizado para mejorar los componentes de tu equipo.",
    icon: MessageSquare,
    color: "bg-amber-100/50",
    tags: ["Upgrades", "Hardware"]
  }
];

const Solutions = () => {
  return (
    <section className="py-24 bg-[#E2E8F0] px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-[900] text-slate-800 tracking-tighter leading-none mb-6">
            SOPORTE <br />
            <span className="text-emerald-600">ESPECIALIZADO</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-xl">
            Desde la optimización de hardware hasta la suite de software más exigente. Mantenemos tu infraestructura al 100%.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => {
            const Icono = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F8FAFC] p-8 rounded-[2.5rem] border border-slate-300 shadow-sm hover:border-emerald-400 transition-all group"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <Icono size={28} className="text-slate-800 transition-transform group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-black text-slate-800 mb-2 tracking-tight uppercase">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium mb-6">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner de Acción Rápida */}
        <div className="mt-12 bg-slate-900 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">¿Necesitas mantenimiento urgente?</h4>
            <p className="text-slate-400 text-sm font-medium">Agenda una cita técnica para limpieza o instalación de software hoy mismo.</p>
          </div>
          <button className="relative z-10 px-8 py-4 bg-emerald-500 text-slate-900 font-black rounded-xl hover:bg-white transition-colors flex items-center gap-2 text-sm uppercase">
            Contactar Soporte
            <CheckCircle2 size={18} />
          </button>
          <div className="absolute right-0 top-0 opacity-10">
             <Settings size={200} className="translate-x-20 -translate-y-20 rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;