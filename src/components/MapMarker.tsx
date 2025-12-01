import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Brand } from '../data/mockData'

type MapMarkerProps = {
  brand: Brand
}

const latLngToPosition = (lat: number, lng: number) => {
  const left = ((lng + 180) / 360) * 100
  const top = 100 - ((lat + 90) / 180) * 100
  return { top: `${top}%`, left: `${left}%` }
}

export function MapMarker({ brand }: MapMarkerProps) {
  const navigate = useNavigate()
  const position = useMemo(
    () => latLngToPosition(brand.location.lat, brand.location.lng),
    [brand.location.lat, brand.location.lng],
  )

  return (
    <button
      type="button"
      className="map-marker"
      style={position}
      onClick={() => navigate(`/brands/${brand.id}`)}
      aria-label={`Voir la frise ${brand.name}`}
    >
      <span className="marker-pulse" />
      <span className="marker-core">
        <img src={brand.logo} alt={`${brand.name} logo`} className="marker-logo" loading="lazy" />
      </span>
      <span className="marker-label">{brand.name}</span>
    </button>
  )
}

