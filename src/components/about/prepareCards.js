import { setupCardsContent } from "./setupCardsContent";
import { AboutCardTemplate } from "./AboutCardTemplate";

export const PrepareCards = () => {
    let cardsPreparedToRender = [];
    
    setupCardsContent().forEach((cardContent) =>
      cardsPreparedToRender.push (
        <AboutCardTemplate { ...cardContent } key = { cardContent.cardNameHeader } />
      )
    );
  
    return cardsPreparedToRender;
}