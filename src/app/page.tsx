import Hero from "@/components/Hero";
import Services from "@/components/Services"; // Importamos el nuevo componente

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* 1. El Hero es lo primero que ve el usuario (Impacto) */}
      <Hero />

      {/* 2. Al bajar, el usuario se encuentra con los Servicios */}
      {/* Gracias a Framer Motion en el componente, aparecerán con animación */}
      <Services />

      {/* 3. Aquí podrías agregar en el futuro: <Projects />, <Contact />, etc. */}
      
      {/* Espacio extra temporal para que puedas probar el scroll */}
      <div className="h-20 bg-black" />
    </main>
  );
}