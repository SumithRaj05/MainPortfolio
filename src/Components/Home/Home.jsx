import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        // Only animate while the hero is (roughly) on screen
        setPos(Math.min(window.pageYOffset, window.innerHeight * 1.2));
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="HomeSection" id="Home" aria-label="Welcome">
      <div
        className="bgDesign"
        style={{ transform: `translateX(${pos * -2}px)` }}
      ></div>
      <div
        className="ParallaxLayer"
        role="img"
        aria-label="Cartoon of Sumith waving from his desk"
        style={{ transform: `translateY(${pos}px)` }}
      >
        <div className="HomeHeader">
          <h1 className="HomeTitle">
            Welcome to <br /> Sumith Rajpurohit's <br />portfolio
          </h1>
          <p className="HomeTagline">QA Engineer <span aria-hidden="true">&middot;</span> AI agents &amp; LLMs <span aria-hidden="true">&middot;</span> Builder</p>
          <a className="HomeArrow" href="/#About" aria-label="Scroll to About me">&#8595;</a>
        </div>
      </div>
    </section>
  );
}
