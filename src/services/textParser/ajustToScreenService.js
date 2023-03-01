const SIZE_FACRTOR = "rem";

const initialTextSize = (widht, height) => {

    if(widht <= 540) {
        return `0.6${SIZE_FACRTOR}`;
    }

    if (widht <= 768 ||  (widht <= 1024 && height <= 600)) {
        return `1${SIZE_FACRTOR}`;
    }

    return `2${SIZE_FACRTOR}`;
}

const resizeIfNeeded = ( initialSize,length ) => {

    const size = initialSize.slice(0,3);

    if(length > 271) {
        const newSize = `${size - 0.4}rem`;
        console.log(newSize);
        return newSize;
    }

    return initialSize;
}

/* ajustToScreen */
const textParserService = {
    initialTextSize,
    resizeIfNeeded
}

export default textParserService;