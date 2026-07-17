import type { Project } from "../types/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>

      <p className="mt-3 text-slagte-600">{project.description}</p>

      <div className="mt-6 felx flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-slate-900 px-4 py-2 text-white"
        >
          Github
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
