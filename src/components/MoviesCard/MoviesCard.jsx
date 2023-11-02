import { useLocation } from 'react-router-dom';
import './MoviesCard.css'
import { useEffect, useState } from 'react';

function MoviesCard({ data, savedMovies, addToSaved, deleteFromSaved }) {
  const { pathname } = useLocation();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (pathname === '/movies')
      setIsClicked(savedMovies.some((element) => data.id === element.movieId))
  }, [savedMovies, data.id, setIsClicked, pathname])

  function clickButton() {
    if (savedMovies.some((element) => data.id === element.movieId)) {
      setIsClicked(true);
      addToSaved(data);
    } else {
      setIsClicked(false);
      addToSaved(data);
    }
  }

  function changeDurationFormat(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }

  return (
    <li className="movie">
      <article>
        <a href={data.trailerLink} className="movie__link" target="_blank" rel="noreferrer">
          <img className="movie__image" src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} alt={data.nameRU} />
        </a>
        <div className="movie__content">
          <div className="movie__text">
            <h2 className="movie__title">{data.nameRU}</h2>
            <p className="movie__duration">{changeDurationFormat(data.duration)}</p>
          </div>
          {pathname === '/movies' ?
            <button 
              type="button" 
              className={`movie__button movie__button_save ${isClicked ? 'movie__button_active' : ''}`} 
              onClick={clickButton} 
              aria-label="Добавить в избранное"
            />
            :
            <button 
              type="button" 
              className={`movie__button movie__button_delete`} 
              onClick={() => deleteFromSaved(data._id)}
              aria-label="Удалить из избранного"
            />
          }
        </div>
      </article>
    </li>
  )
}

export default MoviesCard;