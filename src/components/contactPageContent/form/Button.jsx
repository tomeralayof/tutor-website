import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowUp ,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCheck ,faPhone } from '@fortawesome/free-solid-svg-icons';

import "../../../styles/form/formButton.css";

export const Button = ( {filed, idx , lastIdx , handleBtnClicked } ) => {

    const btnIcons = [ faUser, faEnvelope, faPhone];
    
    const renderIcon = ( filed,idx ) => {
        let icon;

        if (!filed.isValid) {
            icon = btnIcons[idx];
        }

        else {
            icon = idx === lastIdx ? faCheck : faArrowUp;
        }

        return <FontAwesomeIcon icon = { icon }/>
    }

    return (
        <div className = {!filed.isValid ? "animated-button" : "animated-button active-button"}>
            {/* <span onClick = { !filed.isValid ? null :  () => handleBtnClicked(idx) } */}
            <span onClick = {  () => handleBtnClicked(idx) }
            className = "icon-paper-plane">  { renderIcon(filed,idx) }
          </span>
          </div>
    )
}