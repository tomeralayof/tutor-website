import React, { useState } from "react";

import { RenderNavbar } from "./RenderNavBar.jsx";
import { DesktopVersion } from "./DesktopVersion.jsx";
import { MobileVersion } from "./MobileVersion.jsx";


/* st container before */

export const NavBar = ( { section } ) => {
    
    const [selectedOption, setSelectedOption] = useState(`st-control-${section}`);
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const [ hasTouchScreen ] = useState(mediaQuery.matches);

    const handleChange = (event) => {
        setSelectedOption(event.target.id);
    };

    const props = { selectedOption, handleChange, RenderNavbar, setSelectedOption }

    
    return !hasTouchScreen ? <DesktopVersion props = {props}/> :
                            <MobileVersion props = {props}/>
}