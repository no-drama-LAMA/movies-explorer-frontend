import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useEffect } from 'react'
import useValidation from '../../utils/useValidation'
import { useLocation } from 'react-router-dom';


function SearchForm({ isChange, setIsError, isError, searchMovies, searchValue, searchDisable, savedMovies }) {
  const {inputValues,  handleChange, reset} = useValidation();
  const { pathname } = useLocation();

  useEffect(() => {
    if ((pathname === '/saved-movies' && searchValue.length === 0)) {
      reset({ searchinput: '' })
    } else {
      reset({ searchinput: searchValue })
    }
    setIsError(false)
  }, [searchValue, setIsError, pathname, savedMovies, reset])

  function enter(evt) {
    evt.preventDefault()
    if (evt.target.searchinput.value) {
      searchMovies(evt.target.searchinput.value)
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  return (
    <section className="search-form" aria-label='Строка поиска'>
      <form className="search-form__form"
        name="search-form"
        noValidate
        value={inputValues.search}
        onSubmit={enter}
      >
        <div className="search-form__container">
          <input
            type="text"
            className="search-form__input"
            name="searchinput"
            id="searchinput"
            placeholder="Фильм"
            required
            onChange={(evt) => {handleChange(evt); setIsError(false)}}
          />
          <button type='submit' className="search-form__button" />
        </div>
        <p className={`search-form__error-text ${isError && 'search-form__error-text_active'}`}>
          Нужно ввести ключевое слово
        </p>
        <FilterCheckbox isChange={isChange} searchDisable={searchDisable}/>
      </form>
    </section>
  )
}

export default SearchForm;