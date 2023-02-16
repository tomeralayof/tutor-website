import { ContactPage } from "../pages/ContactPage";
import { WelcomePage } from "../pages/welcomePage";

const setupPage = (page,idx) => {
  const cssClass = 'st-panel';
  const cssClassActive = `${cssClass} st-color`;

  return {
    id : idx + 1,
    cssClass : (idx + 1) % 2 === 0 ? cssClass : cssClassActive,
    component : page,
    icon : '&#xf069'
  }
}

export const RenderPages = () => {
  const pages = [<ContactPage/>,<WelcomePage/>,<WelcomePage/>,<WelcomePage/>,<WelcomePage/>];
  
  const renderResult = [];
  
  pages.map((page,idx) => renderResult.push(setupPage(page,idx)));
  
  return renderResult;
};