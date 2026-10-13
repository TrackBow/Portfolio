# Portfolio — Thibault Cottel

Portfolio one-page d'ingénieur audiovisuel et multimédia (INSA Hauts-de-France) : traitement du signal, IA et développement logiciel.

## Sections
- **Profil** : nom, accroche et onde sonore animée en canvas (réagit au curseur), photo, bio, CV.
- **Parcours** : stages (ISIA Lab, LMI Audiovisuel) avec liens vers leurs sites, et diplôme avec plaquettes.
- **Stack** : graphe interactif en SVG. Cliquer une catégorie la met en avant, cliquer une compétence liste les projets qui l'utilisent, les catégories se déplacent au glisser. Sur mobile, le graphe devient une liste de pastilles.
- **Projets** : grande liste typographique ; au survol, description, technologies et lien vers le dépôt.
- **Contact** : bouton e-mail et liens directs (LinkedIn, GitHub, CV).

## Modifier le contenu
| Ce que je veux changer | Fichier |
| --- | --- |
| Nom, accroche, bio, boutons de l'accueil | `src/components/Hero.tsx` |
| Stages, diplôme, liens du parcours | `src/components/Parcours.tsx` |
| Liste des projets | `src/data/project.ts` |
| Compétences et catégories du graphe | `src/data/skills.ts` |
| Notes des compétences sans projet (Git, SQL…) | `src/components/Stack.tsx` (objet `skillNotes`) |
| E-mail, liens LinkedIn/GitHub/CV, texte du contact | `src/components/Contact.tsx` |
| Titre de l'onglet et description Google | `index.html` |
| Couleurs, tailles, espacements | `src/index.css` (variables en haut du fichier) |

Une compétence est reliée à un projet si son nom figure exactement dans le `tech` du projet.

## Stack technique
React 18, TypeScript, Vite. CSS écrit à la main (`src/index.css`), police Schibsted Grotesk (Google Fonts).

## Lancer en local
```bash
npm install
npm run dev
```
