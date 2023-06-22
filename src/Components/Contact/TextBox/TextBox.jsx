import React from "react";
import "./TextBox.css";
import EmailForm from "./EmailForm";
import emailjs from 'emailjs-com';

export default function TextBox(props) {

    const SendEmailHandler = (e) => {

        emailjs.sendForm('service_po45yzs', 'template_8pt1g0g', e.target, '5v3z3E-0_Q4STSCwM')
            .then((result) => {
                alert("Email Sent")
            }, (error) => {
                alert("Error while sending mail:\n", error)
            });
    }

    return <React.Fragment>
        <div className="BlurBackground"></div>
        <EmailForm UserData={SendEmailHandler} Cancel={props.Cancel} />
    </React.Fragment>
}