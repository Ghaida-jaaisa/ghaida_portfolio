"use client";

import { useRotatingIndex } from "@/hooks/use-rotating-index";

type HeroSectionProps = {
  role: string;
  words: string[];
};

export function HeroSection({ role, words }: HeroSectionProps) {
  const wordIndex = useRotatingIndex(words.length, 2200);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pb-20 pt-32 md:px-12"
    >
      <div className="relative z-10 max-w-5xl">
        <p className="mb-8 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#6A4951]">
          {role}
        </p>
        <h1 className="font-serif text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.95] tracking-[-0.07em]">
          I don’t give up
          <br />
          <em className="pl-[12vw] font-normal text-[#6A4951]">easily.</em>
          <br />
          I find another
          <br />
          <em className="pl-[12vw] font-normal text-[#6A4951]">way</em>
          <span className="text-[#987E29]">.</span>
        </h1>
        <div className="mt-12 flex items-center gap-4 font-sans text-sm text-[#574830]">
          <span className="inline-block h-px w-12 bg-[#987E29]" />{" "}
          <span>
            Currently making{" "}
            <strong className="text-[#434F03]">{words[wordIndex]}</strong>
          </span>
        </div>
      </div>
      <HeroArt />
      <a
        href="#path"
        className="absolute bottom-8 left-6 flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.2em] md:left-12"
      >
        <span className="flex size-8 items-center justify-center rounded-full border border-[#574830]">
          ↓
        </span>{" "}
        Explore
      </a>
    </section>
  );
}


function HeroArt() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[2%] top-[18%] hidden h-[420px] w-[340px] md:block lg:right-[7%] lg:top-[12%] lg:h-[500px] lg:w-[400px]"
    >
      {/* Soft background shape */}
      <div className="absolute right-4 top-8 h-[85%] w-[85%] rotate-[-8deg] rounded-[48%_52%_40%_60%] bg-[#E5D9C2]/40" />

      {/* Thin artistic frame */}
      <div className="absolute right-0 top-2 h-[88%] w-[85%] rotate-[5deg] rounded-[48%_52%_45%_55%] border border-[#987E29]/50" />

      {/* Portrait */}
      <div className="absolute inset-x-5 bottom-5 top-5 overflow-hidden rounded-[48%_48%_8%_8%]">
        <img
          src="/images/ghaida.png"
          alt=""
          className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
        />

        {/* Subtle image blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#434F03]/25 via-transparent to-[#F0E9DA]/10" />
      </div>

      {/* Decorative orbit */}
      <div className="absolute -right-3 top-[22%] h-16 w-16 rounded-full border border-[#987E29]/60" />
      <div className="absolute right-3 top-[27%] h-2 w-2 rounded-full bg-[#987E29]" />

      {/* Small accent */}
      <div className="absolute -left-1 top-[18%] h-3 w-3 rounded-full bg-[#6A4951]" />

      {/* Bottom caption */}
      <span className="absolute -bottom-2 left-0 font-serif text-sm italic tracking-wide text-[#6A4951]">
       Brave woman strive to achieve her goals
      </span>
    </div>
  );
}
