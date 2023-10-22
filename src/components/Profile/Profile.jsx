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
            <p className="profile__subtitle">Имя</p>
            <input
              type="text"
              className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_type_error'}`}
              name="username"
              required
              minLength={3}
              value={inputValues.username}
              onChange={handleChange}
            />
          </label>
          <p className="profile__input-error-text">{inputMessages.username}</p>
          <div className="profile__line" />
          <label className="profile__label">
            <p className="profile__subtitle">E-mail</p>
            <input
              type="email"
              className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_type_error'}`}
              name="email"
              required
              value={inputValues.email}
              onChange={handleChange}
            />
          </label>
          <p className="profile__input-error-text">{inputMessages.email}</p>
          <p className="profile__error-text">Что-то пошло не так...</p>
          <button className="profile__button">Редактировать</button>
        </form>
        <Link to={'/'} onClick={quit} className='profile__quite-link'>
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  )
}

export default Profile;