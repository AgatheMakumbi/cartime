type AddToCollectionProps = {
  onClick?: () => void
}

export function AddToCollection({ onClick }: AddToCollectionProps) {
  return (
    <button type="button" className="add-collection" onClick={onClick}>
      <span className="add-icon" aria-hidden="true">
        +
      </span>
      Add to collection
    </button>
  )
}

