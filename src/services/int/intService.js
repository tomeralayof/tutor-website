const cycleDecrement = (counter, factor) => {
    return  counter - 1 || factor;
}

const cycleIncrement = (counter, factor) => {
    return (counter + 1) % factor || factor;
}

const intService = {
    cycleDecrement,
    cycleIncrement
}

export default intService;