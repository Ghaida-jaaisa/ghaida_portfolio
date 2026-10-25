"use client";

import { useState } from "react";
import type { Tool } from "@/lib/portfolio/types";
import { cn } from "@/lib/utils";
import { SectionLabel, SectionTitle } from "./primitives";
import {
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiFirebase,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const extraTechs = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Sass', icon: SiSass, color: '#CC6699' },
  { name: 'Firebase', icon: SiFirebase, color: '#DD2C00' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
]

type ToolboxSectionProps = {
  tools: Tool[];
  defaultTool: string;
  fallbackDescription: string;
};

export function ToolboxSection({
  tools,
  defaultTool,
  fallbackDescription,
}: ToolboxSectionProps) {
  const [selected, setSelected] = useState(defaultTool);
  const selectedTool = tools.find((tool) => tool.name === selected);

  return (
    <section id="toolbox" className="px-6 py-28 md:px-24 md:py-36">
      <SectionLabel index="05" className="mb-10 text-[#6A4951]">
        My toolbox
      </SectionLabel>
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <SectionTitle
          lines={["Tools for"]}
          emphasis="thinking."
          className="text-4xl leading-[0.9] md:text-9xl"
          emphasisClassName="text-[#6A4951]"
        />
        <div>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <button
                key={tool.name}
                onClick={() => setSelected(tool.name)}
                aria-pressed={selected === tool.name}
                className={cn(
                  "border px-4 py-3 font-sans text-xs uppercase tracking-[0.15em] transition-colors",
                  selected === tool.name
                    ? "border-[#434F03] bg-[#434F03] text-[#F0E8CD]"
                    : "border-[#574830]/30 hover:border-[#987E29]",
                )}
              >
                {tool.name}
              </button>
            ))}
          </div>
          <div className="mt-10 overflow-hidden border-t border-[#574830]/25 pt-6">
            <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-12 hover:[animation-play-state:paused]">
              {[...extraTechs, ...extraTechs].map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="group flex items-center gap-3 text-[#574830]/70"
                  >
                    <Icon
                      size={30}
                      aria-hidden="true"
                      className="text-[#574830]/70 transition-colors duration-300 group-hover:text-[var(--tech-color)]"
                      style={
                        { "--tech-color": tech.color } as React.CSSProperties
                      }
                    />
                    <span className="font-sans text-xs uppercase tracking-wider">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
