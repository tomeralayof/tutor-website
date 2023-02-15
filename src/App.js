import React from 'react';
import "./App.css"

import { NavBar } from './components/nabBar/navBar';
import { Sections } from "./components/sections/sections"

const App = () => {
  console.log("app comp");
  return (
    <React.Fragment>
      <div class="container">
        <div class="st-container">
        <NavBar />
        <Sections />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;