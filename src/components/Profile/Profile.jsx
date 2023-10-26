import { useEffect } from 'react';
import useValidation from '../../utils/useValidation';
import './Profile.css'
import { Link } from 'react-router-dom';

function Profile({setLoggedIn}) {
  const { inputValues, inputMessages, isInputValid,  handleChange, reset } = useValidation()

  useEffect(() => {
    reset({username: 'Виталий', useremail: 'pochta@yandex.ru'})
  }, [reset])

  function onSubmit(evt) {
    evt.preventDefault()
  }

  function quit() {
    setLoggedIn(false)
  }

  return (
    <main className="main">
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" name="profile-form" noValidate onSubmit={onSubmit}>
          <label className="profile__label">
              <span className="profile__subtitle">Имя</span>
              <input
                type="text"
                className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_type_error'}`}
                name="username"
                required
                minLength={3}
                maxLength={30}
                value={inputValues.username}
                onChange={handleChange}
                placeholder='Имя'
              />
          </label>
          <p className="profile__input-error-text">{inputMessages.username}</p>
          <label className="profile__label profile__label_last">
              <span className="profile__subtitle">E-mail</span>
              <input
                type="email"
                className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_type_error'}`}
                name="email"
                required
                value={inputValues.email}
                onChange={handleChange}
                placeholder='Email'
              />
          </label>
          <p className="profile__input-error-text">{inputMessages.email}</p>
          <p className="profile__error-text">Что-то пошло не так...</p>
          <button type='submit' className="profile__button">Редактировать</button>
        </form>
        <Link to={'/'} onClick={quit} className='profile__quite-link'>
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  )
}

export default Profile;