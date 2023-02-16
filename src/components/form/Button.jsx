import React from "react";

import { faUser, faArrowUp ,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


export const Button = ( {filed, idx , lastIdx , handleBtnClicked} ) => {

    const btnIcons = [ faUser, faEnvelope, faPhone];
    
    const renderIcon = ( filed,idx ) => {
        let icon;

        if (filed.value === "") {
            icon = btnIcons[idx];
        }

        else {
            icon = idx === lastIdx ? faCheck : faArrowUp;
        }

        return <FontAwesomeIcon icon = { icon }/>
    }

    return (
        <div className = "animated-button">
            <span onClick = { () => handleBtnClicked(idx) }
            className = "icon-paper-plane">  { renderIcon(filed,idx) }
          </span>
          </div>
    )
}