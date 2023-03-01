import React, { useContext } from 'react';
import "./App.css"

import { NavBar } from './components/nabBar/navBar';
import { Sections } from "./sections/sections";

import keyboardContext from "./hooks/keyboardContext/createContext";

const App = () => {
  const { isKeyboardUp } = useContext(keyboardContext);

  return (
    <React.Fragment>
      <div className= "container">
        <div className = "st-container">
        { !isKeyboardUp ?  <NavBar /> : null }
        <Sections />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;