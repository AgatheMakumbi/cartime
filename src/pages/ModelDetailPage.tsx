import { useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { AddToCollection } from '../components/AddToCollection'
import { ImageGallery } from '../components/ImageGallery'
import { getBrandById, getModelById } from '../data/mockData'

export function ModelDetailPage() {
  const { brandId, modelId } = useParams()
  const model = brandId && modelId ? getModelById(brandId, modelId) : undefined
  const brand = brandId ? getBrandById(brandId) : undefined
  const [activeImage, setActiveImage] = useState(model?.heroImage ?? '')

  const gallery = useMemo(() => {
    if (!model) return []
    const base = model.gallery ?? []
    const hero = model.heroImage
    return hero && !base.includes(hero) ? [hero, ...base] : base
  }, [model])

  if (!brand || !model) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="model-shell">
      <div className="model-media">
        <ImageGallery images={gallery} active={activeImage} onSelect={setActiveImage} />
        <div className="model-hero">
          <img src={activeImage} alt={model.name} />
        </div>
      </div>

      <div className="model-content">
        <p className="eyebrow">{brand.name}</p>
        <h1>{model.name}</h1>
        <p className="model-year">{model.year}</p>

        <div className="model-section">
          <h2>Technical description</h2>
          <p>{model.technical}</p>
        </div>
        <div className="model-section">
          <h2>Model history</h2>
          <p>{model.history}</p>
        </div>
        <div className="model-section">
          <h2>Anecdotes</h2>
          <ul>
            {model.anecdotes.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="model-actions">
          <AddToCollection />
        </div>
      </div>
    </section>
  )
}

