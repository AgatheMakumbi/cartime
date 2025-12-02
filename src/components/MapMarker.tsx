import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Brand } from '../data/mockData'

type MapMarkerProps = {
  brand: Brand
}

// Convert lat/lng to percentage position on the map
// Map uses viewBox 0 0 1000 500, coordinates need to match
const latLngToPosition = (lat: number, lng: number) => {
  // Longitude: -180 to 180 -> 0% to 100%
  const left = ((lng + 180) / 360) * 100
  // Latitude: 90 to -90 -> 0% to 100% (inverted because Y increases downward)
  const top = ((90 - lat) / 180) * 100
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
      aria-label={`View ${brand.name} timeline`}
    >
      <span className="marker-pulse" />
      <span className="marker-core">
        <img src={brand.logo} alt={`${brand.name} logo`} className="marker-logo" loading="lazy" />
      </span>
      <span className="marker-label">{brand.name}</span>
    </button>
  )
}

