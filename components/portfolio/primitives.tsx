import { Fragment, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionLabelProps = {
  index: string
  children: ReactNode
  className?: string
}

export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <p className={cn('font-sans text-xs uppercase tracking-[0.25em]', className)}>
      {index} / {children}
    </p>
  )
}

type SectionTitleProps = {
  lines: string[]
  emphasis: string
  className?: string
  emphasisClassName?: string
}

export function SectionTitle({ lines, emphasis, className, emphasisClassName }: SectionTitleProps) {
  return (
    <h2 className={cn('font-serif', className)}>
      {lines.map((line) => (
        <Fragment key={line}>
          {line}
          <br />
        </Fragment>
      ))}
      <em className={cn('font-normal', emphasisClassName)}>{emphasis}</em>
    </h2>
  )
}
