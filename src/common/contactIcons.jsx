import React from "react";

import contactIcons from "../config/contactIcons/contactIcons.json";

export const ContactIcons = ({ style }) => {
    return (
        <div className = "contacts-container">
        <div className = "contacts">
            {contactIcons.map((contact,idx) => {
                return (
                    <a key = {idx} href = { contactIcons.url }>
                    <i class =  { !style ?  contact.icon : style }></i></a>
                )
            })}
        <div className = "clear"></div>
        </div>
        </div>
    )
}