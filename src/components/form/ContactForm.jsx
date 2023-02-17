import React, { useState, useRef } from "react";

/* import  emailService  from "../../services/email/emailService.js"; */
import  formValidatorService  from "../../services/form/formValidatorService.js";

import { InitFildes } from "./setupInputData";

import { RenderInputFileds } from "./renderInputFildes";
import { ContactIcons } from "../contactIcons/contactIcons.jsx";
import { SuccessMessage } from "./SuccessMessage";

import "../../styles/form/contactForm.css";

export const ContactForm = () => {
  const inputData = InitFildes();
  const [fields,setFields] = React.useState(inputData);
  const [isSuccessMsg,setIsSuccessMsg] = useState(false);
  const [successMsg,setSuccessMsg] = useState("");

  const form = useRef();

  const { ValidateName, ValidateMsg ,ValidateIsraeliPhoneNumber } = formValidatorService;
  const validators = [ValidateName, ValidateMsg, ValidateIsraeliPhoneNumber];

  const handleInputChange = (e,idx) => {
    const inputValue = e.target.value;
    const newState = [...fields];

    newState[idx].isValid = validators[idx](inputValue) ? true : false;

    setFields(newState);
  }
  
  const handleBtnClicked = (idx) => {  
    const newState = [...fields];
    newState[idx].divClass = `${newState[idx].divClass} fold-up`;
    setFields(newState);
    
    if (idx === fields.length - 1) {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    try {
      setIsSuccessMsg(true);
      /* emailService.SendUserMsg(form); */
      setSuccessMsg("נשלח בהצלחה, אצור קשר בהקדם");
    } catch(err) {
      setSuccessMsg("הייתה בעיה בשליחת המייל, מוזמן לפנות אליי בלינק למטה")
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
                <RenderInputFileds fields = { fields } handleInputChange = { handleInputChange } 
                                  handleBtnClicked = { handleBtnClicked } />
              </form>
            )
        }

       <SuccessMessage isSuccessMsg = {isSuccessMsg} successMsg = {successMsg} />
        <ContactIcons/>

  </div>

  </React.Fragment>
)
}









/* 


console.log(form.current);


<div className="con-icons">
      

      <button>hello</button>
      <button>hello</button>
      <button>hello</button>
      </div>

*/