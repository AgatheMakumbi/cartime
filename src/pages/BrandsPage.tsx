import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { brands } from '../data/mockData'

export function BrandsPage() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState<'all' | string>('all')

  const regions = useMemo(
    () => Array.from(new Set(brands.map((brand) => brand.country))).sort(),
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

        const matchesRegion = region === 'all' || brand.country === region

        return matchesQuery && matchesRegion
      }),
    [query, region],
  )

  return (
    <section className="brands-shell">
      <div className="page-heading">
        <p className="eyebrow">Garage Atlas</p>
        <h1>Brands</h1>
        <div className="page-filters">
          <input
            type="text"
            className="page-search-input"
            placeholder="Rechercher une marque, un pays ou une ville…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select
            className="page-filter-select"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          >
            <option value="all">Toutes les régions</option>
            {regions.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="brands-grid">
        {filteredBrands.map((brand) => (
          <article key={brand.id} className="brand-card">
            <p className="brand-country">{brand.country}</p>
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
            <span className="brand-region">{brand.regionLabel}</span>
            <Link to={`/brands/${brand.id}`} className="ghost-button">
              View timeline →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

