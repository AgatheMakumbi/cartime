import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collectionsStore } from '../utils/collectionsStore'
import { getBrandById, getModelById } from '../data/mockData'

type AddToCollectionProps = {
  modelName?: string
}

export function AddToCollection({ modelName }: AddToCollectionProps) {
  const { brandId, modelId } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [isCreatingNew, setIsCreatingNew] = useState(false)
  const [newCollectionName, setNewCollectionName] = useState('')
  const [collections, setCollections] = useState(collectionsStore.getAll())
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    setCollections(collectionsStore.getAll())
  }, [isOpen])

  const handleAddToCollection = (collectionId: string, collectionName: string) => {
    if (!brandId || !modelId) return

    const brand = getBrandById(brandId)
    const model = getModelById(brandId, modelId)

    if (brand && model) {
      collectionsStore.addModel(collectionId, {
        id: `${brandId}-${modelId}`,
        brandId,
        modelId,
        name: model.name,
        year: model.year,
        image: model.heroImage,
      })

      setSuccessMessage(`Added to ${collectionName}!`)
      setTimeout(() => {
        setIsOpen(false)
        setSuccessMessage('')
      }, 1500)
    }
  }

  const handleCreateNew = () => {
    if (newCollectionName.trim()) {
      const newCollection = collectionsStore.createCollection(newCollectionName.trim())
      
      // Ajouter automatiquement le modèle actuel à la nouvelle collection
      if (brandId && modelId) {
        const brand = getBrandById(brandId)
        const model = getModelById(brandId, modelId)
        
        if (brand && model) {
          collectionsStore.addModel(newCollection.id, {
            id: `${brandId}-${modelId}`,
            brandId,
            modelId,
            name: model.name,
            year: model.year,
            image: model.heroImage,
          })
        }
      }

      setSuccessMessage(`Created "${newCollectionName}"!`)
      setNewCollectionName('')
      setIsCreatingNew(false)
      
      setTimeout(() => {
        setIsOpen(false)
        setSuccessMessage('')
      }, 1500)
    }
  }

  return (
    <>
      <button type="button" className="add-collection" onClick={() => setIsOpen(true)}>
        <span className="add-icon" aria-hidden="true">
          +
        </span>
        Add to collection
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add to Collection</h2>
              <button className="modal-close" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>

            <div className="modal-body">
              {successMessage ? (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <p>{successMessage}</p>
                </div>
              ) : !isCreatingNew ? (
                <>
                  <p className="modal-subtitle">Select an existing collection:</p>
                  <div className="collections-list">
                    {collections.map((collection) => (
                      <button
                        key={collection.id}
                        className="collection-item"
                        onClick={() => handleAddToCollection(collection.id, collection.name)}
                      >
                        <div className="collection-info">
                          <span className="collection-name">{collection.name}</span>
                          <span className="collection-count">{collection.models.length} models</span>
                        </div>
                        <span className="collection-arrow">→</span>
                      </button>
                    ))}
                  </div>

                  <div className="modal-divider">
                    <span>or</span>
                  </div>

                  <button className="primary-button full-width" onClick={() => setIsCreatingNew(true)}>
                    <span>+</span> Create a new collection
                  </button>
                </>
              ) : (
                <>
                  <p className="modal-subtitle">Create a new collection:</p>
                  <input
                    type="text"
                    className="modal-input"
                    placeholder="Collection name..."
                    value={newCollectionName}
                    onChange={(e) => setNewCollectionName(e.target.value)}
                    autoFocus
                  />
                  <div className="modal-actions">
                    <button className="secondary-button" onClick={() => setIsCreatingNew(false)}>
                      Cancel
                    </button>
                    <button
                      className="primary-button"
                      onClick={handleCreateNew}
                      disabled={!newCollectionName.trim()}
                    >
                      Create
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

