import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

function MoviesCardList({ movies }) {
  const [count, setCount] = useState(putCards().init)
  const cards = movies.slice(0, count)

  function putCards() {
    const counter = { init: 16, step: 4}
    if (window.innerWidth < 1023) {
      counter.init = 8
      counter.step = 2
    }
    if (window.innerWidth < 650) {
      counter.init = 5
      counter.step = 2
    }
    return counter
  }

  function clickButtonMore() {
    setCount(count + putCards().step)
  }

  return (
    <section className="movies" aria-label="Фильмы">
      <ul className="movies__container">
          {cards.map((data) => {
            return (
              <MoviesCard key={data.id} nameRU={data.nameRU} url={data.url} trailerLink={data.trailerLink}/>
            )
          })}
      </ul>
      <button type='button' className={`movies__more ${count >= movies.length && 'movies__more_invisible'}`} onClick={clickButtonMore}>Ёще</button>
    </section>
  )
}

export default MoviesCardList;