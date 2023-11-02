import { useContext, useEffect } from 'react';
import useValidation from '../../utils/useValidation';
import './Profile.css'
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SubmitButton from '../SubmitButton/SubmitButton';
import { EmailRegex } from '../../utils/constants';

function Profile({isChangeBtn, setIsChangeBtn, notify, isError, handleUpdateUser, quit, buttonText, isLoading, isNotify}) {
  const { inputValues, inputMessages, isInputValid, isFormValid, handleChange, reset } = useValidation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    reset({ username: currentUser.name, email: currentUser.email })
  }, [reset, currentUser, isChangeBtn])

  useEffect(() => {
    notify(false)
    setIsChangeBtn(false)
  }, [notify, setIsChangeBtn])

  function onSubmit(evt) {
    evt.preventDefault()
    handleUpdateUser(inputValues.username, inputValues.email)
  }

  return (
    <main className="main">
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
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
                disabled={isLoading || !isChangeBtn}
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
                disabled={isLoading || !isChangeBtn}
                placeholder='Email'
                pattern={EmailRegex}
              />
          </label>
          <p className="profile__input-error-text">{inputMessages.email}</p>
          <p className={`profile__error-text ${isError ? 'profile__error-text_visible' : isNotify && 'profile__error-text_correct'}`}>{isError ? 'Что-то пошло не так...' : 'Изменения сохранены'}</p>
          {isChangeBtn ?
            <>
              <SubmitButton buttonText={buttonText} isFormValid={isFormValid} isLoading={isLoading} isError={isError} inputValues={inputValues}/>
            </>
          :
            <>
              <button type='submit' className="profile__button" onClick={() => {setIsChangeBtn(true); notify(false)}}>Редактировать</button>
            </>
          }
        </form>
        <Link to={'/'} onClick={quit} className='profile__quite-link'>
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  )
}

export default Profile;