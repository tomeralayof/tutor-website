import { courseData } from "../../config/courses/imageData";

import { Card } from "./card";

import "../../styles/courses/courseCard.css";

const renderCard = (courseData,startIdx,currIdx) => {
    return (
        <Card key = {startIdx + currIdx} courseData = {courseData} idx = {startIdx + currIdx}/>
    )
}

const renderSameRowCards = (startIdx,endIdx) => {
    return courseData.slice(startIdx,endIdx).map((imguUrl,currIdx,startIdx) =>
                                                renderCard(imguUrl,currIdx,startIdx));
}

const renderRow = (showCardsSameRow,cssRow) => {
    return (
        <div className = {cssRow} >
            {showCardsSameRow}
        </div>
    )
}

export const renderCards = ( numberOfCardsInRow ) => {
    
    let result = [];

    const numOfRows = Math.ceil(courseData.length / numberOfCardsInRow);
    let cssRow = "cards-container1";
    
    for (let i = 0; i < numOfRows; ++i) {
        const startIdx = i * numberOfCardsInRow;
        const endIdx = Math.min(startIdx + numberOfCardsInRow, courseData.length);
        const showCardsSameRow = renderSameRowCards(startIdx,endIdx);
        result.push(renderRow(showCardsSameRow,cssRow));
        cssRow = `${cssRow} ${cssRow}--bottom`;
    }

    return result;
}