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

              <div>
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
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
