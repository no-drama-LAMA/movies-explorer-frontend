import './Form.css'

function Form({ name, children, isFormValid, onSubmit, buttonText }) {
  return (
  <form
    className="form"
    name={`${name}-form`}
    id={`${name}-form`}
    noValidate
    onSubmit={onSubmit}
  >
    {children}
    <p className="form__error-text">Что-то пошло не так...</p>
    <button 
    className={`form__button ${isFormValid ? ' ' : 'form__button_disabled'}`}
    type="submit">
      {buttonText}
    </button>
  </form>
  )
}

export default Form;