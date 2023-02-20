import  strService  from "../string/strService.js";

const setupStateData = ( currState,setOption,firstEventDecidor,secondEventDecidor,param) => {
    return {
        "currState" : currState,
        "setCurrState" : setOption,
        "firstEventDecidor" : firstEventDecidor,
        "secondEventDecidor" : secondEventDecidor,
        "param" : param
    }
}

const updateNewState = ( state ) => {
    const { currState, setCurrState, firstEventDecidor , secondEventDecidor , param } = state;
    const { decrementStrCharByIdx,incrementStrCharByIdx } = strService;

    if (firstEventDecidor(param)) {
        const decrementStateId = decrementStrCharByIdx(currState,currState.length - 1);
        setCurrState(decrementStateId);
    }

    else if (secondEventDecidor(param)) {
        const incrementStateId = incrementStrCharByIdx(currState,currState.length - 1);
        setCurrState(incrementStateId);
    }
}

const stateUpdatorService = {
    setupStateData,
    updateNewState
}

export default stateUpdatorService;