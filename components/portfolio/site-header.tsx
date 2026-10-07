'use client'

import { useState } from 'react'

type SiteHeaderProps = {
  brand: string
  email: string
  navItems: string[]
}

export function SiteHeader({ brand, email, navItems }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 mix-blend-multiply md:px-12">
        <a href="#top" className="font-sans text-sm font-bold uppercase tracking-[0.22em]">
          {brand}
          <span className="text-[#987E29]">.</span>
        </a>
        <nav className="hidden gap-8 font-sans text-xs font-medium uppercase tracking-[0.16em] sm:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} className="transition-colors hover:text-[#987E29]" href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>
        <button className="font-sans text-xs font-bold uppercase tracking-[0.16em] sm:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen}>
          Menu
        </button>
        <a href={`mailto:${email}`} className="hidden font-sans text-xs font-bold uppercase tracking-[0.16em] underline decoration-[#987E29] underline-offset-4 sm:block">
          Let&apos;s talk
        </a>
      </header>
      {menuOpen && (
        <nav className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-[#F0E8CD] font-serif text-5xl" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </>
  )
}
