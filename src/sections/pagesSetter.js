import { WelcomePage } from "../pages/welcomePage";
import { AboutPage } from "../pages/AboutPage";
import { Courses } from "../pages/CoursesPage";
import { ArticlesPage } from "../pages/ArticlePage";
import { ContactPage } from "../pages/ContactPage";
import { ArticlesTest } from "../tests/articlesTest";

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

export const PagesSetter = () => {
  const pages = [<ContactPage/>,<ArticlesTest/>,<Courses/>,<AboutPage/>,<WelcomePage/>];
  
  const renderResult = [];
  
  pages.map((page,idx) => renderResult.push(setupPage(page,idx)));
  
  return renderResult;
};