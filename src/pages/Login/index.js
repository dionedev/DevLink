import { useState } from 'react'
import { Logo } from '../../components/Logo'
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './login.css'
import { Input } from '../../components/Input'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()

    if(email === ''|| password === '') {
      alert('Por favor, preencha todos os campos.')
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() => navigate('/admin', {replace: true}))
    .catch(() => toast.error('Erro ao tentar fazer login.'))
  }

  return(
    <div className='loginContainer'>

      <Logo/>
      
      <form className='form' onSubmit={handleLogin}>
        <Input
          type='email' 
          placeholder='Digite seu email...'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        
        <Input
          type='password' 
          placeholder='Senha' 
          autoComplete='on'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      
        <button type='submit'>Acessar</button>
      </form>
    </div>
  ) 
}