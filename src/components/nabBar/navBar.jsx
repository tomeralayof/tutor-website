import React, { useState } from "react";

import { RenderNavbar } from "./RenderNavBar.jsx";
import { DesktopVersion } from "./DesktopVersion.jsx";
import { MobileVersion } from "./MobileVersion.jsx";


/* st container before */

export const NavBar = () => {

    const [selectedOption, setSelectedOption] = useState("st-control-5");
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const [ hasTouchScreen ] = useState(mediaQuery.matches);

    const handleChange = (event) => {
        setSelectedOption(event.target.id);
    };

    const props = { selectedOption, handleChange, RenderNavbar, setSelectedOption }

    
    return !hasTouchScreen ? <DesktopVersion props = {props}/> : 
                            <MobileVersion props = {props}/>
}