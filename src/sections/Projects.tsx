import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600 dark:text-pink-400">
            Prosjekter
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Noe av det jeg har jobbet med
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Et utvalg prosjekter hvor jeg har jobbet med frontend-utvikling,
            brukeropplevelse og moderne webteknologi.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
