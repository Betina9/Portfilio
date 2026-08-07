function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      description: "Teknologier jeg bruker til å bygge moderne grensesnitt.",
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
      description: "Verktøy jeg bruker i utviklingsprosessen.",
      skills: ["Git", "GitHub", "Gitea", "VS Code", "Figma", "Docker", "Vite"],
    },
    {
      title: "Arbeidsområder",
      description: "Områder jeg er spesielt opptatt av i frontend-utvikling.",
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
            Teknologier, verktøy og arbeidsområder jeg har erfaring med gjennom
            prosjekter og frontend-utvikling.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
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
