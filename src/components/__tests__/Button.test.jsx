import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from '../Button.jsx'

describe('Button', () => {
  it('renders its label', () => {
    render(<Button>Search</Button>)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Search</Button>)
    fireEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
