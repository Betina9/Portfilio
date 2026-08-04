import { experiences } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p>Erfaring</p>

        <h2>Min erfaring</h2>

        <div>
          {experiences.map((experience) => (
            <article key={experience.id}>
              <p>{experience.period}</p>

              <h3>{experience.role}</h3>

              <p>{experience.company}</p>

              <p>{experience.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
