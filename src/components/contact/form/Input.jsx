import React , { useContext, useEffect,useState , useCallback } from "react";

import keyboardContext from "../../../hooks/keyboardContext/createContext";

export const Input = ({ filed ,handleInputChange,idx }) => {

  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
  const { setIsKeyboardUp } = useContext(keyboardContext);
  const [isKeyboardOpen] = useState(false);
  
  const handleResize = useCallback(() => {
    console.log("triggered ...");
    setIsKeyboardUp(isKeyboardOpen ? true : false);
  },[setIsKeyboardUp,isKeyboardOpen]);

  useEffect(() => {
    if (window.innerHeight < window.outerHeight) {
      window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    }
  },[handleResize,isMobileDevice]);
  
  console.log("is mobile = ",isMobileDevice);

  return (
      <input
      onChange = {(e) => handleInputChange(e,idx)}
      type = "text"
      placeholder = {filed.placeholder}
      className = "email"
      style = {{ direction: "rtl" }}
      autoComplete = "given-name"
      name = { filed.filedName }
    />
  )
}



/* 
import React, { useState, useEffect } from "react";

function App() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      const keyboardOpen = window.innerHeight < window.outerHeight;
      setIsKeyboardOpen(keyboardOpen);

      // Call your function here every time the keyboard is opened or closed
      myFunction(keyboardOpen);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function myFunction(keyboardOpen) {
    if (keyboardOpen) {
      console.log("Keyboard opened");
      // Do something when the keyboard is opened
    } else {
      console.log("Keyboard closed");
      // Do something when the keyboard is closed
    }
  }

  return (
    <div>
      {isKeyboardOpen ? <p>Keyboard is open</p> : <p>Keyboard is closed</p>}
    </div>
  );
}






*/