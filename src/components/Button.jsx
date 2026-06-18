export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
}) {
  const variantClass = variant === 'primary' ? 'df-search-btn' : 'btn-outline-secondary'
  return (
    <button type={type} onClick={onClick} className={`btn ${variantClass} ${className}`}>
      {children}
    </button>
  )
}
