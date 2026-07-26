import { config, fields, collection } from '@keystatic/core'

// Éditeur de contenu Keystatic.
// - En local (npm run dev) : mode « local », édite les fichiers sur le disque.
// - En production : mode « cloud », publie via GitHub (connexion GitHub).
//   Renseigne NEXT_PUBLIC_KEYSTATIC_PROJECT = "ton-equipe/ton-projet" (Keystatic Cloud)
//   dans les variables d'environnement de l'hébergeur.
export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : { kind: 'cloud' },
  cloud: {
    project: process.env.NEXT_PUBLIC_KEYSTATIC_PROJECT || 'equipe/projet',
  },
  ui: {
    brand: { name: 'Blog — Alan Bouo' },
  },
  collections: {
    posts: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({
          name: { label: 'Titre', validation: { isRequired: true } },
          slug: {
            label: 'Adresse (slug)',
            description: 'Utilisée dans l’URL /blog/… — minuscules et tirets, sans accents.',
          },
        }),
        description: fields.text({
          label: 'Description',
          description: 'Résumé affiché dans les listes et le partage.',
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Build in public', value: 'Build in public' },
            { label: 'IA', value: 'IA' },
            { label: 'Cybersécurité', value: 'Cybersécurité' },
            { label: 'Coulisses', value: 'Coulisses' },
          ],
          defaultValue: 'IA',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        featured: fields.checkbox({
          label: 'À la une',
          description: 'Met cet article en avant sur /blog et la page d’accueil (un seul à la fois).',
          defaultValue: false,
        }),
        image: fields.image({
          label: 'Image de couverture',
          description: 'Rangée automatiquement au bon endroit. Vise ~1200 px de large.',
          directory: 'public/img/blog',
          publicPath: '/img/blog/',
        }),
        content: fields.markdoc({ label: 'Contenu' }),
      },
    }),
  },
})
