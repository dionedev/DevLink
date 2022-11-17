import { useState } from "react";
import { Header } from "../../components/Header";
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { MdAddLink } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'
import './admin.css'

export default function Admin() {
  const [linkNameInput, setLinkNameInput] = useState("")
  const [urlLinkInput, setUrlLinkInput] = useState("")
  const [linkBackgroundColorInput, setLinkBackgroundColorInput] = useState("#f1f1f1")
  const [linkColorInput, setLinkColorInput] = useState("#121212")

  return(
    <div className="adminContainer">
      <Header />
      <Logo />

      <form className="form">
        <label className="label">Nome do link</label>
        <Input 
          placeholder="Nome do link" 
          type="text"
          value={linkNameInput}
          onChange={(event) => setLinkNameInput(event.target.value)}
        />

        <label className="label">URL do link</label>
        <Input 
          placeholder="Digite a url" 
          type="url"
          value={urlLinkInput}
          onChange={(event) => setUrlLinkInput(event.target.value)}
        />

        <section className="containerColor">
          <div>
            <label className="label">Cor de fundo do link</label>
            <input
              type="color"
              value={linkBackgroundColorInput}
              onChange={(event) => setLinkBackgroundColorInput(event.target.value)}
            />
          </div>

          <div>
            <label className="label">Cor do link</label>
            <input
              type="color"
              value={linkColorInput}
              onChange={(event) => setLinkColorInput(event.target.value)}
            />
          </div>
        </section>

        <section className="previewSection">
          <label>Seu link está ficando assim 👇</label>
          <article 
            className="linkList"
            style={{marginTop: 8, backgroundColor: linkBackgroundColorInput}}
          >
            <p style={{color: linkColorInput}}>
              {linkNameInput}
            </p>
          </article>
        </section>

        <button className="btnRegister" type="submit">
          Cadastrar <MdAddLink size={24} color="#FFF" />
        </button>
      </form>

      <h2 className="subTitleLinks">
        Meus links
      </h2>

      <article 
        className="linkList animationPop"
        style={
          {
            background: "#000",
            color: "#FFF"
          }
        }
      >
        <p>
          Grupo exclusivo no Telegram
        </p>
        <div>
          <button className="btnDelete">
            <FiTrash2  size={20} color="#DD2222" />
          </button>
        </div>
      </article>
    </div>
  ) 
}