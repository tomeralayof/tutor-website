const isArrowLeft = (event) => {
    return event.key === 'ArrowLeft';
}

const isArrowRight = (event) => {
    return event.key === 'ArrowRight';
}

const isSwapLeft = (touchDiff) => {
    return touchDiff < 0;
}

const isSwapRight = (touchDiff) => {
    return touchDiff > 0;
}

const eventTypeDeterminator = {
    isArrowLeft,
    isArrowRight,
    isSwapLeft,
    isSwapRight
}

export default eventTypeDeterminator;