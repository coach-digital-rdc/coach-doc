---
sidebar_position: 0
---

# Page de téléchargement

La page de téléchargement de l'application d'origine est une application Next.js légère, conçue pour se charger même avec une connexion 2G. Elle propose le fichier d'installation stocké dans un espace de stockage en ligne (« bucket » AWS S3 ou DigitalOcean Spaces).

En RDC, l'APK est remis aux observateurs lors de la formation ou par un lien communiqué par le SERNAFOR. Si une page de téléchargement est mise en place, la procédure est la suivante.

## Installation

1. **Cloner le dépôt** [coach-download](https://github.com/WBG-Coach/coach-download) d'origine.
2. **Installer les dépendances** avec `npm install` (Node.js 18 ou plus récent).
3. **Créer le fichier `.env`** :

```bash
COUNTRY=cd
APP_NAME=Coach RDC
# Lien du fichier APK dans l'espace de stockage
APP_LINK=
```

4. **Lancer** : `npm run dev` en développement, `npm run build` puis `npm start` en production.

## Déploiement

Sur un serveur Ubuntu 22.04 disposant de Git, de Node.js et de PM2, l'application se lance en arrière-plan avec :

```bash
pm2 start npm --name coach-download -- start
```

Elle répond alors sur le port 3000.
