import './social.css'

export function Social({ children, url, name }) {
  return(
    <a 
      className='mediaIcon'
      href={url}
      rel='noopener noreferrer'
      target='_blank'
    >
      {children}
    </a>
  )
}