import { useCallback, useEffect, useState } from 'react'
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({setIsError, isError, savedMovies, deleteFromSaved}) {
  const [searchResult, setSearchResult] = useState(savedMovies);
  const [isCheckMovies, setIsCheckMovies] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchDisable, setSearchDisable] = useState(true);

  const moviesFilter = useCallback((value, isCheckMovies, moviesArr) => {
    setSearchValue(value);
    setSearchResult(moviesArr.filter((element) => {
      const movieNameRu = element.nameRU.toLowerCase().includes(value.toLowerCase())
      return isCheckMovies ? (movieNameRu && element.duration <= 40) : movieNameRu
    }));
  }, [])

  function searchMovies(value) {
    setSearchDisable(false)
    moviesFilter(value, isCheckMovies, savedMovies)
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setSearchDisable(true)
    } else {
      setSearchDisable(false)
    }
    moviesFilter(searchValue, isCheckMovies, savedMovies)
  }, [moviesFilter, searchValue, isCheckMovies, savedMovies])

  function onCheckSavedMovies() {
    if (isCheckMovies) {
      setIsCheckMovies(false)
      setSearchDisable(false)
      moviesFilter(searchValue, false, savedMovies)
    } else {
      setIsCheckMovies(true)
      setSearchDisable(false)
      moviesFilter(searchValue, true, savedMovies)
    }
  }

  return (
    <main className="main">
      <SearchForm
        isChange={onCheckSavedMovies}
        setIsError={setIsError}
        isError={isError}
        isCheckMovies={isCheckMovies}
        searchMovies={searchMovies}
        savedMovies={savedMovies}
        searchValue={searchValue}
        searchDisable={searchDisable} />
      <MoviesCardList
        movies={searchResult}
        searchDisable={searchDisable}
        deleteFromSaved={deleteFromSaved}/>
    </main>
  )
}

export default SavedMovies;