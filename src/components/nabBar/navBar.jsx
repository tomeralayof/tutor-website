import React, {useState} from "react";
import { setNavBartOptions } from "./setNabBarOptions.js";
import { RenderNavFiled } from "./RenderNavFiled";

import "../../styles/navBar/navBar.css";

export const NavBar = () => {

    const [selectedOption, setSelectedOption] = useState("st-control-5");
    const options = setNavBartOptions();

    const handleChange = (event) => {
        setSelectedOption(event.target.id);
    };

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