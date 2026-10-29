// Tout le contenu du site est ici : modifie ce fichier pour mettre à jour le portfolio.

export const profile = {
  firstName: 'Christian',
  lastName: 'Dongbeto',
  fullName: 'Christian Emmanuel Dongbeto',
  title: 'Développeur web fullstack',
  subtitle: 'React · Node.js · IA · Marketing digital',
  tagline: "Je conçois des interfaces web rapides et accessibles, j'utilise l'IA pour livrer plus vite, et je sais faire adopter un produit.",
  location: 'Abomey-Calavi, Bénin',
  // Mets ta photo dans /public/photo.jpg (carrée, 800×800 px conseillé)
  photo: '/photo.jpg',
  cv: '/cv-christian-dongbeto.pdf',
  availability: 'Disponible · CDI, CDD ou stage · Bénin ou télétravail',
}

export const links = {
  email: 'dongbetochristian@gmail.com',
  phone: '+229 01 52 13 01 73',
  phone2: '+229 01 40 39 20 65',
  whatsapp: 'https://wa.me/2290152130173',
  linkedin: '', // ← colle ici l'URL de ton profil LinkedIn
  github: '', // ← colle ici l'URL de ton profil GitHub
}

export const about = [
  "Je suis développeur web fullstack JavaScript, basé à Abomey-Calavi. J'ai été formé chez <b>Simplon Bénin</b>, puis j'ai passé six mois chez <b>DeafSync</b> à développer des interfaces en <b>React et TypeScript</b> et à les connecter aux API du produit.",
  "Ce qui me distingue : j'ai aussi une formation en <b>marketing digital</b>. Je comprends ce qu'un produit doit provoquer chez l'utilisateur, et je conçois mes interfaces dans ce sens.",
  "Au quotidien, je travaille avec <b>l'IA générative</b> pour coder plus vite, documenter et tester, tout en gardant la maîtrise de chaque ligne livrée. J'ai aussi mené deux équipes projet en tant que chef d'équipe.",
]

export const ai = {
  intro: "J'intègre l'IA à chaque étape de mon travail, avec une règle : l'IA accélère, je reste responsable du résultat.",
  steps: [
    { t: 'Cadrer', d: 'Je rédige des prompts précis : contexte, contraintes, exemples attendus.' },
    { t: 'Générer', d: "L'IA propose du code, des tests ou du contenu. Je garde la main sur l'architecture." },
    { t: 'Vérifier', d: "Je relis, je teste, je corrige. Rien ne part en production sans être compris." },
    { t: 'Livrer', d: 'Des fonctionnalités livrées plus vite, mieux documentées et plus fiables.' },
  ],
  tools: ['Claude', 'ChatGPT', 'GitHub Copilot', 'Prompt engineering', "Intégration d'API d'IA", 'IA rédactionnelle', 'IA visuelle', 'Automatisation'],
}

export const experience = [
  {
    date: 'Août 2025 — Févr. 2026',
    role: 'Développeur front-end (stage)',
    org: 'DeafSync',
    place: 'Abomey-Calavi',
    text: "Développement d'interfaces utilisateur en React et TypeScript avec Tailwind CSS, et intégration des API du produit au sein d'une équipe.",
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API REST'],
  },
  {
    date: 'Févr. — Juin 2026',
    role: 'Formation Community Management',
    org: 'Atalhos Communication',
    text: 'Publicités Facebook et TikTok, création de contenu, montage vidéo, graphisme, tunnels de vente et outils d’IA rédactionnelle.',
    tags: ['Meta Ads', 'TikTok Ads', 'Contenu', 'IA'],
  },
  {
    date: 'Févr. — Mai 2025',
    role: 'Formation Développeur web fullstack',
    org: 'Simplon Bénin · DCLIC',
    text: "JavaScript et DOM, back-end Node.js, Express et MongoDB, front-end React, création et consommation d'API REST, Git et GitHub, méthodes agiles.",
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Agile'],
  },
  {
    date: 'Févr. 2023',
    role: "Chef d'équipe · projet E-biblio",
    org: 'Projet académique',
    text: "Coordination d'une équipe et développement d'une plateforme de gestion de bibliothèque en ligne.",
    tags: ['Leadership', 'Gestion de projet'],
  },
  {
    date: 'Juin — Août 2022',
    role: "Stage d'immersion · chef d'équipe",
    org: 'E4Afrika',
    place: 'Cadjèhoun',
    text: "Apprentissage du framework Laravel à travers la conception d'un blog, en pilotant l'équipe du projet.",
    tags: ['Laravel', 'PHP', 'MySQL'],
  },
]

// Pour chaque projet, tu peux ajouter :
//   url:   'https://ton-site.com'          → lien « ton-site.com ↗ », toute la carte devient cliquable
//   repo:  'https://github.com/...'        → lien « Code source ↗ »
//   image: '/projets/mon-site.jpg'         → capture d'écran du site (à mettre dans public/projets/), remplace l'illustration
// Le premier projet de la liste est le plus visible : mets-y ton meilleur site en ligne.
export const projects = [
  // Exemple à compléter puis décommenter :
  // {
  //   name: 'OnDécolle',
  //   url: 'https://ADRESSE-DU-SITE',
  //   image: '/projets/ondecolle.jpg',
  //   text: 'Une phrase sur ce que fait le site et pour qui.',
  //   role: 'Développeur fullstack',
  //   tags: ['React', 'Node.js'],
  // },
  {
    name: 'Interfaces DeafSync',
    text: "Écrans d'application en React et TypeScript, connectés aux API du produit pendant six mois de stage.",
    role: 'Développeur front-end',
    tags: ['React', 'TypeScript', 'Tailwind'],
    art: 'app',
  },
  {
    name: 'E-biblio',
    text: 'Plateforme de gestion de bibliothèque en ligne : catalogue, emprunts et suivi des ouvrages.',
    role: "Chef d'équipe et développeur",
    tags: ['Web', 'Base de données', 'Travail en équipe'],
    art: 'library',
  },
  {
    name: 'Blog Laravel',
    text: "Premier projet complet : un blog réalisé pour apprendre Laravel pendant un stage d'immersion.",
    role: "Chef d'équipe",
    tags: ['Laravel', 'PHP', 'MySQL'],
    art: 'blog',
  },
]

export const skills = [
  ['Front-end', ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS']],
  ['Back-end', ['Node.js', 'Express', 'API REST', 'Laravel']],
  ['Données', ['MongoDB', 'MySQL', 'SQLite']],
  ['IA', ['Claude', 'ChatGPT', 'Copilot', 'Prompt engineering']],
  ['Outils', ['Git', 'GitHub', 'Figma', 'Photoshop', 'Trello']],
  ['Marketing', ['Meta Ads', 'TikTok Ads', 'Création de contenu', 'Tunnels de vente']],
]

export const languages = [
  ['Français', 'Courant'],
  ['Anglais', 'En progression'],
]
