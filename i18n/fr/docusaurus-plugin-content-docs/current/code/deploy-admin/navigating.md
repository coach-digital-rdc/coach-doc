---
sidebar_position: 0
---

# Installer l'administration

L'administration est une application React (Vite). Elle se lance en local ou sur un serveur.

## Installation

1. **Cloner le dépôt** [coach-admin](https://github.com/coach-digital-rdc/coach-admin).
2. **Installer les dépendances** avec `npm install` (Node.js 18 ou plus récent).
3. **Créer le fichier `.env`** :

   ```bash
   VITE_API_URL=http://localhost:3000/api
   # Dernier niveau de la hiérarchie : 0 province, 1 PROVED, 2 sous-PROVED
   VITE_MAX_REGION_LEVEL=2
   ```

4. **Lancer en développement** : `npm run dev`, puis ouvrir `http://localhost:5173/admin/`.

L'administration s'affiche en français par défaut (l'anglais reste disponible), avec le logo et le titre de Coach Digital RDC.

## Déploiement sur Ubuntu 22.04

1. Construire l'application : `npm run build`. Les fichiers statiques sont produits dans `dist/`.
2. Servir `dist/` avec le serveur web (Nginx ou Apache) sous le chemin `/admin/`, en renvoyant toutes les routes vers `index.html`.

## Dépannage

### Installer Git

```bash
sudo apt update
sudo apt install git
git --version
```

### Installer Node.js avec NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# fermer et rouvrir le terminal
nvm install 20
nvm alias default 20
node -v
```
