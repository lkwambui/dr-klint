export default function Container({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`site-shell ${className}`}>{children}</Tag>
}
