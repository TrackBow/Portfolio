const steps = [
  {
    kind: "Stage",
    title: "ISIA Lab, Université de Mons",
    text: "Architectures mémorielles et pipelines RAG pour un assistant intelligent destiné aux personnes déficientes visuelles.",
    links: [{ href: "/COTTEL_Thibault_R5A_2025-2026.pdf", label: "Rapport de stage" }],
  },
  {
    kind: "Stage",
    title: "LMI Audiovisuel",
    text: "Immersion dans l'audiovisuel professionnel et les infrastructures multimédias.",
    links: [],
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
