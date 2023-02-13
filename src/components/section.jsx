import React from "react";

export const Section = ({ section }) => (
    <section className={section.class} id={`st-panel-${section.id}`}>
      <div className="st-deco" data-icon={ section.icon }></div>
      <h2>{section.title} </h2>
      <p>{section.text}</p>     
    </section>
);