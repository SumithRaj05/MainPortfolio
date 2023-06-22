import "./About.css";
import Scroll from "./ScrollBox/Scroll";

export default function About() {
    return (
        <section className="AboutSection" id="About">
            <div className="BlueBall"></div>
            <h1 className="AboutHeader">About Me</h1>
            <Scroll />
        </section>
    )
}