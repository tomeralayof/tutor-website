import { setupCardsContent } from "./setupCardsContent";
import { AboutCard } from "./AboutCard";

export const PrepareCards = () => {
    let cardsPreparedToRender = [];
    
    setupCardsContent().forEach((cardContent) =>
      cardsPreparedToRender.push (
        <AboutCard { ...cardContent } key = { cardContent.cardNameHeader } />
      )
    );
  
    return cardsPreparedToRender;
}