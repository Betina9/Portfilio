function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-16"
    >
      <div className="max-w-2xl">
        <p className="mb-3 text-lg font-medium text-pink-600">Hei, jeg er</p>

        <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-3xl">
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
          <a href="#projects">Se prosjektene mine</a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-800 tranition hover:bg-slate-100"
          >
            Kontakt meg
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
