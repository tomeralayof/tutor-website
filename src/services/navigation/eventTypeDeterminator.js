const isArrowLeft = (event) => {
    return event.key === 'ArrowLeft';
}

const isArrowRight = (event) => {
    return event.key === 'ArrowRight';
}

const isSwapLeft = (params) => {

    const {touchDiffX, touchDeltaY } = params;

    if(!_checkParams(touchDeltaY)) {
        return false;
    }

    return touchDiffX < 0;
}

const isSwapRight = (params) => {
    
    const {touchDiffX, touchDeltaY} = params;

    if(!_checkParams(touchDeltaY)) {
        return false;
    }

    return touchDiffX > 0;
}

const _checkParams = (touchDeltaY) => {
    return !(Math.abs(touchDeltaY) > 50);
}

const eventTypeDeterminator = {
    isArrowLeft,
    isArrowRight,
    isSwapLeft,
    isSwapRight
}

export default eventTypeDeterminator;