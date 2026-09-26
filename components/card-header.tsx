import { MapPin } from 'lucide-react'

export function CardHeader() {
  return (
    <header className="bg-primary px-8 py-10 text-primary-foreground sm:px-12">
      <div className="flex items-center gap-5">
        <div
          aria-hidden="true"
          className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-xl font-semibold text-primary"
        >
          AM
        </div>
        <div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Alan Molina
          </h1>
          <p className="mt-1 text-sm font-medium text-primary-foreground">
            Now on GitHub
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-primary-foreground/80">
            <MapPin className="size-4" aria-hidden="true" />
            Las Vegas, NV · Available for remote work
          </p>
        </div>
      </div>
      <p className="mt-8 text-pretty text-lg leading-relaxed text-primary-foreground/95">
        Licensed Life and Health insurance professional moving into AI training,
        research, and data work.
      </p>
    </header>
  )
}
