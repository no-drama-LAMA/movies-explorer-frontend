import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header({loggedIn}) {

    return (
        <header className="header">
            <img
                src={logo}
                alt="Логотип"
                className="header__logo"
            />
            <Navigation loggedIn={loggedIn} />
        </header>
    )
}

export default Header;