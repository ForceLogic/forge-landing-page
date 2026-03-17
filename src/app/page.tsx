import Hero from "@/components/Hero";
import Services from "@/components/Services"; 
import LocationSection from "@/components/LocationSection"; // El nuevo componente de mapa
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* 1. Sección de Inicio con el nuevo enfoque de soporte */}
      <Hero />

      {/* 3. Ubicación y Cobertura (Mapa) */}
      <LocationSection />

      {/* 4. Cierre con redes y copyright */}
      <Footer />
    </main>
  );
}