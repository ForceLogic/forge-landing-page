"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-black relative overflow-hidden">
      {/* Luz de fondo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Inicia tu <span className="text-cyan-400">Proyecto</span></h2>
          <p className="text-gray-400">Cuéntanos tu idea y la forjaremos con la mejor tecnología.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Nombre</label>
              <input 
                type="text" 
                placeholder="Ej. Juan Pérez"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Mensaje</label>
              <textarea 
                rows={4}
                placeholder="Cuéntanos sobre tu software, app o sitio web..."
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button className="md:col-span-2 w-full py-4 bg-cyan-500 text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all transform active:scale-95">
              Enviar Propuesta
              <Send size={18} />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400" />
              contacto@forgelogic.com
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-cyan-400" />
              Soporte 24/7
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;