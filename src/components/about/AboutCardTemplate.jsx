import React, { useEffect, useState } from "react";
import { ContactIcons } from "../../common/contactIcons";

export const AboutCardTemplate = ( props ) => {

  const [ scrrenSize ] = useState(window.innerWidth);
  const [hasToShowFooler, sethasToShowFooler] = useState(false);

  useEffect(() => {
    if(scrrenSize > 768) {
      sethasToShowFooler(true);
    }
  },[scrrenSize,hasToShowFooler]);

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

        {hasToShowFooler ? <footer></footer> : null}
      </div>
    )
}