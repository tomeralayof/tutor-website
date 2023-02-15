import React from "react";
import { Header } from "../Common/header";
import { ContactForm } from "../form/ContactForm";

export const Contact = () => {
    return (
        <React.Fragment>
        <Header text={"צור קשר"}/>
        <ContactForm/>
        </React.Fragment>
    )
}