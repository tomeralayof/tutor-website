import React , {useEffect, useState} from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { Input } from "./Input"

import "../../styles/form/contactForm.css"

import { Button } from "./Button";

export const ContactForm = () => {
  const [isEmailSectionFolded, setIsEmailSectionFolded] = useState(false);
  const [isPasswordSectionFolder, setIsPasswordSectionFolder] = useState(false);
  
  /* form filed */
  const [name,setName] = useState("");
  const [context,setContext] = useState("");
  const [phone,setPhone] = useState("");
 
   const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleContextChange = (e) => {
    setContext(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
    

  /* buttons */
  
    return (
        <div className="back registration-form">
    <header>
      <h1>מלא את הפרטים</h1>
    </header>
    <form>

      <div className = 
      {`input-section email-section ${isEmailSectionFolded ? "fold-up" : ''}`}>
      <Input handleInputChange = { handleNameChange } placeHolder = "הכנס את שמך" />

      <Button
      inputValue = { name }
      setIsEmailSectionFolded = { setIsEmailSectionFolded }/>
      </div>

      <div className={`input-section password-section folded
        ${isPasswordSectionFolder ? "fold-up" : ""} `}>
        <input type="password" placeholder="ENTER YOUR PASSWORD HERE" className = "password" />
        <div className = "animated-button">
          <span onClick = { ()=> setIsPasswordSectionFolder(true) } 
          className = "icon-paper-plane">
            hello
          </span>
          <span className = "next-button password">

          </span>
        </div>
      </div>

      <div className="input-section repeat-password-section folded">
        <input type="password" placeholder="REPEAT YOUR PASSWORD HERE" className="repeat-password" />
        <div className="animated-button">
          <span className="icon-repeat-lock">
            <button>hhhhh</button>
          </span>
          <span className="next-button repeat-password">
          </span>
        </div>
      </div>
      
    </form>

      <div className="success"> {/* success message. */}
        <p>ACCOUNT CREATED</p>
      </div>
  </div>
)
}




/* 
import React, { useState } from "react";

import "../../styles/form/contactForm.css";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState(false);
  const [isEmailSectionFolded, setIsEmailSectionFolded] = useState(false);
  const [isPasswordSectionFolded, setIsPasswordSectionFolded] = useState(true);
  const [isRepeatPasswordSectionFolded, setIsRepeatPasswordSectionFolded] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(event.target.value !== "");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPasswordValid(event.target.value !== "");
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
    setIsRepeatPasswordValid(event.target.value !== "");
  };

  const handleEmailSectionClick = () => {
    setIsEmailSectionFolded(true);
    setIsPasswordSectionFolded(false);
  };

  const handlePasswordSectionClick = () => {
    setIsPasswordSectionFolded(true);
    setIsRepeatPasswordSectionFolded(false);
  };

  const handleRepeatPasswordSectionClick = () => {
    setIsRepeatPasswordSectionFolded(true);
    setIsSuccess(true);
  };

  return (
    <div className="back registration-form">
      <header>
        <h1>מלא את הפרטים</h1>
      </header>
      <form>
        <div
          className={`input-section email-section ${
            isEmailSectionFolded ? "fold-up" : ""
          }`}
        >
          <input
            type="email"
            placeholder="הכנס את שמך"
            autoComplete="off"
            className="email"
            style={{ direction: "rtl" }}
            onChange={handleEmailChange}
            value={email}
          />
          <div className="animated-button">
            <span
              className={`icon-paper-plane ${isEmailValid ? "next" : ""}`}
            ></span>
            <span
              className={`next-button email ${isEmailValid ? "" : "disabled"}`}
              onClick={handleEmailSectionClick}
            ></span>
          </div>
        </div>
        <div
          className={`input-section password-section ${
            isPasswordSectionFolded ? "fold-up" : ""
}} > <input type="password" placeholder="סיסמא" autoComplete="off" className="password" style={{ direction: "rtl" }} onChange={handlePasswordChange} value={password} /> <div className="animated-button"> <span className={icon-lock ${isPasswordValid ? "next" : ""}} ></span> <span className={next-button password ${isPasswordValid ? "" : "disabled"}} onClick={handlePasswordSectionClick} ></span> </div> </div> <div className={input-section repeat-password-section ${
isRepeatPasswordSectionFolded ? "fold-up" : ""
}} > <input type="password" placeholder="וודא סיסמא" autoComplete="off" className="repeat-password" style={{ direction: "rtl" }} onChange={handleRepeatPasswordChange} value={repeatPassword} /> <div className="animated-button"> <span className={icon-lock ${isRepeatPasswordValid ? "next" : ""}} ></span> <span className={next-button repeat-password ${
isRepeatPasswordValid ? "" : "disabled"
}`}
onClick={handleRepeatPasswordSectionClick}
></span>
</div>
</div>
</form>
{isSuccess && (
<div className="success-message">
<span>!הרשמתך הושלמה בהצלחה</span>
</div>
)}
</div>
);
};



*/