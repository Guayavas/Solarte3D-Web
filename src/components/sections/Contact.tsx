'use client';

import { motion } from 'framer-motion';
import { Phone as WhatsApp, Music as TikTok, MessageSquare } from 'lucide-react';

const Contact = () => {
  const socials = [
    {
      name: 'WhatsApp',
      icon: <WhatsApp size={24} />,
      label: 'Chat Directo',
      href: 'https://wa.me/your-number',
      color: 'hover:bg-green-500',
      textColor: 'text-green-500'
    },
    {
      name: 'TikTok',
      icon: <TikTok size={24} />,
      label: 'Solarte3D_Vibes',
      href: '#',
      color: 'hover:bg-black dark:hover:bg-white dark:hover:text-black',
      textColor: 'text-foreground'
    }
  ];

  return (
    <section id="contacto" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 border rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[100px] -mr-32 -mt-32" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-6">
                <MessageSquare size={16} />
                ¿Tienes una idea?
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Hagámosla Realidad</h2>
              <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Estamos listos para asesorarte en tu próximo proyecto. Contáctanos por cualquiera de nuestros canales y recibe un presupuesto sin compromiso.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-8 rounded-3xl bg-background border hover:shadow-2xl hover:-translate-y-2 transition-all group ${social.color}`}
                  >
                    <div className={`mb-4 p-4 rounded-2xl bg-foreground/5 group-hover:bg-white/20 group-hover:text-white transition-colors ${social.textColor}`}>
                      {social.icon}
                    </div>
                    <span className="font-bold text-lg group-hover:text-white">{social.name}</span>
                    <span className="text-sm text-foreground/50 group-hover:text-white/70">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
