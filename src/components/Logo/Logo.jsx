import './Logo.css'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Logo() {
  return (
    <NavLink to='/' className="logo-link">
      <img 
          src={logo}
          alt="Логотип"
          className="logo" />
    </NavLink>
  )
}

export default Logo;