import { ClipboardCheck, Languages, Laptop, Users } from 'lucide-react'

const highlights = [
  {
    icon: Users,
    title: '~120 clients served',
    body: 'Helped clients compare health coverage options clearly and accurately.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance-minded',
    body: 'Worked within strict underwriting and compliance guidelines.',
  },
  {
    icon: Laptop,
    title: 'Fast learner',
    body: 'Detail-oriented and quick to pick up new software and workflows.',
  },
  {
    icon: Languages,
    title: 'Bilingual',
    body: 'Fluent in English and Spanish.',
  },
]

export function CardHighlights() {
  return (
    <section aria-labelledby="highlights-heading" className="px-8 py-10 sm:px-12">
      <h2
        id="highlights-heading"
        className="text-xs font-semibold uppercase tracking-widest text-primary"
      >
        What I bring
      </h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, title, body }) => (
          <li key={title} className="flex gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-medium text-foreground">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
