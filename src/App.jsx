import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import SearchBar from './components/SearchBar.jsx'
import UserCard from './components/UserCard.jsx'
import UserModal from './components/UserModal.jsx'
import { searchUsers, getUserDetails } from './api/github.js'

export default function App() {
  const [users, setUsers] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchError, setSearchError] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)

  const [selectedUser, setSelectedUser] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDetailLoading, setIsDetailLoading] = useState(false)
  const [detailError, setDetailError] = useState(null)

  async function handleSearch(query) {
    setHasSearched(true)
    setSearchError(null)
    setIsSearching(true)
    try {
      const results = await searchUsers(query)
      setUsers(results)
    } catch (err) {
      setSearchError('Something went wrong searching GitHub. Try again in a moment.')
      setUsers([])
    } finally {
      setIsSearching(false)
    }
  }

  async function handleViewDetails(login) {
    setIsModalOpen(true)
    setIsDetailLoading(true)
    setDetailError(null)
    setSelectedUser(null)
    try {
      const details = await getUserDetails(login)
      setSelectedUser(details)
    } catch (err) {
      setDetailError('Could not load this profile. Try again.')
    } finally {
      setIsDetailLoading(false)
    }
  }

  function closeModal() {
    setIsModalOpen(false)
    setSelectedUser(null)
    setDetailError(null)
  }

  return (
    <div>
      <Navbar />
      <div className="container pb-5">
        <SearchBar onSearch={handleSearch} isLoading={isSearching} />

        {searchError && <p className="df-error">{searchError}</p>}

        {!searchError && hasSearched && !isSearching && users.length === 0 && (
          <p className="df-empty">No developers found. Try a different search.</p>
        )}

        <div className="row g-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onViewDetails={handleViewDetails} />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <UserModal
          user={selectedUser}
          isLoading={isDetailLoading}
          error={detailError}
          onClose={closeModal}
        />
      )}
    </div>
  )
}
