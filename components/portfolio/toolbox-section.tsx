'use client'

import { useState } from 'react'
import type { Tool } from '@/lib/portfolio/types'
import { cn } from '@/lib/utils'
import { SectionLabel, SectionTitle } from './primitives'

type ToolboxSectionProps = {
  tools: Tool[]
  defaultTool: string
  fallbackDescription: string
}

export function ToolboxSection({ tools, defaultTool, fallbackDescription }: ToolboxSectionProps) {
  const [selected, setSelected] = useState(defaultTool)
  const selectedTool = tools.find((tool) => tool.name === selected)

  return (
    <section id="toolbox" className="px-6 py-28 md:px-24 md:py-36">
      <SectionLabel index="05" className="mb-10 text-[#6A4951]">My toolbox</SectionLabel>
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <SectionTitle lines={['Tools for']} emphasis="thinking." className="text-6xl leading-[0.9] md:text-9xl" emphasisClassName="text-[#6A4951]" />
        <div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <button
                key={tool.name}
                onClick={() => setSelected(tool.name)}
                aria-pressed={selected === tool.name}
                className={cn(
                  'border px-4 py-3 font-sans text-xs uppercase tracking-[0.15em] transition-colors',
                  selected === tool.name ? 'border-[#434F03] bg-[#434F03] text-[#F0E8CD]' : 'border-[#574830]/30 hover:border-[#987E29]',
                )}
              >
                {tool.name}
              </button>
            ))}
          </div>
          <div className="mt-10 border-t border-[#574830]/25 pt-6">
            <p className="font-serif text-3xl">{selected}</p>
            <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-[#574830]">{selectedTool?.description ?? fallbackDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
