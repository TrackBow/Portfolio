export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  color: string;
}

export const projectsData: Project[] = [
  {
    id: "01",
    title: "Projet VisIA",
    category: "Intelligence Artificielle & RAG",
    description: "Conception et développement d'une architecture mémorielle d'un assistant intelligent pour personnes déficientes visuelles. Conception et Optimisation d'un pipeline complet de Génération Augmentée par Récupération (RAG) hybride et local. L'objectif visé est de palier la nature amnésique des solutions d'intelligence artificielle actuelles.",
    tech: ["Python", "RAG", "IA", "LLM"],
    link: "/COTTEL_Thibault_R5A_2025-2026.pdf",
    color: "bg-amber-100",
  },
  {
    id: "02",
    title: "Booster",
    category: "Hardware & Systèmes",
    description: "Analyse et mesure de temps de réaction combinant une intégration ESP32 et une interface TypeScript.",
    tech: ["TypeScript", "ESP32", "C++"],
    link: "https://github.com/TrackBow",
    color: "bg-yellow-100",
  },
  {
    id: "03",
    title: "World Cup predictor",
    category: "Data & IA",
    description: "Prédiction de matchs de football basée sur des modèles de données et l'analyse statistique.",
    tech: ["Python", "Pandas", "Machine Learning"],
    link: "https://github.com/TrackBow/world-cup-predictor",
    color: "bg-lime-100",
  },
  {
    id: "04",
    title: "Live Sport Tracker",
    category: "Web & API",
    description: "Application temps réel de suivi de scores de matchs et de classements sportifs avec notifications personnalisées.",
    tech: ["Python", "Streamlit", "API Rest"],
    link: "https://github.com/TrackBow/Live-Sport-Tracker",
    color: "bg-emerald-100",
  },
  {
    id: "05",
    title: "Beach Drawing in C++",
    category: "Graphisme & Bas Niveau",
    description: "Génération procédurale et simulation graphique de tracés et de motifs artistiques.",
    tech: ["C++", "OpenGL", "Maths"],
    link: "https://github.com/TrackBow/Beach-Drawing-coded-in-C",
    color: "bg-teal-100",
  },
  {
    id: "06",
    title: "KNN",
    category: "Algorithmique",
    description: "Application en C et GLFW trouvant et affichant les k-plus proches voisins en temps réel.",
    tech: ["C", "GLFW", "OpenGL"],
    link: "https://github.com/TrackBow/KNearestNeighbors",
    color: "bg-sky-100",
  },
  {
    id: "07",
    title: "Audio Spectral Denoiser",
    category: "Traitement du Signal",
    description: "Algorithme basé sur la Transformée de Fourier Rapide pour la réduction de bruit stationnaire sur des flux audio.",
    tech: ["Python", "NumPy", "SciPy"],
    link: "https://github.com/TrackBow/Audio-Spectral-Denoiser",
    color: "bg-indigo-100",
  },
  {
    id: "08",
    title: "Breakout",
    category: "Jeux Vidéo",
    description: "Recréation du jeu d'arcade classique avec une gestion rigoureuse de la physique des collisions.",
    tech: ["C++", "SDL2"],
    link: "https://github.com/TrackBow/Breakout",
    color: "bg-violet-100",
  },
  {
    id: "09",
    title: "Culture Quiz",
    category: "Web App",
    description: "Application interactive de quiz culturel avec gestion des scores et des thématiques.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/TrackBow/Culture-quiz",
    color: "bg-pink-100",
  },
  {
    id: "10",
    title: "Portfolio",
    category: "Web Design",
    description: "Portfolio interactif et responsive développé avec React, Vite et Tailwind CSS pour présenter mes projets et compétences.",
    tech: ["React", "Vite", "Tailwind"],
    link: "#", 
    color: "bg-rose-100",
  },
];