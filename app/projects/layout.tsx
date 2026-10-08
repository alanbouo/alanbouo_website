import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  path: '/projects',
  title: 'Projets — Ce que construit Alan Bouo',
  description: "Les projets IA d'Alan Bouo : certains utilisables dès aujourd'hui, d'autres encore en chantier.",
})

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
