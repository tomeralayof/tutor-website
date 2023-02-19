import strService from "../string/strService.js";

const handleKeyboardArrowEvent = (event,selectedOption,setSelectedOption) => {
    const objParamToUpdateState = _initObjData(selectedOption,
                                    setSelectedOption,_isArrowLeft,__isArrowRight,event);

    _updateNewState(objParamToUpdateState);
}

const handleScreenSwapEvent = (event,selectedOption,setSelectedOption,touchStartX ) => {
    const touchEndX = event.touches[0].clientX;
    const touchDiff = touchStartX.current - touchEndX;

    const objParamToUpdateState = _initObjData(selectedOption,
        setSelectedOption,_isSwapLeft,_isSwapRight,touchDiff);

    _updateNewState(objParamToUpdateState);
}

const _updateNewState = (funcObj) => {
    const {selectedOption, setSelectedOption, condFunc1, condFunc2, param} = funcObj;

    const { decrementStrCharByIdx,incrementStrCharByIdx } = strService;

    if (condFunc1(param)) {
        const updateNewOption = decrementStrCharByIdx(selectedOption,selectedOption.length - 1);
        setSelectedOption(updateNewOption);
    }

    else if (condFunc2(param)) {
        const updateNewOption = incrementStrCharByIdx(selectedOption,selectedOption.length - 1);
        setSelectedOption(updateNewOption);
    }
}

const _initObjData = (option,setOption,cond1,cond2,param) => {
    return {
        "selectedOption" : option,
        "setSelectedOption" : setOption,
        "condFunc1" : cond1,
        "condFunc2" : cond2,
        "param" : param
    }
}

const _isArrowLeft = (event) => {
    return event.key === 'ArrowLeft';
}

const __isArrowRight = (event) => {
    return event.key === 'ArrowRight';
}

const _isSwapLeft = (touchDiff) => {
    return touchDiff > 50;
}

const _isSwapRight = (touchDiff) => {
    return touchDiff < 50;
}

const userNavService = {
    handleKeyboardArrowEvent,
    handleScreenSwapEvent
}

export default userNavService;