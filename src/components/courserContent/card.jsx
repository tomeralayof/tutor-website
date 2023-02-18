import React from "react";

export const Card = ( {imageUrl,idx} ) => {
    return (
        <div className = "course-card">
            <div className = "image-container1">
                <img src = {imageUrl} alt = {`course-${idx + 1}`}  />
            </div>
        </div>
    )
}