import Navigation from '../Navigation/Navigation'
import { useLocation } from 'react-router-dom';
import './Header.css'
import Logo from '../Logo/Logo';

function Header({loggedIn}) {

    const {pathname} = useLocation();

    return (
        <header className={`header ${pathname === "/" ? "header_dark-blue" : ""}`}>
            <Logo />
            <Navigation  loggedIn={loggedIn} />
        </header>
    )
}

export default Header;