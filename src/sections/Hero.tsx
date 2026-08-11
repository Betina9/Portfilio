import profileImage from "../assets/Betinafacee.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-pink-50/70 to-white px-6 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 py-20 md:grid-cols-2">
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-pink-600 dark:text-pink-400">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl">
            Betina Olsen
          </h1>

          <h2 className="mt-5 max-w-xl text-2xl font-medium leading-tight text-slate-700 dark:text-slate-200 md:text-3xl">
            Jeg bygger intuitive og gjennomtenkte digitale opplevelser.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Jeg jobber med React, TypeScript og moderne frontend-utvikling, med
            særlig fokus på brukeropplevelse, tilgjengelighet og responsive
            løsninger.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-pink-600 px-6 py-3 font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-400"
            >
              Se prosjekter
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-pink-300 hover:text-pink-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-pink-400 dark:hover:text-pink-400"
            >
              Kontakt meg
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-pink-100 blur-3xl dark:bg-pink-900/20 md:h-96 md:w-96" />

          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-xl shadow-pink-100/50 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <img
              src={profileImage}
              alt="Betina Olsen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
