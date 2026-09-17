import React from "react";

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export function Header({ activeTab, onSelectTab }: HeaderProps) {
  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "competences", label: "Compétences" },
    { id: "projets", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Thibault Cottel</h1>
          <p className="text-xs text-gray-500">Ingénieur Audiovisuel & Multimédia</p>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}