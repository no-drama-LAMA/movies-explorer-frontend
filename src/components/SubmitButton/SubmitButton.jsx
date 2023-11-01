import './SubmitButton.css'

function SubmitButton({buttonText, isFormValid, isLoading, isError}) {
  return (
    <button 
      className={`submit-button ${!isFormValid || isLoading || isError ? 'submit-button_disabled' : ' '}`}
      type="submit"
    >
      {buttonText}
    </button>
  )
}

export default SubmitButton;