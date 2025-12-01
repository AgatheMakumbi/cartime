import { Card } from '../components/Card'
const mockCollections = [
  { id: 'icons', name: 'My BMW favs', count: 6 },
  { id: 'jdm', name: 'JDM Legends', count: 9 },
]

export function CollectionsPage() {
  return (
    <section className="collections-shell">
      <div className="page-heading">
        <p className="eyebrow">Personal garage</p>
        <h1>Collections</h1>
      </div>
      <div className="collections-grid">
        {mockCollections.map((collection) => (
          <Card
            key={collection.id}
            title={collection.name}
            subtitle={`${collection.count} models`}
            action={<button className="ghost-button">Open</button>}
          >
            <p className="card-note">Add a model to enrich this collection.</p>
          </Card>
        ))}
      </div>
      <button className="primary-button with-icon">
        <span>+</span> Create a new collection
      </button>
    </section>
  )
}

