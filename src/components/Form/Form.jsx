import { useEffect } from 'react';
import './Form.css'
import SubmitButton from '../SubmitButton/SubmitButton';

function Form({name, children, isFormValid, onSubmit, buttonText, setIsError, isError, isLoading}) {

  useEffect(() => {
    setIsError(false)
  }, [setIsError])

  return (
  <form
    className="form"
    name={`${name}-form`}
    id={`${name}-form`}
    noValidate
    onSubmit={onSubmit}
  >
    {children}
    <p className={`form__error-text ${isError && 'form__error-text_visible'}`}>Что-то пошло не так...</p>
    <SubmitButton buttonText={buttonText} isFormValid={isFormValid} isLoading={isLoading} isError={isError}/>
  </form>
  )
}

export default Form;