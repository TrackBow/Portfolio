import React from "react";
import { Project } from "../data/project";

interface ProjectListProps {
  projects: Project[];
  activeId: string | null;
  onHover: (id: string | null) => void;
}

export function ProjectList({ projects, activeId, onHover }: ProjectListProps) {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Mes projets</h2>
      <p className="text-sm text-gray-500 mb-8">Une sélection de travaux d'ingénierie, de résolution de problèmes et de réalisations techniques.</p>
      
      <div className="space-y-3">
        {projects.map((project) => {
          const isSelected = activeId === project.id;
          return (
            <div
              key={project.id}
              onMouseEnter={() => onHover(project.id)}
              onMouseLeave={() => onHover(null)}
              className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                isSelected ? "bg-gray-50 border-gray-400 shadow-sm" : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-gray-400">{project.id}</span>
                <div>
                  <h4 className="font-bold text-gray-900">{project.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{project.description}</p>
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                ↗
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}