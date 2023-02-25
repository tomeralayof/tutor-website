import React, { useState } from "react";
import { renderCards } from "../components/courses/renderCards.js";

import "../styles/courses/courseCard.css";

const numberCardsInRow = () => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    return  mediaQuery.matches ? 2 : 3;
}

export const Courses = () => {
  const [numberOfCardsInRow] = useState(numberCardsInRow());

  return (
    <div className="container1">
      {renderCards(numberOfCardsInRow)}
    </div>
  );
};