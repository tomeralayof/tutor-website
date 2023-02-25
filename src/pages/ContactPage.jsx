import React from "react";
import { Header } from "../common/header";
import { ContactForm } from "../components/contact/form/ContactForm";
import { ContactIcons } from "../common/contactIcons";

export const ContactPage = () => {
    return (
        <React.Fragment>
        <Header text = {"צור קשר"}/>
        <ContactForm/>
        <div className="icons-container">
        <ContactIcons/>
        </div>
        </React.Fragment>
    )
}