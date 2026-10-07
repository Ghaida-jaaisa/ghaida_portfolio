'use client'

import { useRotatingIndex } from '@/hooks/use-rotating-index'

type HeroSectionProps = {
  role: string
  words: string[]
}

export function HeroSection({ role, words }: HeroSectionProps) {
  const wordIndex = useRotatingIndex(words.length, 2200)

  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pb-20 pt-32 md:px-12">
      <div className="relative z-10 max-w-5xl">
        <p className="mb-8 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#6A4951]">{role}</p>
        <h1 className="font-serif text-[clamp(4rem,11vw,10.5rem)] leading-[0.83] tracking-[-0.07em]">
          I build things
          <br />
          <em className="pl-[12vw] font-normal text-[#6A4951]">people enjoy</em>
          <br />
          using<span className="text-[#987E29]">.</span>
        </h1>
        <div className="mt-12 flex items-center gap-4 font-sans text-sm text-[#574830]">
          <span className="inline-block h-px w-12 bg-[#987E29]" />{' '}
          <span>
            Currently making <strong className="text-[#434F03]">{words[wordIndex]}</strong>
          </span>
        </div>
      </div>
      <HeroArt />
      <a href="#work" className="absolute bottom-8 left-6 flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.2em] md:left-12">
        <span className="flex size-8 items-center justify-center rounded-full border border-[#574830]">↓</span> Explore
      </a>
    </section>
  )
}

function HeroArt() {
  return (
    <div aria-hidden="true" className="absolute right-[8%] top-[23%] hidden size-64 md:block lg:size-80">
      <div className="absolute inset-10 rotate-12 border border-[#987E29]" />
      <div className="absolute inset-14 -rotate-6 rounded-[48%_52%_60%_40%] bg-[#6A4951] opacity-90" />
      <div className="absolute inset-20 rounded-[60%_40%_45%_55%] bg-[#987E29] mix-blend-multiply" />
      <span className="absolute -bottom-8 left-0 font-serif text-3xl italic text-[#6A4951]">make it feel good</span>
    </div>
  )
}
