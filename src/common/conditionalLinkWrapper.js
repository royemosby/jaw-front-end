export function ConditionalLinkWrapper({ children, link, condition }) {
  if (condition) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  } else {
    return <>{children}</>
  }
}
