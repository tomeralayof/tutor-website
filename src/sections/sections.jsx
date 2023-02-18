import { Section } from "./section";
import { RenderPages } from "./renderPages";

import "../styles/Section/sections.css";
import "../styles/Section/sectionColor.css";

export const Sections = () => {

  const pages = RenderPages();
  
    return (
        <div className = "st-scroll">
          { pages.map(page => <Section key = { page.id } page = {page} />) }
        </div>
    )
}