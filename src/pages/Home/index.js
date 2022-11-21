import { useEffect, useState } from 'react'
import { Social } from '../../components/Social'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  getDocs,
  collection, 
  orderBy, 
  query,
  doc,
  getDoc
} from 'firebase/firestore'
import { database } from '../../services/firebaseConnection'
import { Logo } from '../../components/Logo'
import './home.css'

export default function Home() {
  const [links, setLinks] = useState([])
  const [socialLinks, setSocialLinks] = useState({})

  useEffect(() => {
    function loadLinks() {
      const linksReference = collection(database, "links")
      const queryReference = query(linksReference, orderBy("created", "asc"))

      getDocs(queryReference).then((snapshot) => {
        let listLinksReturnedFromDB = []

        snapshot.forEach((documentDB) => {
          listLinksReturnedFromDB.push(
            {
              id: documentDB.id,
              name: documentDB.data().name,
              url: documentDB.data().url,
              bg: documentDB.data().backgroundColor,
              color: documentDB.data().linkColor
            }
          )
          setLinks(listLinksReturnedFromDB)
        })
      })

    }
    loadLinks()
  }, [])

  useEffect(() => {
    function loadSocialNetwork() {
      const documentReference = doc(database, "social", "urlSocial")

      getDoc(documentReference).then((snapshot) => {
        if(snapshot.data() !== undefined) {
          setSocialLinks(
            {
              linkedin: snapshot.data().linkedin,
              instagram: snapshot.data().instagram,
              github: snapshot.data().github
            }
          )
        }
      })
    }
    loadSocialNetwork()

  }, [])

  return(
    <div className='container'>
      <Logo />
      <header className='homeHeader'>
        <span>Veja meus links 👇</span>
      </header>

      <main>
        {links.map((item) => (
          <section
            key={item.id}
            className="sectionLink"
            style={{backgroundColor: item.bg}}
          >
            <a href={item.url} target="blank">
              <p className="linkText" style={{color: item.color}}>
                {item.name}
              </p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Social url={socialLinks?.linkedin}>
              <FaLinkedin size={30} color="#FFF" />
            </Social>

            <Social url={socialLinks?.instagram}>
              <FaInstagram size={30} color="#FFF" />
            </Social>

            <Social url={socialLinks?.github}>
              <FaGithub size={30} color="#FFF" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  )
}