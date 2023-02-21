import React, { useState } from "react";

import "../../styles/articles/articles.css";
import "../../styles/about/info.css";

export const Articles = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="article-container">
      <h3 className = {`article-title ${isClicked ? "move-left" : "" }` } >Title of Six Words</h3>
      <h6 className = {`paragraph-title ${isClicked ? "move-left" : "" }` } > 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
        magna quis justo hendrerit eleifend. Nullam vel aliquet libero. Nam at
        mauris eu odio viverra ullamcorper sed in lectus. Proin ac justo nec nisi
        placerat pellentesque non non urna. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h6>

      <button onClick={ handleClick }>Click</button>

      <footer className="article-footer">
        <div className="article-footer-text">
          <p>1 / 3</p>
        </div>
      </footer>
    </div>
  );
};

/* 
const moveElements = () => {
    const title = document.querySelector(".article-title");
    const paragraph = document.querySelector(".paragraph");
    const container = document.querySelector(".article-container");

    if (!title || !paragraph || !container) return;

    const containerWidth = container.clientWidth;
    const titleWidth = title.clientWidth;
    const paragraphWidth = paragraph.clientWidth;
    const totalWidth = titleWidth + paragraphWidth;

    const distance = containerWidth - totalWidth;
    const animationDuration = 1000;

    title.style.transition = `transform ${animationDuration}ms`;
    paragraph.style.transition = `transform ${animationDuration}ms`;

    setTimeout(() => {
      title.style.transform = `translateX(${distance}px)`;
      paragraph.style.transform = `translateX(${distance}px)`;

      setTimeout(() => {
        title.style.display = "none";
        paragraph.style.display = "none";
      }, animationDuration);
    }, 1000);
  };


*/