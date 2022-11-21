import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { MdAddLink } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from "react-toastify";
import { database } from '../../services/firebaseConnection';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc
} from 'firebase/firestore';

import './admin.css';

export default function Admin() {
  const [linkNameInput, setLinkNameInput] = useState("")
  const [urlLinkInput, setUrlLinkInput] = useState("")
  const [linkBackgroundColorInput, setLinkBackgroundColorInput] = useState("#f1f1f1")
  const [linkColorInput, setLinkColorInput] = useState("#121212")

  const [linkList, setLinkList] = useState([])

  useEffect(() => {
    const linksReference = collection(database, "links")
    const queryReference = query(linksReference, orderBy("created", "asc"))

    const unsub = onSnapshot(queryReference, (snapshot) => {
      let listReturnedFromDB = []

      snapshot.forEach((documentDB) => {
        listReturnedFromDB.push(
          {
            id: documentDB.id,
            name: documentDB.data().name,
            url: documentDB.data().url,
            bg: documentDB.data().backgroundColor,
            color: documentDB.data().linkColor
          }
        )
      })
      setLinkList(listReturnedFromDB)
    })
  }, [])

  function handleRegister(event) {
    event.preventDefault();
    
    if(linkNameInput === '' || urlLinkInput === '') {
      toast.warn("Por favor, preencha todos os campos.")
      return;
    }
    addDoc(collection(database, "links"), {
      name: linkNameInput,
      url: urlLinkInput,
      backgroundColor: linkBackgroundColorInput,
      linkColor: linkColorInput,
      created: new Date()

    }).then(() => {
      setLinkNameInput("")
      setUrlLinkInput("")

    }).catch(() => toast.error("Ops, erro ao salvar o link"))
  }

  async function handleDeleteLink(id) {
    const documentReference = doc(database, "links", id)
    await deleteDoc(documentReference)
    toast.success("Link deletado com sucesso.")
  }

  return(
    <div className="adminContainer">
      <Header />
      <Logo />
      <form className="form" onSubmit={handleRegister}>
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

        {linkNameInput ?

          <section className="linksPreviewSection">
            <label className="label">Seu link está ficando assim 👇</label>
            <article 
              className="linkListPreview"
              style={{backgroundColor: linkBackgroundColorInput}}
            >
              <p style={{color: linkColorInput}}>
                {linkNameInput}
              </p>
            </article>
          </section>
        : false }

        <button className="btnRegister" type="submit">
          Cadastrar <MdAddLink size={24} color="#FFF" />
        </button>
      </form>

      <h2 className="subTitleLinks">
        Meus links
      </h2>

      {linkList.map((item, index) => (
        <article
          key={index} 
          className="linkList animationPop"
          style={{ background: item.bg, color: item.color }}
        >
          <p>{item.name}</p>
          <div>
            <button className="btnDelete" onClick={() => handleDeleteLink(item.id)}>
              <FiTrash2  size={20} color="#DD2222" />
            </button>
          </div>
        </article>
      ))}
    </div>
  ) 
}