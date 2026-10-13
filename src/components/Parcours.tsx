const steps = [
  {
    kind: "Stage",
    title: "ISIA Lab, Université de Mons",
    text: "Recherche et développement d'architectures mémorielles et pipelines RAG pour un assistant intelligent destiné aux personnes déficientes visuelles.",
    links: [{ href: "https://web.umons.ac.be/isia/", label: "Site de l'ISIA Lab" }],
  },
  {
    kind: "Stage",
    title: "LMI Audiovisuel",
    text: "Immersion dans l'audiovisuel professionnel et les infrastructures multimédias en Bureau d'études.",
    links: [{ href: "https://www.lmi-av.com/fr", label: "Site de LMI Audiovisuel" }],
  },
  {
    kind: "Diplôme",
    title: "INSA Hauts-de-France",
    text: "Cycle préparatoire puis formation d'ingénieur en Audiovisuel et Multimédia.",
    links: [
      { href: "/plaquette-prepa.pdf", label: "Plaquette prépa" },
      { href: "/plaquette-avm.pdf", label: "Plaquette cycle ingénieur" },
    ],
  },
];

export function Parcours() {
  return (
    <section id="parcours" className="section">
      <div className="container">
        <h2 className="section-title">Parcours</h2>
        <ol className="timeline">
          {steps.map((step) => (
            <li key={step.title} className="timeline-item">
              <span className="timeline-kind">{step.kind}</span>
              <div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-text">{step.text}</p>
                {step.links.length > 0 && (
                  <p className="timeline-links">
                    {step.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">
                        {link.label} ↗
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
