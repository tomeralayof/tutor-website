import  strService  from "../string/strService.js";

import navConfig from "../../config/navBar/navConfig.json";

const { navLength } = navConfig;

const getStateUpdateParameters = ( currState,setOption,firstEventDecidor,secondEventDecidor,param) => {

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
        const decrementStateId = decrementStrCharByIdx(currState,currState.length - 1,navLength);
        setCurrState(decrementStateId);
    }

    else if (secondEventDecidor(param)) {
        const incrementStateId = incrementStrCharByIdx(currState,currState.length - 1,navLength);
        setCurrState(incrementStateId);
    }
}

const stateUpdatorService = {
    getStateUpdateParameters,
    updateNewState
}

export default stateUpdatorService;