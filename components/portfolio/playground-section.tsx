import type { PlaygroundCard } from '@/lib/portfolio/types'
import { cn } from '@/lib/utils'
import { SectionLabel, SectionTitle } from './primitives'

type PlaygroundSectionProps = {
  cards: PlaygroundCard[]
}

export function PlaygroundSection({ cards }: PlaygroundSectionProps) {
  return (
    <section id="playground" className="border-y border-[#574830]/25 px-6 py-24 md:px-12 md:py-32">
      <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionLabel index="03" className="mb-5 text-[#6A4951]">Playground</SectionLabel>
          <SectionTitle lines={['Make room']} emphasis="for wonder." className="text-6xl tracking-[-0.05em] md:text-9xl" emphasisClassName="text-[#6A4951]" />
        </div>
        <p className="max-w-xs font-sans text-sm leading-relaxed text-[#574830]">
          Not everything I build needs to become a project. Tiny interactions, visual notes, and questions I am not done asking yet.
        </p>
      </div>
      <div className="mt-20 grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <div key={card.text} className={cn('flex h-48 p-5 transition-transform', card.className)}>
            {card.text}
          </div>
        ))}
      </div>
    </section>
  )
}
