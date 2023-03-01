import React, { useState ,useContext,useEffect } from 'react';
import "./App.css"

import { NavBar } from './components/nabBar/navBar';
import { Sections } from "./sections/sections";

import keyboardContext from "./hooks/keyboardContext/createContext";

const App = () => {
  const { isKeyboardUp } = useContext(keyboardContext);
  const [section,setSection] = useState(5);

  useEffect(() => {
    setSection(1);
  },[isKeyboardUp]);

  return (
    <React.Fragment>
      <div className= "container">
        <div className = "st-container">
        { !isKeyboardUp ?  <NavBar section = { section } /> : null }
        <Sections />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;