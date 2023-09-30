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
import Navigation from '../Navigation/Navigation';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  

  return (
    <div className="page">

      <Header>
        <Navigation loggedIn={loggedIn} />
      </Header>

      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
