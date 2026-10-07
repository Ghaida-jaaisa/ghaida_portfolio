export type Project = {
  number: string
  title: string
  type: string
  award: string
  text: string
  stack: string
  tone: string
}

export type PathCategory = 'experience' | 'program' | 'training'

export type PathEntry = {
  id: string
  organization: string
  title: string
  category: PathCategory
  // Placeholder years; edit freely or leave out to hide.
  year?: string
  description: string[]
  tags: string[]
  tagsLabel?: string
  // Optional supporting visuals: only rows that set these show them.
  logo?: string
  link?: { label: string; href: string }
}

export type Education = {
  school: string
  degree: string
  period: string
  status: string
  gpa: string
  description: string
}

export type Tool = {
  name: string
  description?: string
}

export type PlaygroundCard = {
  text: string
  className: string
}

export type Certificate = {
  title: string
  issuer: string
  date: string
  image: string
  credentialUrl?: string
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
  path: PathEntry[]
  education: Education
  playground: PlaygroundCard[]
  thinkingSteps: string[]
  tools: Tool[]
  defaultTool: string
  defaultToolDescription: string
  certificates: Certificate[]
  currently: FocusItem[]
  socials: SocialLink[]
}
