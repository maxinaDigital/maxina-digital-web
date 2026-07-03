import { Background3D } from '@/components/Background3D';
import { ProcessStages } from '@/components/ProcessStages';
import { ScrollReveal } from '@/components/ScrollReveal';
import { GlassTiltPanel } from '@/components/GlassTiltPanel';
import { BrandMark } from '@/components/BrandMark';
import { Spotlight } from '@/components/Spotlight';

export const metadata = {
  title: 'Maxina Digital — Innovation in Healthcare Technology',
  description: 'Programas a medida para Médicos, Hospitales y Hoteles. Innovación futurista con confianza médica.',
};

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Aurora — drifting blurred color blobs, ported from the existing site */}
      <div className="aurora" aria-hidden="true">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>

      {/* 3D Background */}
      <Background3D />

      {/* Cursor-follow glow that illuminates the background */}
      <Spotlight />

      {/* Hero Section */}
      <section className="snap-section relative h-screen flex flex-col items-center justify-center px-4 md:px-0">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo */}
          <ScrollReveal delay={0.2}>
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-cyan-accent flex items-center justify-center shadow-glow">
                <BrandMark className="w-16 h-16" />
              </div>
            </div>
            <h1 className="font-display gradient-glow-text text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              Maxina Digital
            </h1>
            <p className="font-mono text-sm text-gray-primary uppercase tracking-widest mb-12">
              Innovation in Healthcare
            </p>
          </ScrollReveal>

          {/* Main Title */}
          <ScrollReveal delay={0.6}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Programas <span className="text-cyan-accent">a medida</span> para<br />
              Médicos, Hospitales y Hoteles
            </h2>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={1}>
            <p className="text-lg text-gray-primary mb-12 max-w-2xl mx-auto leading-relaxed">
              Diseñamos y construimos aplicaciones y sitios web pensados para el día a día
              de clínicas, hospitales y hoteles — con la seriedad que su negocio merece.
            </p>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={1.4}>
            <a
              href="#proceso"
              className="font-outfit font-semibold transition-all duration-300 rounded bg-blue-600 hover:bg-transparent text-white hover:text-cyan-400 border-2 border-blue-600 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,188,212,0.4)] px-12 py-5 text-base uppercase tracking-widest inline-block"
            >
              Conocer Nuestro Proceso
            </a>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
          <div className="font-mono text-xs text-cyan-accent uppercase tracking-widest mb-3">
            Scroll para explorar
          </div>
          <div className="text-2xl animate-bounce">↓</div>
        </div>
      </section>

      {/* Process Intro */}
      <section id="proceso" className="snap-section relative z-10 h-screen flex items-center justify-center px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Nuestro <span className="text-cyan-accent">Proceso</span>
            </h3>
            <p className="text-gray-primary text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Cada proyecto sigue un método probado de 6 etapas que asegura excelencia
              desde la concepción hasta el lanzamiento.
            </p>
            <div className="flex flex-col items-center">
              <div className="font-mono text-xs text-cyan-accent uppercase tracking-widest mb-3">
                Scroll para recorrer el proceso
              </div>
              <div className="text-2xl animate-bounce">↓</div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Process Section — full-viewport stages, one per scroll-snap */}
      <ProcessStages />

      {/* CTA Section */}
      <section id="cta" className="snap-section relative z-10 py-20 px-4 md:px-8 max-w-6xl mx-auto mt-20 min-h-screen flex items-center justify-center">
        <ScrollReveal>
          <GlassTiltPanel className="bg-gradient-to-r from-blue-600/5 to-cyan-400/5 border border-blue-600 rounded-lg p-12 text-center">
            <h4 className="font-display text-3xl font-bold mb-6">
              ¿Listo para transformar tu proyecto?
            </h4>
            <p className="text-gray-primary mb-8 max-w-xl mx-auto">
              Contáctanos hoy y descubre cómo Maxina Digital puede llevar tu visión
              al siguiente nivel.
            </p>
            <a
              href="/empresa/index.html"
              className="font-outfit font-semibold transition-all duration-300 rounded bg-transparent text-cyan-400 border-2 border-cyan-400 hover:shadow-[0_0_20px_rgba(0,188,212,0.6)] px-10 py-4 text-sm uppercase tracking-wider inline-block"
            >
              Conocer más
            </a>
          </GlassTiltPanel>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-600/20 py-12 px-4 md:px-8 mt-20">
        <div className="max-w-6xl mx-auto text-center text-gray-primary text-sm">
          <p>© 2026 Maxina Digital. Todos los derechos reservados.</p>
          <p className="mt-2">Innovación futurista con confianza médica.</p>
        </div>
      </footer>
    </div>
  );
}
