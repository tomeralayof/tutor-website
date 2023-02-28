import React, { useState, useEffect, useRef } from "react";
import FlowType from 'flowtype';

export const RenderPostContent = ({ idxArticle, jsonArticles, animatedElementRef }) => {
  const [textElements, setTextElements] = useState([]);

  const screenWidth = window.innerWidth;
  const idealFontSize = 16;

  useEffect(() => {
    const container = animatedElementRef.current;

    textElements.forEach((text, i) => {
      const textLength = text.textContent.length;
      const fontSize = Math.min((screenWidth / (textLength * 0.5)), idealFontSize);

      FlowType(text, {
        minimum: fontSize,
        maximum: fontSize * 2,
        minFont: fontSize,
        maxFont: fontSize * 2,
        fontRatio: 30,
        lineRatio: 1.5,
        fontResize: true,
      });
    });

    return () => {
      textElements.forEach((text) => {
        FlowType(text, 'stop');
      });
    };
  }, [animatedElementRef, idxArticle, jsonArticles, screenWidth, idealFontSize, textElements]);

  

  return (
    jsonArticles[idxArticle].paragraph.map((elem, i) => {
      const textRef = textElements[i];

      return (
        <h6 key={i} className="article-paragraph" ref={textRef}>
          {elem}
        </h6>
      );
    })
  );
};
