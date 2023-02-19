import React, { useState} from "react";

import { RenderNavbar } from "./RenderNavBar.jsx";
import { DesktopVersion } from "./DesktopVersion.jsx";

import "../../styles/navBar/navBar.css";

export const NavBar = () => {
    const [selectedOption, setSelectedOption] = useState("st-control-5");
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const [ hasTouchScreen ] = useState(mediaQuery.matches);

    const handleChange = (event) => {
        setSelectedOption(event.target.id);
    };

    const props = { selectedOption, handleChange, RenderNavbar, setSelectedOption }
    
    return !hasTouchScreen ? <DesktopVersion props = {props}/> : <DesktopVersion props = {props}/>;
}