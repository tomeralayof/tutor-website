import React, { useRef, useState } from "react";
import articleSource from "./data.json";

import { RenderPostContent } from "./RenderPostContent";
import { RenderPostFooter } from "./RenderPostFooter";
import { AnimationBtn } from "./AnimationBtn";

const INITIAL_ANIMATION_DIV_CLASSNAME = "animation";

export const Articles = () => {

  const [idxArticle, setIdxArticle] = useState(0);
  const [jsonArticles] = useState(articleSource);
  const animatedElementRef = useRef(null);

  const btnProps = {idxArticle,setIdxArticle,animatedElementRef};

  return (
    <div className = "article-container">
      <div ref = { animatedElementRef } className = { INITIAL_ANIMATION_DIV_CLASSNAME }>
        <h3 className = "article-title"> {jsonArticles[idxArticle].header} </h3>
        <RenderPostContent idxArticle = {idxArticle} jsonArticles = {jsonArticles} />
      </div>

      <AnimationBtn {...btnProps} />

      <RenderPostFooter idxArticle = {idxArticle} length = {jsonArticles.length} />

    </div>
  );
};