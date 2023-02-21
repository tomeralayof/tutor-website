import React, { useCallback, useEffect, useState } from "react";
import articleSource from "./data.json";

import "../../styles/articles/articles.css";
import "../../styles/about/info.css";

export const Articles = () => {
  const [idxArticle, setIdxArticle] = useState(0);
  const [articleTextAnimation, setArticleTextAnimation] = useState("article-title");
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const [jsonArticles] = useState(articleSource);
  const [isAnimationLeft,setIsAnimationLeft] = useState(true);

  const handleAnimationRendering = (moveAnimation, newArticleIdx) => {
      setIdxArticle(newArticleIdx);
      setArticleTextAnimation("article-title");
      let nextAnimation = articleTextAnimation.concat(" ",moveAnimation);
      setArticleTextAnimation(nextAnimation);
      setIsAnimationDone(true);
  }

  const setupInitialState = useCallback(() => {
    console.log("number of times the function called ....");

    if(isAnimationLeft) {
      handleAnimationRendering("move-next", idxArticle + 1);
    }
    else {
      console.log("decrement ...");
    }
  
  },[idxArticle,isAnimationLeft]);


  useEffect(() => {
    const animatedElement = document.querySelector(".article-title");
    animatedElement.addEventListener("animationend", setupInitialState);

    return () => {
      animatedElement.removeEventListener("animationend", setupInitialState);
    };
  }, [setupInitialState]);


  useEffect(()=> {
    if(isAnimationDone) {
      let doneAnimation = articleTextAnimation.concat(" ", "article-title");
      setArticleTextAnimation(doneAnimation);
      setIsAnimationDone(false);
    }
  },[isAnimationDone]);


  const handleLeftClick = () => {
    console.log("left clicked ...");
  };
  
  const handleRightClick = () => {
    console.log("right click ...")
    let moveLeftAnimation = articleTextAnimation.concat(" ","move-left");
    setArticleTextAnimation(moveLeftAnimation);
  }
  
  return (
    <div className = "article-container">

      <h3 className = { articleTextAnimation } >
        {jsonArticles[idxArticle].header}
      </h3>

      <h6 className = "article-paragraph">
        { jsonArticles[idxArticle].paragraph}
      </h6>

      <div className="button-container">
        <button className="left-button" onClick = { handleLeftClick }>
          Click
        </button>
        <button className = "right-button" onClick = { handleRightClick }>
          Click
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



