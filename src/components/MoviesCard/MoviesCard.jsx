import { Link, useLocation } from 'react-router-dom';
import './MoviesCard.css'
import { useState } from 'react';

function MoviesCard({ nameRU, url, trailerLink }) {

  const { pathname } = useLocation()
  const [isClicked, setIsClicked] = useState(false)

  function clickButton() {
    if (isClicked) {
      setIsClicked(false)
    } else {
      setIsClicked(true)
    }
  }

  return (
    <article className="movie">
      <Link to={trailerLink} className="movie__link" target="_blank">
        <img className="movie__image" src={url} alt={nameRU} />
      </Link>
      <div className="movie__content">
        <div className="movie__text">
          <h2 className="movie__title">{nameRU}</h2>
          <p className="movie__duration">1ч42м</p>
        </div>
        {pathname === '/movies' ?
          <button 
            type="button" 
            className={`movie__button movie__button_save ${isClicked ? 'movie__button_active' : ''}`} 
            onClick={clickButton} 
            aria-label="Добавить в избранное" />
          :
          <button 
          type="button" 
          className={`movie__button movie__button_delete`} 
          onClick={clickButton}
          aria-label="Удалить из избранного" />
        }
      </div>
    </article>
  )
}

export default MoviesCard;