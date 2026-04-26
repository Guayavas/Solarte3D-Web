import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Projects from "@/components/sections/Projects";
import VideoSection from "@/components/sections/VideoSection";
import Contact from "@/components/sections/Contact";
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Projects />
        <VideoSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
