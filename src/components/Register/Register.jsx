import useValidation from '../../utils/useValidation';
import Sign from '../Sign/Sign';
import './Register.css'
import { useNavigate } from 'react-router-dom'

function Register({setLoggedIn, name, title, buttonText}) {
  const navigation = useNavigate()
  
  const {isInputValid, inputMessages, inputValues, isFormValid, handleChange} = useValidation();

  function enter(evt) {
    evt.preventDefault()
    navigation('/signin')
    setLoggedIn(true)
  }

  return (
    <Sign name={name} isFormValid={isFormValid} onSubmit={enter} title={title} buttonText={buttonText} >
      <label className="form__label">
        <p className="form__subtitle">Имя</p>
        <input
          type="text"
          className={`form__input ${isInputValid.username === undefined || isInputValid.username ? '' : 'form__input_type_error'}`}
          name="username"
          id="register-username"
          required
          minLength={3}
          value={inputValues.username}
          onChange={handleChange}
        />
        <p className="form__input-error-text">{inputMessages.username}</p>
      </label>
      <label className="form__label">
        <p className="form__subtitle">E-mail</p>
        <input
          type="email"
          className={`form__input ${isInputValid.email === undefined || isInputValid.email ? '' : 'form__input_type_error'}`}
          name="email"
          id="register-email"
          required
          onChange={handleChange}
          value={inputValues.email}
        />
        <p className="form__input-error-text">{inputMessages.email}</p>
      </label>
      <label className="form__label">
        <p className="form__subtitle">Пароль</p>
        <input
          type="password"
          className={`form__input ${isInputValid.password === undefined || isInputValid.password ? '' : 'form__input_type_error'}`}
          name="password"
          id="register-password"
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

export default Register;