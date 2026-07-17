import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: 1,
    title: "Captive Portal Builder",
    description: "Et adminverktøy for å bygge innloggingsportaler.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/...",
    liveUrl: "",
    image: "/images/portal.png",
  },

  {
    id: 2,
    title: "GenderWash",
    description: "Frontend for administrasjon av navnegjenkjenning.",
    technologies: ["React", "TypeScript", "Material UI"],
    githubUrl: "https://github.com/...",
    image: "/images/genderwash.png",
  },
];
