import React from "react";

import { setNavBartOptions } from "./setNabBarOptions.js";
import { RenderNavFiled } from "./RenderNavFiled";

export const RenderNavbar = (selectedOption,handleChange) => {
    const options = setNavBartOptions();
    return (
        options.map((option)=> {
            return (
            <RenderNavFiled
            option = {option}
            selectedOption = { selectedOption }
            handleChange = { handleChange }
            />
        )
        })
    )
}