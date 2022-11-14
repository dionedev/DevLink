import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import './error.css'

export default function Error() {
  return(
    <div className="errorPage">
      <Logo/>
      <h1>404...</h1>
      <p>Houston, nós temos um problema. Está página não foi encontrada.</p>

      <Link to='/' className='link'>
        Voltar para Home
      </Link>
    </div>
    
  ) 
}