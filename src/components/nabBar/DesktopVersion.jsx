import {useEffect, useCallback } from "react";

import userNavService from "../../services/navigation/userNavService.js";

export const DesktopVersion = ({props}) => {
    const { selectedOption,handleChange,RenderNavbar,setSelectedOption } = props;
    const { handleKeyboardArrowEvent } = userNavService;

    const handleKeyDown = useCallback((event) => {
        handleKeyboardArrowEvent(event,selectedOption,setSelectedOption);
      }, [selectedOption,setSelectedOption,setSelectedOption]);

    useEffect(()=> {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
    },[handleKeyDown])

    return (
        RenderNavbar(selectedOption,handleChange)
    )
}