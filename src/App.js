import React, { useState ,useContext,useEffect } from 'react';
import "./App.css"

import { NavBar } from './components/nabBar/navBar';
import { Sections } from "./sections/sections";

import LoadingPage from './loading/loadingPage';


import keyboardContext from "./hooks/keyboardContext/createContext";

const App = () => {
  const { isKeyboardUp } = useContext(keyboardContext);
  const [section,setSection] = useState(5);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setSection(1);
  },[isKeyboardUp]);


  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
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