---
sidebar_position: 0
---

# Présentation du système

**[Coach est l'initiative mondiale de la Banque mondiale](https://www.worldbank.org/en/topic/teachers/brief/coach-helping-countries-accelerate-learning-by-improving-in-service-teacher-professional-development) pour aider les pays à améliorer la formation continue des enseignants et accélérer les apprentissages.**

Coach Digital est la suite d'applications qui accompagne cette démarche : une application mobile pour les observateurs, une administration web, un serveur (API) et cette documentation. Le code est publié en source ouverte (licence MIT) par l'organisation GitHub « WBG-Coach ».

**Coach Digital RDC** en est l'adaptation pour la République démocratique du Congo, réalisée pour le Projet d'Apprentissage et d'Autonomisation des Filles (PAAF) avec le SERNAFOR : l'outil d'observation de classe du Ministère de l'Éducation nationale et Nouvelle Citoyenneté (grille de six sous-domaines et 30 comportements), en français, utilisable en ligne et hors ligne.

Cette documentation s'adresse aux développeurs et aux administrateurs système qui installent ou font évoluer la plateforme. Chaque application a sa propre configuration ; les variables d'environnement sont décrites dans le fichier `.env.example` de chaque dépôt. Le code pays de la RDC est `cd`.

# Configuration minimale du serveur

- Processeur : 2 cœurs
- Mémoire : 2 Go
- Stockage : 10 Go
- Système : Ubuntu 22.04
- Outils : Node.js 18 ou plus récent, PostgreSQL, Docker (facultatif)

Technologies employées :

- Administration : TypeScript, React (Vite)
- Serveur : TypeScript, Node.js, Express, TypeORM
- Application mobile : React Native (Android)

# Dépôts

Les dépôts de l'adaptation RDC sont dans l'organisation GitHub [coach-digital-rdc](https://github.com/coach-digital-rdc) :

- **Serveur (API)** : [coach-backend](https://github.com/coach-digital-rdc/coach-backend)
- **Administration** : [coach-admin](https://github.com/coach-digital-rdc/coach-admin)
- **Application mobile** : [coach-mobile](https://github.com/coach-digital-rdc/coach-mobile)
- **Documentation** : [coach-doc](https://github.com/coach-digital-rdc/coach-doc)

Ce sont des dérivés des dépôts d'origine de [WBG-Coach](https://github.com/WBG-Coach).

# Pour aller plus loin

- [Building a Mobile Application for Teacher Coaching](https://thedocs.worldbank.org/en/doc/2df31ff42d8922d9c52b01f946867f67-0140022024/original/MOBILE-application-how-to-note.pdf) (Banque mondiale)
- [Coach: Helping Countries Accelerate Learning by Improving In-Service Teacher Professional Development](https://www.worldbank.org/en/topic/teachers/brief/coach-helping-countries-accelerate-learning-by-improving-in-service-teacher-professional-development) (Banque mondiale)
