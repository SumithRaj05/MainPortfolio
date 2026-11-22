import React from "react";
import "./SkillBar.css";

export default function SkillBar(props) {

    return (
        <li className="SkillItem">
            <h3 className="skillFont">{props.Skill}</h3>
            <div className="SkillLine" role="img" aria-label={`${props.Points} out of 5`}>
                {[1, 2, 3, 4, 5].map((n) => (
                    <div
                        key={n}
                        className={`point${n} ${props.Points >= n ? "active" : ""}`}
                    ></div>
                ))}
            </div>
        </li>
    )
}
