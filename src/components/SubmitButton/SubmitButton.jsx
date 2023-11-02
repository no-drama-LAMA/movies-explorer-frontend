import { useContext } from 'react';
import './SubmitButton.css'
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';

function SubmitButton({buttonText, isFormValid, isLoading, isError, inputValues}) {
  const currentUser = useContext(CurrentUserContext);
  const {pathname} = useLocation();

  return (
    <button 
      className={`submit-button ${!isFormValid || isLoading || isError || (pathname === '/profile' && inputValues.username === currentUser.name && inputValues.name.email === currentUser.email) ? 'submit-button_disabled' : ' '}`}
      type="submit"
    >
      {buttonText}
    </button>
  )
}

export default SubmitButton;