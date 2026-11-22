import { useEffect, useRef } from "react";
import "./Experience.css";

const TIMELINE = [
    {
        when: "Jul 2025 – Present",
        role: "QA Engineer",
        org: "RUCKUS Networks",
        points: [
            "Work with AI agents and LLMs.",
            "Build productivity automation for everyday engineering work.",
            "Work on product features as a QA Engineer.",
        ],
    },
    {
        when: "Jun 2024 – May 2025",
        role: "Ruckus Engineer Intern",
        org: "CommScope · Bengaluru",
        points: [
            "Applied K-Means clustering to logs.",
            "Built RAG with a custom Ollama LLM.",
            "Compared fine-tuning with RAG.",
        ],
    },
    {
        when: "Graduated 2025",
        role: "B.Tech, Computing and Information Technology",
        org: "REVA University",
        points: [],
    },
];

const CERTIFICATIONS = [
    "Node.js, Express & MongoDB Bootcamp (Udemy)",
    "Full-Stack Development with Python and MongoDB",
    "Ollama: AI Agents & Chatbots (Udemy)",
    "From Traditional ML to LLMs (Udemy)",
];

export default function Experience() {
    const listRef = useRef(null);

    useEffect(() => {
        const items = listRef.current
            ? listRef.current.querySelectorAll(".TimelineItem, .CertList")
            : [];
        if (typeof IntersectionObserver === "undefined") {
            items.forEach((i) => i.classList.add("showTimeline"));
            return undefined;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("showTimeline");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        items.forEach((i) => observer.observe(i));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="ExperienceSection" id="Experience">
            <h2 className="ExperienceHeader SectionHeader">Experience</h2>
            <div className="Timeline" ref={listRef}>
                <ol className="TimelineList">
                    {TIMELINE.map((item) => (
                        <li className="TimelineItem" key={item.role}>
                            <span className="TimelineDot" aria-hidden="true"></span>
                            <div className="TimelineCard">
                                <p className="TimelineWhen">{item.when}</p>
                                <h3 className="TimelineRole">{item.role}</h3>
                                <p className="TimelineOrg">{item.org}</p>
                                {item.points.length > 0 &&
                                    <ul className="TimelinePoints">
                                        {item.points.map((p) => <li key={p}>{p}</li>)}
                                    </ul>
                                }
                            </div>
                        </li>
                    ))}
                </ol>
                <div className="CertList">
                    <h3 className="CertHeader">Certifications</h3>
                    <ul>
                        {CERTIFICATIONS.map((c) => <li key={c} className="CertChip">{c}</li>)}
                    </ul>
                </div>
            </div>
            <div className="BlueBall3" aria-hidden="true"></div>
        </section>
    )
}
