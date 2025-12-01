import { Navigate, useParams } from 'react-router-dom'
import { Timeline } from '../components/Timeline'
import { getBrandById } from '../data/mockData'

export function BrandTimelinePage() {
  const { brandId } = useParams()
  const brand = brandId ? getBrandById(brandId) : undefined

  if (!brand) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="timeline-page">
      <div className="page-heading">
        <p className="eyebrow">Timeline</p>
        <h1>History of {brand.name}</h1>
        <p className="page-summary">{brand.description}</p>
      </div>
      <Timeline brand={brand} />
    </section>
  )
}

