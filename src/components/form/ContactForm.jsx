import React, { useState } from "react"

import { InitFildes } from "./setupInputData"
import { RenderInputFileds } from "./renderInputFildes";

import "../../styles/form/contactForm.css"

export const ContactForm = () => {

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
  </div>
)
}