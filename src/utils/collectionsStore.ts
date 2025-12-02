export type CollectionModel = {
  id: string
  brandId: string
  modelId: string
  name: string
  year: number
  image: string
}

export type Collection = {
  id: string
  name: string
  models: CollectionModel[]
}

const STORAGE_KEY = 'cartime_collections'

const defaultCollections: Collection[] = [
  { id: 'bmw-favs', name: 'My BMW favs', models: [] },
  { id: 'jdm-legends', name: 'JDM Legends', models: [] },
]

export const collectionsStore = {
  getAll(): Collection[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : defaultCollections
    } catch {
      return defaultCollections
    }
  },

  save(collections: Collection[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collections))
      window.dispatchEvent(new Event('collections-updated'))
    } catch (error) {
      console.error('Failed to save collections:', error)
    }
  },

  addModel(collectionId: string, model: CollectionModel): void {
    const collections = this.getAll()
    const collection = collections.find((c) => c.id === collectionId)
    
    if (collection) {
      // Éviter les doublons
      const exists = collection.models.some((m) => m.id === model.id)
      if (!exists) {
        collection.models.push(model)
        this.save(collections)
      }
    }
  },

  createCollection(name: string): Collection {
    const collections = this.getAll()
    const newCollection: Collection = {
      id: `collection-${Date.now()}`,
      name,
      models: [],
    }
    collections.push(newCollection)
    this.save(collections)
    return newCollection
  },

  removeModel(collectionId: string, modelId: string): void {
    const collections = this.getAll()
    const collection = collections.find((c) => c.id === collectionId)
    
    if (collection) {
      collection.models = collection.models.filter((m) => m.id !== modelId)
      this.save(collections)
    }
  },

  deleteCollection(collectionId: string): void {
    const collections = this.getAll().filter((c) => c.id !== collectionId)
    this.save(collections)
  },
}

