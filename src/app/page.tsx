import Hero from "@/components/Hero";
import Services from "@/components/Services"; // Importamos el nuevo componente
import Contact from "@/components/Contact"; // 1. Importar
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Services />
      <Contact />
            <Footer />
    </main>
  );
}