import React from "react";

export function Skills() {
  const skillCategories = [
    {
      title: "Langages & Programmation",
      skills: [
        { 
          name: "Python", 
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
              <path fill="#387EB8" d="M63.922 2.002c-16.71 0-29.35 7.186-29.35 21.559v13.678h29.56v4.32H25.074C10.702 41.559 2 52.88 2 67.253c0 14.887 8.163 24.364 23.074 24.364h9.243v-12.82c0-14.887 12.316-27.202 27.203-27.202h28.536v-10.99c0-14.373-10.702-21.56-27.412-21.56zM37.585 16.505a6.002 6.002 0 11-.004 12.004 6.002 6.002 0 01.004-12.004z"/>
              <path fill="#FEE03B" d="M64.078 126c16.71 0 29.35-7.186 29.35-21.559V90.763h-29.56v-4.32h38.96c14.372 0 23.074-11.321 23.074-25.694 0-14.887-8.163-24.364-23.074-24.364h-9.243v12.82c0 14.887-12.316 27.202-27.203 27.202H37.896v10.99c0 14.373 10.702 21.56 27.412 21.56zM90.415 111.497a6.002 6.002 0 11.004-12.004 6.002 6.002 0 01-.004 12.004z"/>
            </svg>
          ) 
        },
        { 
          name: "C", 
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
              <path fill="#555555" d="M64 2C30.862 2 4 28.862 4 62s26.862 60 60 60 60-26.862 60-60S97.138 2 64 2zm24.545 84.545c-5.74 5.74-13.684 8.91-21.905 8.91-16.715 0-30.364-13.649-30.364-30.364 0-16.715 13.649-30.364 30.364-30.364 8.221 0 16.165 3.17 21.905 8.91l-6.364 6.364c-4.017-4.017-9.551-6.233-15.541-6.233-12.083 0-21.909 9.826-21.909 21.909 0 12.083 9.826 21.909 21.909 21.909 5.99 0 11.524-2.216 15.541-6.233l6.364 6.364z"/>
            </svg>
          ) 
        },
        { 
          name: "C++", 
          icon: "⚙️" 
        },
        { 
          name: "TypeScript", 
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
              <path fill="#3178C6" d="M2 2h124v124H2z"/>
              <path fill="#fff" d="M85.44 87.89c1.65 2.81 3.91 4.88 6.78 6.22 2.87 1.34 6.07 2.01 9.61 2.01 3.95 0 7.37-.68 10.27-2.05 2.9-1.37 5.09-3.35 6.58-5.94l-5.61-3.5c-1.07 1.95-2.5 3.44-4.28 4.47-1.78 1.03-3.87 1.55-6.27 1.55-2.31 0-4.32-.51-6.03-1.53-1.71-1.02-3.03-2.48-3.96-4.38-.93-1.9-1.4-4.13-1.4-6.68v-17.7h20.8v-7.3H85.44V40.2h-7.8v16.1h-11.4v7.3h11.4v20.12c0 2.21.32 4.16.96 5.87.64 1.71 1.63 3.19 2.94 4.4zm-45.74 8.3c4.78 0 8.91-.97 12.39-2.9 3.48-1.93 6.13-4.63 7.95-8.1l-5.89-3.6c-1.35 2.37-3.31 4.14-5.88 5.31-2.57 1.17-5.35 1.76-8.34 1.76-3.81 0-6.93-.84-9.36-2.52-2.43-1.68-3.65-4.11-3.65-7.29 0-2.31.74-4.28 2.22-5.91 1.48-1.63 3.63-2.97 6.45-4.02l7.53-2.81c4.54-1.69 8.01-3.9 10.41-6.63 2.4-2.73 3.6-6.19 3.6-10.38 0-4.99-1.89-9.05-5.67-12.18-3.78-3.13-8.87-4.7-13.27-4.7-4.1 0-7.82.85-11.16 2.55-3.34 1.7-5.96 4.15-7.86 7.35l5.52 3.6c1.37-2.22 3.25-3.9 5.64-5.04 2.39-1.14 5.04-1.71 7.95-1.71 3.44 0 6.27.76 8.49 2.28 2.22 1.52 3.33 3.73 3.33 6.63 0 2.11-.69 3.92-2.07 5.43-1.38 1.51-3.41 2.82-6.09 3.93l-7.56 2.82c-4.49 1.67-7.96 3.88-10.41 6.63-2.45 2.75-3.68 6.16-3.68 10.23 0 4.95 1.87 8.98 5.61 12.09 3.74 3.11 8.78 4.67 15.12 4.67z"/>
            </svg>
          ) 
        },
        { 
          name: "JavaScript", 
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
              <path fill="#F7DF1E" d="M2 2h124v124H2z"/>
              <path fill="#000" d="M69.59 89.27c2.08 1.25 4.51 2.01 7.4 2.01 3.51 0 6.1-1.63 6.1-4.77 0-3.31-2.61-4.49-7.06-6.42-4.63-2.01-10.59-4.77-10.59-11.83 0-6.19 4.94-10.58 12.18-10.58 4.29 0 7.9 1.34 10.66 3.43l-3.34 5.69c-2.08-1.25-4.43-2.01-7.07-2.01-2.92 0-4.8 1.34-4.8 3.76 0 2.51 1.76 3.59 6.26 5.59 4.88 2.18 11.39 4.86 11.39 12.42 0 6.77-5.36 11.16-13.3 11.16-5.1 0-9.45-1.59-12.43-3.76l3.3-5.75zM44.5 86.8c0 3.76.08 6.52.17 9.12H35.8l-.51-4.35h-.34c-1.92 2.85-5.7 4.77-10.1 4.77-7.23 0-12.35-5.27-12.35-13.3v-23.7h8.84v22.45c0 3.85 2.01 6.36 5.61 6.36 3.43 0 5.95-2.34 6.87-5.52.34-1.09.42-2.51.42-3.68V58.34h8.84V86.8z"/>
            </svg>
          ) 
        },
        { 
          name: "SQL", 
          icon: "🗄️" 
        },
        { 
          name: "Git & GitHub", 
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
              <path fill="#F05032" d="M117.7 54.7L73.3 10.3c-3.8-3.8-10-3.8-13.8 0L42.8 27.1l15.2 15.2c3.4-1.1 7.3-.3 9.9 2.3 2.6 2.6 3.4 6.5 2.3 9.9l14.7 14.7c3.4-1.1 7.3-.3 9.9 2.3 3.9 3.9 3.9 10.2 0 14.1-3.9 3.9-10.2 3.9-14.1 0-2.6-2.6-3.4-6.5-2.3-9.9L64.4 61.2V97.3c1.1.6 2.1 1.5 2.9 2.4 3.9 3.9 3.9 10.2 0 14.1-3.9 3.9-10.2 3.9-14.1 0-3.9-3.9-3.9-10.2 0-14.1.9-.9 1.9-1.7 2.9-2.3V61.1c-1.1-.6-2.1-1.4-2.9-2.3-2.6-2.6-3.4-6.5-2.3-9.9L37.7 33.7 10.3 61.1c-3.8 3.8-3.8 10 0 13.8l44.4 44.4c3.8 3.8 10 3.8 13.8 0l49.2-49.2c3.8-3.8 3.8-10 0-13.8z"/>
            </svg>
          ) 
        },
      ],
    },
    {
      title: "IA & Traitement des données",
      skills: [
        { name: "RAG & Mémoires", icon: "🧠" },
        { name: "Ollama", icon: "🦙" },
        { name: "NumPy / SciPy", icon: "🔬" },
      ],
    },
    {
      title: "Développement Web",
      skills: [
        { 
          name: "React", 
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
              <path fill="#61DAFB" d="M64 45.4C44 45.4 27.6 37 27.6 26.6S44 7.9 64 7.9s36.4 8.4 36.4 18.7S84 45.4 64 45.4zm0 37.2c20 0 36.4 8.4 36.4 18.7S84 120.1 64 120.1 27.6 111.7 27.6 101.3 44 82.6 64 82.6zm37.2-55.8c10.3 17.5 4.3 40.1-13.2 50.4-17.5 10.3-40.1 4.3-50.4-13.2-10.3-17.5-4.3-40.1 13.2-50.4 17.5-10.3 40.1-4.3 50.4 13.2z"/>
              <circle cx="64" cy="64" r="9.3" fill="#61DAFB"/>
            </svg>
          ) 
        },
        { 
          name: "Vite", 
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
              <path fill="#FFC928" d="M123.6 19.3L69.8 116c-1.8 3.1-6.2 3.1-8 0L8 19.3c-2.1-3.6 1-8 5.1-7.2l50.8 10.2c2.2.4 4.5.4 6.7 0l52.1-10.2c4.1-.8 7.2 3.6 5.1 7.2z"/>
              <path fill="#646CFF" d="M70.6 22.3L20.8 12.3l49.8 103.6L120.3 12.3L70.6 22.3z"/>
              <path fill="#BD34FE" d="M70.6 22.3L45.7 12.3l24.9 103.6L95.5 12.3L70.6 22.3z"/>
            </svg>
          ) 
        },
        { 
          name: "Tailwind CSS", 
          svg: (
            <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
              <path fill="#06B6D4" d="M64 30.6C44.7 30.6 33.7 44 35 70.7c-9.3-12.7-8-29.3 4-38.7 8-6 18.7-4.7 25.3 2 9.3 9.3 22.7 9.3 32 0 4-4 9.3-6 14.7-6 12 0 20 9.3 20 21.3 0 20-17.3 41.3-44 54.7-5.4-8-3.1-17.3 2.7-23.3 8-8 12-18.7 12-29.3 0-8-3.3-14.7-10-18.7-8-4.7-17.3-2-22.7 3.3z"/>
            </svg>
          ) 
        },
      ],
    },
    {
      title: "Traitement du signal & Acoustique",
      skills: [
        { name: "Traitement du Signal", icon: "📊" },
        { name: "Acoustique", icon: "🔊" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Curiosité technique", icon: "🔍" },
        { name: "Esprit d'équipe", icon: "🤝" },
        { name: "Sens de l'organisation", icon: "📋" },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Expertises</span>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-1">Compétences</h2>
        <p className="text-gray-600 text-sm mt-2">Ci-dessous l'ensemble des technologies et outils que je maîtrise, ou avec lesquelles j'ai de l'expérience.</p>
      </div>

      <div className="space-y-10">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <span className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-lg shadow-sm group-hover:scale-105 transition-transform overflow-hidden shrink-0">
                    {skill.svg ? skill.svg : skill.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>    
        ))}
      </div>
    </div>
  );
}