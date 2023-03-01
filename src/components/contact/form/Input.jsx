import React , { useContext } from "react";

import keyboardContext from "../../../hooks/keyboardContext/createContext";

export const Input = ({ filed ,handleInputChange,idx,inputRef }) => {

  console.log("ref = ",inputRef);

  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
  const { setIsKeyboardUp } = useContext(keyboardContext);

  const handleInputTrack = (hasToCloseButtomElements) => {
    if(isMobileDevice) {
      setIsKeyboardUp(hasToCloseButtomElements);
    }
  }

  const handleInputFocus = () => {
    handleInputTrack(true);
  };

  const handleInputBlur = () => {
    handleInputTrack(false);
  };
  
  return (
      <input
      onChange = {(e) => handleInputChange(e,idx)}
      type = "text"
      placeholder = {filed.placeholder}
      className = "email"
      style = {{ direction: "rtl" }}
      autoComplete = "given-name"
      name = { filed.filedName }
      onFocus = {handleInputFocus}
      onBlur = {handleInputBlur}
      ref = { inputRef }
    />
  )
}