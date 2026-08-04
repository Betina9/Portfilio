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
            Erfaring fra frontend-utvikling med fokus på React, TypeScript,
            brukeropplevelse og responsive løsninger.
          </p>
        </div>

        <div className="mt-12 border-l border-slate-300 pl-8">
          {experiences.map((experience) => (
            <article key={experience.id} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-slate-50 bg-pink-500" />

              <p className="text-sm font-medium text-pink-600">
                {experience.period}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {experience.role}
              </h3>

              <p className="mt-1 font-medium text-slate-700">
                {experience.company}
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                {experience.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
