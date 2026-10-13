import { Waveform } from "./Waveform";

export function Hero() {
  return (
    <section id="profil" className="hero">
      <div className="container hero-top">
        <h1 className="hero-name">
          Thibault
          <br />
          Cottel
        </h1>
        <p className="hero-role">
          Ingénieur audiovisuel et multimédia. Je travaille sur le signal, l'Intelligence Artificielle et le logiciel.
          J'aime créer de nouveaux outils et mener un projet de l'idée jusqu'à la démo.
        </p>
      </div>

      <Waveform />

      <div className="container hero-intro">
        <figure className="portrait">
          <img src="/photo.jpg" alt="Portrait de Thibault Cottel" width={420} height={494} />
        </figure>

        <div className="bio">
          <p>
            Diplômé de l'<strong>INSA Hauts-de-France</strong> en Audiovisuel et Multimédia, j'ai
            appris de nombreuses compétences en traitement du signal, programmation et conception de systèmes
            multimédias.
          </p>
          <p>
            Touche-à-tout, j'aime explorer de nouveaux domaines.
          </p>
          <p className="bio-status">
            <span className="status-dot" aria-hidden="true" />
            Je cherche un poste d'ingénieur en développement logiciel, IA, traitement du signal ou
            dans l'audiovisuel. Je suis disponible dès maintenant pour un poste en CDI ou CDD.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#projets">
              Voir mes projets
            </a>
            <a className="btn btn-ghost" href="/20260727_CV_Thibault.pdf" target="_blank" rel="noopener noreferrer">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
