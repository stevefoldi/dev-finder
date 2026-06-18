export default function UserCard({ user, onViewDetails }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="df-card p-3 h-100 d-flex flex-column">
        <div className="d-flex align-items-center gap-3 mb-3">
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            width="48"
            height="48"
            className="rounded-circle"
          />
          <div>
            <div className="df-card-login">{user.login}</div>
            <div className="df-card-handle">@{user.login}</div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary mt-auto"
          onClick={() => onViewDetails(user.login)}
        >
          View details
        </button>
      </div>
    </div>
  )
}
