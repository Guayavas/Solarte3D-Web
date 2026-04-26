import { Phone as WhatsApp, Music as TikTok, Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold text-brand-blue mb-2">Solarte3D</span>
            <p className="text-foreground/60 text-sm text-center md:text-left max-w-xs">
              Innovación y precisión en cada capa. Llevamos tus ideas al mundo físico con la mejor tecnología 3D.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4 text-foreground">Síguenos</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-brand-orange transition-colors" aria-label="TikTok">
                <TikTok size={24} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-brand-yellow transition-colors" aria-label="YouTube">
                <Video size={24} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-brand-blue transition-colors" aria-label="WhatsApp">
                <WhatsApp size={24} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Solarte3D. <br />
              Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Sutil Logo placeholder */}
        <div className="mt-8 pt-8 border-t border-foreground/5 flex justify-center">
          <div className="opacity-20 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
             <div className="w-12 h-12 bg-brand-blue/20 rounded-full flex items-center justify-center font-bold text-xs">
               S3D
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
