import './Portfolio.css'

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a href='https://github.com/no-drama-LAMA/how-to-learn' target='_blank' rel="noreferrer" className='portfolio__link'>
            <p className="portfolio__link-text">Статичный сайт</p>
            <div className="portfolio__link-button" />
          </a>
        </li>
        <li className="portfolio__item">
          <a href='https://github.com/no-drama-LAMA/russian-travel' target='_blank' rel="noreferrer" className='portfolio__link'>
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <div className="portfolio__link-button" />
          </a>
        </li>
        <li className="portfolio__item">
          <a href='https://github.com/no-drama-LAMA/mesto-react' target='_blank' rel="noreferrer" className='portfolio__link'>
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <div className="portfolio__link-button" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;