const isArrowLeft = (event) => {
    return event.key === 'ArrowLeft';
}

const isArrowRight = (event) => {
    return event.key === 'ArrowRight';
}

const isSwapLeft = (params) => {

    const {touchDiffX, touchDeltaY,event } = params;

    if(!_checkParams(touchDeltaY,event)) {
        return false;
    }

    return touchDiffX < 0;
}

const isSwapRight = (params) => {
    
    const {touchDiffX, touchDeltaY,event} = params;

    if(!_checkParams(touchDeltaY,event)) {
        return false;
    }

    return touchDiffX > 0;
}

const _checkParams = (touchDeltaY,event) => {
    return !(Math.abs(touchDeltaY) > 50) && 
          (!(event.touches.length > 1))  &&
          window.devicePixelRatio === 1;
}

const eventTypeDeterminator = {
    isArrowLeft,
    isArrowRight,
    isSwapLeft,
    isSwapRight
}

export default eventTypeDeterminator;