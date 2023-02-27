import React from "react";

import "../../styles/courses/courseCard.css";

export const Card = ( { courseData,idx } ) => {
    return (
        <div className = "course-card">
            <div class = "content">

            <div className = "content image-container1">
                <img src = {courseData.url} alt = {`course-${idx + 1}`}  />
            </div>

            <div style= { courseData.style } className = "content content-back">
                <div class = "card-back">
                { courseData.name }
                </div>
            </div>

            </div>
        </div>
    )
}