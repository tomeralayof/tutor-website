import React, { useState, useRef,useContext } from "react";

import emailService from "../../../services/email/emailService";

import  formValidatorService  from "../../../services/form/formValidatorService.js";
import keyboardContext from "../../../hooks/keyboardContext/createContext";

import { InitFildes } from "./setupInputData";
import { RenderInputFileds } from "./renderInputFildes";
import { SuccessMessage } from "./SuccessMessage";

export const ContactForm = () => {

  const form = useRef();
  const inputRef = useRef(null);

  const { setIsKeyboardUp } = useContext(keyboardContext);

  const inputData = InitFildes();
  const [fields,setFields] = React.useState(inputData);
  const [isSuccessMsg,setIsSuccessMsg] = useState(false);
  const [successMsg,setSuccessMsg] = useState("נשלח בהצלחה, אצור קשר בהקדם");

  const { ValidateName, ValidateMsg ,ValidateIsraeliPhoneNumber } = formValidatorService;
  const validators = [ValidateName, ValidateMsg, ValidateIsraeliPhoneNumber];


  const handleInputChange = (e,idx) => {
    const inputValue = e.target.value;
    const newState = [...fields];

    newState[idx].isValid = validators[idx](inputValue) ? true : false;

    setFields(newState);
  }
  
  const handleBtnClicked = (idx) => {
    inputRef.current.focus();

    const newState = [...fields];
    newState[idx].divClass = `${newState[idx].divClass} fold-up`;
    setFields(newState);
    
    if (idx === fields.length - 1) {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    setIsKeyboardUp(false);
    try {
      setIsSuccessMsg(true);
      emailService.SendUserMsg(form);
    } catch(err) {
      setSuccessMsg("הייתה בעיה בשליחת הטופס, מוזמן לפנות אליי בלינק למטה");
    }
  };
  
    return (
      <React.Fragment>
      <div className= "back registration-form">
      
      <header>
        <h1>מלא את הפרטים</h1>
      </header>

        {
          !isSuccessMsg && (
              <form ref = { form } >
                <RenderInputFileds
                fields = { fields }
                handleInputChange = { handleInputChange } 
                handleBtnClicked = { handleBtnClicked }
                inputRef = { inputRef }
                />
              </form>
            )
        }
      
      <SuccessMessage isSuccessMsg = {isSuccessMsg} successMsg = {successMsg} />

  </div>

  </React.Fragment>
)
}