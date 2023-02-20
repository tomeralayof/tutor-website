import React from "react";
import { PrepareCards } from "../components/aboutPageContent/prepareCards";

import "../styles/about/aboutPage.css";

export const AboutPage = () => {
    return (
        <div class="cards-container">
            {PrepareCards()};
      <div class="clear"></div>
    </div>

    )
}