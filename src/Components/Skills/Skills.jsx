import "./Skills.css";
import SkillBar from "./SkillBar/SkillBar";
import { useEffect, useRef } from "react";

const COLUMN_1 = [
    { skill: "HTML5", points: 4 },
    { skill: "CSS3", points: 4 },
    { skill: "JavaScript", points: 3 },
    { skill: "TypeScript", points: 3 },
    { skill: "React js & Vite", points: 3 },
    { skill: "Node js & Express", points: 3 },
    { skill: "MongoDB", points: 2 },
    { skill: "Git & GitHub Actions", points: 3 },
];

const COLUMN_2 = [
    { skill: "Python", points: 4 },
    { skill: "C++", points: 3 },
    { skill: "QA & Testing", points: 4 },
    { skill: "AI Agents & LLMs", points: 3 },
    { skill: "RAG (Ollama, LlamaIndex)", points: 3 },
    { skill: "ESP32 & IoT", points: 3 },
    { skill: "Linux", points: 3 },
    { skill: "AWS EC2", points: 2 },
];

export default function Skills() {

    const containerRef = useRef(null);

    useEffect(() => {
        const Container = containerRef.current;
        if (!Container) return undefined;
        if (typeof IntersectionObserver === "undefined") {
            Container.classList.add("showSkills");
            return undefined;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("showSkills")
                } else {
                    entry.target.classList.remove("showSkills")
                }
            })
        })

        observer.observe(Container);

        return () => observer.disconnect()
    }, [])

    return (
        <section className="SkillsSection" id="Skills">
            <h2 className="SkillsHeader SectionHeader">My Skills</h2>
            <div className="Containers" ref={containerRef}>
                <ul className="SkillsContainer1">
                    {COLUMN_1.map((s) => <SkillBar key={s.skill} Skill={s.skill} Points={s.points} />)}
                </ul>
                <ul className="SkillsContainer2">
                    {COLUMN_2.map((s) => <SkillBar key={s.skill} Skill={s.skill} Points={s.points} />)}
                </ul>
            </div>
        </section>
    )
}
