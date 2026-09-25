import { CardContact } from '@/components/card-contact'
import { CardHeader } from '@/components/card-header'
import { CardHighlights } from '@/components/card-highlights'

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center px-4 py-12">
      <article className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <CardHeader />
        <CardHighlights />
        <CardContact />
      </article>
    </main>
  )
}
