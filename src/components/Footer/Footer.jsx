import { Link, useLocation } from 'react-router-dom';
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
        <nav className="footer__links">
          <Link to={'https://practicum.yandex.ru/'} target='_blank' className='footer__link'>
            Яндекс.Практикум
          </Link>
          <Link to={'https://github.com/no-drama-LAMA'} target='_blank' className='footer__link'>
            Github
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;