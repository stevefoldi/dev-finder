import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SearchBar from '../SearchBar.jsx'

describe('SearchBar', () => {
  it('calls onSearch with the typed query on submit', () => {
    const handleSearch = vi.fn()
    render(<SearchBar onSearch={handleSearch} isLoading={false} />)

    const input = screen.getByLabelText('Search GitHub developers')
    fireEvent.change(input, { target: { value: 'torvalds' } })
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))

    expect(handleSearch).toHaveBeenCalledWith('torvalds')
  })

  it('shows a loading label while searching', () => {
    render(<SearchBar onSearch={() => {}} isLoading={true} />)
    expect(screen.getByRole('button', { name: 'Searching…' })).toBeInTheDocument()
  })
})
