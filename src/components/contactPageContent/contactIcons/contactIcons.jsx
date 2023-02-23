import React from "react";

import { contactIconsContent } from "../../../config/contact/contactIconContent"
import { ContactIcon } from "./ContactIcon";

import "../../../styles/contactIcons/contactIcons.css";

export const ContactIcons = () => {
    return (
        <div className="icons-container">
            <ul>
                {contactIconsContent.map((icon,idx) => <ContactIcon key={idx} icon = {icon}/> )}
            </ul>
        </div>
    )
}