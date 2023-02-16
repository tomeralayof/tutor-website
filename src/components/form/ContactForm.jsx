import React, { useState } from "react"

import { InitFildes } from "./setupInputData"
import { RenderInputFileds } from "./renderInputFildes";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* import { faWhatsapp } from '@fortawesome/free-brands-svg-icons' */


import "../../styles/form/contactForm.css"
import { SendMailToMyself } from "../emails/sendUserEmail";

export const ContactForm = () => {
  const googleClientId = process.env;
  const inputData = InitFildes();
  const [fields, setFields] = React.useState(inputData);
  const [isSuccessMsg,setIsSuccessMsg] = useState(false);

  
  const handleInputChange = (e,index) => {
    const newState = [...fields];
    newState[index].value = e.target.value;
    setFields(newState);
  }
  
  const handleBtnClicked = (idx) => {
    
    const newState = [...fields];
    newState[idx].divClass = `${newState[idx].divClass} fold-up`;
    setFields(newState);
    
    if (idx === fields.length - 1) {
      setIsSuccessMsg(true);
    }
  }
  

    return (
      <React.Fragment>

      <div className="back registration-form">
      <header>
        <h1>מלא את הפרטים</h1>
      </header>
      <form>
        <RenderInputFileds fields = { fields } 
                      handleInputChange = { handleInputChange }
                      handleBtnClicked = { handleBtnClicked }
                      />
    </form>

      <div className = {`${isSuccessMsg ? "success-msg" : "success"}`}>
        <p>נשלח בהצלחה, אצור קשר בהקדם</p>
      </div>


      <div className="con-icons">
      

      <button>hello</button>
      <button>hello</button>
      <button>hello</button>
      </div>

  </div>

  </React.Fragment>
)
}