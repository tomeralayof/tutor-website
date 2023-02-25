import React from "react";
import { Header } from "../common/header";
import { ContactForm } from "../components/contact/form/ContactForm";
import {ContactIcons} from "../common/contactIcons";

import "../styles/contact/contactIcons.css"


export const ContactPage = () => {
    return (
        <React.Fragment>
        <Header text = {"צור קשר"}/>
        <ContactForm/>
        <div className = "form-icons-container">
        <ContactIcons/>
        </div>

        
        </React.Fragment>
    )
}