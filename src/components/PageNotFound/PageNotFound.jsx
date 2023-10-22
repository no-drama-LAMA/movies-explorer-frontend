import { Link } from 'react-router-dom'
import './PageNotFound.css'

function PageNotFound() {

  return (
    <main className="main">
      <section className="page-not-found">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
        <Link to="/" className='page-not-found__link'>Назад</Link>
      </section>
    </main>
  )
}

export default PageNotFound;