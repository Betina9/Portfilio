import type { Project } from "../types/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden
        rounded-3xl
        border border-slate-200/80
        bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1.5
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:shadow-slate-950/40
      "
    >
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt=""
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-[1.03]
          "
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                bg-pink-50
                px-3 py-1
                text-xs font-medium
                text-pink-700
                dark:bg-pink-950/40
                dark:text-pink-300
              "
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1
              rounded-lg
              border border-slate-200
              px-3 py-2
              text-sm font-medium
              text-slate-700
              transition-all duration-200
              hover:border-pink-200
              hover:bg-pink-50
              hover:text-pink-600
              dark:border-slate-700
              dark:text-slate-300
              dark:hover:border-pink-900
              dark:hover:bg-pink-950/30
              dark:hover:text-pink-300
            "
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1
                rounded-lg
                bg-pink-600
                px-3 py-2
                text-sm font-medium
                text-white
                transition-all duration-200
                hover:bg-pink-700
              "
            >
              Se prosjekt
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
