import React , { useState } from "react";

import { renderCards } from "./renderCards.js";

import "../../styles/courses/courseCard.css";

export const Courses = () => {
    return (
        <div className = "container1">
        {renderCards()};
        </div>
    )
}