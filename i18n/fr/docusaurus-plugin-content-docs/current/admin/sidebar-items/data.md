---
sidebar_position: 2
---

# Données

La rubrique Données détaille les établissements et les séances. Elle comprend les pages **Établissements**, **Observateurs**, **Activité des observateurs**, **Données des séances** et **Journal des synchronisations**.

## Établissements

Cette page permet de :

- ajouter un établissement ;
- importer une liste d'établissements depuis un fichier CSV ;
- télécharger la liste ;
- générer le QR code d'un établissement ;
- modifier ou supprimer un établissement.

### Importer des établissements

Le bouton « Importer des données » charge un fichier CSV. Le bouton « Télécharger le modèle » fournit un fichier à compléter, avec une ligne par établissement :

```text
numero_secope,nom,province,proved,sous_proved
,Institut Les Palmiers,Kinshasa,Kinshasa Funa (KASAVUBU),BANDALUNGWA
```

- **numero_secope** : facultatif, car tous les établissements n'en ont pas ;
- **province**, **proved**, **sous_proved** : les noms exacts de la hiérarchie territoriale (voir Paramètres) ; une sous-PROVED absente est créée.

Un établissement déjà présent, reconnu à son numéro SECOPE ou, à défaut, à son nom dans la même sous-PROVED, est mis à jour au lieu d'être créé en double. À la fin, l'administration indique les lignes qui n'ont pas pu être importées.

### Ajouter ou modifier un établissement

Le bouton « Nouvel établissement » ouvre un formulaire : nom, numéro SECOPE (facultatif) et sous-PROVED. Le menu de chaque ligne permet de modifier l'établissement.

### Générer le QR code

Le QR code permet aux observateurs d'enregistrer l'établissement dans l'application. Imprimez-le et remettez-le à l'établissement.

### Supprimer un établissement

Une confirmation est demandée avant la suppression.

:::danger Action irréversible
La suppression d'un établissement est définitive.
:::

## Activité des observateurs

Pour chaque établissement : nombre d'observateurs, d'enseignants observés et d'entretiens, et répartition des séances selon leur ancienneté (moins de 30 jours, 30 à 60, 60 à 90, plus de 90 jours).

## Données des séances

Pour chaque établissement : nombre d'observateurs, d'enseignants observés et d'entretiens, et moyenne de chaque sous-domaine.

## Journal des synchronisations

Les synchronisations des appareils : version d'Android, modèle, identifiant de l'appareil et date de la dernière mise à jour.
