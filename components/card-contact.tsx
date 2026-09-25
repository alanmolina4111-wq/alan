import { Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const EMAIL = 'alanmolina4111@gmail.com'

export function CardContact() {
  return (
    <footer className="flex flex-col gap-4 border-t border-border px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-12">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
          Get in touch
        </h2>
        <p className="mt-1 break-all text-foreground">{EMAIL}</p>
      </div>
      <a
        href={`mailto:${EMAIL}`}
        className={cn(buttonVariants({ size: 'lg' }), 'h-10 px-4 text-sm')}
      >
        <Mail aria-hidden="true" />
        Email me
      </a>
    </footer>
  )
}
