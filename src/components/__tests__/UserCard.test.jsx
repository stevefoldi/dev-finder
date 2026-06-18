import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import UserCard from '../UserCard.jsx'

const mockUser = {
  id: 1,
  login: 'octocat',
  avatar_url: 'https://example.com/avatar.png',
}

describe('UserCard', () => {
  it('renders the user login', () => {
    render(<UserCard user={mockUser} onViewDetails={() => {}} />)
    expect(screen.getAllByText('octocat').length).toBeGreaterThan(0)
  })

  it('calls onViewDetails with the login when clicked', () => {
    const handleViewDetails = vi.fn()
    render(<UserCard user={mockUser} onViewDetails={handleViewDetails} />)
    fireEvent.click(screen.getByRole('button', { name: 'View details' }))
    expect(handleViewDetails).toHaveBeenCalledWith('octocat')
  })
})
