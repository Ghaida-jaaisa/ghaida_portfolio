import type { PortfolioContent } from './types'

export const portfolioContent: PortfolioContent = {
  owner: {
    name: 'Ghaida',
    fullName: "Ghaida Ja'aysah",
    email: 'hello@ghaida.dev',
    role: 'Computer Systems Engineer · Front-End Developer',
  },
  navItems: ['work', 'journey', 'playground', 'about'],
  heroWords: ['interfaces', 'experiences', 'ideas', 'solutions'],
  projects: [
    { number: '01', title: 'ThemeSolve', type: 'AI × Education', award: '1st place — PLwG Spark Hackathon', text: 'A personalized math problem rewriting experience designed to make difficult questions feel approachable.', stack: 'React · AI · UX research', tone: 'bg-[#6A4951]' },
    { number: '02', title: 'Systems in motion', type: 'Interface experiment', award: 'A study in calm interactions', text: 'Exploring how motion, hierarchy, and thoughtful feedback can make complex systems feel human.', stack: 'Next.js · Motion · Prototyping', tone: 'bg-[#574830]' },
    { number: '03', title: 'Small useful things', type: 'Open playground', award: 'Ongoing collection', text: 'Tiny experiments, creative layouts, and details worth keeping around.', stack: 'JavaScript · CSS · APIs', tone: 'bg-[#434F03]' },
  ],
  milestones: [
    { year: '2023', title: 'Started building for the web', text: 'The first experiments were small, but the curiosity was not.' },
    { year: '2024', title: 'Problem solving & software engineering', text: 'Learning to understand the system before rushing to the solution.' },
    { year: '2025', title: 'Front-end training & hackathons', text: 'Turning ideas into interfaces that people can actually use.' },
    { year: '2026', title: 'Computer Systems Engineering graduate', text: 'Still learning. Still making. Still asking better questions.' },
  ],
  playground: [
    { text: 'A button that feels like a door.', className: 'items-end bg-[#987E29] font-serif text-2xl italic hover:-rotate-2' },
    { text: 'Hover to discover', className: 'items-center justify-center bg-[#6A4951] text-center font-sans text-xs uppercase tracking-[0.2em] text-[#F0E8CD] hover:rotate-2' },
    { text: 'Good details matter.', className: 'items-end bg-[#574830] font-serif text-2xl text-[#F0E8CD] hover:-translate-y-2' },
  ],
  thinkingSteps: ['Problem', 'Understand', 'Break it down', 'Design', 'Build', 'Improve'],
  tools: [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'React', description: 'Building reusable, interactive interfaces that feel natural to use.' },
    { name: 'Next.js' },
    { name: 'Laravel' },
    { name: '.NET' },
    { name: 'Oracle APEX' },
    { name: 'Git' },
    { name: 'REST APIs' },
  ],
  defaultTool: 'React',
  defaultToolDescription: 'A tool I use to turn thoughtful ideas into useful digital experiences.',
  certificates: ['Front-End Development', 'React & Modern JavaScript', 'Computer Systems Engineering', 'AI for Education', 'Web Design & UX'],
  currently: [
    { label: 'Building', value: 'New ideas' },
    { label: 'Learning', value: 'TypeScript' },
    { label: 'Exploring', value: 'Better systems' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
}
