import { useContext } from 'react';
import './SubmitButton.css'
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';

function SubmitButton({buttonText, isFormValid, isLoading, isError, profileInputName, profileInputEmail}) {
  const currentUser = useContext(CurrentUserContext);
  const {pathname} = useLocation();

  return (
    <button 
      className={`submit-button ${!isFormValid || isLoading || isError || (pathname === '/profile' && profileInputName === currentUser.name && profileInputEmail === currentUser.email) ? 'submit-button_disabled' : ' '}`}
      type="submit"
    >
      {buttonText}
    </button>
  )
}

export default SubmitButton;