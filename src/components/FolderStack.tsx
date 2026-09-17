import React from "react";
import { Project } from "../data/project";

interface FolderStackProps {
  projects: Project[];
  activeId: string | null;
  onHover: (id: string | null) => void;
}

export function FolderStack({ projects, activeId }: FolderStackProps) {
  return (
    <div className="relative w-[380px] h-[880px] bg-blue-600 rounded-2xl p-6 flex flex-col shadow-2xl border-4 border-blue-700 overflow-hidden flex-shrink-0">
      <div className="bg-white/90 px-3 py-1 rounded-md text-xs font-bold tracking-wider text-blue-900 uppercase shadow-sm z-30 w-fit mb-4">
        Mes Projets
      </div>
      
      <div className="relative w-full flex-1">
        {projects.map((project, index) => {
          const isActive = activeId === project.id;
          
          const reverseIndex = projects.length - 1 - index;
          const baseBottom = reverseIndex * 72; 
          const tabOffset = reverseIndex * 22; 

          const activeStyle = isActive ? {
            top: "120px",
            transform: "scale(1.03)",
            zIndex: 50,
          } : {
            top: `${reverseIndex * 72}px`,
            transform: "translateY(0) scale(1)",
            zIndex: 10,
          };

          return (
            <div
              key={project.id}
              className={`absolute left-0 right-0 h-44 rounded-xl p-5 transition-all duration-300 ease-in-out border border-black/10 flex flex-col justify-between ${project.color} ${isActive ? 'shadow-2xl ring-2 ring-white/80' : 'shadow-md'}`}
              style={activeStyle}
            >
              <div 
                className="absolute -top-4 w-28 h-5 bg-inherit rounded-t-lg border-t border-x border-black/10 flex items-center px-2 overflow-hidden shadow-sm"
                style={{ left: `${14 + tabOffset}px` }}
              >
                <span className="text-[10px] font-medium text-gray-800 truncate">{project.title}</span>
              </div>

              <p className={`text-xs text-gray-700 line-clamp-3 mt-1 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                {project.description}
              </p>

              <div className={`transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[10px] font-mono text-black/50 font-semibold">PROJ - {project.id}</span>
                <h3 className="font-bold text-gray-900 text-base leading-tight truncate">{project.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}