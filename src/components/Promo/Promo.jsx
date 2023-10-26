import './Promo.css'
import promoBackground from '../../images/promo-background.svg'
import { Link } from "react-scroll";

function Promo() {

  return (
    <section className="promo">
      <div className="promo__background">
        <img
          src={promoBackground}
          alt="Планета, где острова - это Web"
          className="promo__background-image"
        />
      </div>
      <h1 className="promo__title">
        Учебный проект студента факультета Веб‑разработки.
      </h1>
      <p className="promo__subtitle">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <Link
        className='promo__link'
        to="about-project"
        spy={true}
        smooth={true}
        duration={500}
      >
        Узнать больше
      </Link>
    </section>
  )
}

export default Promo;