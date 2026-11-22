import "./Card.css";
import GitHub from "./github.png";
import Demo from "./demo.png";

import nodejs from "../icons/nodejs.png";
import cpp from "../icons/cpp.png";
import mongo from "../icons/mongo.png";
import react from "../icons/react.webp";
import json from "../icons/json.png";

const ICONS = {
    "C++": { src: cpp },
    "JSON": { src: json },
    "React": { src: react },
    "MongoDB": { src: mongo, wide: true },
    "Node.js": { src: nodejs },
};

export default function Card({ project, isActive, onSelect }) {
    const { title, tools, description, links, badge } = project;

    return <article
        className={`card ${isActive ? "activeCard" : ""}`}
        onClick={isActive ? undefined : onSelect}
        onFocus={isActive ? undefined : onSelect}
        aria-label={title}
    >
        {badge && <span className="CardBadge">{badge}</span>}
        <h3 className="CardHeader">{title}</h3>
        <ul className="ProjectTools" aria-label="Built with">
            {tools.map((tool) => {
                const icon = ICONS[tool];
                return <li key={tool}>
                    {icon
                        ? <img
                            src={icon.src}
                            alt={tool}
                            title={tool}
                            className={`ProjectIcons ${icon.wide ? "wide" : ""}`}
                            width={icon.wide ? 80 : 45}
                            height={45}
                            loading="lazy"
                        />
                        : <span className="ToolChip">{tool}</span>}
                </li>;
            })}
        </ul>
        <p className="CardDesc">{description}</p>
        <div className="CardLinks">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${link.label} (opens in a new tab)`}
                    title={link.label}
                >
                    <img
                        src={link.kind === "demo" ? Demo : GitHub}
                        className={link.kind === "demo" ? "DemoLogo" : "GitLogo"}
                        alt=""
                        width={35}
                        height={35}
                    />
                </a>
            ))}
        </div>
    </article>
}
