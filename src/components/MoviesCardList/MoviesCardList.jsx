import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, savedMovies, isLoading, cardListError, searchDisable, addToSaved, deleteFromSaved }) {
  const [count, setCount] = useState('');
  const cards = movies.slice(0, count);
  const { pathname } = useLocation();

  function putCards() {
    const counter = { init: 16, step: 4};
    if (window.innerWidth < 1025) {
      counter.init = 12;
      counter.step = 3;
    }
    if (window.innerWidth < 769) {
      counter.init = 8;
      counter.step = 2;
    }
    if (window.innerWidth < 481) {
      counter.init = 5;
      counter.step = 2;
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(putCards().init);
      function putCountCards() {
        if (window.innerWidth >= 1025) {
          setCount(putCards().init);
        }
        if (window.innerWidth < 1025) {
          setCount(putCards().init);
        }
        if (window.innerWidth < 769) {
          setCount(putCards().init);
        }
        if (window.innerWidth < 481) {
          setCount(putCards().init);
        }
      }
      window.addEventListener('resize', putCountCards);
      return () => window.removeEventListener('resize', putCountCards);
    }
  }, [pathname])

  function clickButtonMore() {
    setCount(count + putCards().step);
  }

  return (
    <section className="movies" aria-label="Фильмы">
      {isLoading ?
        <Preloader/>
      :
      (pathname === '/movies' && cards.length !== 0) ?
        <ul className="movies__container">
          {cards.map((data) => {
            return (
              <MoviesCard
                key={data.id}
                savedMovies={savedMovies}
                data={data}
                addToSaved={addToSaved}/>
            )
        })}
        </ul>
      :
      movies.length !== 0 ?
        <ul className="movies__container">
          {movies.map((data) => {
            return (
              <MoviesCard key={data._id} data={data} deleteFromSaved={deleteFromSaved}/>
            )
          })}
        </ul>
      :
      !searchDisable ?
      <p className="movies__notification">
        Ничего не найдено
      </p>
      :
      cardListError ?
      <p className="movies__notification">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
      </p>
      :
      <p className="movies__notification">
        Выполните поиск
      </p>
      }
      <>
        {pathname === '/movies' && <button type='button' className={`movies__more ${count >= movies.length && 'movies__more_invisible'}`} onClick={clickButtonMore}>Ёще</button>}
      </>
    </section>
  )
}

export default MoviesCardList;