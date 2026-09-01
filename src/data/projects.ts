import type { Project } from "../types/projects";
import EaserconImage from "../assets/Easercon.png";
import skjerOsloImage from "../assets/skjeroslo.png";
import PasswordImage from "../assets/password.png";
import KuleKattefaktaImage from "../assets/kattefakta.png";
import CookieImage from "../assets/Cookie.png";
import SteinSaksPapirImage from "../assets/stein_saks_papir.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Eastercon",
    description:
      "Dette er en nettside for et convention, Eastercon. Her er det gjort fokus på CSS- animation, Transition og transform.",
    technologies: ["HTML", "CSS"],
    githubUrl:
      "https://github.com/Betina9/Using-Animation--Transition---Transofrm",
    liveUrl:
      "https://betina9.github.io/Using-Animation--Transition---Transofrm/",
    image: EaserconImage,
  },

  {
    id: 2,
    title: "SkjerOslo",
    description:
      "SkjerOslo er en event-app laget i React og TypeScript for å gjøre det enkelt å finne ting som skjer i Oslo. Brukeren kan søke og filtrere arrangementer, se detaljer og lagre favoritter i Mine planer. Prosjektet har fokus på UX, universell utforming og responsivt design.",
    technologies: ["React", "Typescript", "TailwindCSS"],
    githubUrl: "https://github.com/Betina9/skjer-oslo.git",
    liveUrl: "https://betina9.github.io/skjer-oslo/",
    image: skjerOsloImage,
  },

  {
    id: 3,
    title: "Password maker",
    description:
      "Password maker er en egen side som lager et sikkert og unikt passord til deg for å sikre din/ dine profiler.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Betina9/PasswordMaker.git",
    liveUrl: "https://betina9.github.io/PasswordMaker/",
    image: PasswordImage,
  },
];

export const funProjects: Project[] = [
  {
    id: 4,
    title: "Kule kattefakta",
    description:
      "Når du trykker på en ny kul kattefakta vil katten lage et kattemjau. Et prosjekt som bruker et API for å hente data.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl:
      "https://github.com/Betina9/Javascript-Advanced-Oppgave-3-API-oppgave.git",
    liveUrl:
      "https://betina9.github.io/Javascript-Advanced-Oppgave-3-API-oppgave/",
    image: KuleKattefaktaImage,
  },

  {
    id: 5,
    title: "Cookie consent",
    description:
      "En shop med en cookie consent som tuller med å selge informasjonen din videre",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Betina9/cookie-consent.git",
    liveUrl: "https://betina9.github.io/cookie-consent/",
    image: CookieImage,
  },

  {
    id: 6,
    title: "Stein, Saks, Papir",
    description: "Lek Stein, saks eller papir mot datamaskinen.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Betina9/Stein_Saks_Papir.git",
    liveUrl: "https://betina9.github.io/Stein_Saks_Papir/",
    image: SteinSaksPapirImage,
  },
];
