# Portfolio · Christian Emmanuel Dongbeto

Portfolio de développeur web fullstack JS, IA et marketing digital.
Stack : **React 18 + Vite**, CSS natif, aucune dépendance superflue.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre ensuite http://localhost:5173

## Ajouter ta photo

1. Choisis une photo carrée (idéalement 800 × 800 px, fond neutre, visage bien éclairé).
2. Renomme-la `photo.jpg`.
3. Place-la dans le dossier `public/`.

Tant que la photo n'est pas là, tes initiales « CD » s'affichent à sa place.

## Modifier le contenu

Tout le texte est dans **`src/data.js`** : expériences, projets, compétences, contacts.

- LinkedIn et GitHub : colle tes URL dans `links` ; les icônes apparaissent automatiquement.
- CV : remplace `public/cv-christian-dongbeto.pdf` par ta dernière version.
- Liens de projet : ajoute `url: 'https://ton-site.com'` (site en ligne) et/ou `repo: 'https://github.com/...'` à un projet. Pour une capture d'écran, mets l'image dans `public/projets/` et ajoute `image: '/projets/nom.jpg'`. Un exemple prêt à compléter est dans `src/data.js`.

## Déployer sur Vercel

### Option 1 : via GitHub (recommandé)

```bash
git init
git add .
git commit -m "feat: portfolio"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/portfolio.git
git push -u origin main
```

Puis sur https://vercel.com : **Add New → Project → Import** ton dépôt → **Deploy**.
Vercel détecte Vite tout seul. Chaque `git push` redéploie le site.

### Option 2 : en ligne de commande

```bash
npm i -g vercel
vercel        # premier déploiement (aperçu)
vercel --prod # mise en production
```

## Structure

```
public/          photo.jpg, favicon.svg
src/data.js      tout le contenu du site
public/cv-christian-dongbeto.pdf   ton CV (bouton « Voir mon CV »)
src/components/  Sidebar (colonne fixe), Sections (À propos, IA, Expérience,
                 Projets, Compétences, Contact), Photo, Icons
src/styles.css   thème : colonne d'identité fixe + halo qui suit la souris
```
