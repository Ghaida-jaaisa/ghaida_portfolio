'use client'

import Image from 'next/image'
import { useId, useState } from 'react'
import type { Education, PathCategory, PathEntry } from '@/lib/portfolio/types'
import { cn } from '@/lib/utils'
import { SectionLabel, SectionTitle } from './primitives'

type Filter = 'all' | PathCategory

const categories: { value: PathCategory; plural: string; singular: string }[] = [
  { value: 'experience', plural: 'Experience', singular: 'Experience' },
  { value: 'program', plural: 'Programs', singular: 'Program' },
  { value: 'training', plural: 'Training', singular: 'Training' },
]

const filters: { value: Filter; label: string }[] = [{ value: 'all', label: 'All' }, ...categories.map(({ value, plural }) => ({ value, label: plural }))]

// A faint paper grain, drawn as SVG noise so no image request is needed.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const pad = (n: number) => String(n).padStart(2, '0')

type PathSectionProps = {
  entries: PathEntry[]
  education: Education
}

export function PathSection({ entries, education }: PathSectionProps) {
  const [filter, setFilter] = useState<Filter>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  // Numbers follow the grouped "All" order and stay fixed while filtering.
  const groups = categories.map((category) => ({ ...category, entries: entries.filter((entry) => entry.category === category.value) }))
  const numbers = new Map(groups.flatMap((group) => group.entries).map((entry, index) => [entry.id, pad(index + 1)]))
  const visibleGroups = groups.filter((group) => group.entries.length > 0 && (filter === 'all' || filter === group.value))

  return (
    <section id="path" className="relative isolate px-6 py-28 md:px-12 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-multiply" style={{ backgroundImage: grain }} />

      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <SectionLabel index="03" className="font-semibold text-[#6A4951]">My path</SectionLabel>
        <div>
          <SectionTitle lines={['My']} emphasis="path." className="text-6xl leading-[0.9] tracking-[-0.05em] md:text-9xl" emphasisClassName="text-[#6A4951]" />
          <p className="mt-8 max-w-md font-serif text-xl italic leading-snug text-[#574830] md:text-2xl">
            Different places. Different problems. One continuous process of learning.
          </p>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <div role="group" aria-label="Filter my path" className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:px-0">
          <div className="flex min-w-max gap-8 border-b border-[#574830]/25 md:gap-12">
            {filters.map(({ value, label }) => {
              const active = filter === value
              const count = value === 'all' ? entries.length : groups.find((group) => group.value === value)?.entries.length
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(value)}
                  className={cn(
                    'relative cursor-pointer pb-4 font-sans text-xs uppercase tracking-[0.22em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#987E29]',
                    active ? 'font-bold text-[#434F03]' : 'text-[#574830] hover:text-[#434F03]',
                  )}
                >
                  {label}
                  <sup className="ml-1 font-normal text-[#987E29]">{pad(count ?? 0)}</sup>
                  <span
                    aria-hidden
                    className={cn(
                      'absolute inset-x-0 -bottom-px h-0.5 origin-left bg-[#987E29] transition-transform duration-500 motion-reduce:transition-none',
                      active ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Keyed by filter so each switch replays the entrance animation. */}
        <div key={filter}>
          {visibleGroups.map((group, groupIndex) => (
            <div key={group.value} className="mt-14 md:mt-20">
              <h3
                className="flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6A4951] animate-in fade-in [animation-fill-mode:both] motion-reduce:animate-none"
                style={{ animationDelay: `${groupIndex * 120}ms` }}
              >
                <span aria-hidden className="h-px w-6 bg-[#987E29]" />
                {group.plural}
              </h3>
              <ul className="mt-4 border-t border-[#574830]/25">
                {group.entries.map((entry, index) => (
                  <PathRow
                    key={entry.id}
                    entry={entry}
                    number={numbers.get(entry.id) ?? ''}
                    category={group.singular}
                    open={openId === entry.id}
                    onToggle={() => setOpenId((current) => (current === entry.id ? null : entry.id))}
                    delay={groupIndex * 120 + index * 60}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <EducationBlock education={education} />
    </section>
  )
}

type PathRowProps = {
  entry: PathEntry
  number: string
  category: string
  open: boolean
  onToggle: () => void
  delay: number
}

function PathRow({ entry, number, category, open, onToggle, delay }: PathRowProps) {
  const id = useId()
  const buttonId = `${id}-button`
  const panelId = `${id}-panel`

  return (
    <li
      className="group relative border-b border-[#574830]/25 animate-in fade-in slide-in-from-bottom-3 duration-500 [animation-fill-mode:both] motion-reduce:animate-none"
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="grid w-full cursor-pointer grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 py-6 text-left transition-[padding] duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#987E29] motion-reduce:transition-none md:grid-cols-[5rem_1fr_3rem_5rem] md:gap-x-6 md:py-8 md:hover:py-10"
      >
        <span className="font-sans text-xs tabular-nums text-[#987E29]">{number}</span>
        <span className="min-w-0">
          <span className="block font-sans text-[11px] uppercase tracking-[0.2em] text-[#574830] transition-all duration-500 group-hover:tracking-[0.28em] group-hover:text-[#6A4951] motion-reduce:transition-none">
            {entry.organization}
            {entry.year && <span className="md:hidden"> · {entry.year}</span>}
          </span>
          <span className="mt-2 block font-serif text-2xl leading-[1.05] tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 motion-reduce:transition-none md:text-5xl">
            {entry.title}
          </span>
        </span>
        <span
          aria-hidden
          className={cn(
            'self-center text-lg text-[#987E29] transition-all duration-500 motion-reduce:transition-none md:text-2xl',
            open ? 'rotate-90 opacity-100' : 'opacity-60 md:-translate-x-3 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100',
          )}
        >
          →
        </span>
        <span className="hidden text-right font-sans text-sm tabular-nums text-[#574830] md:block">{entry.year}</span>
      </button>

      {entry.logo && (
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-40 hidden h-16 w-24 -translate-y-1/2 rotate-3 overflow-hidden opacity-0 transition-all duration-500 group-hover:-translate-y-[60%] group-hover:rotate-0 group-hover:opacity-100 lg:block"
        >
          <Image src={entry.logo} alt="" fill sizes="96px" className="object-contain" />
        </span>
      )}

      <span
        aria-hidden
        className={cn(
          'absolute -bottom-px left-0 h-px w-full origin-left bg-[#987E29] transition-transform duration-700 motion-reduce:transition-none',
          open ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
        )}
      />

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 pb-10 pl-[calc(2.25rem+0.75rem)] md:grid-cols-[1fr_16rem] md:gap-12 md:pb-14 md:pl-[calc(5rem+1.5rem)]">
            <div className="max-w-xl space-y-4 font-sans text-sm leading-relaxed text-[#574830] md:text-base">
              {entry.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-6">
              {entry.logo && (
                <div className="relative h-14 w-28">
                  <Image src={entry.logo} alt={`${entry.organization} logo`} fill sizes="112px" className="object-contain object-left" />
                </div>
              )}
              <dl className="grid grid-cols-2 gap-4 font-sans text-[11px] uppercase tracking-[0.18em] md:grid-cols-1">
                <div>
                  <dt className="text-[#6A4951]">Organization</dt>
                  <dd className="mt-1 font-semibold">{entry.organization}</dd>
                </div>
                <div>
                  <dt className="text-[#6A4951]">Category</dt>
                  <dd className="mt-1 font-semibold">{category}</dd>
                </div>
              </dl>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#6A4951]">{entry.tagsLabel ?? 'Skills'}</p>
                <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1 font-sans text-[11px] font-semibold uppercase tracking-[0.14em]">
                  {entry.tags.map((tag, index) => (
                    <li key={tag}>
                      {index > 0 && <span aria-hidden className="mr-2 text-[#987E29]">·</span>}
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              {entry.link && (
                <a
                  href={entry.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-sans text-xs uppercase tracking-[0.18em] underline decoration-[#987E29] underline-offset-4 transition-colors hover:text-[#6A4951]"
                >
                  {entry.link.label} →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

function EducationBlock({ education }: { education: Education }) {
  return (
    <div className="mt-28 md:mt-40">
      <p className="flex items-center gap-4 font-sans text-[11px] uppercase tracking-[0.25em] text-[#6A4951]">
        <span aria-hidden className="h-px w-12 bg-[#987E29]" />
        And underneath all of this
      </p>
      <article className="mt-10 grid gap-10 border-t-2 border-[#434F03] pt-10 md:grid-cols-[1fr_2fr] md:gap-16 md:pt-14">
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em]">Education</h3>
        </div>
        <div>
          <p className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-8xl">{education.degree}</p>
          <p className="mt-5 font-sans text-xs uppercase tracking-[0.22em] text-[#574830] md:text-sm">{education.school}</p>
          <p className="mt-8 max-w-lg font-serif text-xl italic leading-snug text-[#6A4951]">{education.description}</p>
          <dl className="mt-12 grid grid-cols-2 border-t border-[#574830]/25 md:grid-cols-3">
            <div className="col-span-2 border-b border-[#574830]/25 py-6 md:col-span-1 md:border-b-0">
              <dt className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#6A4951]">Status</dt>
              <dd className="mt-3 inline-flex items-center gap-3 rounded-full border border-[#987E29] px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.2em]">
                <span aria-hidden className="size-2 rounded-full bg-[#987E29]" />
                {education.status}
              </dd>
            </div>
            <div className="py-6 md:border-l md:border-[#574830]/25 md:pl-8">
              <dt className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#6A4951]">GPA</dt>
              <dd className="mt-2 font-serif text-2xl md:text-4xl">{education.gpa}</dd>
            </div>
            <div className="border-l border-[#574830]/25 py-6 pl-8">
              <dt className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#6A4951]">Years</dt>
              <dd className="mt-2 font-serif text-2xl md:text-4xl">{education.period}</dd>
            </div>
          </dl>
        </div>
      </article>
    </div>
  )
}
