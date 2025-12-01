import { useMemo, useState } from 'react'
import { brands } from '../data/mockData'
import { MapMarker } from '../components/MapMarker'

type RegionKey = 'all' | 'europe' | 'asia' | 'north-america'

const COUNTRY_TO_REGION: Record<string, RegionKey> = {
  Germany: 'europe',
  Italy: 'europe',
  'Czech Republic': 'europe',
  'United Kingdom': 'europe',
  Japan: 'asia',
  USA: 'north-america',
}

const REGION_LABELS: Record<RegionKey, string> = {
  all: 'Toutes les régions',
  europe: 'Europe',
  asia: 'Asie',
  'north-america': 'Amérique du Nord',
}

export function HomePage() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState<RegionKey>('all')

  const availableRegions = useMemo(
    () =>
      (['all', ...Array.from(new Set(brands.map((brand) => COUNTRY_TO_REGION[brand.country])))] as RegionKey[]).filter(
        (value, index, self) => value && self.indexOf(value) === index,
      ),
    [],
  )

  const filteredBrands = useMemo(
    () =>
      brands.filter((brand) => {
        const matchesQuery =
          query.trim().length === 0 ||
          brand.name.toLowerCase().includes(query.trim().toLowerCase()) ||
          brand.country.toLowerCase().includes(query.trim().toLowerCase()) ||
          brand.regionLabel.toLowerCase().includes(query.trim().toLowerCase())

        const matchesRegion =
          region === 'all' || COUNTRY_TO_REGION[brand.country] === region

        return matchesQuery && matchesRegion
      }),
    [query, region],
  )

  return (
    <section className="home-shell">
      <div className="map-header">
        <div className="map-header-main">
          <p className="eyebrow">World atlas</p>
          <h1>Explore car brands by origin</h1>
          <div className="page-filters">
            <div className="page-search">
              <span className="page-search-icon">⌕</span>
              <input
                type="text"
                className="page-search-input"
                placeholder="Rechercher une marque, un pays ou une ville…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <div className="page-region-chips">
              {availableRegions.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`page-region-chip ${region === key ? 'is-active' : ''}`}
                  onClick={() => setRegion(key)}
                >
                  {REGION_LABELS[key]}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="hint-label">
          <span className="hint-dot" />
          Zoom to explore
        </div>
      </div>

      <div className="map-panel">
        <div className="map-canvas">
          {filteredBrands.map((brand) => (
            <MapMarker key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}

