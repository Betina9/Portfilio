import Skills from "./Skills";

function About() {
  return (
    <section id="about" className="bg-slate-50 px-6 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">
              Om meg
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Jeg liker å bygge løsninger som føles enkle å bruke
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <p>
              Jeg er en nysgjerrig og detaljorientert frontend-utvikler som
              liker å forstå både hvordan en løsning fungerer og hvordan den
              oppleves for brukeren.
            </p>

            <p>
              Jeg trives godt med å jobbe selvstendig og kan bli veldig fokusert
              når jeg først setter meg inn i noe. Samtidig liker jeg å diskutere
              løsninger med andre, få nye perspektiver og lære av mennesker med
              mer erfaring enn meg.
            </p>

            <p>
              Det jeg liker aller best med frontend er kombinasjonen av kode,
              design og problemløsning. Jeg synes det er ekstra givende når jeg
              kan ta noe som virker komplisert og gjøre det enklere og mer
              naturlig å bruke.
            </p>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  );
}

export default About;
