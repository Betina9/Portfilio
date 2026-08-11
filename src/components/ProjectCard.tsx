import type { Project } from "../types/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-950/40">
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700 dark:bg-pink-950/40 dark:text-pink-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 transition hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400"
          >
            GitHub
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-700 transition hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
