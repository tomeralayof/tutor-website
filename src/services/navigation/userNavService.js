import stateUpdator from "./stateUpdator.js";
import  eventTypeDeterminator from "./eventTypeDeterminator.js";

const { isArrowLeft, isArrowRight, isSwapLeft, isSwapRight } = eventTypeDeterminator;
const { getStateUpdateParameters , updateNewState  } = stateUpdator;

const handleKeyboardArrowEvent = (event,selectedOption,setSelectedOption) => {

    const newState = getStateUpdateParameters(selectedOption,setSelectedOption,isArrowLeft,isArrowRight,event);
    
    updateNewState(newState);
}

const handleScreenSwapEvent = (event,selectedOption,setSelectedOption,touchStartX ) => {

    const touchEndX = event.touches[0].clientX;
    const touchDiff = touchStartX.current - touchEndX;

    const newState = getStateUpdateParameters(selectedOption,setSelectedOption,isSwapLeft,isSwapRight,touchDiff);

    updateNewState(newState);
}

const userNavService = {
    handleKeyboardArrowEvent,
    handleScreenSwapEvent
}

export default userNavService;