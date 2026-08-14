function Contact() {
  return (
    <section id="contact" className="bg-slate-50 px-6 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">
            Kontakt
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Ta gjerne kontakt
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Jeg er på utkikk etter nye muligheter innen frontend-utvikling. Har
            du lyst til å vite mer om meg eller det jeg har jobbet med, tar jeg
            gjerne en prat.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:betinao92@hotmail.com"
              className="rounded-xl bg-pink-600 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-400"
            >
              Send e-post
            </a>

            <a
              href="https://www.linkedin.com/in/betina-olsen-9077ab306"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-pink-300 hover:text-pink-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-pink-400 dark:hover:text-pink-400"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Betina9?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-pink-300 hover:text-pink-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-pink-400 dark:hover:text-pink-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
