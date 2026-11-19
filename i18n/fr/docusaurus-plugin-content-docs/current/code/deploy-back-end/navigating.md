---
sidebar_position: 0
---

# Installer le serveur

## Installation

1. **Cloner le dépôt** [coach-backend](https://github.com/coach-digital-rdc/coach-backend).

2. **Installer les dépendances** avec `npm install` (Node.js 18 ou plus récent).

3. **Créer le fichier `.env`** à partir de `.env.example` :

```bash
APP_NAME=Coach Digital
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=coaching

# Secrets générés avec : openssl rand -hex 32 (JWT_SECRET) et openssl rand -base64 24 (PASSWORD_SALT)
JWT_SECRET=
PASSWORD_SALT=

# Envoi des codes de connexion ; vide en développement (le code s'affiche dans le journal du serveur)
SENDGRID_API_KEY=
# Expéditeur des courriels et adresse de l'administration citée dans le courriel de bienvenue
MAIL_FROM=
ADMIN_URL=
```

4. **Créer les tables** :

```bash
npm run migration:run
```

5. **Charger les référentiels RDC** :

```bash
# Hiérarchie de l'éducation : 26 provinces, 60 PROVED, 635 sous-PROVED
npm run seed:territoires-rdc
# Grille d'observation de l'annexe B : 6 sous-domaines, 30 comportements, aide du manuel
npm run seed:grille-rdc
```

Les deux commandes peuvent être relancées sans créer de doublons. Les établissements sont ensuite importés depuis l'administration (fichier CSV).

6. **Créer le premier administrateur** dans la base :

```sql
insert into "public"."user" ("name", "email", "role") values ('Nom', 'votre@email.com', 'admin');
```

L'administrateur se connecte ensuite à l'administration avec un code reçu par e-mail.

7. **Démarrer le serveur** : `npm run start:dev` en développement, `npm start` en production. L'API répond sur `http://<serveur>:3000/api/` et sa documentation Swagger sur `/api/docs`.

En développement, `npm run seed:fr` charge des données de démonstration fictives ; lancez-le avant `seed:territoires-rdc`.

## Authentification des courriels

Les codes de connexion sont envoyés par courriel (SendGrid). Pour qu'ils ne soient pas classés en indésirables, le domaine d'envoi doit être authentifié par trois enregistrements DNS :

- **SPF** : un enregistrement TXT sur le domaine, par exemple `v=spf1 include:_spf.votre-fournisseur.com ~all`, qui autorise le service d'envoi ;
- **DKIM** : un enregistrement TXT `selecteur._domainkey.votredomaine` contenant la clé publique fournie par le service d'envoi ;
- **DMARC** : un enregistrement TXT `_dmarc.votredomaine`, par exemple `v=DMARC1; p=none; rua=mailto:votre@email.com`.

Vérifiez ensuite, sur un courriel de test, que les en-têtes indiquent des contrôles SPF et DKIM réussis.
