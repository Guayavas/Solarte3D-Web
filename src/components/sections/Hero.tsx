'use client';

import { motion } from 'framer-motion';
import { Phone as WhatsApp, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Imagina en <span className="text-brand-blue">3D</span>,<br />
            Nosotros lo <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent">Creamos</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Transformamos tus ideas más complejas en objetos reales con la mayor precisión y calidad del mercado. Desde figuras únicas hasta repuestos industriales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-blue/20"
            >
              <WhatsApp size={20} />
              Contactar por WhatsApp
            </a>

            <a
              href="#contacto"
              className="px-8 py-4 rounded-full font-bold text-lg border border-foreground/10 hover:bg-foreground/5 transition-all"
            >
              Ver Redes Sociales
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#nosotros" className="animate-bounce block p-2">
            <ChevronDown size={32} className="text-foreground/30" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
