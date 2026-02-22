"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, ExternalLink } from 'lucide-react';

const services = [
  {
    title: "Desarrollo Web Premium",
    desc: "Sitios rápidos, seguros y optimizados para SEO usando Next.js 15.",
    icon: <Globe className="text-cyan-400" size={24} />,
  },
  {
    title: "Software a Medida",
    desc: "Soluciones robustas para automatizar procesos de tu negocio.",
    icon: <Code2 className="text-cyan-400" size={24} />,
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Título con animación */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Servicios <span className="text-cyan-400">Forjados</span></h2>
          <p className="text-gray-400">Calidad artesanal en cada línea de código.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-colors group"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}

          {/* Tarjeta de Proyecto en Funcionamiento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
               <ExternalLink size={40} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white italic">Live Project</h3>
            <p className="text-gray-300 text-sm mb-6">Explora un sistema de gestión real funcionando actualmente.</p>
            <a 
              href="https://tu-proyecto-actual.com" 
              target="_blank" 
              className="inline-block px-4 py-2 bg-cyan-500 text-black text-xs font-bold rounded-lg hover:bg-white transition-colors"
            >
              VISITAR SITIO
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;