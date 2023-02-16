
import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';


export const SendMailToMyself = () => {
    console.log(process.env.REACT_APP_EMAIL_SERVICE_ID);

    /* const form = useRef();

    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    }); */
}