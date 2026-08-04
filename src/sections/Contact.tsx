function Contact() {
  return (
    <section id="contact" className="bg-slate50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
            Kontakt
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Ta gjerne kontakt
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Har du lyst til å vite mer om meg eller prosjektene mine, er du
            velkommen til å ta kontakt.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto: betinao92@hotmail.com"
              className="rounded-lg bg-pink-600 px-6 py-3 font-medium text-white transition hover:bg-pink-700"
            >
              Send e-post
            </a>

            <a
              href="https://www.linkedin.com/in/betina-olsen-9077ab306"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-800 transition hover:bg-slate-100"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Betina9?tab=overview&from=2026-07-01&to=2026-07-15"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-800 transition hover:bg-slate-100"
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
