export default function UserModal({ user, isLoading, error, onClose }) {
  return (
    <div className="df-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="df-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="df-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {isLoading && <p className="df-empty mb-0">Loading profile…</p>}
        {error && <p className="df-error mb-0">{error}</p>}

        {user && !isLoading && !error && (
          <>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                width="64"
                height="64"
                className="rounded-circle"
              />
              <div>
                <div className="df-card-login">{user.name || user.login}</div>
                <div className="df-card-handle">@{user.login}</div>
              </div>
            </div>

            {user.bio && <p className="mb-3">{user.bio}</p>}

            <div className="row text-center mb-3">
              <div className="col">
                <div className="df-stat-value">{user.public_repos}</div>
                <div className="df-stat-label">Repos</div>
              </div>
              <div className="col">
                <div className="df-stat-value">{user.followers}</div>
                <div className="df-stat-label">Followers</div>
              </div>
              <div className="col">
                <div className="df-stat-value">{user.following}</div>
                <div className="df-stat-label">Following</div>
              </div>
            </div>

            <a href={user.html_url} target="_blank" rel="noreferrer" className="btn df-search-btn w-100">
              View on GitHub
            </a>
          </>
        )}
      </div>
    </div>
  )
}
