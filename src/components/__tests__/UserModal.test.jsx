import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import UserModal from '../UserModal.jsx'

const mockUser = {
  login: 'octocat',
  name: 'The Octocat',
  avatar_url: 'https://example.com/avatar.png',
  bio: 'GitHub mascot',
  public_repos: 8,
  followers: 100,
  following: 9,
  html_url: 'https://github.com/octocat',
}

describe('UserModal', () => {
  it('shows a loading state', () => {
    render(<UserModal user={null} isLoading={true} error={null} onClose={() => {}} />)
    expect(screen.getByText('Loading profile…')).toBeInTheDocument()
  })

  it('renders user details when loaded', () => {
    render(<UserModal user={mockUser} isLoading={false} error={null} onClose={() => {}} />)
    expect(screen.getByText('The Octocat')).toBeInTheDocument()
    expect(screen.getByText('GitHub mascot')).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', () => {
    const handleClose = vi.fn()
    render(<UserModal user={mockUser} isLoading={false} error={null} onClose={handleClose} />)
    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
