import React from "react";
import { Header } from "../common/header";
import { ContactForm } from "../components/contactPageContent/form/ContactForm";

import "../styles/pages/contact.css";

export const ContactPage = () => {
    return (
        <React.Fragment>
        <Header text={"צור קשר"}/>  
        <ContactForm/>
        </React.Fragment>
    )
}