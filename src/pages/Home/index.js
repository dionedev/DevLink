import './home.css'
import { Social } from '../../components/Social'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return(
    <div className='container'>
      <header className='homeHeader'>
        <h1>Developer</h1>
        <span>Veja meus links 👇</span>
      </header>

      <main>
        <section className="sectionLink">
          <a href="#">
            <p className="linkText">
              Canal no YouTube
            </p>
          </a>
        </section>

        <section className="sectionLink">
          <a href="#">
            <p className="linkText">
              Canal no YouTube
            </p>
          </a>
        </section>

        <section className="sectionLink">
          <a href="#">
            <p className="linkText">
              Canal no YouTube
            </p>
          </a>
        </section>

        <footer>
          <Social url="https://www.linkedin.com/in/dionedev/">
            <FaLinkedin size={30} color="#FFF" />
          </Social>

          <Social url="https://www.instagram.com/dione.r.s/">
            <FaInstagram size={30} color="#FFF" />
          </Social>

          <Social url="https://github.com/dionedev">
            <FaGithub size={30} color="#FFF" />
          </Social>
        </footer>
      </main>
    </div>
  )
}