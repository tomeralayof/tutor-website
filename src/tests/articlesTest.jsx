import React, { useCallback, useEffect, useState } from "react";
import articleSource from "../components/articlesContent/data.json";

import "../styles/articles/articles.css";
import "../styles/about/info.css";


const DIV_ANIMATION_CONTAINER = "animation";

export const ArticlesTest = () => {
const [idxArticle, setIdxArticle] = useState(0);
const [articleTextAnimation, setArticleTextAnimation] = useState(DIV_ANIMATION_CONTAINER);
const [jsonArticles] = useState(articleSource);

const handleEndAnimation = () => {
    setArticleTextAnimation(DIV_ANIMATION_CONTAINER);
};

const handleAnimationNext = useCallback(() => {
    setIdxArticle((prevIdx) => prevIdx + 1);
    setArticleTextAnimation("move-next");

    const endAnimation = document.querySelector(`.${DIV_ANIMATION_CONTAINER}`);

    endAnimation.addEventListener("animationend",handleEndAnimation , {
        once : true
    });

}, []);

const handleClicked = (moveAnimationDirection) => {
    let moveLeftAnimation = articleTextAnimation.concat(" ", moveAnimationDirection);
    setArticleTextAnimation(moveLeftAnimation);
    const animatedElement = document.querySelector(`.${DIV_ANIMATION_CONTAINER}`);

    animatedElement.addEventListener("animationend", handleAnimationNext, {
    once: true,
    });
}

const handleRightClick = () => {
    handleClicked("move-left");
}

  return (
    <div className="article-container">


        <div className = { articleTextAnimation }>


      <h3 className = "article-title">
        {jsonArticles[idxArticle].header}
      </h3>

        <div className = "paragraph-container">
        {
            jsonArticles[idxArticle].paragraph.map((elem) => {   
                return (
                    <h6 className = "article-paragraph">
                    {elem}
                </h6>
                )
            })}

        </div>

        </div>
           
      <div className="button-container">
        <button className="right-button" onClick = { handleRightClick }>
          Click
        </button>

        <button className = "left-button">
         click
        </button>
      </div>

      <footer className="article-footer">
        <div className="article-footer-text">
          <p className="article-footer-paragraph"> { idxArticle + 1 } / 3</p>
        </div>
      </footer>

    </div>
  );
};