import { useState } from 'react'
import Button from './Button.jsx'

export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4" role="search">
      <input
        type="text"
        className="form-control"
        placeholder="Search GitHub developers, e.g. torvalds"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search GitHub developers"
      />
      <Button type="submit">{isLoading ? 'Searching…' : 'Search'}</Button>
    </form>
  )
}
