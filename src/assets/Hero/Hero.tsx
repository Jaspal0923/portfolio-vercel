import gsap from "gsap";
import "./Hero.css";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-page p", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
    });
    tl.from(
      ".hero-page h1, .hero-btn",
      { opacity: 0, y: 50, duration: 1 },
      "-=0.5"
    );
  });

  return (
    <section className="hero-page">
      <div className="hero-div">
        <p>Hi I'm</p>
        <h1>Jaspal Singh</h1>
        <p>
          a{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>
            full-stack developer
          </span>{" "}
          dedicated to creating innovative software solutions.
        </p>
        <Link to="aboutMe" smooth={true} duration={500} offset={-100}>
          <button className="hero-btn">About me</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
