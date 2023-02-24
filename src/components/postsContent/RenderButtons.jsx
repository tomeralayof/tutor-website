import React , { useCallback, useState } from "react";

import { btnSetter } from "../../config/btnSetter";

import articles from "../../config/posts/data.json";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LENGTH = articles.length;

export const RenderButtons = ( {idxArticle, handleClick} ) => {

    const [ btnState ] = useState(btnSetter);
   
    const disableLeft = useCallback(() => {
        return idxArticle === LENGTH - 1;
    },[idxArticle]);
    
    const disableRight = useCallback(() => {
        return idxArticle === 0;
    },[idxArticle]);
    
    
    const disableCallbacks = [disableLeft,disableRight];

    return (
        <div className = "button-container">
        {
            btnState.map((btnState, idx) => {
                return (
                    <button
                        disabled = { disableCallbacks[idx]() }
                        className = { btnState.className }
                        onClick = { () => handleClick ( btnState.animation) } >
                        <FontAwesomeIcon icon = { btnState.content } />
                    </button>
                )
            })
        }

        </div>
    )
}