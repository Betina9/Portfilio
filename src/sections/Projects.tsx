import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
          Prosjekter
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
          Noen av prosjektene mine
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
