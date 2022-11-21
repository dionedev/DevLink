import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { MdAddLink } from 'react-icons/md';
import { database } from '../../services/firebaseConnection'; 
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

import './socialNetwork.css';

export default function SocialNetwork() {
  const [linkedinInput, setLinkedinInput] = useState("")
  const [instagramInput, setInstagramInput] = useState("")
  const [githubInput, setGithubInput] = useState("")

  useEffect(() => {
    async function loadSocialNetwork() {
      const documentReference = doc(database, "social", "urlSocial")
      getDoc(documentReference)
      .then((snapshot) => {
        if(snapshot.data() !== undefined) {
          setLinkedinInput(snapshot.data().linkedin)
          setInstagramInput(snapshot.data().instagram)
          setGithubInput(snapshot.data().github)
        }
      })
    }
    loadSocialNetwork()
  }, [])

  async function handleSaveSocialNetwork(event) {
    event.preventDefault()
    
    setDoc(doc(database, "social", "urlSocial"), {
      linkedin: linkedinInput,
      instagram: instagramInput,
      github: githubInput

    })
    .then(() => toast.success("Salvo com sucesso."))
    .catch((error) => toast.error("Ops! Houve um problema ao salvar sua rede social " + error))
  }

  return(
    <div className='adminContainer'>
      <Header />
      <Logo />

      <form className='form' onSubmit={handleSaveSocialNetwork}>
        <label className='label'>LinkedIn</label>
        <Input 
          placeholder="link do linkedin"
          value={linkedinInput}
          onChange={(event) => setLinkedinInput(event.target.value)}
        />

        <label className='label'>Instagram</label>
        <Input 
          placeholder="link do instagram" 
          value={instagramInput}
          onChange={(event) => setInstagramInput(event.target.value)}
        />

        <label className='label'>GitHub</label>
        <Input 
          placeholder="link do github" 
          value={githubInput}
          onChange={(event) => setGithubInput(event.target.value)}
        />

        <button className="btnRegister" type="submit">
          Salvar <MdAddLink size={24} color="#FFF" />
        </button>
      </form>
    </div>
  )
}