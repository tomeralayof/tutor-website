import React from 'react';
import "./App.css"

import { NavBar } from './components/navBar';
import { Sections } from './components/sections';

const App = () => {
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
};

export default App;