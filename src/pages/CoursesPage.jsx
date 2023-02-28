import React, { useState } from "react";
import { RenderCards } from "../components/courses/renderCards";

import "../styles/courses/courseCard.css";

const numberCardsInRow = () => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    return  mediaQuery.matches ? 2 : 3;
}

export const Courses = () => {
  const [numberOfCardsInRow] = useState(numberCardsInRow());
  
  return (
    <div className="container1">
      <RenderCards numberOfCardsInRow  = {numberOfCardsInRow}/>  
    </div>
  );
};