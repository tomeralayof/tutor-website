import React from "react";
import { Header } from "../Common/header";
import { ContactForm } from "../form/ContactForm";

import "../../styles/pages/contact.css";

export const ContactPage = () => {
    return (
        <React.Fragment>
        <Header text={"צור קשר"}/>  
        <ContactForm/>
        </React.Fragment>
    )
}