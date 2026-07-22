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
    slug: 'construire-en-public',
    title: 'Construire en public : ma façon d’avancer',
    description:
      "Pourquoi je montre le chemin réel plutôt que la version marketing : mes décisions, mes doutes, et ce que j'apprends en construisant.",
    date: '2026-07-15',
    modified: '2026-07-15',
    category: 'Build in public',
    tags: ['Build in public', 'Indie hacking', 'Transparence', 'Artisanat'],
    featured: true,
    readingTime: 5,
    content: [
      {
        type: 'p',
        text: "Je construis des produits et je raconte tout en public. Pas pour la mise en scène, mais parce que c'est la façon la plus honnête d'avancer — et parce que ça peut aider quelqu'un qui se lance aussi.",
      },
      { type: 'h2', text: 'Ce qui me motive vraiment' },
      {
        type: 'p',
        text: "Ce qui me fait avancer, ce n'est pas un tableau de bord financier. C'est le plaisir de comprendre comment marchent les choses, de les fabriquer de mes mains, et de voir quelqu'un s'en servir. Si, en plus, ça me permet de vivre de ce que je crée tout en gardant mon indépendance, alors c'est gagné.",
      },
      { type: 'h2', text: 'Partir de ce qui a fait ses preuves' },
      {
        type: 'p',
        text: "Je n'ai pas l'obsession d'inventer le concept révolutionnaire. Je préfère m'inspirer de ce qui marche déjà, le refaire à ma façon, et me concentrer sur l'exécution et les détails. C'est plus artisan que visionnaire — et ça me va très bien.",
      },
      { type: 'h2', text: 'Montrer le chemin réel, pas la version marketing' },
      {
        type: 'p',
        text: "Sur X, je tiens le journal de bord au jour le jour ; sur YouTube, je prends le temps d'expliquer et de montrer les coulisses. Je partage les décisions, les avancées, les doutes et les ratés assumés — sans storytelling lissé.",
      },
      {
        type: 'quote',
        text: "Je préfère une petite chose vraie que quelqu'un utilise à une grande promesse que personne ne teste.",
      },
      { type: 'h2', text: 'Ce que je garde ouvert' },
      {
        type: 'p',
        text: "Beaucoup de choses se décideront en chemin plutôt qu'à l'avance. J'avance, je publie, j'ajuste — et je documente chaque étape ici. Si ça résonne, suis le parcours.",
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
        text: "Il y a beaucoup de bruit autour de l'IA et peu de choses, en français, qui l'expliquent simplement. Voici l'essentiel pour partir sur de bonnes bases, sans hype ni jargon inutile.",
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
    slug: 'partir-de-ce-qui-marche',
    title: 'Partir de ce qui marche : refaire à sa façon',
    description:
      "Pourquoi je préfère m'inspirer de ce qui fonctionne déjà et le refaire à ma façon, plutôt que de courir après l'idée révolutionnaire.",
    date: '2026-06-20',
    modified: '2026-06-20',
    category: 'Build in public',
    tags: ['Build in public', 'Exécution', 'Artisanat', 'Produit'],
    featured: false,
    readingTime: 5,
    content: [
      {
        type: 'p',
        text: "Chercher l'idée que personne n'a jamais eue, c'est souvent le meilleur moyen de ne jamais rien lancer. Je préfère partir de ce qui marche déjà et y mettre ma patte.",
      },
      { type: 'h2', text: "Pourquoi c'est plus sain qu'une page blanche" },
      {
        type: 'p',
        text: "Si une idée fonctionne déjà quelque part, la question « est-ce que ça intéresse quelqu'un ? » est en partie réglée. Je peux alors me concentrer sur ce que j'aime vraiment : bien exécuter, soigner les détails, et rendre le tout plus clair et plus accessible.",
      },
      { type: 'h2', text: "Refaire, ce n'est pas copier" },
      {
        type: 'ul',
        items: [
          "Comprendre pourquoi l'original plaît, pas seulement à quoi il ressemble.",
          "Apporter mon angle : l'IA et la cybersécurité expliquées simplement.",
          "Soigner les détails que d'autres négligent.",
          "L'expliquer clairement, en français.",
        ],
      },
      { type: 'h2', text: 'Le piège à éviter' },
      {
        type: 'p',
        text: "« S'inspirer » ne veut pas dire « cloner sans réfléchir ». Si je n'apporte rien de plus — un usage plus simple, une explication plus claire, un vrai soin — alors il n'y a pas de raison de le faire. Le seul juge de paix, c'est la personne qui l'utilise : est-ce que ça lui rend service ?",
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
