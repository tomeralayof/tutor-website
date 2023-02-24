import React from "react";

export const RenderPostContent = ({idxArticle,jsonArticles}) => {
    return (
          jsonArticles[idxArticle].paragraph.map((elem, i) => {
            return (
              <h6 key={i} className = "article-paragraph">
                { elem }
              </h6>
            );
          })
    )
}





/* 


<div className="paragraph-container">
          {jsonArticles[idxArticle].paragraph.map((elem, i) => {
            return (
              <h6 key={i} className = "article-paragraph">
                { elem }
              </h6>
            );
          })}
        </div>




*/