import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <div className="page">

      <Routes>

        <Route path="/" element={
          <>
            <Header loggedIn={loggedIn} />
            <Main/>
            <Footer />
          </>
        } />

        <Route path="/movies" element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        } />

        <Route path="/saved-movies" element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
        } />

        <Route path="/profile" element={
          <>
            <Header loggedIn={loggedIn} />
            <Profile setLoggedIn={setLoggedIn}/>
          </>
        } />

        <Route path="/signin" element={
          <Login
            name="login"
            title="Рады видеть!"
            buttonText="Войти"
            setLoggedIn={setLoggedIn}
          />
        } />

        <Route path="/signup" element={
          <Register
            name="register"
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            setLoggedIn={setLoggedIn}
          />
        } />

        <Route path="*" element={
            <PageNotFound /> 
        }/>
        
      </Routes>

      
    </div>
  );
}

export default App;
