import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Parcours } from "./components/Parcours";
import { Stack } from "./components/Stack";
import { ProjectList } from "./components/ProjectList";
import { Contact } from "./components/Contact";

export default function App() {
  // Le contenu est rendu par React après le chargement : on rejoue l'ancre de l'URL (ex. /#contact).
  useEffect(() => {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }
  }, []);

  return (
    <>
      <a href="#projets" className="skip-link">
        Aller aux projets
      </a>
      <Header />
      <main>
        <Hero />
        <Parcours />
        <Stack />
        <ProjectList />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Thibault Cottel</span>
          <a href="#profil" className="text-link">
            Revenir en haut ↑
          </a>
        </div>
      </footer>
    </>
  );
}
