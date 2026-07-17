import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xm font-semibold uppercase tracking-widest text-pink-600">
          Prosjekter
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Noen av prosjektene jeg har jobbet med
        </h2>

        <div className="mt-10 grid gap-8 md:frid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
