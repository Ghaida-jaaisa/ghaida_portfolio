import type { FocusItem } from '@/lib/portfolio/types'
import { SectionLabel, SectionTitle } from './primitives'

type AboutSectionProps = {
  name: string
  focus: FocusItem[]
}

export function AboutSection({ name, focus }: AboutSectionProps) {
  return (
    <section id="about" className="px-6 py-28 md:px-24 md:py-36">
      <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
        <SectionLabel index="07" className="text-[#6A4951]">Currently</SectionLabel>
        <div>
          <SectionTitle lines={['Learning.', 'Building.']} emphasis="Exploring." className="text-6xl leading-[0.9] md:text-9xl" emphasisClassName="text-[#6A4951]" />
          <p className="mt-12 max-w-xl font-sans text-lg leading-relaxed text-[#574830]">
            I&apos;m {name} — a Computer Systems Engineer who enjoys turning ideas into interfaces that feel simple, intuitive, and alive.
          </p>
          <div className="mt-12 grid gap-6 border-t border-[#574830]/25 pt-6 sm:grid-cols-3">
            {focus.map((item) => (
              <div key={item.label}>
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-[#987E29]">{item.label}</span>
                <p className="mt-2 font-serif text-xl">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
