type ImageGalleryProps = {
  images: string[]
  active: string
  onSelect: (image: string) => void
}

export function ImageGallery({ images, active, onSelect }: ImageGalleryProps) {
  return (
    <div className="gallery-strip">
      {images.map((image) => (
        <button
          key={image}
          className={['gallery-thumb', active === image ? 'is-active' : ''].join(' ')}
          onClick={() => onSelect(image)}
          aria-label="Select view"
        >
          <img src={image} alt="" />
        </button>
      ))}
    </div>
  )
}

