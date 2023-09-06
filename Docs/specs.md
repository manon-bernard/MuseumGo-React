# Spécifications

**Project Title:** MuseumGo  
**Date:** Courant 2023.

## 1. Projet

### Description

- Affichage de la liste des musées de France. 
- Création d'une application simple permettant l'affichage, la recherche et le tri de données.

### Objectifs

- Réalisation en tant qu'exercice d'apprentissage personnel.
- Création d'une interface utilisant React et un appel à l'API de la base de données museofile.
- Utilisation du module Leaflet permettant l'afficage de cartes géopgraphique pour afficher la localisation des musées.


## 2. Contraintes de l'exercice

- Developpement d'un projet Front-End
- Utilisation de React, React-router et Redux
- Utilisation d'une API externe.
- Utilisation de Leaflet.

## 3. Specifications fonctionnelles

### Fonctionnalités principales

- Page de liste des musées.
  - Barre latérale avec:
    - Champ de recherche.
    - Système de tri par régions.

- Page de détail d'un musée.
  - Liste des informations
  - Carte Leaflet.

- Page de favoris.
  - Liste des favoris
  - Stockage de données en localstorage (musées favoris, musée visités)

## 4. Specifications techniques

- Typescript
- ReactJS, React-Router, Redux, Redux-Toolkit
- ViteJS
- yarn
- Leaflet
- API: [Base museofile (data.culture.gouv)](https://data.culture.gouv.fr/explore/dataset/musees-de-france-base-museofile/api/)
