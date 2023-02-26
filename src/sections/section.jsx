import React from "react";

import "../styles/sections/section.css"

export const Section = ({ page }) => (
    <section className = {page.cssClass} id = {`st-panel-${page.id}`}>
      <div className = "st-deco" data-icon = "&#xf069;" ></div>
      {page.component}
    </section>
);