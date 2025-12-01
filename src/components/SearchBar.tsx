import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { brands } from '../data/mockData'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const matches = brands.filter((brand) =>
    brand.name.toLowerCase().includes(query.trim().toLowerCase()),
  )

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (matches[0]) {
      navigate(`/brands/${matches[0].id}`)
      setQuery('')
    }
  }

  return (
    <form className="map-search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a brand"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit" className="primary-button">
        Go
      </button>
    </form>
  )
}

