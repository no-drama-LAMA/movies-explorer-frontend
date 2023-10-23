import { useLocation } from 'react-router-dom';
import './Footer.css'

function Footer() {
  const { pathname } = useLocation()

  return (
    
    <footer className={`footer ${pathname === '/saved-movies' && 'footer_saved'}`}>
      <p className="footer__subtitle">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">©&nbsp;2023</p>
        <nav className="footer__nav">
          <ul className="footer__links">
            <li>
              <a href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer" className='footer__link'>
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href='https://github.com/no-drama-LAMA' target='_blank' rel="noreferrer" className='footer__link'>
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;