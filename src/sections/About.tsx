function About() {
  return (
    <section id="about" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
            Om meg
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Jeg liker å bygge løsninger som føles enkle å bruke
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            <p>
              Jeg er frontend-utvikler med erfaring innen React, TypeScript og
              moderne webutvikling.
            </p>

            <p>
              Jeg er spesielt opptatt av brukeropplevelse, tilgjengelighet og
              responsive løsninger som fungerer godt på både mobil og desktop.
            </p>

            <p>
              I prosjektene mine liker jeg å kombinere teknisk struktur med et
              tydelig og gjennomtenkt visuelt uttrykk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
