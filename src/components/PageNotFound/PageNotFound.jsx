import { Link, useNavigate } from 'react-router-dom'
import './PageNotFound.css'

function PageNotFound() {
  const navigation = useNavigate();

  return (
    <main className="main">
      <section className="page-not-found">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__text">Страница не найдена</p>
        <Link onClick={() => navigation(-1)} to='#' className='page-not-found__link'>Назад</Link>
      </section>
    </main>
  )
}

export default PageNotFound;