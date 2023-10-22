import { useCallback, useState } from "react";

function useValidation() {
  const [isInputValid, setInputValid] = useState({});
  const [inputMessages, setInputMessages] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [isFormValid, setFormValid] = useState(false);

  function handleChange(evt) {
    const inputForm = evt.target.form;
    const inputName = evt.target.name;
    const inputValid = evt.target.validity.valid;
    const inputMessage = evt.target.validationMessage;
    const inputValue = evt.target.value;

    setInputValid((obj) => {
      return {...obj, [inputName]: inputValid}
    })

    setInputMessages((obj) => {
      return {...obj, [inputName]: inputMessage}
    })
    
    setInputValues((obj) => {
      return {...obj, [inputName]: inputValue}
    })

    setFormValid(inputForm.checkValidity())
  }

  const reset = useCallback((obj={}) => {
    setInputValid({})
    setInputMessages({})
    setInputValues(obj)
    setFormValid(false)
  }, [])

  const setInitialValue = useCallback((inputName, inputValue) => {
    setInputValues((obj) => {
      return {...obj, [inputName]: inputValue}
    })
  },[])

  return { isInputValid, inputMessages, inputValues, isFormValid, handleChange, reset, setInitialValue }
}

export default useValidation;