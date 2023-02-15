import React from 'react';
import "./App.css"

import { NavBar } from './components/nabBar/navBar';
import { Sections } from "./components/sections/sections"

const App = () => {
  return (
    <React.Fragment>
      <div className= "container">
        <div className="st-container">
        <NavBar />
        <Sections />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;