const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    title: "Styling & design",
    skills: ["Tailwind CSS", "Material UI", "Figma"],
  },
  {
    title: "Verktøy & integrasjoner",
    skills: ["Git", "GitHub", "Gitea", "VS Code", "Vite", "Docker", "REST API"],
  },
];

function Skills() {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
        Teknologier og verktøy
      </h3>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          >
            <h4 className="font-bold text-slate-900 dark:text-white">
              {group.title}
            </h4>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-pink-50 px-3 py-1 text-sm text-pink-600 dark:bg-pink-950/40 dark:text-pink-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
