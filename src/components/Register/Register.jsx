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
        <span className="form__subtitle">Имя</span>
        <input
          type="text"
          className={`form__input ${isInputValid.username === undefined || isInputValid.username ? '' : 'form__input_type_error'}`}
          name="username"
          id="register-username"
          required
          minLength={3}
          maxLength={30}
          value={inputValues.username}
          onChange={handleChange}
          placeholder='Имя'
        />
        <span className="form__input-error-text">{inputMessages.username}</span>
      </label>
      <label className="form__label">
        <span className="form__subtitle">E-mail</span>
        <input
          type="email"
          className={`form__input ${isInputValid.email === undefined || isInputValid.email ? '' : 'form__input_type_error'}`}
          name="email"
          id="register-email"
          required
          onChange={handleChange}
          value={inputValues.email}
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
          id="register-password"
          required
          minLength={2}
          maxLength={30}
          onChange={handleChange}
          value={inputValues.password}
          placeholder='Пароль'
        />
        <span className="form__input-error-text">{inputMessages.password}</span>
      </label>
    </Sign>
  )
}

export default Register;