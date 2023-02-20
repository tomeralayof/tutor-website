import { useCallback, useRef , useEffect } from "react";

import userNavService from "../../services/navigation/userNavService.js";
import utils from "../../services/utils.js";

export const MobileVersion = ( {props} ) => {

    const touchStartX = useRef(0);

    const { selectedOption,handleChange,RenderNavbar,setSelectedOption } = props;
    const { handleScreenSwapEvent } = userNavService;
    const { debounce } = utils;

    const handleTouchStart = useCallback((event) => {
        touchStartX.current = event.touches[0].clientX;
    },[]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleTouchMove = useCallback(debounce((event) => {
        handleScreenSwapEvent(event, selectedOption, setSelectedOption, touchStartX);
      }, 100), [selectedOption, handleScreenSwapEvent, setSelectedOption, touchStartX]);

    useEffect(() => {
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        return () => {
          window.removeEventListener("touchstart", handleTouchStart);
          window.removeEventListener("touchmove", handleTouchMove);
        };
      }, [handleTouchStart, handleTouchMove]);
    
    return RenderNavbar(selectedOption,handleChange)
}