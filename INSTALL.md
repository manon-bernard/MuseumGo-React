📦 React Modele
===============

Bienvenue dans ce modèle/template de projet React !

- Première utilisation
- Comment démarrer un projet ?
- Build du projet
- Utilitaires
- Dépendances
- Scripts
- Prérequis

Première utilisation
--------------------

Récupérez une copie du modèle :

```sh
git clone git@github.com:O-clock-Quarks/React-modele.git

cd React-modele

# installe les dépendances du projet
yarn 

# lance le serveur de developpement
yarn dev 

# rdv sur http://localhost:5173/
```

Voilà, le modèle tourne, mais en fait ça ne sert pas à grand chose. L'idée est de se _baser sur_ le modèle, mais de le faire tourner dans un autre projet.

---

Comment démarrer un projet avec ce modèle ?
-------------------------------------------

On peut se baser sur React-modele pour démarrer un *nouveau* projet, ou bien pour travailler sur un challenge avec une base de code déjà existante.

Dans les deux cas, il s'agit essentiellement de copier/coller les parties intéressantes du modèle dans le dossier du projet/challenge, sans écraser d'éventuels fichiers spécifiques. 

Pour ce faire :

``` sh
# Exemple : après avoir cloné un challenge dans le dossier mon-challenge/

# direction le dossier du challenge
cd mon-challenge

# copie des fichiers cachés et non-cachés présents à la racine du modèle
# note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -n ../React-modele/{.*,*} .

# copie (récursive) des dossiers src/, config/ et public/
# note : des alertes peuvent être affichées à propos de fichiers ignorés, c'est normal
cp -rn ../React-modele/{src,public} .

# installation des dépendances listées dans le package.json
yarn

# lancement du serveur de dev
yarn dev
```

---

Build du projet
---------------

Le mode d'utilisation par défaut consiste à lancer un serveur de dev avec `yarn dev`, mais alors tout est géré en mémoire : on ne voit jamais le résultat concret du travail de Webpack.

Webpack peut toutefois produire une version concrète du projet dans un dossier `dist/` avec la commande `yarn build`.

`build` permet de construire le projet pour la **production** (version prête pour hébergement).
- Assemblage des fichiers
- Copie de fichiers
- Nettoyage du code
- Minification du code
- ...

```sh
# dans le dossier du projet
cd mon-projet

# build de production : les fichiers sont rassemblés *et optimisés*
yarn build
```

---

Utilitaires
-----------

### Extensions VScode

**EditorConfig**

Permet d'adapter l'indentation de l'éditeur grace à un fichier `.editorconfig`

`ext install EditorConfig.EditorConfig`

**ESLint**

Linter pour le JavaScript

`ext install dbaeumer.vscode-eslint`

**Babel JavaScript**

Coloration syntaxique améliorée pour ES6+

`ext install mgmcdermott.vscode-language-babel`

**VScode Duplicate**

Permet de dupliquer un fichier / dossier

`ext install mrmlnc.vscode-duplicate`


### Extension Navigateur React Dev Tools
  
- [pour Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Extension Navigateur Redux Dev Tools

> https://github.com/reduxjs/redux-devtools

- [pour Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

---

Principaux Outils
-----------------

- [Vitejs](https://vitejs.dev/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [React](https://reactjs.org/)


### Vitejs

*Task Runner*, *Builder* ou *Bundler* ie. automatisation de tâches : transpilation JS par Babel, conversion Sass -> CSS, optimisation du build, etc.

### Babel

Transpilation ES6/JSX -> ES5.

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ vers une version JavaScript compatible partout.
- Presets :
  - [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - "Vocabulaire" ou règles de syntaxe pour Babel et l'ES6+.
  - [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - "Vocabulaire" ou règles de syntaxe pour Babel et le JSX (React).
- Plugins :
  - [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Rend possible les propriétés de classe.
  - [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread) - Rend possible le déversement d'objets.

### ESLint

- [`eslint`](https://github.com/eslint/eslint) - ESLint, linter / analyseur de code JS.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Analyse le code Babel.
- [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Configuration Airbnb pour ESLint.
- Plugins : 
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Analyse les imports de fichiers.
    - [`eslint-import-resolver-alias`](https://github.com/johvin/eslint-import-resolver-alias) - Permet de définir des alias pour les dossiers.
  - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) - Analyse le code React.
  - [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Analyse les hooks de React.
  - [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Analyse l'accessibilité du JSX.

### React

- [`react`](https://github.com/facebook/react) - React.
  - [`react-dom`](https://github.com/facebook/react/tree/master/packages/react-dom) - Permet d'injecter des composants React dans le DOM.

---

Scripts
-------

```sh
# Avec yarn
yarn {script}

# Avec npm
npm run {script}
```

- `dev`: Lance le serveur de développement.
- `build`: Lance la construction de la version de production.

---

Prérequis (déjà présents sur la VM)
-------

## Installer node

<details>
  <summary>Linux</summary>

**Ubuntu :**

```
sudo apt install nodejs
```

**Pour les autres distributions**, vérifier https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions

Ou https://nodejs.org/en/download/package-manager/

**Alternative via NVM**  
NVM est un outil permettant de gérer plusieurs installations de plusieurs versions de node
- [Installer NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Utiliser NVM](https://github.com/nvm-sh/nvm#usage)
</details>

<details>
  <summary>MacOS</summary>

- A télécharger directement sur https://nodejs.org/en/

Ou

- [Installer homebrew](https://brew.sh/)
- Puis node avec la commande `brew install node` 


</details>

<details>
  <summary>Windows</summary>


- A télécharger directement sur https://nodejs.org/en/

Ou

- [Installer chocolatey](https://chocolatey.org/)
- Puis node avec la commande `choco install nodejs` 


</details>

## Mettre à jour node


<details>
  <summary>Linux</summary>

**Méthode via npm**
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

**Si vous utilisez NVM**  
- [Référez vous à l'utilisation de nvm](https://github.com/nvm-sh/nvm#usage)
</details>

<details>
  <summary>MacOS</summary>

- A télécharger directement sur https://nodejs.org/en/

Ou

**Méthode via npm**
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```


</details>

<details>
  <summary>Windows</summary>


- A télécharger directement sur https://nodejs.org/en/

Ou

- Si vous utilisez [chocolatey](https://chocolatey.org/) `choco upgrade nodejs` 


</details>


## Installer yarn

Suivre https://classic.yarnpkg.com/en/docs/install/ en fonction de votre OS
