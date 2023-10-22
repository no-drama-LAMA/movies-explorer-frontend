import { Link } from 'react-router-dom';
import './AboutMe.css'
import aboutMePic from '../../images/about-me-pic.jpg'

function AboutMe() {

  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__text">
          <p className="about-me__name">Алина</p>
          <p className="about-me__about">Фронтенд-разработчик, пока 26 лет...</p>
          <p className="about-me__description">
            Я родилась и живу в Туле, закончила факультет землеустройства и
            кадастров ТулГУ. У меня нет жены и дочери. Кто не любит слушать музыку -
            выйдите и зайдите нормально. Я ее люблю. Недавно начала кодить и я в
            шоке. Работа у меня классная. Больше про нее ничего не скажу, а то тоже
            захочется.
          </p>
          <Link to={'https://github.com/no-drama-LAMA'} target='_blank' className='about-me__link'>
            Github
          </Link>
        </div>
        <img
          src={aboutMePic}
          alt="Фото студента"
          className="about-me__pic"
        />
      </div>
    </section>
  )
}

export default AboutMe;