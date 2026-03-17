"use client";
import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="ubicacion" className="bg-black py-24 px-6 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* BLOQUE IZQUIERDO: INFORMACIÓN */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
              COBERTURA EN <br />
              <span className="text-cyan-500">TUCUMÁN</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 border border-white/10 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1.5">Ubicación Central</h4>
                  <p className="text-slate-400 text-sm font-medium">Santiago del Estero 155, Alderetes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 border border-white/10 flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1.5">Horario Técnico</h4>
                  <p className="text-slate-400 text-sm font-medium">Lun a Vie: 09:00 - 19:00 | Sáb: 09:00 - 13:00</p>
                </div>
              </div>

              <div className="p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
                <p className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2.5 italic">Nota del Servicio</p>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  Realizo servicio técnico a domicilio en Alderetes y todo el Gran San Miguel de Tucumán. 
                </p>
              </div>

              <a 
                href="https://www.google.com/maps/dir//Santiago+del+Estero+155,+T4178+Alderetes,+Tucum%C3%A1n/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black font-black rounded-xl hover:bg-cyan-500 hover:text-white transition-all uppercase text-[11px] tracking-widest group"
              >
                <Navigation size={18} className="group-hover:translate-x-1 transition-transform" />
                ¿CÓMO LLEGAR?
              </a>
            </div>
          </div>

          {/* BLOQUE DERECHO: EL MAPA MEJORADO */}
          <div className="lg:col-span-7 h-[450px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111] relative p-2 shadow-2xl">
             {/* Marco decorativo superior */}
             <div className="absolute top-6 left-8 flex items-center gap-2 z-20">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Live Map View</span>
             </div>

             {/* Contenedor del Mapa */}
            <div className="absolute inset-3 rounded-[1.8rem] overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.228512140417!2d-65.1437156!3d-26.8001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d97f8c0f5f7%3A0x7d0a2f58e6d8a7c2!2sSantiago%20del%20Estero%20155%2C%20T4178%20Alderetes%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1710700000000!5m2!1ses-419!2sar" 
                  className="w-full h-full grayscale opacity-80 contrast-125"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                  allowFullScreen
                  loading="lazy" 
                ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;