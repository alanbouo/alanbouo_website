// Pipeline de contenu du blog.
// Chaque article est un fichier `content/blog/<slug>.mdoc` (créé via l'éditeur Keystatic)
// ou `.md` (écrit à la main), avec un en-tête (frontmatter).
// Ce module lit ces fichiers au build et fournit les données aux pages (liste, article, RSS).

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Markdoc from '@markdoc/markdoc'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')
const EXTENSIONS = ['.mdoc', '.md']

function renderBody(content: string, ext: string): string {
  if (ext === '.mdoc') {
    const ast = Markdoc.parse(content)
    const transformed = Markdoc.transform(ast)
    return Markdoc.renderers.html(transformed)
  }
  return marked.parse(content, { async: false }) as string
}

function findPostFile(slug: string): { fullPath: string; ext: string } | null {
  for (const ext of EXTENSIONS) {
    const fullPath = path.join(BLOG_DIR, `${slug}${ext}`)
    if (fs.existsSync(fullPath)) return { fullPath, ext }
  }
  return null
}

// Couleurs par catégorie (cartes et badges). Une catégorie inconnue prend la couleur par défaut.
export const categoryColors: Record<string, string> = {
  'Build in public': '#FF9800',
  'IA': '#667eea',
  'Cybersécurité': '#8b2e8b',
  'Coulisses': '#556B2F',
}

export const DEFAULT_CATEGORY_COLOR = '#667eea'

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  modified: string
  category: string
  tags: string[]
  featured: boolean
  image: string | null
  readingTime: number
}

export interface Post extends PostMeta {
  html: string
  wordCount: number
}

function toDateString(value: unknown, fallback = ''): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  if (typeof value === 'string') return value.slice(0, 10)
  return fallback
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter(
      (file) =>
        EXTENSIONS.some((ext) => file.endsWith(ext)) &&
        file.toLowerCase() !== 'readme.md'
    )
    .map((file) => file.replace(/\.(mdoc|md)$/, ''))
}

function parsePost(slug: string): Post | null {
  const found = findPostFile(slug)
  if (!found) return null

  const raw = fs.readFileSync(found.fullPath, 'utf8')
  const { data, content } = matter(raw)

  const date = toDateString(data.date)
  const words = content.split(/\s+/).filter(Boolean).length
  const readingTime =
    typeof data.readingTime === 'number' && data.readingTime > 0
      ? data.readingTime
      : Math.max(1, Math.round(words / 200))

  const html = renderBody(content, found.ext)

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ''),
    date,
    modified: toDateString(data.modified, date),
    category: String(data.category ?? 'Coulisses'),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    featured: data.featured === true,
    image: data.image ? String(data.image) : null,
    readingTime,
    html,
    wordCount: words,
  }
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => parsePost(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ html, wordCount, ...meta }) => meta)
}

export function getPost(slug: string): Post | null {
  return parsePost(slug)
}

export function categoryColor(category: string): string {
  return categoryColors[category] ?? DEFAULT_CATEGORY_COLOR
}
