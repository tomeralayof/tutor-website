import React from "react";

export const Input = ({ filed ,handleInputChange, placeHolder,idx } ) => {
    return (
        <input
        onChange = {(e) => handleInputChange(e,idx)}
        type = "text"
        placeholder = {filed.placeholder}
        className = "email"
        style= {{ direction: "rtl" }}
        autoComplete = "given-name"
      />
    )
}