import React from "react";

import { setNavBartOptions } from "./setNabBarOptions.js";
import { RenderNavFiled } from "./RenderNavFiled";

export const RenderNavbar = (selectedOption,handleChange) => {
    const options = setNavBartOptions();
    return (
        options.map((option,idx)=> {
            return (
            <RenderNavFiled
            key = {idx}
            option = {option}
            selectedOption = { selectedOption }
            handleChange = { handleChange }
            />
        )
        })
    )
}