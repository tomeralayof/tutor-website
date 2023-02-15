import React from "react";

import "../../styles/Section/section.css"

export const Section = ({ page }) => (
  <section className={page.cssClass} id={`st-panel-${page.id}`}>
    <img src = "https://publicdomainvectors.org/photos/nicubunu_Comic_characters_Operator.png"/>
      <div className="st-deco" data-icon = "&#xf069;" ></div>
      {page.component}
    </section>
);