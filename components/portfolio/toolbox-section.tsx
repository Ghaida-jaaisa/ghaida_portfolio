"use client";

import { useState } from "react";
import type { Tool } from "@/lib/portfolio/types";
import { cn } from "@/lib/utils";
import { SectionLabel, SectionTitle } from "./primitives";


const extraTechs = [
  { name: 'TypeScript', path: 'typescript.svg' },
  { name: 'Postman', path: 'postman.svg' },
  { name: '.NET', path: 'dotnet.svg' },
  { name: 'Flutter', path: 'flutter.svg' },
  { name: 'Firebase', path: 'firebase.svg' },
  { name: 'Git', path: 'git.svg' },
  { name: 'Docker', path: 'docker.svg' },
  { name: 'Figma', path: 'figma.svg' },
  { name: 'Python', path: 'python.svg' },
  { name: 'Redux', path: 'redux.svg' },
  { name: 'MySQL', path: 'mysql.svg' },
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
    <section id="skills" className="px-6 py-28 md:px-24 md:py-36">
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
          <div className="flex flex-wrap gap-5">
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
          <div className="mt-10 overflow-hidden border-t border-[#574830]/25 pt-6 space-y-6">
              {/* Right to Left */}
              <div className="overflow-hidden">
                <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
                  {[...extraTechs, ...extraTechs].map((tech, index) => (
                    <div
                      key={`rtl-${tech.name}-${index}`}
                      className="group flex shrink-0 items-center gap-3 px-6"
                    >
                      <img
                        src={`/images/tech-stack/${tech.path}`}
                        alt={tech.name}
                        className="h-[30px] w-[30px] object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                      />
                      <span className="font-sans text-xs uppercase tracking-wider text-[#574830]/70">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left to Right */}
              <div className="overflow-hidden">
                <div className="flex w-max animate-[marquee-reverse_25s_linear_infinite] hover:[animation-play-state:paused]">
                  {[...extraTechs, ...extraTechs].map((tech, index) => (
                    <div
                      key={`ltr-${tech.name}-${index}`}
                      className="group flex shrink-0 items-center gap-3 px-6"
                    >
                      <img
                        src={`/images/tech-stack/${tech.path}`}
                        alt={tech.name}
                        className="h-[30px] w-[30px] object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                      />
                      <span className="font-sans text-xs uppercase tracking-wider text-[#574830]/70">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

