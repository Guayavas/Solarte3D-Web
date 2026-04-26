'use client';

import { motion } from 'framer-motion';

const VideoSection = () => {
  const videos = [
    {
      id: '1',
      title: 'Proceso de Impresión',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
      id: '2',
      title: 'Post-procesado de Figuras',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    }
  ];

  return (
    <section id="videos" className="py-24 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Míranos en Acción</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Descubre el fascinante mundo de la fabricación aditiva y cómo cuidamos cada detalle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="mt-6 text-xl font-bold text-center">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
