import { projects, funProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="bg-slate-50 px-6 py-28 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400">
            Prosjekter
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Noe av det jeg har bygget
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Her er noen av prosjektene jeg har laget underveis - fra de første
            prosjektene mine til nyere løsninger bygget med React og TypeScript.
          </p>
        </div>

        {/* Hovedprosjekter */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Morsomme prosjekter */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400">
              Sideprosjekter
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
              Morsomme prosjekter
            </h3>

            <p className="mt-3 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Noen av de litt mer lekne innleveringsprosjektene jeg har laget
              underveis
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {funProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
