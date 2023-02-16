import React from "react";
import { Header } from "../Common/header";
import { ContactForm } from "../form/ContactForm";
import {ContactIcons} from "../contactIcons/contactIcons"

export const ContactPage = () => {
    return (
        <React.Fragment>
        <Header text={"צור קשר"}/>
        <ContactForm/>
        <ContactIcons/>
        </React.Fragment>
    )
}