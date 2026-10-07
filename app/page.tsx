import Portfolio from '@/components/portfolio'
import { portfolioContent } from '@/lib/portfolio/content'

export default function Page() {
  return <Portfolio content={portfolioContent} />
}
