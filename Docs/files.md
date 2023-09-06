# Fichiers

## Points d'entrée

`/src/main.tsx`

- Imports:
  - Fichiers de styles.
  - **Bibliothèques React** nécessaires à la création de l'application.
  - Composant principal de l'application **App**
- Creation de l'élement **Root**, racine du DOM virtuel de React.
- Utilisation de la méthode ``render`` pour rendre le contenu de l'application.

## Pages

`/src/pages/home`
`/src/pages/museum`

- Définition des fonctions **Home** et **Museum**, pour le rendu des pages de l'app correspondantes.

## Composants

`/src/components/App`

- Composant principal
- Gestion des routes de l'applications en utilisant les composants `<Routes> et <Route>` de react-router.

`/src/components/*`

- Dossiers contenant les définitions de tous les composants utilisés dans l'app, ainsi que leurs styles spécifiques.

## Data & Store Redux

`/src/store/index.ts`

- Configuation du store Redux, grâce à la méthode de RTK `configureStore`.
- Exports et définitions des types `RootState` et `AppDispatch`, pour éviter la répétition dans les typages.

`/src/store/reducers/index.ts`

- Centralisation et export des reducers.

`/src/store/reducers/museum.ts`

- Imports:
  - Methode `createReducer` permettant la création du reducer (RTK).
  - Methode `createAppAsyncThunk`
  - **Axios** utilisé pour les requêtes HTTP.
  - Types personnalisés.
- Initialisation du state.
- Definition de la fonction asynchrone `fetchMuseumData` (permettant de récupèrer les données de l'API)
- Définition du reducer `museumReducer`, qui gère les cas de reponses (pending, fullfilles, rejected).

## Utilitaires et Hooks

`/src/utils/redux.ts`

- Import et export d'une instance typée (`createAppAsyncThunk`) de la methode `createAsyncThunk` de RTK.
- Permet d'éviter la répétition du typage lors de l'utilisation de la méthode.

`/src/utils/compareFn.ts`

- Definition d'une fonction typée `createCompareFn` qui génère une fonction de comparaison pour trier un tableau d'objets en fonction d'une propriété spécifiée et de l'ordre de tri (ascendant ou descendant).
- Permet de l'utiliser dans le code en fonction callback de la methode `.sort()`.

`/src/hooks/redux.ts`

- Typage statique des méthodes `useDispatch` et `useSelector`, dans le but d'éviter de répéter les types dans le code.

## Styles

`/src/styles/_reset.css`

- Basic reset des styles de naviagteurs

`/src/styles/vars.css`

- Définition des variables CSS

`/src/styles/index.css`

- Définition du styles des éléments communs.
