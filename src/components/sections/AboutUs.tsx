'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Zap className="text-brand-yellow" size={32} />,
      title: 'Rapidez y Precisión',
      description: 'Entregamos tus proyectos en tiempo récord manteniendo los estándares más altos de detalle.'
    },
    {
      icon: <ShieldCheck className="text-brand-blue" size={32} />,
      title: 'Calidad Garantizada',
      description: 'Utilizamos materiales premium para asegurar que cada pieza sea duradera y funcional.'
    },
    {
      icon: <Heart className="text-brand-orange" size={32} />,
      title: 'Atención Personalizada',
      description: 'Te asesoramos en cada paso, desde el diseño hasta la selección del material ideal.'
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pasión por la <span className="text-brand-blue">Innovación Digital</span>
            </h2>
            <div className="space-y-4 text-foreground/70 text-lg">
              <p>
                En <strong>Solarte3D</strong>, no solo imprimimos objetos; materializamos sueños. Nuestro emprendimiento nació de la curiosidad técnica y la pasión por el diseño, evolucionando hasta convertirnos en referentes de la impresión 3D local.
              </p>
              <p>
                Ya sea que necesites una figura de colección única, un repuesto que ya no se fabrica, o un prototipo para tu negocio, estamos aquí para hacerlo realidad con tecnología de punta en FDM y Resina.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 p-6 rounded-2xl bg-background border hover:shadow-xl transition-shadow group"
              >
                <div className="shrink-0 p-4 rounded-xl bg-foreground/5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
