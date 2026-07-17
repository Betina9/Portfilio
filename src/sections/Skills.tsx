function Skills() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "REST API",
    "Responsive Design",
    "Figma",
    "Docker",
  ];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
          Kompetanse
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Teknologier jeg jobber med
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-pink-200 bg-pink-50 px-5 py-2 font-medium text-slate-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
