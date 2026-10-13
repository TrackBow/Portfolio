import { projectsData } from "../data/project";
import type { Project } from "../data/project";

function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      <div className="project-row">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-more">
        <div className="project-more-inner">
          <p className="project-desc">{project.description}</p>
          <div className="project-meta">
            <ul className="project-tech" aria-label="Technologies">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {project.link && (
              <span className="project-cta">{project.linkLabel ?? "Voir le dépôt GitHub"} ↗</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export function ProjectList() {
  return (
    <section id="projets" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Projets</h2>
          <a className="text-link" href="https://github.com/TrackBow" target="_blank" rel="noopener noreferrer">
            Tout voir sur GitHub ↗
          </a>
        </div>

        <ul className="projects">
          {projectsData.map((project) => (
            <li key={project.id} id={`projet-${project.id}`} className="project">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`${project.title} : ${project.linkLabel ?? "voir le dépôt GitHub"}`}
                >
                  <ProjectContent project={project} />
                </a>
              ) : (
                <div className="project-link" tabIndex={0}>
                  <ProjectContent project={project} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
