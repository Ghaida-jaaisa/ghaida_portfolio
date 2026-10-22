
const hobbies = [
  {
    number: '01',
    title: 'DIY & Mechanical Tinkering',
    description: 'Building, fixing, and understanding how things work.',
    icon: '⚙',
  },
  {
    number: '02',
    title: 'Photography',
    description: 'Capturing moments, details, and different perspectives.',
    icon: '◎',
  },
  {
    number: '03',
    title: 'Debugging & Problem Solving',
    description: 'Turning errors into solutions and learning along the way.',
    icon: '</>',
  },
  {
    number: '04',
    title: 'Teaching & Knowledge Sharing',
    description: 'Sharing knowledge and helping others grow.',
    icon: '↗',
  },
  {
    number: '05',
    title: 'Electronics & Hardware',
    description: 'Exploring circuits, sensors, and hands-on projects.',
    icon: '⌘',
  },
]

export function ThinkingSection() {
  return (
    <section
      id="thinking"
      className="bg-[#434F03] px-6 py-24 text-[#302318] md:px-16 md:py-32"
    >
      <div className="mb-14 flex items-center gap-4">
        <span className="text-xs tracking-[0.25em] text-[#987E29]">
          05
        </span>
        <span className="h-px w-10 bg-[#987E29]" />
        <span className="text-xs font-medium uppercase tracking-[0.2em]">
          Hobbies & Interests
        </span>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
        <h2 className="font-serif text-6xl leading-[0.95] md:text-8xl">
          Small passions.
          <span className="mt-2 block italic text-[#987E29]">
            Big balance.
          </span>
        </h2>

        <p className="max-w-md text-base leading-7 text-[#65594B] md:justify-self-end md:text-lg">
          Outside of code, I enjoy exploring things that keep me
          curious, creative, and grounded.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {hobbies.map((hobby) => (
          <article
            key={hobby.number}
            className="group flex min-h-64 flex-col border border-[#574830]/15 bg-[#F7F2E6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#987E29]/60"
          >
            <div className="mb-12 flex items-center justify-between">
              <span className="text-xs tracking-widest text-[#987E29]">
                {hobby.number}
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#987E29]/40 font-serif text-lg text-[#987E29] transition-colors group-hover:bg-[#574830] group-hover:text-[#F0E8CD]">
                {hobby.icon}
              </span>
            </div>

            <h3 className="mb-3 font-serif text-2xl leading-tight">
              {hobby.title}
            </h3>

            <p className="mt-auto text-sm leading-6 text-[#65594B]">
              {hobby.description}
            </p>

            <div className="mt-6 h-px w-8 bg-[#987E29] transition-all duration-300 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  )
}
