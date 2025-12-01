import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Brand } from '../data/mockData'
import { ModelTooltip } from './ModelTooltip'

type TimelineProps = {
  brand: Brand
}

export function Timeline({ brand }: TimelineProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const navigate = useNavigate()

  const ticks = useMemo(() => {
    const step = 5
    const values = []
    for (let year = brand.timelineStart; year <= brand.timelineEnd; year += step) {
      values.push(year)
    }
    return values
  }, [brand.timelineEnd, brand.timelineStart])

  const getPosition = (year: number) => {
    const range = brand.timelineEnd - brand.timelineStart
    const ratio = (year - brand.timelineStart) / range
    return `${ratio * 100}%`
  }

  return (
    <section className="timeline-shell">
      <div className="timeline-axis">
        {ticks.map((tick) => (
          <div key={tick} className="timeline-tick" style={{ left: getPosition(tick) }}>
            <span className="tick-mark" />
            <span className="tick-label">{tick}</span>
          </div>
        ))}
        <span className="timeline-arrow" aria-hidden="true" />
      </div>
      <div className="timeline-model-layer">
        {brand.models.map((model) => (
          <div
            key={model.id}
            className="timeline-car"
            style={{ left: getPosition(model.year) }}
            onMouseEnter={() => setHoveredId(model.id)}
            onMouseLeave={() => setHoveredId((current) => (current === model.id ? null : current))}
          >
            <button
              className="car-icon"
              onClick={() => navigate(`/brands/${brand.id}/models/${model.id}`)}
              aria-label={`Afficher ${model.name}`}
            >
              <span className="car-icon-body" />
              <span className="car-icon-wheel" />
              <span className="car-icon-wheel second" />
            </button>
            {hoveredId === model.id && <ModelTooltip name={model.name} year={model.year} />}
          </div>
        ))}
      </div>
    </section>
  )
}

