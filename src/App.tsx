import React, { useState } from "react";
import { Header } from "./components/Header";
import { ProjectList } from "./components/ProjectList";
import { Skills } from "./components/Skills"; 
import { projectsData } from "./data/project";

export default function App() {
  const [activeTab, setActiveTab] = useState("accueil");
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      <Header activeTab={activeTab} onSelectTab={setActiveTab} />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {activeTab === "accueil" && (
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Ingénieur & Développeur</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                "Curieux de tout, j'aime explorer et donner vie à des idées."
              </h2>
            </div>

            {/* Section Profil */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-4">
              <div className="w-full aspect-square bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden relative shadow-sm">
                <img 
                  src="/photo.jpg" 
                  alt="Thibault Cottel" 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="md:col-span-2 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Je suis <strong className="text-gray-900 font-semibold">Thibault Cottel</strong>, ingénieur diplômé de l'INSA Hauts-de-France, spécialisé en Audiovisuel et Multimédia.
                </p>
                <p>
                  Au cours de ma formation, j'ai acquis des compétences en traitement du signal, en programmation et en conception de systèmes multimédias.
                </p>
                <p>
                  Touche-à-tout, j'aime explorer de nouveaux domaines et concevoir des projets de A à Z. C'est cette curiosité qui m'a conduit à développer des architectures mémorielles et des pipelines RAG lors de mon stage à l'ISIA Lab, ou à me frotter aux infrastructures multimédias chez LMI Audiovisuel.
                </p>
                
                <p className="pt-2 font-medium text-gray-900">
                  Actuellement à la recherche d'opportunités en tant qu'ingénieur (développement logiciel, traitement du signal ou secteur audiovisuel), je suis ouvert aux nouvelles opportunités.
                </p>

                <div className="pt-2 flex gap-4">
                  <button
                    onClick={() => setActiveTab("projets")}
                    className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    Voir mes projets
                  </button>
                  <button
                    onClick={() => setActiveTab("contact")}
                    className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Me contacter
                  </button>
                </div>
              </div>
            </div>

            {/* Parcours rapide */}
            <div className="pt-8 border-t border-gray-200 space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Mon parcours en bref</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
                  <span className="text-xs font-mono text-gray-400">Stage</span>
                  <h4 className="font-bold text-gray-900 text-sm">ISIA Lab (UMONS)</h4>
                  <p className="text-xs text-gray-600">Architectures mémorielles et pipelines RAG pour assistant intelligent.</p>
                </div>
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
                  <span className="text-xs font-mono text-gray-400">Stage</span>
                  <h4 className="font-bold text-gray-900 text-sm">LMI Audiovisuel</h4>
                  <p className="text-xs text-gray-600">Immersion professionnelle dans l'audiovisuel et les infrastructures multimédias.</p>
                </div>
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-gray-400">Diplôme</span>
                    <h4 className="font-bold text-gray-900 text-sm">INSA Hauts-de-France</h4>
                    <p className="text-xs text-gray-600 mt-1">Formation d'ingénieur en Audiovisuel et Multimédia.</p>
                  </div>
                  <div className="pt-2 flex flex-col gap-2">
                    <a 
                      href="/plaquette-prepa.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-1.5 text-xs font-medium text-center text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm"
                    >
                      Voir la plaquette prépa ↗
                    </a>
                    <a 
                      href="/plaquette-avm.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-1.5 text-xs font-medium text-center text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm"
                    >
                      Voir la plaquette cycle ingénieur (AVM) ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Onglet Compétences */}
        {activeTab === "competences" && <Skills />}

        {activeTab === "projets" && (
          <ProjectList 
            projects={projectsData} 
            activeId={activeId} 
            onHover={setActiveId} 
          />
        )}

        {activeTab === "contact" && (
          <div className="space-y-8">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest"></span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-1">Me contacter</h2>
              <p className="text-gray-600 text-sm mt-2">
                Je suis actuellement à l'écoute d'opportunités. N'hésitez pas à me contacter par e-mail ou via mes réseaux professionnels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Carte E-mail */}
              <a
                href="mailto:cottelthibault3@gmail.com"
                className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform">
                  ✉️
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400">E-mail</span>
                  <h4 className="font-semibold text-gray-900 text-sm">cottelthibault3@gmail.com</h4>
                </div>
              </a>

              {/* Carte LinkedIn */}
              <a
                href="https://linkedin.com/in/thibault-cottel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform">
                  💼
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400">Réseau professionnel</span>
                  <h4 className="font-semibold text-gray-900 text-sm">LinkedIn ↗</h4>
                </div>
              </a>

              {/* Carte GitHub */}
              <a
                href="https://github.com/TrackBow"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform">
                  🐙
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400">GitHub</span>
                  <h4 className="font-semibold text-gray-900 text-sm">GitHub (TrackBow) ↗</h4>
                </div>
              </a>

              {/* Carte Téléchargement CV */}
              <a
                href="/20260727_CV_Thibault.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform">
                  📄
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400">Curriculum Vitae</span>
                  <h4 className="font-semibold text-gray-900 text-sm">Télécharger mon CV ↗</h4>
                </div>
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}