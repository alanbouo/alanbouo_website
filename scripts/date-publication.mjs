// Écrit la date du jour (heure de Paris) dans l'en-tête des articles dont le champ `date:` est vide.
// Lancé par l'action « Date de publication » après chaque fusion sur main : fusionner, c'est publier.
// Affiche les fichiers modifiés, un par ligne. Usage : node scripts/date-publication.mjs [AAAA-MM-JJ]
import fs from 'node:fs'
import path from 'node:path'

const dir = path.join(process.cwd(), 'content/blog')
const today =
  process.argv[2] ?? new Date().toLocaleDateString('sv-SE', { timeZone: 'Europe/Paris' })
if (!/^\d{4}-\d{2}-\d{2}$/.test(today)) throw new Error(`date invalide : ${today}`)

const EMPTY_DATE = /^date:[ \t]*(?:""|'')?[ \t]*$/m

for (const file of fs.readdirSync(dir)) {
  if (!/\.(mdoc|md)$/.test(file) || file.toLowerCase() === 'readme.md') continue
  const full = path.join(dir, file)
  const raw = fs.readFileSync(full, 'utf8')
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m || !EMPTY_DATE.test(m[1])) continue
  const header = m[1].replace(EMPTY_DATE, `date: ${today}`)
  fs.writeFileSync(full, raw.replace(m[1], header))
  console.log(path.join('content/blog', file))
}
