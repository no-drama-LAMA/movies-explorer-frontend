import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css'
import { useState } from 'react';

function Navigation({loggedIn}) {

  const {pathname} = useLocation();
  const [isOpenBurger, setIsOpenBurger] = useState(false)

  function handelClickBurger() {
    if (isOpenBurger) {
      setIsOpenBurger(false)
    } else {
      setIsOpenBurger(true)
    }
  }
  
  function closeBurger() {
    setIsOpenBurger(false)
  }

  return (
    <>
      {loggedIn ? (
        <nav className="header__navigation">
          <NavLink to='/movies' className={`header__link ${pathname === "/movies" ? "header__link_active" : ""}`}>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' className={`header__link ${pathname === "/saved-movies" ? "header__link_active" : ""}`}>
            Сохранённые фильмы
          </NavLink>
          <NavLink to='/profile' className={`header__link header__link_profile ${pathname === "/profile" ? "header__link_active" : ""} ${pathname === "/" ? "header__link_dark-blue" : ""}`}>
            Аккаунт
            <div className={`header__profile-logo ${pathname === "/" ? "header__profile-logo_dark-blue" : ""}`} />
          </NavLink>
          <button type='button' className="header__burger"  onClick={handelClickBurger}/>
          <div className={`header__burger-container ${isOpenBurger ? 'header__burger-container_active' : ''}`}>
            <button type='button' className="header__burger-close-button" onClick={handelClickBurger}/>
            <nav className="header__burger-nav">
              <ul className="header__burger-list">
                <li className="header__burger-item">
                  <NavLink to='/' className={`header__link header__link_burger ${pathname === "/" ? "header__link_active" : ""}`} onClick={closeBurger}>
                    Главная
                  </NavLink>
                </li>
                <li className="header__burger-item">
                  <NavLink to='/movies' className={`header__link header__link_burger ${pathname === "/movies" ? "header__link_active" : ""}`} onClick={closeBurger}>
                    Фильмы
                  </NavLink>
                </li>
                <li className="header__burger-item">
                  <NavLink to='/saved-movies' className={`header__link header__link_burger ${pathname === "/saved-movies" ? "header__link_active" : ""}`} onClick={closeBurger}>
                    Сохранённые фильмы
                  </NavLink>
                </li>
                <li className="header__burger-item">
                  <NavLink to='/profile' className={`header__link header__link_burger header__link_profile ${pathname === "/profile" ? "header__link_active" : ""}`} onClick={closeBurger}>
                    Аккаунт
                    <div className="header__profile-logo" />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      ) : (
        <nav className="header__navigation header__navigation_auth">
        <NavLink to='/signup' className="header__auth-link">
          Регистрация
        </NavLink>
        <NavLink to='/signin' className="header__auth-link header__auth-link_signin">
          Войти
        </NavLink>
        </nav>
      )}
    </>
  )
}

export default Navigation;