import React , { useState,useEffect } from "react";
import { Header } from "../common/header";
import { ContactForm } from "../components/contact/form/ContactForm";
import { ContactIcons } from "../common/contactIcons";

const tabletIconPositionContainer = {
    position: "relative",
    top: "84%",
}

export const ContactPage = () => {
    const [is1024x600, setIs1024x600] = useState(false);
    
    useEffect(() => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        if (screenWidth === 1024 && screenHeight === 600) {
          setIs1024x600(true);
        }
      }, [is1024x600]);

    return (
        <React.Fragment>
        <Header text = {"צור קשר"}/>
        <ContactForm/>
        <div style = {is1024x600 ? tabletIconPositionContainer : null}
                className = "icons-container">
        <ContactIcons />
        </div>
        </React.Fragment>
    )
}