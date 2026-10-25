
import { SectionLabel, SectionTitle } from './primitives'

const qualities = [
  {
    number: '01',
    title: 'Persistence',
    description: "I don't give up easily, even when things get difficult.",
  },
  {
    number: '02',
    title: 'Growth Mindset',
    description: 'I see challenges as opportunities to learn and improve.',
  },
  {
    number: '03',
    title: 'Continuous Learning',
    description:
      "I'm ready to give my best, learn from experienced professionals, and keep growing.",
  },
]

export function MindsetSection() {
  return (
    <section
      id="mindset"
      className="border-y border-[#574830]/25 px-6 py-24 md:px-12 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
        <div>
          <SectionLabel index="01" className="mb-5 text-[#6A4951]">
            What Defines Me
          </SectionLabel>

          <SectionTitle
            lines={['I grow through']}
            emphasis="every challenge."
            className="text-5xl tracking-[-0.05em] md:text-7xl"
            emphasisClassName="text-[#6A4951]"
          />

          <p className="mt-8 max-w-md font-sans text-base leading-8 text-[#574830]">
            I'm persistent and motivated to grow. I don't give up easily,
            and I see challenges as opportunities to learn. I'm ready to
            put in my best effort, learn from experienced professionals,
            and keep improving.
          </p>

          <p className="mt-8 font-serif text-lg italic text-[#6A4951]">
            Always learning. Always moving forward.
          </p>
        </div>

        <div className="flex flex-col">
          {qualities.map((quality) => (
            <article
              key={quality.number}
              className="group grid grid-cols-[48px_1fr] gap-4 border-t border-[#574830]/25 py-7 transition-colors"
            >
              <span className="pt-1 font-mono text-sm text-[#6A4951]/70">
                {quality.number}
              </span>

              <div>
                <h3 className="text-xl tracking-tight text-[#574830] transition-colors group-hover:text-[#6A4951] md:text-2xl">
                  {quality.title}
                </h3>

                <p className="mt-3 max-w-sm font-sans text-sm leading-7 text-[#574830]/80">
                  {quality.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
