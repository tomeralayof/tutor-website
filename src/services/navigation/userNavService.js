import stateUpdator from "./stateUpdator.js";
import  eventTypeDeterminator from "./eventTypeDeterminator.js";

const { isArrowLeft, isArrowRight, isSwapLeft, isSwapRight } = eventTypeDeterminator;
const { getStateUpdateParameters , updateNewState  } = stateUpdator;

const handleKeyboardArrowEvent = (event,selectedOption,setSelectedOption) => {

    const newState = getStateUpdateParameters(selectedOption,
                        setSelectedOption,isArrowLeft,isArrowRight,event);
    
    updateNewState(newState);
}

const handleScreenSwapEvent = (event,selectedOption,setSelectedOption,
    touchStartX, touchStartY ) => {

    const touchEndX = event.touches[0].clientX;
    const touchDiffX = touchStartX.current - touchEndX;

    const touchCurrentY = event.touches[0].clientY;
    const touchDeltaY = touchCurrentY - touchStartY.current;

    const params = { touchDiffX,touchDeltaY,event };

    const newState = getStateUpdateParameters(selectedOption,setSelectedOption,
                isSwapLeft,isSwapRight,params);

    updateNewState(newState);
}

const userNavService = {
    handleKeyboardArrowEvent,
    handleScreenSwapEvent
}

export default userNavService;