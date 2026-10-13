import { useEffect, useState } from "react";

export const navItems = [
  { id: "profil", label: "Profil" },
  { id: "parcours", label: "Parcours" },
  { id: "stack", label: "Stack" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

/** Renvoie l'id de la section actuellement au centre de l'écran. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const ids = navItems.map((item) => item.id);

export function Header() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#profil" className="brand">
          Thibault Cottel
        </a>
        <nav aria-label="Navigation principale">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${active === item.id ? " is-active" : ""}`}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
