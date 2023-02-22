import React , {useState} from "react";

import { btnSetter } from "./btnSetter";

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
                    {btnState.content}
                    </button>
                )
            })
        }

        </div>
    )
}