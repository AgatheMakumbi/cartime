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

  // Calculer les positions avec décalage vertical pour éviter les chevauchements
  const modelPositions = useMemo(() => {
    const sortedModels = [...brand.models].sort((a, b) => a.year - b.year)
    const positions: Array<{ model: typeof sortedModels[0]; left: string; top: string }> = []

    sortedModels.forEach((model, index) => {
      const left = getPosition(model.year)
      
      // Vérifier les chevauchements avec les modèles précédents
      let topOffset = 0
      for (let i = 0; i < index; i++) {
        const prevModel = sortedModels[i]
        const prevLeft = parseFloat(getPosition(prevModel.year).replace('%', ''))
        const currentLeft = parseFloat(left.replace('%', ''))
        const distance = Math.abs(currentLeft - prevLeft)
        
        // Si les modèles sont trop proches (moins de 11% d'écart), on décale verticalement
        if (distance < 11) {
          const prevTop = positions[i].top ? parseFloat(positions[i].top.replace('px', '')) : 0
          topOffset = Math.max(topOffset, prevTop + 110)
        }
      }
      
      positions.push({
        model,
        left,
        top: topOffset > 0 ? `${topOffset}px` : '0px',
      })
    })

    return positions
  }, [brand.models, brand.timelineStart, brand.timelineEnd])

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
        {modelPositions.map(({ model, left, top }) => (
          <div
            key={model.id}
            className="timeline-car"
            style={{ left, top }}
            onMouseEnter={() => setHoveredId(model.id)}
            onMouseLeave={() => setHoveredId((current) => (current === model.id ? null : current))}
          >
            <button
              className="car-icon"
              onClick={() => navigate(`/brands/${brand.id}/models/${model.id}`)}
              aria-label={`Afficher ${model.name}`}
            >
              <img
                src={model.heroImage}
                alt={model.name}
                className="car-image"
                loading="lazy"
              />
            </button>
            {hoveredId === model.id && <ModelTooltip name={model.name} year={model.year} />}
          </div>
        ))}
      </div>
    </section>
  )
}

