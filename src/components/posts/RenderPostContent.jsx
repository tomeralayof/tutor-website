import React from "react";

export const RenderPostContent = ({ post,animatedElementRef }) => {
  return (
    <h6 className = "article-paragraph">
    { post }
    </h6> 
  )
}