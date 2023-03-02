const isArrowLeft = (event) => {
    return event.key === 'ArrowLeft';
}

const isArrowRight = (event) => {
    return event.key === 'ArrowRight';
}

const isSwapLeft = (params) => {

    const {touchDiffX, touchDeltaY,event,pixelRation } = params;

    console.log(pixelRation);
    if(!_checkParams(touchDeltaY,event,pixelRation)) {
        return false;
    }

    return touchDiffX < 0;
}

const isSwapRight = (params) => {
    
    const {touchDiffX, touchDeltaY,event, pixelRation} = params;

    if(!_checkParams(touchDeltaY,event,pixelRation)) {
        return false;
    }

    return touchDiffX > 0;
}

const _checkParams = (touchDeltaY,event,pixelRatio) => {
    return !(Math.abs(touchDeltaY) > 50) && 
          (!(event.touches.length > 1))  &&
          pixelRatio === 1;
}

const eventTypeDeterminator = {
    isArrowLeft,
    isArrowRight,
    isSwapLeft,
    isSwapRight
}

export default eventTypeDeterminator;