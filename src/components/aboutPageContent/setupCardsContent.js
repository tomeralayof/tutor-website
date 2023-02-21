import cardsSetter from "./cardsData.json";

const setUpCardData = (card) => {
    return {
        header : !card.header ? null : <img src = {card.header} alt = "tomer alayof" />,
        cardNameHeader : card.cardNameHeader,
        paragraph : card.paragraph,
        icons : card.icons || null
    }
}

export const setupCardsContent = () => {
    let cards = [];

    cardsSetter.map((card) => cards.push(setUpCardData(card)));

    return cards;
}