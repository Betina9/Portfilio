import { experiences } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
            Erfaring
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Erfaring og praksis
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Frontend-utvikling med fokus på React, TypeScript, brukeropplevelse
            og responsive løsninger.
          </p>
        </div>

        <div className="relative mt-12 border-l border-slate-200 pl-8">
          {experiences.map((experience) => (
            <article key={experience.id} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-slate-50 bg-pink-500" />

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {experience.role}
                    </h3>

                    <p className="mt-1 font-medium text-slate-700">
                      {experience.company}
                    </p>
                  </div>

                  <p className="shrink-0 text-sm font-medium text-pink-600">
                    {experience.period}
                  </p>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
