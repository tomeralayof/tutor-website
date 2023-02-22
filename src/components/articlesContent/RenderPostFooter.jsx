import React from "react";

export const RenderPostFooter = ({ idxArticle, length }) => {
    return (
        <footer className = "article-footer">
        <div className = "article-footer-text">
          <p className = "article-footer-paragraph">
            {idxArticle + 1} / {length}
          </p>
        </div>
      </footer>
    )
}