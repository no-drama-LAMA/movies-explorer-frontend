import { useContext } from 'react';
import './SubmitButton.css'
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SubmitButton({buttonText, isFormValid, isLoading, isError, inputValues}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <button 
      className={`submit-button ${!isFormValid || isLoading || isError || (inputValues.username === currentUser.name && inputValues.email === currentUser.email) ? 'submit-button_disabled' : ' '}`}
      type="submit"
    >
      {buttonText}
    </button>
  )
}

export default SubmitButton;