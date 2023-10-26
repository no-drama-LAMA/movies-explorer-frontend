import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useState } from 'react'
import useValidation from '../../utils/useValidation'


function SearchForm({ isChange }) {
  const [notValidInput, setNotValidInput] = useState(false)
  const {inputValues, isFormValid, handleChange} = useValidation()

  function enter(evt) {
    evt.preventDefault()
    if (isFormValid) {
      setNotValidInput(false)
      return
    } else {
      setNotValidInput(true)
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
            name="search-form-input"
            id="search-form-input"
            placeholder="Фильм"
            required
            onChange={handleChange}
          />
          <button type='submit' className="search-form__button" />
        </div>
        <p className={`search-form__error-text ${notValidInput && 'search-form__error-text_active'}`}>
          Чтобы что-нибудь найти - нужно что-нибудь написать ↑
        </p>
        <FilterCheckbox isChange={isChange}/>
      </form>
    </section>
  )
}

export default SearchForm;