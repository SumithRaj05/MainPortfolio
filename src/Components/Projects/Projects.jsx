import "./Projects.css";
import Card from "./Card/Card";
import React, { useCallback, useEffect, useRef, useState } from "react";
import projects from "./projectsData";

export default function Projects() {

    const containerRef = useRef(null);
    const [middleCard, setMiddleCard] = useState(0);
    const [visible, setVisible] = useState(false);

    // Find the card closest to the centre of the carousel
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;
        let timer = 0;

        const findMiddle = () => {
            const containerRect = container.getBoundingClientRect();
            const centre = containerRect.left + containerRect.width / 2;
            const cards = container.querySelectorAll(".card");
            let minDistance = Infinity;
            let middle = 0;
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const distance = Math.abs(centre - (rect.left + rect.width / 2));
                if (distance < minDistance) {
                    minDistance = distance;
                    middle = index;
                }
            });
            setMiddleCard(middle);
        };

        const handleScroll = () => {
            window.clearTimeout(timer);
            timer = window.setTimeout(findMiddle, 80);
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.clearTimeout(timer);
            container.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // Slide the carousel in when it comes into view
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;
        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return undefined;
        }
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        });
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    const centreCard = useCallback((index) => {
        const container = containerRef.current;
        if (!container) return;
        const cards = container.querySelectorAll(".card");
        const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
        if (!target) return;
        const containerRect = container.getBoundingClientRect();
        const rect = target.getBoundingClientRect();
        container.scrollBy({
            left: (rect.left + rect.width / 2) - (containerRect.left + containerRect.width / 2),
            behavior: "smooth",
        });
    }, []);

    const onKeyDown = (e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); centreCard(middleCard + 1); }
        if (e.key === "ArrowLeft") { e.preventDefault(); centreCard(middleCard - 1); }
    };

    const last = projects.length - 1;

    return (
        <section className="ProjectsSection" id="Projects">
            <h2 className="ProjectHeader SectionHeader">Projects</h2>
            <p className="ProjectCounter" aria-live="polite">
                {middleCard + 1} / {projects.length}
            </p>
            <div className="CarouselWrap">
            <button
                type="button"
                className="LeftNavigator"
                aria-label="Previous project"
                disabled={middleCard === 0}
                onClick={() => centreCard(middleCard - 1)}
            >
                <span className="leftArrow" aria-hidden="true">&#60;</span>
            </button>
            <div
                className={`horizontal-scroll-container ${visible ? "show" : ""}`}
                ref={containerRef}
                onKeyDown={onKeyDown}
                role="region"
                aria-label="Projects carousel, use the left and right arrow keys to browse"
                tabIndex={0}
            >
                <div className="spacer" aria-hidden="true"></div>
                {projects.map((project, index) => (
                    <Card
                        key={project.title}
                        project={project}
                        isActive={middleCard === index}
                        onSelect={() => centreCard(index)}
                    />
                ))}
                <div className="spacer" aria-hidden="true"></div>
            </div>
            <button
                type="button"
                className="RightNavigator"
                aria-label="Next project"
                disabled={middleCard === last}
                onClick={() => centreCard(middleCard + 1)}
            >
                <span className="rightArrow" aria-hidden="true">&#62;</span>
            </button>
            </div>
            <div className="ProjectDots" aria-hidden="true">
                {projects.map((p, index) => (
                    <span
                        key={p.title}
                        className={`ProjectDot ${index === middleCard ? "current" : ""}`}
                        onClick={() => centreCard(index)}
                    ></span>
                ))}
            </div>
            <div className="BlueBall2" aria-hidden="true"></div>
        </section >
    )
}
