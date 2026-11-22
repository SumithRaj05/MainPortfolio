import React from "react";
import "./TextBox.css";
import EmailForm from "./EmailForm";
import emailjs from 'emailjs-com';

// EmailJS IDs are public, client-side values by design. They can be overridden
// with REACT_APP_EMAILJS_* environment variables; the current values are kept
// as defaults so the existing deploy keeps working unchanged.
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_po45yzs';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_8pt1g0g';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '5v3z3E-0_Q4STSCwM';

export default function TextBox(props) {

    const SendEmailHandler = (e) => {

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                alert("Email sent. Thanks for reaching out!")
            }, (error) => {
                alert("Sorry, the email could not be sent. Please try again or reach me on LinkedIn.\n" + ((error && error.text) || ""))
            });
    }

    return <React.Fragment>
        <div className="BlurBackground" onClick={props.Cancel} aria-hidden="true"></div>
        <EmailForm UserData={SendEmailHandler} Cancel={props.Cancel} />
    </React.Fragment>
}
