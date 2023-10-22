import './Login.css'
import { useNavigate } from 'react-router-dom'
import useValidation from '../../utils/useValidation';
import Sign from '../Sign/Sign';

function Login({setLoggedIn, name, title, buttonText}) {
  const navigation = useNavigate()
  const {isInputValid, inputMessages, inputValues, isFormValid, handleChange} = useValidation();

  function enter(evt) {
    evt.preventDefault()
    navigation('/')
    setLoggedIn(true)
  }

  return (
    <Sign name={name} isFormValid={isFormValid} onSubmit={enter} title={title} buttonText={buttonText}>
      <label className="form__label">
        <p className="form__subtitle">E-mail</p>
        <input
          type="email"
          className={`form__input ${isInputValid.email === undefined || isInputValid.email ? '' : 'form__input_type_error'}`}
          name="email"
          id="login-email"
          required
          value={inputValues.email}
          onChange={handleChange}
        />
        <p className="form__input-error-text">{inputMessages.email}</p>
      </label>
      <label className="form__label">
        <p className="form__subtitle">Пароль</p>
        <input
          type="password"
          className={`form__input ${isInputValid.password === undefined || isInputValid.password ? '' : 'form__input_type_error'}`}
          name="password"
          id="login-password"
          required
          minLength={2}
          maxLength={30}
          onChange={handleChange}
          value={inputValues.password}
        />
        <p className="form__input-error-text">{inputMessages.password}</p>
      </label>
    </Sign>
  )
}

export default Login;