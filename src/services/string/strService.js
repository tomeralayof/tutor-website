import  intService  from "../int/intService.js";

const { cycleDecrement,cycleIncrement }  = intService;

const decrementStrCharByIdx = (str,idx,cycleLimit) => {
    return updateCharAtIdx(str,idx,cycleDecrement,cycleLimit);
}

const incrementStrCharByIdx = (str,idx,cycleLimit) => {
    return updateCharAtIdx(str,idx,cycleIncrement,cycleLimit);
}

const updateCharAtIdx = (str,idx,updateChar,cycleLimit) => {
    let chatAtIdx = parseInt(str.charAt(idx));
    chatAtIdx = updateChar(chatAtIdx,cycleLimit);
    return str.slice(0,idx) + chatAtIdx + str.slice(idx + 1,str.length);
}

const strService = {
    decrementStrCharByIdx,
    incrementStrCharByIdx
}

export default strService;