import React, { useState } from 'react';
import keyboardContext from './createContext';

function MyContextProvider(props) {
  const [isKeyboardUp, setIsKeyboardUp] = useState(false);

  return (
    <keyboardContext.Provider value={{ isKeyboardUp, setIsKeyboardUp }}>
      {props.children}
    </keyboardContext.Provider>
  );
}

export default MyContextProvider;