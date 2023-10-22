import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movies } from '../../utils/constants'
import { useEffect, useState } from 'react';

function Movies() {
  const [currentMovies, setCurrentMovies] = useState([])
  const [isCheckMovies, setIsCheckMovies] = useState(true)

  useEffect(() => {
    setCurrentMovies(movies)
  }, [])

  function onCheckMovies() {
    if (isCheckMovies) {
      setIsCheckMovies(false)
      setCurrentMovies(currentMovies.filter((element) => element.duration <= 40))
    } else {
      setIsCheckMovies(true)
      setCurrentMovies(movies)
    }
  }

  return (
    <main className="main">
      <SearchForm isChange={onCheckMovies} />
      <MoviesCardList movies={currentMovies}/>
    </main>
  )
}

export default Movies;