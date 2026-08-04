function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      title: "Verktøy",
      skills: ["Git", "GitHub", "Gitea", "VS Code", "Figma", "Docker", "Vite"],
    },
    {
      title: "Arbeidsområder",
      skills: ["REST API", "Responsive Design", "Accessibility", "UX/UI"],
    },
  ];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
            Kompetanse
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Teknologier og arbeidsområder
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Teknologier og verktøy jeg har erfaring med gjennom prosjekter og
            frontend-utvikling.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {skill}
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

export default Skills;
