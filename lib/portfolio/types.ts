export type Project = {
  number: string
  title: string
  type: string
  award: string
  text: string
  stack: string
  tone: string
}

export type Milestone = {
  year: string
  title: string
  text: string
}

export type Tool = {
  name: string
  description?: string
}

export type PlaygroundCard = {
  text: string
  className: string
}

export type FocusItem = {
  label: string
  value: string
}

export type SocialLink = {
  label: string
  href: string
}

export type PortfolioContent = {
  owner: { name: string; fullName: string; email: string; role: string }
  navItems: string[]
  heroWords: string[]
  projects: Project[]
  milestones: Milestone[]
  playground: PlaygroundCard[]
  thinkingSteps: string[]
  tools: Tool[]
  defaultTool: string
  defaultToolDescription: string
  certificates: string[]
  currently: FocusItem[]
  socials: SocialLink[]
}
