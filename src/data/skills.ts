export interface SkillGroup {
  id: string;
  label: string;
  /** Phrase courte affichée quand la catégorie est sélectionnée */
  blurb: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "langages",
    label: "Langages",
    blurb: "Du C bas niveau au Python pour l'IA et la data.",
    skills: ["Python", "C", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    id: "ia",
    label: "IA & données",
    blurb: "Pipelines RAG locaux, LLM et analyse de données.",
    skills: ["RAG", "LLM", "Ollama", "Machine learning", "Pandas", "NumPy"],
  },
  {
    id: "signal",
    label: "Signal & audio",
    blurb: "Le cœur de ma formation en audiovisuel et multimédia.",
    skills: ["Traitement du signal", "FFT", "SciPy", "Acoustique"],
  },
  {
    id: "web",
    label: "Web",
    blurb: "Interfaces et applications web, du prototype au déploiement.",
    skills: ["React", "Vite", "Tailwind CSS", "Streamlit", "API REST"],
  },
  {
    id: "graphique",
    label: "Embarqué & graphique",
    blurb: "Microcontrôleurs, rendu temps réel et jeux.",
    skills: ["ESP32", "OpenGL", "GLFW", "SDL2"],
  },
  {
    id: "outils",
    label: "Outils",
    blurb: "Versionner, collaborer, livrer.",
    skills: ["Git", "GitHub", "Netlify"],
  },
];
