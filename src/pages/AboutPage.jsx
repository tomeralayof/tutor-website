import React from "react";
import { Info } from "../components/aboutPageContent/Info1";
import { Info2 } from "../components/aboutPageContent/info2";
import { PersonalCard } from "../components/aboutPageContent/PersonalCard";

import "../styles/about/aboutPage.css";

export const AboutPage = () => {
    return (
        <div class="cards-container">
            <PersonalCard/>
            <Info/>
            <Info2/>
      <div class="clear"></div>
    </div>

    )
}