import React, { useState,useEffect } from "react";
import { setNavBartOptions } from "./setNabBarOptions.js";
import { RenderNavFiled } from "./RenderNavFiled";
import userNavService from "../../services/navigation/userNavService.js"

import "../../styles/navBar/navBar.css";

export const NavBar = () => {
    const [selectedOption, setSelectedOption] = useState("st-control-5");
    const options = setNavBartOptions();
    const { handleUserNavigationLeft } = userNavService;

    const handleChange = (event) => {
        setSelectedOption(event.target.id);
    };

    useEffect(()=> {
        handleUserNavigationLeft(selectedOption,setSelectedOption);
    },[])

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