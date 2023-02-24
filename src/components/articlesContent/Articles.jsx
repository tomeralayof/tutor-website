import React, { useRef, useState } from "react";

import articleSource from "../../config/articles/data.json";

import { RenderPostContent } from "./RenderPostContent";
import { RenderPostFooter } from "./RenderPostFooter";
import { AnimationBtn } from "./AnimationBtn";

const INITIAL_ANIMATION_DIV_CLASSNAME = "paragraph-container";

export const Articles = () => {

  const [idxArticle, setIdxArticle] = useState(0);
  const [jsonArticles] = useState(articleSource);
  const animatedElementRef = useRef(null);

  const btnProps = {idxArticle,setIdxArticle,animatedElementRef};

  return (
    <React.Fragment>
      
    <div className = "article-container">
    <div className = "background"></div>
    <header className = "line-up"></header>
      
      <div ref = {animatedElementRef} className = {INITIAL_ANIMATION_DIV_CLASSNAME} >
        <RenderPostContent idxArticle = {idxArticle} jsonArticles = {jsonArticles} />
      </div>

      <AnimationBtn {...btnProps} />

      
      <RenderPostFooter idxArticle = {idxArticle} length = {jsonArticles.length} />

    </div>
    </React.Fragment>
  );
};