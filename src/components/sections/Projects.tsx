'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import projectsData from '@/data/projects.json';

const Projects = () => {
  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestro Portfolio</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Explora algunos de nuestros trabajos más recientes. Versatilidad y calidad en cada categoría.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-background rounded-3xl overflow-hidden border shadow-sm hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300"
            >
              <Link href={`/proyectos/${project.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-foreground/5 px-2 py-1 rounded-md text-foreground/50">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
