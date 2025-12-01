import type { ReactNode } from 'react'

type CardProps = {
  title: string
  subtitle?: string
  action?: ReactNode
  children?: ReactNode
}

export function Card({ title, subtitle, action, children }: CardProps) {
  return (
    <article className="card-shell">
      <div className="card-headline">
        <div>
          <h3>{title}</h3>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </article>
  )
}

