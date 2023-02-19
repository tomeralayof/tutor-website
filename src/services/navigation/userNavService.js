import strService from "../string/strService.js";

const handleKeyboardArrowEvent = (event,selectedOption,setSelectedOption) => {

    const { decrementStrCharByIdx,incrementStrCharByIdx } = strService;

    if (event.key === 'ArrowLeft') {
        const updateNewOption = decrementStrCharByIdx(selectedOption,selectedOption.length - 1);
        setSelectedOption(updateNewOption);
    }

    else if (event.key === 'ArrowRight') {
        const updateNewOption = incrementStrCharByIdx(selectedOption,selectedOption.length - 1);
        setSelectedOption(updateNewOption);
    }
}

const userNavService = {
    handleKeyboardArrowEvent
}

export default userNavService;