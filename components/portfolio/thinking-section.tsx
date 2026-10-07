import { SectionLabel, SectionTitle } from './primitives'

type ThinkingSectionProps = {
  steps: string[]
}

export function ThinkingSection({ steps }: ThinkingSectionProps) {
  return (
    <section id="thinking" className="bg-[#574830] px-6 py-28 text-[#F0E8CD] md:px-24 md:py-36">
      <SectionLabel index="04" className="mb-10 text-[#987E29]">How I think</SectionLabel>
      <SectionTitle lines={['Make it clear.']} emphasis="Make it matter." className="max-w-4xl text-6xl leading-[0.88] md:text-9xl" emphasisClassName="text-[#987E29]" />
      <div className="mt-20 grid gap-px bg-[#F0E8CD]/20 md:grid-cols-6">
        {steps.map((step, index) => (
          <div key={step} className="bg-[#574830] p-5">
            <span className="font-sans text-xs text-[#987E29]">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-10 font-serif text-2xl">{step}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
