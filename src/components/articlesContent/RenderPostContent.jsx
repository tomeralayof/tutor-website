import React from "react";

export const RenderPostContent = ({idxArticle,jsonArticles}) => {
    return (
        <div className="paragraph-container">
          {jsonArticles[idxArticle].paragraph.map((elem, i) => {
            return (
              <h6 key={i} className = "article-paragraph">
                { elem }
              </h6>
            );
          })}
        </div>
    )
}