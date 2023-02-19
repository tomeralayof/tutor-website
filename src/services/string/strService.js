const decrementStrCharByIdx = (str,idx) => {
    return _handleStrValCounter(str,idx,_decrementCount);
}

const incrementStrCharByIdx = (str,idx) => {
    return _handleStrValCounter(str,idx,_incrementCount);
}

const _handleStrValCounter = (str,idx,cb) => {
    let chatAtIdx = parseInt(str.charAt(idx));
    chatAtIdx = cb(chatAtIdx);
    return str.slice(0,idx) + chatAtIdx + str.slice(idx + 1,str.length);
}

const _decrementCount = (num) => {
    return num - 1 || 5;
}

const _incrementCount = (num) => {
    return (num + 1) % 5 || 5;
}

const strService = {
    decrementStrCharByIdx,
    incrementStrCharByIdx
}

export default strService;