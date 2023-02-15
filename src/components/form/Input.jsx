import React from "react";

export const Input = ( {handleInputChange, placeHolder} ) => {
    console.log(placeHolder)
    return (
        <input
        onChange = { handleInputChange }
        type = "text"
        placeholder = { placeHolder }
        className = "email"
        style={{ direction: "rtl" }}
        autoComplete = "given-name"
        />
    )
}