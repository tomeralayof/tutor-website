import React from "react";

import "../../styles/about/personalCard.css";

export const PersonalCard = () => {
    return (
      <div class="card card-two">
        <header>
          <div class="avatar">
            <img src = "https://randomuser.me/api/portraits/men/3.jpg" alt="Jhon Doe" />
          </div>
        </header>
        
        <h3>Jhon Doe</h3>
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.
        </div>
        <div class="contacts">
        <a href=""><i class="fa fa-whatsapp"></i></a>
          <a href=""><i class="fa fa-whatsapp"></i></a>
          <a href=""><i class="fa fa-envelope"></i></a>
          <div class="clear"></div>
        </div>
    
        <footer>
        </footer>
      </div>
    )
}