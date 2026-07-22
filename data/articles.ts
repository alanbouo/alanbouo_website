// Source unique de vérité pour les articles du blog.
// Contentlayer est désactivé : les pages (liste, article, RSS) importent ces données.

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }

export interface Article {
  slug: string
  title: string
  description: string
  date: string
  modified: string
  category: string
  tags: string[]
  featured: boolean
  readingTime: number
  content: Block[]
}

// Couleurs par catégorie (utilisées par la liste et les cartes)
export const categoryColors: Record<string, string> = {
  'Build in public': '#FF9800',
  'IA': '#667eea',
  'Cybersécurité': '#8b2e8b',
  'Coulisses': '#556B2F',
}

export const articles: Article[] = [
  {
    slug: 'construire-un-saas-rentable-en-public',
    title: 'Construire un SaaS rentable en public : ma méthode',
    description:
      "Comment je documente en transparence ma route vers des SaaS à revenus récurrents — en pariant sur l'exécution et la localisation, pas sur l'existence du besoin.",
    date: '2026-07-15',
    modified: '2026-07-15',
    category: 'Build in public',
    tags: ['Build in public', 'SaaS', 'MRR', 'Indie hacking', 'Stratégie'],
    featured: true,
    readingTime: 6,
    content: [
      {
        type: 'p',
        text: "Je construis des SaaS et je documente tout en public. Pas pour la mise en scène, mais parce que partager le parcours est le moyen le plus honnête — et le plus efficace — de tester des idées et de trouver ses premiers utilisateurs. Voici la méthode que je suis.",
      },
      { type: 'h2', text: 'Le cap : un revenu récurrent déconnecté de mon temps' },
      {
        type: 'p',
        text: "L'objectif n'est pas de vendre mon temps, mais de bâtir un ou plusieurs produits qui génèrent un revenu récurrent (MRR). C'est le modèle popularisé par Pieter Levels et Marc Lou : des SaaS simples, lancés vite, améliorés au contact du marché. Un cap clair permet de dire non à tout le reste.",
      },
      { type: 'h2', text: "Le pari : l'exécution, pas le besoin" },
      {
        type: 'p',
        text: "Plutôt que d'inventer un besoin, j'adapte au marché francophone des produits déjà validés ailleurs. Si un équivalent se vend déjà à l'international, le marché est prouvé. Le risque que j'accepte d'absorber devient l'exécution et la localisation française — pas la question « est-ce que quelqu'un en veut ? ».",
      },
      {
        type: 'p',
        text: 'Concrètement, pour prioriser une idée parmi les autres, je regarde :',
      },
      {
        type: 'ul',
        items: [
          "Le succès prouvé de l'équivalent ailleurs (revenus visibles, marché installé).",
          "Ma capacité à l'exécuter vite, seul, avec 8 à 10 h par semaine.",
          "Ce que mon expertise IA + cybersécurité apporte de différenciant à la version française.",
        ],
      },
      { type: 'h2', text: 'Le contenu comme moteur, pas comme vitrine' },
      {
        type: 'p',
        text: "Le contenu n'est pas une fin en soi : c'est mon moteur de distribution et de test. X capte l'attention au jour le jour (métriques, décisions, ratés assumés), YouTube approfondit et démontre l'expertise, LinkedIn transforme la crédibilité en opportunités une fois les premiers jalons atteints.",
      },
      {
        type: 'quote',
        text: "Moins de concurrence ne veut pas dire plus de demande. Le vrai test n'est pas « y a-t-il de la place ? » mais « mes futurs clients sont-ils atteignables et convaincus via du contenu en français ? ». Seul le terrain répond.",
      },
      { type: 'h2', text: 'Ce que je garde volontairement ouvert' },
      {
        type: 'p',
        text: "Certaines décisions se trancheront idée par idée, pas au niveau de la stratégie : le type de client final (B2B, B2C ou mix) et la zone géographique précise du premier SaaS. Les figer maintenant serait prématuré. J'avance, je publie, j'ajuste — et je documente chaque étape ici.",
      },
    ],
  },
  {
    slug: 'l-ia-expliquee-simplement',
    title: "L'IA expliquée simplement : par où commencer en 2026",
    description:
      "Un point de départ clair pour comprendre l'IA générative sans jargon : ce qu'elle fait vraiment, ses limites, et comment s'en servir utilement.",
    date: '2026-07-08',
    modified: '2026-07-08',
    category: 'IA',
    tags: ['IA', 'Vulgarisation', 'LLM', 'Débutants'],
    featured: false,
    readingTime: 5,
    content: [
      {
        type: 'p',
        text: "Il y a beaucoup de bruit autour de l'IA et peu de contenu francophone qui l'explique simplement. Voici l'essentiel pour partir sur de bonnes bases, sans hype ni jargon inutile.",
      },
      { type: 'h2', text: "Un modèle de langage, c'est quoi au fond ?" },
      {
        type: 'p',
        text: "Un grand modèle de langage (LLM) prédit le mot suivant le plus probable, à partir d'énormes quantités de texte. C'est tout — et c'est déjà beaucoup. Cette mécanique simple, à très grande échelle, produit des réponses cohérentes, des résumés, du code ou des traductions.",
      },
      { type: 'h2', text: 'Ce que ça sait bien faire' },
      {
        type: 'ul',
        items: [
          'Reformuler, résumer, traduire et structurer du texte.',
          "Générer un premier jet (e-mail, code, plan d'article) à retravailler.",
          "Répondre à des questions sur un document que tu lui fournis.",
        ],
      },
      { type: 'h2', text: 'Ses limites à garder en tête' },
      {
        type: 'p',
        text: "Un LLM peut « halluciner » : inventer une réponse plausible mais fausse. Il ne connaît pas les faits en temps réel, et il reflète les biais de ses données. La bonne posture : traiter ses sorties comme un brouillon d'expert junior, à vérifier, pas comme une vérité.",
      },
      { type: 'h2', text: 'Par où commencer concrètement' },
      {
        type: 'p',
        text: "Choisis une tâche répétitive et à faible risque de ta semaine, et confie-la à un assistant IA pendant quelques jours. Sois précis dans tes demandes, donne du contexte, et itère. Tu apprendras plus en une semaine d'usage réel qu'en dix articles théoriques.",
      },
    ],
  },
  {
    slug: 'cybersecurite-et-ia-les-angles-morts',
    title: 'Cybersécurité et IA : les angles morts que personne ne montre',
    description:
      "La sécurité est quasi absente des contenus IA orientés usage. Voici les risques concrets quand on utilise des assistants et des données au quotidien — et comment s'en prémunir.",
    date: '2026-06-30',
    modified: '2026-06-30',
    category: 'Cybersécurité',
    tags: ['Cybersécurité', 'IA', 'Sécurité', 'Vie privée'],
    featured: false,
    readingTime: 7,
    content: [
      {
        type: 'p',
        text: "On parle beaucoup de ce que l'IA permet de faire, rarement de ce qu'elle expose. Pourtant, la composante sécurité est presque toujours l'angle mort des contenus IA orientés usage. Faisons le tour des risques concrets.",
      },
      { type: 'h2', text: '1. Ce que tu colles dans le chat ne t\'appartient plus vraiment' },
      {
        type: 'p',
        text: "Coller un contrat, du code propriétaire ou des données clients dans un assistant, c'est potentiellement les envoyer sur des serveurs tiers, parfois réutilisés pour l'entraînement. Avant de partager, demande-toi : est-ce que j'accepterais que ce texte soit stocké ailleurs ?",
      },
      { type: 'h2', text: '2. Les injections de prompt' },
      {
        type: 'p',
        text: "Quand une IA lit une page web, un e-mail ou un document, ce contenu peut contenir des instructions cachées qui détournent son comportement. Un agent qui a accès à tes outils peut alors être manipulé. La règle : ne donne à un agent que les accès strictement nécessaires.",
      },
      { type: 'h2', text: '3. La confiance aveugle dans les sorties' },
      {
        type: 'p',
        text: "Du code généré peut contenir des failles ; un résumé peut omettre l'essentiel ; un lien suggéré peut être malveillant. L'IA accélère, elle ne dédouane pas de la vérification.",
      },
      { type: 'h2', text: 'Une hygiène de base, accessible à tous' },
      {
        type: 'ul',
        items: [
          "Sépare les données sensibles des données banales, et n'expose que le nécessaire.",
          "Active l'option « ne pas entraîner sur mes données » quand elle existe.",
          "Limite les permissions des agents et assistants connectés à tes outils.",
          'Relis et teste tout code ou toute action avant de le déployer.',
        ],
      },
      {
        type: 'p',
        text: "La sécurité n'a pas besoin d'être intimidante. Bien expliquée, elle devient un réflexe — et c'est exactement l'espace que je veux occuper : rendre la cybersécurité de l'IA accessible.",
      },
    ],
  },
  {
    slug: 'adapter-un-saas-qui-marche-deja',
    title: "Adapter un SaaS qui marche déjà : localiser plutôt qu'inventer",
    description:
      "Pourquoi partir d'un produit déjà validé ailleurs réduit le risque, et comment réussir la localisation pour le marché francophone.",
    date: '2026-06-20',
    modified: '2026-06-20',
    category: 'Build in public',
    tags: ['Build in public', 'SaaS', 'Localisation', 'Marché francophone'],
    featured: false,
    readingTime: 5,
    content: [
      {
        type: 'p',
        text: "Inventer un besoin est le pari le plus risqué qui soit. Adapter un produit qui se vend déjà ailleurs déplace le risque là où j'ai le plus de contrôle : l'exécution et la localisation.",
      },
      { type: 'h2', text: "Pourquoi c'est plus malin que de partir de zéro" },
      {
        type: 'p',
        text: "Si un équivalent génère déjà des revenus visibles à l'international, la question « le marché existe-t-il ? » est réglée. Reste à bien exécuter et à parler juste au public francophone. C'est un problème d'artisan, pas de devin.",
      },
      { type: 'h2', text: 'Localiser, ce n\'est pas traduire' },
      {
        type: 'ul',
        items: [
          "Adapter le vocabulaire, les exemples et les cas d'usage à la réalité locale.",
          'Prendre en compte les attentes de confidentialité et les cadres réglementaires.',
          "Choisir des canaux de distribution où l'audience francophone est réellement présente.",
          'Ajuster le prix et le positionnement au pouvoir d\'achat et à la concurrence locale.',
        ],
      },
      { type: 'h2', text: 'Le piège à éviter' },
      {
        type: 'p',
        text: "Le marché francophone est plus petit : moins de spectateurs, monétisation souvent plus faible. « Moins de concurrence » n'est pas un boulevard garanti. Le seul juge de paix reste le terrain : est-ce que ces utilisateurs sont atteignables et convaincus en français ?",
      },
    ],
  },
  {
    slug: 'mon-stack-pour-lancer-vite',
    title: 'Mon stack pour lancer vite et tout documenter',
    description:
      "Les outils et le rythme que j'utilise pour expédier des produits avec 8 à 10 h par semaine, sans m'épuiser.",
    date: '2026-06-10',
    modified: '2026-06-10',
    category: 'Coulisses',
    tags: ['Coulisses', 'Outils', 'Next.js', 'Productivité'],
    featured: false,
    readingTime: 4,
    content: [
      {
        type: 'p',
        text: "Avec un temps limité, le choix des outils n'est pas un détail : c'est ce qui décide si un produit sort ou reste une idée. Voici mon stack, pensé pour la vitesse et la documentation.",
      },
      { type: 'h2', text: 'Construire' },
      {
        type: 'ul',
        items: [
          'Next.js et React pour les interfaces, déployables en quelques minutes.',
          "Des LLM comme copilotes pour accélérer le code et les premiers jets.",
          'Docker pour garder des environnements reproductibles.',
        ],
      },
      { type: 'h2', text: 'Documenter' },
      {
        type: 'p',
        text: "Chaque avancée devient un post sur X, chaque apprentissage un sujet potentiel de vidéo. Je capture au fil de l'eau plutôt que de tout écrire à la fin — c'est ce qui rend le build in public tenable.",
      },
      { type: 'h2', text: 'Tenir dans la durée' },
      {
        type: 'p',
        text: "Mieux vaut un rythme soutenable qu'un sprint qui s'essouffle. 8 à 10 h par semaine, mais régulières, battent des semaines héroïques suivies d'un abandon. La contrainte de temps est une amie : elle force à trancher.",
      },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function blockToText(block: Block): string {
  if (block.type === 'ul') return block.items.join(' ')
  return block.text
}
