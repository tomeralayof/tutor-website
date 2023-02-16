import emailjs from '@emailjs/browser';

const SendUserMsg = ( form ) => {
    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    
    .then((result) => {
    }, (error) => {
        throw new Error(error);
    });
}

const emailService = {
    SendUserMsg
}

export default emailService;