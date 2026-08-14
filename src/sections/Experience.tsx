import { experiences } from "../data/experience";

type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative mt-8 border-l border-slate-200 pl-8 dark:border-slate-700">
      {items.map((experience) => (
        <article key={experience.id} className="relative pb-8 last:pb-0">
          <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-slate-50 bg-pink-500 dark:border-slate-900 dark:bg-pink-400" />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {experience.role}
                </h3>

                {experience.company && (
                  <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">
                    {experience.company}
                  </p>
                )}
              </div>

              <p className="shrink-0 text-sm font-medium text-pink-600 dark:text-pink-400">
                {experience.period}
              </p>
            </div>

            {experience.description && (
              <p className="mt-5 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
                {experience.description}
              </p>
            )}

            {experience.technologies.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-pink-950/40 dark:text-pink-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-white px-6 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">
            Erfaring
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Erfaring fra utvikling og arbeidslivet
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Jeg er tidlig i utviklerkarrieren, men har med meg flere års
            erfaring fra arbeidslivet.
          </p>
        </div>

        <div className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">
            Praksis
          </p>

          <ExperienceList items={experiences.development} />
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">
            Utdanning
          </p>

          <ExperienceList items={experiences.education} />
        </div>
      </div>
    </section>
  );
}

export default Experience;
