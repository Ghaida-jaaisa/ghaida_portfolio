"use client";

import { useState } from "react";
import type { Project } from "@/lib/portfolio/types";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./primitives";

type WorkSectionProps = {
  projects: Project[];
  categories: string[];
};

export function WorkSection({ projects, categories }: WorkSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : activeCategory === "Featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="work"
      className="bg-[#434F03] px-6 py-28 text-[#F0E8CD] md:px-12 md:py-40"
    >
      <div className="mb-10 flex items-end justify-between border-b border-[#F0E8CD]/25 pb-5">
        <SectionLabel index="01" className="text-[#987E29]">
          Selected work
        </SectionLabel>
        <p className="hidden font-serif text-lg italic opacity-70 sm:block">
          A collection of useful things
        </p>
      </div>

      <div className="mb-12 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-4 py-2 font-sans text-xs transition-colors",
              activeCategory === category
                ? "border-[#F0E8CD] bg-[#F0E8CD] text-[#434F03]"
                : "border-[#F0E8CD]/30 text-[#F0E8CD]/70 hover:border-[#F0E8CD]",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid gap-7 border-b border-[#F0E8CD]/25 py-10 md:grid-cols-[5rem_1.2fr_1fr] md:items-center md:py-14">
      <span className="font-sans text-xs text-[#987E29]">{project.number}</span>

      <div>
        <h2 className="font-serif text-3xl leading-none transition-transform duration-500 group-hover:translate-x-3 md:text-8xl">
          {project.title}
        </h2>
        <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-[#F0E8CD]/65">
          {project.text}
        </p>
      </div>

      <div>
        <p
          className={cn(
            "mb-5 inline-block rounded-full px-3 py-1 font-sans text-[10px] uppercase tracking-[0.15em] text-[#F0E8CD]",
            project.tone,
          )}
        >
          {project.award}
        </p>

        <p className="font-sans text-xs uppercase tracking-[0.16em] text-[#987E29]">
          {project.type} · {project.stack}
        </p>

        <div className="mt-8 flex flex-wrap gap-5 font-sans text-xs uppercase tracking-[0.18em]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#987E29] underline-offset-4"
            >
              GitHub ↗
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#987E29] underline-offset-4"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
