import type { Project } from "../types/projects";
import EaserconImage from "../assets/Easercon.png";
import CraftsvillaImage from "../assets/Craftsvilla.png";
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
    title: "Craftsvilla",
    description:
      "Craftsvilla er en nettside for en virksomhet som fokuserer på kreativitet, samhold og avslapning for personer i alle aldre. I dette prosjektet har det hvert fokus på front- end.",
    technologies: ["HTML", "CSS"],
    githubUrl: "https://github.com/Betina9/Craftsvilla",
    liveUrl: "https://betina9.github.io/Craftsvilla/index.html",
    image: CraftsvillaImage,
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
