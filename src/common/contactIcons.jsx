import React from "react";

import contactIcons from "../config/contactIcons/contactIcons.json";

export const ContactIcons = ({ style }) => {
    return contactIcons.map((contact, index) => (
        <a key = {index} href = { contactIcons.url }>
            <i class =  { !style ?  contact.icon : style }></i></a>
    ));
}