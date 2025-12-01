import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
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
      <Link to={`/brands/${brandId}`} className="model-back-button" aria-label="Retour à la frise">
        ←
      </Link>
      <div className="model-media">
        <div className="model-header">
          <p className="eyebrow">{brand.name}</p>
          <h1>{model.name}</h1>
          <p className="model-year">{model.year}</p>
        </div>
        <div className="model-hero">
          <button
            className="hero-arrow hero-arrow-left"
            onClick={() => {
              const currentIndex = gallery.indexOf(activeImage)
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : gallery.length - 1
              setActiveImage(gallery[prevIndex])
            }}
            aria-label="Image précédente"
          >
            ←
          </button>
          <img src={activeImage} alt={model.name} />
          <button
            className="hero-arrow hero-arrow-right"
            onClick={() => {
              const currentIndex = gallery.indexOf(activeImage)
              const nextIndex = currentIndex < gallery.length - 1 ? currentIndex + 1 : 0
              setActiveImage(gallery[nextIndex])
            }}
            aria-label="Image suivante"
          >
            →
          </button>
        </div>
        <ImageGallery images={gallery} active={activeImage} onSelect={setActiveImage} />
      </div>

      <div className="model-content">

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

