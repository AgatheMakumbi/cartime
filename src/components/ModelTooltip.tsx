type ModelTooltipProps = {
  name: string
  year: number
}

export function ModelTooltip({ name, year }: ModelTooltipProps) {
  return (
    <div className="model-tooltip">
      <p>{name}</p>
      <span>{year}</span>
    </div>
  )
}

