import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPos(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="HomeSection" id="Home">
      <div 
        className="bgDesign"
        style={{ transform: `translateX(${pos * -2}px)` }}
      ></div>
      <div
        className="ParallaxLayer"
        style={{ transform: `translateY(${pos}px)` }}
      >
        <h1
          className="HomeHeader"
        >
          Welcome to <br /> Sumith Rajpurohit's <br />portfolio <br /><br /> &#8595;
        </h1>
      </div>
    </section>
  );
}