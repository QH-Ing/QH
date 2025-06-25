import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import PartnersSection from "@/components/PartnersSection";
import WhatsappButton from "@/components/WhatsappButton";
import Clients from "@/components/Clients";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section id="home" className="min-h-screen flex flex-col justify-center">
        <Hero />
      </section>
      <section id="socios" className="flex flex-col justify-center mt-20 mb-20">
        <PartnersSection />
      </section>
      <section id="sobre-nosotros" className="flex flex-col justify-center">
        <About />
      </section>
      <section id="servicios" className="flex flex-col justify-center"> 
        <Services />
      </section>
      <section id="contacto" className="flex flex-col justify-center scroll-mt-12">
        <Contact />
      </section>
      <section id="contacto" className="flex flex-col justify-center scroll-mt-12">
        <Clients />
      </section>
        <WhatsappButton />  
    </main>
  );
}
