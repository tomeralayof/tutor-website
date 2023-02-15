import React from "react";

import { faUser, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const Button = ( props ) => {
    const setIcon = (inputVal) => {
        const icon =  inputVal === "" ? faUser : faArrowUp;
        return (
            <FontAwesomeIcon icon = { icon } />
        )
    }

    const setNextFiled = props[Object.keys(props)[1]];
    const inputVal = props[Object.keys(props)[0]];

     return (
        <div className = "animated-button">
          <span onClick = {() => setNextFiled(true)}
            className = "icon-paper-plane"> 
            {
                setIcon(inputVal)
            }
          </span>
        </div>
    )
}