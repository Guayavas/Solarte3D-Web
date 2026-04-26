import Link from 'next/link';
import { ChevronLeft, Phone as WhatsApp, Music as TikTok, Video } from 'lucide-react';
import projectsData from '@/data/projects.json';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#proyectos"
            className="inline-flex items-center text-brand-blue hover:underline mb-8 gap-2"
          >
            <ChevronLeft size={20} />
            Volver al Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="rounded-3xl overflow-hidden border shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-4 w-fit">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-8">
                <h3 className="font-bold mb-3">Detalles Técnicos:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-foreground/5 px-4 py-2 rounded-xl text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/your-number?text=Hola, estoy interesado en el proyecto: ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                <WhatsApp size={20} />
                Consultar por este proyecto
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
