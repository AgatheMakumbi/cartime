type LockBadgeProps = {
  label?: string
}

export function LockBadge({ label }: LockBadgeProps) {
  return (
    <span className="lock-badge">{label}</span>
  )
}

