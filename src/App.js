import React, { useState ,useContext,useEffect, useRef } from 'react';
import "./App.css"

import { NavBar } from './components/nabBar/navBar';
import { Sections } from "./sections/sections";

import LoadingPage from './loading/loadingPage';

import keyboardContext from "./hooks/keyboardContext/createContext";

const App = () => {
  const { isKeyboardUp } = useContext(keyboardContext);
  const [section,setSection] = useState(5);
  const [isLoaded, setIsLoaded] = useState(false);

  const hasLoaded = useRef(false);

  useEffect(() => {
    setSection(1);
  },[isKeyboardUp]);

  useEffect(() => {
    if (hasLoaded.current) {
      setIsLoaded(true);
    } else {
      const handleLoad = () => {
        hasLoaded.current = true;
        setIsLoaded(true);
      };
  
      window.addEventListener('load', handleLoad);
  
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  return (
    <React.Fragment>
      {isLoaded ? (
      <div className= "container">
        <div className = "st-container">
        { !isKeyboardUp ?  <NavBar section = { section } /> : null }
        <Sections />
        </div>
      </div>
      ) : <LoadingPage/> }

    </React.Fragment>
  );
}

export default App;