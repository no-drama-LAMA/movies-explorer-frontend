import { useEffect, useState } from 'react'
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/constants'

function SavedMovies() {
  const [moviesIsSaved, setMoviesIsSaved] = useState([])
  const [isCheckSavedMovies, setIsCheckSavedMovies] = useState(true)

  useEffect(() => {
    setMoviesIsSaved(savedMovies)
  }, [])

  function onCheckSavedMovies() {
    if (isCheckSavedMovies) {
      setIsCheckSavedMovies(false)
      setMoviesIsSaved(moviesIsSaved.filter((element) => element.duration <= 40))
    } else {
      setIsCheckSavedMovies(true)
      setMoviesIsSaved(savedMovies)
    }
  }

  return (
    <main className="main">
      <SearchForm isChange={onCheckSavedMovies} />
      <MoviesCardList movies={moviesIsSaved}/>
    </main>
  )
}

export default SavedMovies;