import React , {useState} from "react";

import contactIcons from "../config/contactIcons/contactIcons.json";

export const ContactIcons = ({ style }) => {

    const [iconsData] = useState(contactIcons);

    return (
        <div className = "contacts-container">
        <div className = "contacts">
            {iconsData.map((contact,idx) => {
                return (
                    <a key = { idx } href = { contact.url }>
                    <i class =  { !style ?  contact.icon : style }></i></a>
                )
            })}
        <div className = "clear"></div>
        </div>
        </div>
    )
}