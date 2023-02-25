import React, { useState } from "react";
import { ContactIcons } from "../../common/contactIcons";

export const AboutCardTemplate = ( props ) => {

  const [ scrrenSize ] = useState(window.innerWidth);

    return (
        <div className = "card card-two">
        <header>
          { props.header ? <div class="avatar"> {props.header} </div> : null }
        </header>

        <h3>{props.cardNameHeader}</h3>
        <div className = "desc">
          {props.paragraph}
        </div>
         
         <div className = "contacts">
          { props.icons != null ? <ContactIcons/> : null }
          <div className = "clear"></div>
        </div>

         {
          scrrenSize >= 760 && (
              <footer>
              </footer>
          )
         }
      </div>
    )
}