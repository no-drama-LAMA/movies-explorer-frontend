import './Login.css'
import useValidation from '../../utils/useValidation';
import Sign from '../Sign/Sign';

function Login({name, title, buttonText, handleAuthorization, setIsError, isError, isLoading}) {
  const {isInputValid, inputMessages, inputValues, isFormValid, handleChange} = useValidation();

  function enter(evt) {
    evt.preventDefault()
    handleAuthorization(inputValues.email, inputValues.password)
  }

  return (
    <Sign name={name} isFormValid={isFormValid} onSubmit={enter} title={title} buttonText={buttonText} setIsError={setIsError} isError={isError} isLoading={isLoading}>
      <label className="form__label">
        <span className="form__subtitle">E-mail</span>
        <input
          type="email"
          className={`form__input ${isInputValid.email === undefined || isInputValid.email ? '' : 'form__input_type_error'}`}
          name="email"
          id="login-email"
          required
          value={inputValues.email}
          onChange={(evt) => {handleChange(evt); setIsError(false)}}
          disabled={isLoading}
          placeholder='Email'
        />
        <span className="form__input-error-text">{inputMessages.email}</span>
      </label>
      <label className="form__label">
        <span className="form__subtitle">Пароль</span>
        <input
          type="password"
          className={`form__input ${isInputValid.password === undefined || isInputValid.password ? '' : 'form__input_type_error'}`}
          name="password"
          id="login-password"
          required
          minLength={2}
          maxLength={30}
          onChange={(evt) => {handleChange(evt); setIsError(false)}}
          disabled={isLoading}
          value={inputValues.password}
          placeholder='Пароль'
        />
        <span className="form__input-error-text">{inputMessages.password}</span>
      </label>
    </Sign>
  )
}

export default Login;