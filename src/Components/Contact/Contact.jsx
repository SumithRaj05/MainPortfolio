import { useEffect, useState } from "react";
import "./Contact.css";
import GitHub from "./github.png"
import Email from "./gmail.png"
import Insta from "./insta.jpg"
import LinkedIn from "./linkedin.png"
import contactme from "./contactme.png"
import Demo from "./demo.png"
import EmailDemo from "./email.png"
import Resume from "./resume.png"
import View from "./view.png"
import srresume from "./srresume.pdf"

import TextBox from "./TextBox/TextBox"


export default function Contact() {

    const [emailFlag, setEmailFlag] = useState(0);

    useEffect(() => {
        const Container = document.querySelector(".ContactContainer");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("showContact")
                } else {
                    entry.target.classList.remove("showContact")
                }
            })
        })

        observer.observe(Container);

        return () => observer.unobserve(Container)
    }, [])

    return (
        <section className="ContactSection" id="Contact">
            <div
                className="ContactbgDesign"
            ></div>
            <img src={contactme} alt="" className="contactme" />
            <h1 className="ContactHeader">Get in touch</h1>
            <div className="ContactContainer">
                <div
                    className="ContactItem"
                >
                    <div className="Border"></div>
                    <img src={Insta} className="icon" alt="" />
                    <div className="Hidden">
                        <a
                            className="HiddenLink"
                            href="https://www.instagram.com/sumithraj05/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram Page
                            <img
                                src={Demo}
                                className="ContactLogo"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div
                    className="ContactItem"
                >
                    <div className="Border"></div>
                    <img src={GitHub} className="icon" alt="" />
                    <div className="Hidden">
                        <a
                            className="HiddenLink"
                            href="https://github.com/SumithRaj05"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github Repository
                            <img
                                src={Demo}
                                className="ContactLogo"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div
                    className="ContactItem"
                >
                    <div className="Border"></div>
                    <img src={LinkedIn} className="icon" alt="" />
                    <div className="Hidden">
                        <a
                            className="HiddenLink"
                            href="https://www.linkedin.com/in/sumith-d-41b50322b/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn Profile
                            <img
                                src={Demo}
                                className="ContactLogo"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="ContactItem">
                    <div className="Border"></div>
                    <img src={Email} className="icon" alt="" />
                    <div className="Hidden">
                        <a
                            className="HiddenLink"
                            href="/#Contact"
                            target="_self"
                            onClick={() => setEmailFlag(!emailFlag)}
                        >
                            Send Email
                            <img
                                src={EmailDemo}
                                className="EmailLogo"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div className="ContactItem">
                    <div className="Border"></div>
                    <img src={Resume} className="icon" alt="" />
                    <div className="Hidden">
                        <a
                            className="HiddenLink"
                            href={srresume}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Resume
                            <img
                                src={View}
                                className="EmailLogo"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
            {
                emailFlag && <TextBox Cancel={() => setEmailFlag(!emailFlag)} />
            }
        </section>
    )
}