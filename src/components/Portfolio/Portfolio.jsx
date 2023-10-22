import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <Link to={'https://github.com/no-drama-LAMA/how-to-learn'} target='_blank' className='portfolio__link'>
            <p className="portfolio__link-text">Статичный сайт</p>
            <button className="portfolio__link-button" />
          </Link>
        </li>
        <li className="portfolio__item">
          <Link to={'https://github.com/no-drama-LAMA/russian-travel'} target='_blank' className='portfolio__link'>
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <button className="portfolio__link-button" />
          </Link>
        </li>
        <li className="portfolio__item">
          <Link to={'https://github.com/no-drama-LAMA/mesto-react'} target='_blank' className='portfolio__link'>
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <button className="portfolio__link-button" />
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;