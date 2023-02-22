import React, { useCallback, useRef, useState } from "react";
import articleSource from "../components/articlesContent/data.json";

import "../styles/articles/articles.css";
import "../styles/about/info.css";

const DIV_ANIMATION_CONTAINER = "animation";

export const ArticlesTest = () => {
  const [idxArticle, setIdxArticle] = useState(0);
  const [articleTextAnimation, setArticleTextAnimation] = useState(DIV_ANIMATION_CONTAINER);
  const [jsonArticles] = useState(articleSource);

  const animatedElementRef = useRef(null);

  const handleEndAnimation = () => {
    setArticleTextAnimation(DIV_ANIMATION_CONTAINER);
  };

  const handleAnimationNext = useCallback(() => {
    setIdxArticle((prevIdx) => prevIdx + 1);
    setArticleTextAnimation("move-next");

    animatedElementRef.current.addEventListener("animationend", handleEndAnimation, {
      once: true
    });
  }, [animatedElementRef]);

  const handleClicked = (moveAnimationDirection) => {
    let moveLeftAnimation = articleTextAnimation.concat(" ", moveAnimationDirection);
    setArticleTextAnimation(moveLeftAnimation);

    animatedElementRef.current.addEventListener("animationend", handleAnimationNext, {
      once: true
    });
  };

  const handleRightClick = () => {
    handleClicked("move-left");
  };

  return (
    <div className="article-container">
      <div ref={animatedElementRef} className={articleTextAnimation}>
        <h3 className="article-title">{jsonArticles[idxArticle].header}</h3>
        <div className="paragraph-container">
          {jsonArticles[idxArticle].paragraph.map((elem, i) => {
            return (
              <h6 key={i} className="article-paragraph">
                { elem }
              </h6>
            );
          })}
        </div>
      </div>


      <div className="button-container">

        <button className="right-button" onClick={handleRightClick}>
          Click
        </button>
        <button className="left-button" onClick={() => handleClicked("move-right")}>
          Click
        </button>

      </div>
      <footer className="article-footer">
        <div className="article-footer-text">
          <p className="article-footer-paragraph">
            {idxArticle + 1} / {jsonArticles.length}
          </p>
        </div>
      </footer>
    </div>
  );
};