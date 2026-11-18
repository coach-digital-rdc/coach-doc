---
sidebar_position: 0
---

# Installer la documentation

La documentation est un site [Docusaurus](https://docusaurus.io/). Le contenu est écrit en Markdown, ce qui permet de le modifier sans connaître React.

## Installation

1. **Cloner le dépôt** [coach-doc](https://github.com/coach-digital-rdc/coach-doc).
2. **Installer les dépendances** avec `npm install` (Node.js 18 ou plus récent).
3. **Créer le fichier `.env`** :

```bash
COUNTRY=cd
```

4. **Lancer en développement** : `npm start`, puis ouvrir `http://localhost:3000/cd/docs`.

Avec `COUNTRY=cd`, le site est en français par défaut, et l'anglais reste disponible dans le menu des langues. Pour travailler sur la version anglaise : `npm start -- --locale en`.

5. **Construire le site** : `npm run build`, qui produit les fichiers statiques dans `build/`.

## Modifier la documentation

- **Pages françaises** : `i18n/fr/docusaurus-plugin-content-docs/current/`, avec la même arborescence que `docs/`.
- **Pages anglaises** (d'origine) : `docs/`.
- **Libellés du menu, des catégories et du pied de page** : fichiers JSON de `i18n/fr/`.
- **Images** : `static/img/` ; les captures de l'application RDC sont dans `static/img/rdc/`.
- **Pages React** (accueil) : `src/`, à ne modifier qu'avec une bonne connaissance de React.

Les modifications des fichiers Markdown s'affichent immédiatement en développement.
