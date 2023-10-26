import './FilterCheckbox.css'

function FilterCheckbox({ isChange }) {

  return (
    <div className="search-form__filter-checkbox">
        <label
          className="search-form__filter-checkbox-label"
          htmlFor="filter-checkbox__invisible-checkbox"
        >
          <input
            type="checkbox"
            className="search-form__filter-checkbox-invisible"
            id="filter-checkbox__invisible-checkbox"
            onChange={isChange}
          />
          <svg
            className="search-form__filter-checkbox-visible"
            xmlns="http://www.w3.org/2000/svg"
            width={36}
            height={20}
            viewBox="0 0 36 20"
            fill="none"
          >
            <rect
              
              className="search-form__filter-checkbox-background"
              width={36}
              height={20}
              rx={10}
              fill="#A0A0A0"
              
            />
            <circle
              className="search-form__filter-checkbox-circle"
              cx={10}
              cy={10}
              r={8}
              fill="white"
            />
          </svg>
          <span className="search-form__filter-checkbox-text">Короткометражки</span>
        </label>
      </div>
  )
}

export default FilterCheckbox;