import React from "react";

import "../../styles/about/info.css";

const renderIcons = ( contacts ) => {
  console.log(contacts);
    return contacts.map((contact, index) => (
        <a key = {index} href="#"><i className = {`fa ${contact.icon}`}></i></a>
    ));
}

export const AboutCard = ( props ) => {
  console.log("the props are = ",props);
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
            {props.icons != null ? renderIcons(props.icons) : null}
          <div className = "clear"></div>
        </div>
        <footer>
        </footer>
      </div>
    )
}