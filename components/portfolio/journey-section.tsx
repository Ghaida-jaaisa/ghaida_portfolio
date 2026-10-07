import type { Milestone } from '@/lib/portfolio/types'
import { SectionLabel, SectionTitle } from './primitives'

type JourneySectionProps = {
  milestones: Milestone[]
}

export function JourneySection({ milestones }: JourneySectionProps) {
  return (
    <section id="journey" className="grid gap-16 px-6 py-28 md:grid-cols-[1fr_2fr] md:px-24 md:py-40">
      <SectionLabel index="02" className="font-semibold text-[#6A4951]">My journey</SectionLabel>
      <div>
        <SectionTitle
          lines={['Curious by nature.']}
          emphasis="Precise by practice."
          className="max-w-3xl text-5xl leading-[0.95] tracking-[-0.04em] md:text-8xl"
          emphasisClassName="text-[#6A4951]"
        />
        <div className="mt-16 border-t border-[#574830]/25">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="grid gap-3 border-b border-[#574830]/25 py-7 md:grid-cols-[7rem_1fr]">
              <span className="font-sans text-sm text-[#987E29]">{milestone.year}</span>
              <div>
                <h3 className="font-serif text-2xl">{milestone.title}</h3>
                <p className="mt-2 max-w-lg font-sans text-sm leading-relaxed text-[#574830]">{milestone.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
