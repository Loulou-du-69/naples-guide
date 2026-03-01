# 🍕 Napoli Guide — Déploiement

## Structure du projet
```
naples-guide/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    └── App.jsx
```

## Étapes pour déployer

### 1. Installer les dépendances (sur ton ordinateur)
```bash
cd naples-guide
npm install
```

### 2. Tester en local
```bash
npm run dev
# → Ouvre http://localhost:5173
```

### 3. Build de production
```bash
npm run build
# → Génère un dossier /dist
```

### 4a. Déployer sur Netlify (drag & drop, le plus simple)
1. Va sur https://netlify.com et crée un compte gratuit
2. Depuis le dashboard, fais glisser le dossier `dist/` dans la zone de dépôt
3. C'est en ligne ! Tu reçois une URL du type `https://random-name.netlify.app`
4. Optionnel : renomme le site en `naples-guide` dans les settings

### 4b. Déployer sur Vercel (via CLI)
```bash
npm install -g vercel
vercel
# → Suis les instructions, choisis le dossier naples-guide
```

## Ajouter l'app sur l'écran d'accueil iPhone
1. Ouvre l'URL de ton app dans **Safari** (pas Chrome)
2. Appuie sur l'icône **Partager** (carré avec flèche vers le haut)
3. Sélectionne **"Sur l'écran d'accueil"**
4. Donne-lui un nom → **Ajouter**
5. L'icône apparaît sur ton iPhone comme une vraie app 🎉

## Prérequis
- Node.js installé (https://nodejs.org — version 18+)
