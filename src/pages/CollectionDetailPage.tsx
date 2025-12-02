import { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { collectionsStore } from '../utils/collectionsStore'
import type { Collection } from '../utils/collectionsStore'

export function CollectionDetailPage() {
  const { collectionId } = useParams()
  const navigate = useNavigate()
  const [collection, setCollection] = useState<Collection | null>(null)

  useEffect(() => {
    if (collectionId) {
      const collections = collectionsStore.getAll()
      const found = collections.find((c) => c.id === collectionId)
      setCollection(found || null)
    }
  }, [collectionId])

  useEffect(() => {
    const handleUpdate = () => {
      if (collectionId) {
        const collections = collectionsStore.getAll()
        const found = collections.find((c) => c.id === collectionId)
        setCollection(found || null)
      }
    }

    window.addEventListener('collections-updated', handleUpdate)
    return () => window.removeEventListener('collections-updated', handleUpdate)
  }, [collectionId])

  const handleRemoveModel = (modelId: string) => {
    if (collectionId && confirm('Remove this model from the collection?')) {
      collectionsStore.removeModel(collectionId, modelId)
      const collections = collectionsStore.getAll()
      const updated = collections.find((c) => c.id === collectionId)
      setCollection(updated || null)
    }
  }

  if (!collection) {
    return <Navigate to="/collections" replace />
  }

  return (
    <section className="collection-detail-shell">
      <button className="back-link" onClick={() => navigate('/collections')}>
        ← Back to Collections
      </button>

      <div className="page-heading">
        <p className="eyebrow">Collection</p>
        <h1>{collection.name}</h1>
        <p className="page-summary">
          {collection.models.length} model{collection.models.length !== 1 ? 's' : ''} in this
          collection
        </p>
      </div>

      {collection.models.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state-icon">🚗</p>
          <h2>No models yet</h2>
          <p>Browse brands and add models to this collection.</p>
          <button className="primary-button" onClick={() => navigate('/brands')}>
            Browse Brands
          </button>
        </div>
      ) : (
        <div className="collection-models-grid">
          {collection.models.map((model) => (
            <div key={model.id} className="collection-model-card">
              <div className="collection-model-image">
                <img src={model.image} alt={model.name} />
              </div>
              <div className="collection-model-info">
                <h3>{model.name}</h3>
                <p className="collection-model-year">{model.year}</p>
              </div>
              <div className="collection-model-actions">
                <button
                  className="ghost-button"
                  onClick={() => navigate(`/brands/${model.brandId}/models/${model.modelId}`)}
                >
                  View
                </button>
                <button
                  className="ghost-button"
                  onClick={() => handleRemoveModel(model.id)}
                  style={{ color: '#ff6b6b' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

