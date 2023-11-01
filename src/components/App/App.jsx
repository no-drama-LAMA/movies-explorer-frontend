import './App.css';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

function App() {
  const navigation = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifyToken, setIsVerifyToken] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const [isChangeBtn, setIsChangeBtn] = useState(false);
  
  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([mainApi.getUserInfo(localStorage.jwt), mainApi.getInitialMovies(localStorage.jwt)])
        .then(([userData, moviesData]) => {
          setSavedMovies(moviesData.reverse());
          setCurrentUser(userData);
          setLoggedIn(true);
          setIsVerifyToken(false);
        })
        .catch((error) => {
          console.error(`Ошибка при авторизации ${error}`);
          setIsVerifyToken(false);
          localStorage.clear();
        })
    } else {
      setLoggedIn(false);
      setIsVerifyToken(false);
      localStorage.clear();
    }
  }, [loggedIn])

  const notify = useCallback(() => {
    setIsNotify(false)
  }, [])

  function handleRegistration(username, email, password) {
    setIsLoading(true);
    mainApi.registration(username, email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(false);
          mainApi.authorization(email, password)
            .then((res) => {
              localStorage.setItem('jwt', res.token);
              setLoggedIn(true);
              window.scrollTo(0, 0);
              navigation('/movies');
            })
            .catch((error) => {
              setIsError(true);
              console.error(`Ошибка при авторизации ${error}`);
            })
            .finally(() => setIsLoading(false))
        }
      })
      .catch((error) => {
        setIsError(true);
        console.error(`Ошибка при регистрации ${error}`);
      })
      .finally(() => setIsLoading(false))
  }

  function handleAuthorization(email, password) {
    setIsLoading(true);
    mainApi.authorization(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        window.scrollTo(0, 0);
        navigation('/movies');
      })
      .catch((error) => {
        setIsError(true);
        console.error(`Ошибка при авторизации ${error}`);
      })
      .finally(() => setIsLoading(false))
  }

  function handleUpdateUser(username, email) {
    setIsLoading(true)
    mainApi.setUserInfo(username, email, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res);
        setIsNotify(true);
        setIsChangeBtn(false);
      })
      .catch((error) => {
        setIsError(true);
        console.error(`Ошибка при редактировании профиля ${error}`);
      })
      .finally(() => setIsLoading(false))
  }

  function quit() {
    localStorage.clear();
    setLoggedIn(false);
    navigation('/');
  }

  function handleDeleteMovie(deletedMovie) {
    mainApi.deleteMovie(deletedMovie, localStorage.jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter((element) => {
          return element._id !== deletedMovie 
        }))
      })
      .catch((error) => console.error(`Ошибка удаления фильма ${error}`))
  }

  function handleMovieSave(data) {
    console.log(data.id);
    const isSaved = savedMovies.some((element) => data.id === element.movieId)
    console.log(isSaved);
    const clickMovieBtn = savedMovies.filter((movie) => {
      return movie.movieId === data.id
    })
    if (isSaved) {
      handleDeleteMovie(clickMovieBtn[0]._id)
    } else {
      mainApi.createMovie(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((error) => console.error(`Ошибка добавления фильма в сохраненные ${error}`))
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {isVerifyToken ? <Preloader/> :
          <Routes>

            <Route path="/" element={
              <>
                <Header loggedIn={loggedIn} />
                <Main/>
                <Footer />
              </>
            } />

            <Route path="/movies" element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Header loggedIn={loggedIn} />
                <Movies
                  setIsError={setIsError}
                  savedMovies={savedMovies}
                  isError={isError}
                  addToSaved={handleMovieSave} />
                <Footer />
              </ProtectedRoute>
            } />

            <Route path="/saved-movies" element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Header loggedIn={loggedIn} />
                <SavedMovies
                  setIsError={setIsError}
                  savedMovies={savedMovies}
                  deleteFromSaved={handleDeleteMovie}
                />
                <Footer />
              </ProtectedRoute>
            } />

            <Route path="/profile" element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Header loggedIn={loggedIn} />
                <Profile
                  setLoggedIn={setLoggedIn}
                  isChangeBtn={isChangeBtn}
                  setIsChangeBtn={setIsChangeBtn}
                  isNotify={isNotify}
                  notify={notify}
                  isError={isError}
                  handleUpdateUser={handleUpdateUser}
                  quit={quit}
                  buttonText="Сохранить"
                  isLoading={isLoading}
                />
              </ProtectedRoute>
            } />

            <Route path="/signin" element={
              <Login
                name="login"
                title="Рады видеть!"
                buttonText="Войти"
                handleAuthorization={handleAuthorization}
                setIsError={setIsError}
                isError={isError}
                isLoading={isLoading}
              />
            } />

            <Route path="/signup" element={
              <Register
                name="register"
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                handleRegistration={handleRegistration}
                setIsError={setIsError}
                isError={isError}
                isLoading={isLoading}
              />
            } />

            <Route path="*" element={
                <PageNotFound /> 
            }/>
            
          </Routes>

        }
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
