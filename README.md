# Portfolio — Thibault Cottel

Portfolio one-page d'ingénieur audiovisuel et multimédia (INSA Hauts-de-France) : traitement du signal, IA et développement logiciel.

## Sections
- **Profil** : nom, accroche et onde sonore animée en canvas (réagit au curseur), photo, bio, CV.
- **Parcours** : stages (ISIA Lab, LMI Audiovisuel) et diplôme, avec rapport et plaquettes.
- **Stack** : graphe interactif en SVG. Cliquer une catégorie la met en avant, cliquer une compétence liste les projets qui l'utilisent, les catégories se déplacent au glisser. Sur mobile, le graphe devient une liste de pastilles.
- **Projets** : grande liste typographique ; au survol, description, technologies et lien vers le dépôt.
- **Contact** : formulaire envoyé via Netlify Forms + liens directs.

## Modifier le contenu
- Projets : `src/data/project.ts`
- Compétences : `src/data/skills.ts` (une compétence est reliée à un projet si son nom figure dans `tech` du projet)

## Stack technique
React 18, TypeScript, Vite. CSS écrit à la main (`src/index.css`), police Schibsted Grotesk (Google Fonts).

## Formulaire de contact (Netlify Forms)
1. Déployer sur Netlify (le formulaire caché dans `index.html` permet à Netlify de le détecter).
2. Netlify > *Forms* : activer la détection des formulaires si ce n'est pas déjà fait, puis redéployer.
3. *Site configuration > Notifications > Emails and webhooks > Form submission notifications* : ajouter une notification e-mail vers votre adresse.

En local (`npm run dev`), l'envoi échoue : c'est normal, seul Netlify traite le formulaire.

## Lancer en local
```bash
npm install
npm run dev
```
