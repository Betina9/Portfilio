const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "JavaScript", "React", "TypeScript"],
  },
  {
    title: "Styling & design",
    skills: ["Tailwind CSS", "CSS", "Material UI", "Figma"],
  },
  {
    title: "Verktøy & integrasjoner",
    skills: ["Git", "GitHub", "Gitea", "VS Code", "Docker", "Vite", "REST API"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600 dark:text-pink-400">
            Kompetanse
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Teknologier og verktøy
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Teknologier og verktøy jeg har jobbet med i prosjektene mine.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700 dark:bg-pink-950/40 dark:text-pink-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
