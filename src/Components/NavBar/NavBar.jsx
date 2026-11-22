import { useEffect, useState } from "react";
import "./NavBar.css";

const LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");

    // Close the mobile menu with Escape
    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    // Underline the link of the section currently on screen
    useEffect(() => {
        const sections = ["Home", ...LINKS]
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="navbar" aria-label="Main">
            <a className="navHeader" href="/#Home" onClick={() => setOpen(false)}>Sumith Rajpurohit</a>
            <button
                type="button"
                className="navbar-icon"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="navbar-menu"
                onClick={() => setOpen((o) => !o)}
            >
                <span aria-hidden="true">{open ? "\u2715" : "\u2630"}</span>
            </button>
            <div id="navbar-menu" className={`navbar-menu ${open ? "open" : ""}`}>
                <ul className="navbar-link">
                    {LINKS.map((id) => (
                        <li key={id}>
                            <a
                                className={`link ${active === id ? "current" : ""}`}
                                aria-current={active === id ? "true" : undefined}
                                href={`/#${id}`}
                                onClick={() => setOpen(false)}
                            >{id}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
