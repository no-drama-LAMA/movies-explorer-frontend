import './Movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';

function Movies({setIsError, isError, addToSaved, savedMovies}) {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [isCheckMovies, setIsCheckMovies] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cardListError, setCardListError] = useState(false);
  const [searchDisable, setSearchDisable] = useState(true);

  const moviesFilter = useCallback((value, isCheckMovies, moviesArr) => {
    localStorage.setItem('searchBarValue', JSON.stringify(value));
    localStorage.setItem('anyMovies', JSON.stringify(moviesArr));
    localStorage.setItem('shortMovies', JSON.stringify(isCheckMovies));
    setSearchValue(value);
    setSearchResult(moviesArr.filter((element) => {
      const movieNameRu = element.nameRU.toLowerCase().includes(value.toLowerCase())
      return isCheckMovies ? (movieNameRu && element.duration <= 40) : movieNameRu
    }));
  }, [])

  function searchMovies(value) {
    if (currentMovies.length === 0) {
      setIsLoading(true)
      moviesApi.getMovies()
        .then((res) => {
          setCurrentMovies(res);
          setIsCheckMovies(false);
          setCardListError(false);
          setSearchDisable(false);
          moviesFilter(value, isCheckMovies, res);
        })
        .catch(error => {
          setCardListError(true);
          console.error(`Ошибка при поске фильмов ${error}`);
        })
        .finally(() => setIsLoading(false))
    } else {
      moviesFilter(value, isCheckMovies, currentMovies)
    }
  }

  useEffect(() => {
    if (localStorage.anyMovies && localStorage.shortMovies && localStorage.searchBarValue) {
      setCardListError(false);
      setSearchDisable(false);
      setSearchValue(JSON.parse(localStorage.searchBarValue));
      setIsCheckMovies(JSON.parse(localStorage.shortMovies));
      setCurrentMovies(JSON.parse(localStorage.anyMovies));
      moviesFilter(JSON.parse(localStorage.searchBarValue), JSON.parse(localStorage.shortMovies), JSON.parse(localStorage.anyMovies));
    }
  }, [moviesFilter])

  function onCheckMovies() {
    if (isCheckMovies) {
      setIsCheckMovies(false);
      moviesFilter(searchValue, false, currentMovies);
    } else {
      setIsCheckMovies(true);
      moviesFilter(searchValue, true, currentMovies);
    }
  }

  return (
    <main className="main">
      <SearchForm
        isChange={onCheckMovies}
        setIsError={setIsError}
        searchMovies={searchMovies}
        searchValue={searchValue}
        searchDisable={searchDisable}
        isError={isError}
      />
      <MoviesCardList
        movies={searchResult}
        savedMovies={savedMovies}
        isLoading={isLoading}
        searchDisable={searchDisable}
        cardListError={cardListError}
        addToSaved={addToSaved}
      />
    </main>
  )
}

export default Movies;