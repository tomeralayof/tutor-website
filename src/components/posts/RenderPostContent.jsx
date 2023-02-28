import React , {useEffect, useState} from "react";

import textParserService from "../../services/textParser/ajustToScreenService";

const { initialTextSize,resizeIfNeeded } = textParserService;

export const RenderPostContent = ({ post }) => {
  const [ width ] = useState(window.innerWidth);
  const [ height ] = useState(window.innerHeight);
  const [fontSize,setFontSize] = useState("");

  useEffect(() => {
    const initialSize = initialTextSize(width,height);
    console.log(initialSize);
    console.log(resizeIfNeeded(initialSize,post.length));
    setFontSize(resizeIfNeeded(initialSize,post.length));
  },[post]);

  console.log(fontSize);

  return (
    <h6 style = {{fontSize: fontSize}} className = "article-paragraph">
    { post }
    </h6>
  )
}