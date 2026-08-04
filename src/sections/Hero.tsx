function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2"
    >
      <div>
        <p className="mb-3 text-lg font-medium text-pink-600">Hei, jeg er</p>

        <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
          Betina Olsen
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-700 md:text-3xl">
          Frontend-utvikler
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Jeg utvikler brukervennlige, tilgjengelige og responsive løsninger med
          fokus på god brukeropplevelse og tydelig design.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-pink-600 px-6 py-3 font-medium text-white transition hover:bg-pink-700"
          >
            Se prosjekter
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-800 transition hover:bg-slate-100"
          >
            Kontakt meg
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-pink-50">
          <p className="text-slate-400">Bilde / illustrasjon kommer her</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
