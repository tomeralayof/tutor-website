import { Section } from "./section";
import { PagesSetter } from "./pagesSetter";

import "../styles/sections/sectionColor.css";

export const Sections = () => {

  const pages = PagesSetter();
  
    return (
        <div className = "st-scroll">
          { pages.map(page => <Section key = { page.id } page = {page} />) }
        </div>
    )
}