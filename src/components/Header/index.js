import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './header.css'

export function Header() {
  return(
    <header className='adminHeader'>
      <nav className='navHeader'>
        <button>
          <BiLogOut size={28} color='#DB2629' />
        </button>

        <Link to='/admin'>
          Links
        </Link>
        <Link to='/admin/social'>
          Redes Sociais
        </Link>
      </nav>
    </header>
  )
}