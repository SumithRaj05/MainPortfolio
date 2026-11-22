import "./About.css";
import Scroll from "./ScrollBox/Scroll";

export default function About() {
    return (
        <section className="AboutSection" id="About">
            <h2 className="AboutHeader SectionHeader">About Me</h2>
            <Scroll />
            <div className="BlueBall" aria-hidden="true"></div>
        </section>
    )
}
