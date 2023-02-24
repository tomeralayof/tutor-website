import React , {useState} from "react";

import { btnSetter } from "../../config/btnSetter";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RenderButtons = ( {handleClick} ) => {

    const [ btnState ] = useState(btnSetter);

    return (
        <div className = "button-container">
        {
            btnState.map((btnState) => {
                return (
                    <button 
                    className = { btnState.className }
                    onClick={() => handleClick (btnState.animation) } >
                    <FontAwesomeIcon style={{ color: 'DodgerBlue' }} icon = { btnState.content } />
                    </button>
                )
            })
        }

        </div>
    )
}