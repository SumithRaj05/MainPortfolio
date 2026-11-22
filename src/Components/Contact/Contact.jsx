import { useCallback, useEffect, useRef, useState } from "react";
import "./Contact.css";
import GitHub from "./github.png"
import Email from "./gmail.png"
import Insta from "./insta.webp"
import LinkedIn from "./linkedin.png"
import contactme from "./contactme.webp"
import Demo from "./demo.png"
import EmailDemo from "./email.png"
import Resume from "./resume.png"
import View from "./view.png"
import srresume from "./srresume.pdf"

import TextBox from "./TextBox/TextBox"

const LINKS = [
    { icon: Insta, label: "Instagram Page", href: "https://www.instagram.com/sumithraj05/", trail: Demo, trailClass: "ContactLogo" },
    { icon: GitHub, label: "GitHub Profile", href: "https://github.com/SumithRaj05", trail: Demo, trailClass: "ContactLogo" },
    { icon: LinkedIn, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/sumith-d-41b50322b/", trail: Demo, trailClass: "ContactLogo" },
];

export default function Contact() {

    const [emailOpen, setEmailOpen] = useState(false);
    const containerRef = useRef(null);
    const closeEmail = useCallback(() => setEmailOpen(false), []);

    useEffect(() => {
        const Container = containerRef.current;
        if (!Container) return undefined;
        if (typeof IntersectionObserver === "undefined") {
            Container.classList.add("showContact");
            return undefined;
        }

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

        return () => observer.disconnect()
    }, [])

    return (
        <section className="ContactSection" id="Contact">
            <div
                className="ContactbgDesign"
                aria-hidden="true"
            ></div>
            <img
                src={contactme}
                alt="Cartoon of Sumith winking and pointing at the contact links"
                className="contactme"
                width={499}
                height={499}
                loading="lazy"
            />
            <h2 className="ContactHeader SectionHeader">Get in touch</h2>
            <ul className="ContactContainer" ref={containerRef}>
                {LINKS.map((link) => (
                    <li key={link.href}>
                        <a
                            className="ContactItem"
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${link.label} (opens in a new tab)`}
                        >
                            <span className="Border" aria-hidden="true"></span>
                            <img src={link.icon} className="icon" alt="" width={70} height={70} />
                            <span className="Hidden">
                                <span className="HiddenLink">
                                    {link.label}
                                    <img src={link.trail} className={link.trailClass} alt="" />
                                </span>
                            </span>
                        </a>
                    </li>
                ))}
                <li>
                    <button
                        type="button"
                        className="ContactItem"
                        aria-label="Send me an email"
                        aria-haspopup="dialog"
                        aria-expanded={emailOpen}
                        onClick={() => setEmailOpen((o) => !o)}
                    >
                        <span className="Border" aria-hidden="true"></span>
                        <img src={Email} className="icon" alt="" width={70} height={70} />
                        <span className="Hidden">
                            <span className="HiddenLink">
                                Send Email
                                <img src={EmailDemo} className="EmailLogo" alt="" />
                            </span>
                        </span>
                    </button>
                </li>
                <li>
                    <a
                        className="ContactItem"
                        href={srresume}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View resume (PDF, opens in a new tab)"
                    >
                        <span className="Border" aria-hidden="true"></span>
                        <img src={Resume} className="icon" alt="" width={70} height={70} />
                        <span className="Hidden">
                            <span className="HiddenLink">
                                View Resume
                                <img src={View} className="EmailLogo" alt="" />
                            </span>
                        </span>
                    </a>
                </li>
            </ul>
            {
                emailOpen && <TextBox Cancel={closeEmail} />
            }
            <p className="ContactFooter">&copy; {new Date().getFullYear()} Sumith Rajpurohit</p>
        </section>
    )
}
