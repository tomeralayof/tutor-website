import React from "react";
import { Info } from "../components/aboutPageContent/Info1";
import { Info2 } from "../components/aboutPageContent/info2";
import { PersonalCard } from "../components/aboutPageContent/PersonalCard";
import { PrepareCards } from "../components/aboutPageContent/prepareCards";

import { renderCards } from "../components/aboutPageContent/renderCards";


import "../styles/about/aboutPage.css";

export const AboutPage = () => {
    return (
        <div class="cards-container">
            {PrepareCards()};
      <div class="clear"></div>
    </div>

    )
}

{/* <PersonalCard/>
            <Info/>
            <Info2/> */}