import React, { useEffect, useRef, useState } from "react";
import "./Scroll.css";

export default function Scroll() {
    const wrapRef = useRef(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap) return undefined;

        // No unrolling animation for people who prefer reduced motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches
            || typeof IntersectionObserver === "undefined") {
            setOpen(true);
            return undefined;
        }

        // Unroll when a good part of the scroll is on screen,
        // roll it back up only once it has fully left the screen.
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.intersectionRatio >= 0.25) setOpen(true);
            else if (!entry.isIntersecting) setOpen(false);
        }, { threshold: [0, 0.25] });

        observer.observe(wrap);
        return () => observer.disconnect();
    }, []);

    return <div ref={wrapRef} className={`ScrollWrap ${isOpen ? "open" : ""}`}>
        <div className="ScrollContainer" aria-hidden="true">
            <div className="ScrollLeft Edge"></div>
            <div className="ScrollRight Edge"></div>
        </div>
        <p className="ScrollContent">
            Hi, I'm <strong>Sumith Rajpurohit</strong>, a <strong>QA Engineer at RUCKUS Networks</strong> and
            a <strong>B.Tech</strong> graduate (2025) in Computing and Information Technology
            from <strong>REVA University</strong>. At work I build with <strong>AI agents and LLMs</strong>,
            create <strong>productivity automation</strong>, and work on product features as a QA Engineer.
            Outside work I love building things end to end: full-stack apps with <strong>React, Node.js and
            MongoDB</strong>, local <strong>RAG</strong> pipelines with Ollama, <strong>ESP32 IoT</strong> gadgets
            and a custom <strong>Linux</strong> desktop. I'm a <strong>quick learner</strong> who enjoys
            turning ideas into working software.
        </p>
    </div>
}
