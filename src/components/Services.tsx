"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Rocket, ExternalLink } from 'lucide-react';

const services = [
  {
    title: "Landing Pages de Alto Impacto",
    desc: "Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Ideales para lanzamientos de productos o servicios con una estética moderna y tiempos de carga ultra rápidos.",
    icon: <Layout className="text-cyan-400" size={28} />,
  },
  {
    title: "Sistemas de Gestión Personalizados",
    desc: "Dashboards y aplicaciones web para administrar ventas, inventarios o usuarios. Soluciones robustas con bases de datos en tiempo real para optimizar los procesos de tu negocio.",
    icon: <Database className="text-cyan-400" size={28} />,
  },
  {
    title: "MVP para Startups",
    desc: "Desarrollamos la primera versión funcional de tu idea de negocio (Minimum Viable Product). Enfocado en velocidad y escalabilidad para validar tu proyecto en el mercado real.",
    icon: <Rocket className="text-cyan-400" size={28} />,
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Servicios <span className="text-cyan-400">Especializados</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            "No solo escribimos código, forjamos herramientas que impulsan el crecimiento de tu empresa."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="mb-6 inline-block p-3 rounded-2xl bg-cyan-400/10 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Banner de invitación para servicios experimentales (Opcional/Sutil) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-3xl border border-dashed border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm italic">
            ¿Tienes un desafío diferente? <span className="text-white">Exploramos nuevas tecnologías</span> para encontrar la solución perfecta a tu medida.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;