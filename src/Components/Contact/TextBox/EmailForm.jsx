import { useEffect, useRef, useState } from "react";

export default function EmailForm(props) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const containerRef = useRef(null);
    const firstFieldRef = useRef(null);
    const { Cancel } = props;

    const DataHandler = (e) => {
        e.preventDefault();
        props.UserData({ target: e.target })
        setName("");
        setEmail("");
        setMessage("");
        Cancel();
    }

    useEffect(() => {
        const TextContainer = containerRef.current;
        // Let the fade/slide-in transition run, then focus the first field
        const frame = window.requestAnimationFrame(() => {
            if (TextContainer) TextContainer.classList.add("showContactForm");
        });
        if (firstFieldRef.current) firstFieldRef.current.focus({ preventScroll: true });

        const onKey = (e) => { if (e.key === "Escape") Cancel(); };
        document.addEventListener("keydown", onKey);
        return () => {
            window.cancelAnimationFrame(frame);
            document.removeEventListener("keydown", onKey);
        };
    }, [Cancel]);

    return <form onSubmit={DataHandler} aria-labelledby="ContactFormTitle">
        <div className="TextContainer" ref={containerRef} role="dialog" aria-modal="true" aria-labelledby="ContactFormTitle">
            <h3 id="ContactFormTitle" className="visually-hidden">Send me an email</h3>
            <label className="ContactLabel" htmlFor="contact-name">Name</label>
            <input
                id="contact-name"
                ref={firstFieldRef}
                className="Name"
                name="name"
                placeholder="Enter your Name"
                autoComplete="name"
                maxLength={50}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            /> <br />
            <label className="ContactLabel" htmlFor="contact-email">Email</label>
            <input
                id="contact-email"
                className="Email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                autoComplete="email"
                maxLength={50}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            /> <br />
            <label className="ContactLabel" htmlFor="contact-message">Message</label><br />
            <textarea
                id="contact-message"
                className="Message"
                name="message"
                placeholder="Enter your message here"
                rows={5}
                maxLength={500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            /> <br />
            <div className="ContactButtons">
                <button
                    className="ContactSubmit"
                    type="button"
                    onClick={Cancel}
                >Cancel</button>
                <button
                    className="ContactSubmit"
                    type="submit"
                >Send</button>
            </div>
        </div>
    </form>
}
