export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  /** Texte affiché sur le lien (par défaut : "Voir le dépôt GitHub") */
  linkLabel?: string;
}

export const projectsData: Project[] = [
  {
    id: "visia",
    title: "VisIA",
    category: "IA & RAG",
    description:
      "Architecture mémorielle d'un assistant intelligent pour personnes déficientes visuelles : conception et optimisation d'un pipeline de génération augmentée par récupération (RAG) hybride et local, pour pallier la nature amnésique des assistants IA actuels.",
    tech: ["Python", "RAG", "LLM"],
    link: "/COTTEL_Thibault_R5A_2025-2026.pdf",
    linkLabel: "Lire le rapport de stage (PDF)",
  },
  {
    id: "booster",
    title: "Booster",
    category: "Embarqué",
    description:
      "Analyse et mesure de temps de réaction, combinant une intégration ESP32 et une interface TypeScript.",
    tech: ["TypeScript", "ESP32", "C++"],
    link: "https://github.com/TrackBow",
    linkLabel: "Voir mon GitHub",
  },
  {
    id: "audio-denoiser",
    title: "Audio Spectral Denoiser",
    category: "Traitement du signal",
    description:
      "Réduction de bruit stationnaire sur des flux audio, avec un algorithme basé sur la transformée de Fourier rapide.",
    tech: ["Python", "NumPy", "SciPy", "FFT"],
    link: "https://github.com/TrackBow/Audio-Spectral-Denoiser",
  },
  {
    id: "world-cup",
    title: "World Cup Predictor",
    category: "Data & ML",
    description:
      "Prédiction de résultats de matchs de football à partir de données historiques et d'analyse statistique.",
    tech: ["Python", "Pandas", "Machine learning"],
    link: "https://github.com/TrackBow/world-cup-predictor",
  },
  {
    id: "live-sport",
    title: "Live Sport Tracker",
    category: "Web & API",
    description:
      "Suivi en temps réel des scores et des classements, avec notifications personnalisées.",
    tech: ["Python", "Streamlit", "API REST"],
    link: "https://github.com/TrackBow/Live-Sport-Tracker",
  },
  {
    id: "knn",
    title: "KNN",
    category: "Algorithmique",
    description:
      "Application en C qui calcule et affiche en temps réel les k plus proches voisins d'un point.",
    tech: ["C", "GLFW", "OpenGL"],
    link: "https://github.com/TrackBow/KNearestNeighbors",
  },
  {
    id: "beach-drawing",
    title: "Beach Drawing",
    category: "Graphisme",
    description:
      "Génération procédurale et simulation graphique de tracés et de motifs artistiques.",
    tech: ["C++", "OpenGL"],
    link: "https://github.com/TrackBow/Beach-Drawing-coded-in-C",
  },
  {
    id: "breakout",
    title: "Breakout",
    category: "Jeu vidéo",
    description:
      "Recréation du casse-briques d'arcade, avec une gestion soignée de la physique des collisions.",
    tech: ["C++", "SDL2"],
    link: "https://github.com/TrackBow/Breakout",
  },
  {
    id: "culture-quiz",
    title: "Culture Quiz",
    category: "Web app",
    description:
      "Quiz de culture générale interactif, avec thèmes et suivi des scores.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/TrackBow/Culture-quiz",
  },
  {
    id: "portfolio",
    title: "Ce portfolio",
    category: "Web design",
    description:
      "Le site que vous lisez : React, Vite et TypeScript, une onde dessinée en canvas et un graphe de compétences en SVG.",
    tech: ["React", "Vite", "TypeScript"],
    link: "https://github.com/TrackBow/Portfolio",
  },
];
