import { Card } from "./card";

import cardRowService from "./cardRowService";

const renderCard = ( component ) => {
       return component()
}

const renderRow = ( showCardsSameRow,cssRow ) => {
    return (
        <div className = {cssRow} >
            {showCardsSameRow}
        </div>
    )
}

const renderSameRowCards = (startIdx,endIdx) => {
    return imageUrl.slice(startIdx,endIdx).map((imguUrl,currIdx,startIdx) =>
                                                renderCard(imguUrl,currIdx,startIdx));
}

const cardState = (component,cssBeforeRowDown,cssAfterRowDown) => {
    return {
        component,
        cssBeforeRowDown,
        cssAfterRowDown,
        numberofCardsInRow
    }
}

export const renderCards = ({ props }) => {

    const {component,cssBeforeRowDown, cssAfterRowDown, numberofCardsInRow} = props;

    let result = [];

    const numOfRows = Math.ceil(imageUrl.length / numberofCardsInRow);
    let cssRow = cardContainer;
    
    for (let i = 0; i < numOfRows; ++i) {
        const startIdx = i * numberofCardsInRow;

        const endIdx = Math.min(startIdx + numberofCardsInRow, imageUrl.length);

        const showCardsSameRow = renderSameRowCards(startIdx,endIdx);
        result.push(renderRow(showCardsSameRow,cssRow));
        cssRow = cardContainerDownRow;
    }

    return result;
}

/* what do i need for a card container ? 
    1. cardCreator function -> build the render card
    2. number of rows
    3. card container
    4. card container down row
*/