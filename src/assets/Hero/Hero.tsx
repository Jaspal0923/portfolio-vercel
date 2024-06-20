import gsap from "gsap";
import "./Hero.css";
import aboutPic from "../Images/me/IMG_0359.png";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import PDFPopup from "./PDFPopup";

const Hero = () => {
  const [isPDFPopupOpen, setIsPDFPopupOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-page p, .hero-div-right",
      {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.inOut",
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".hero-page",
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".hero-page h1, .hero-btn, .about-btn",
      { opacity: 0, y: 50, duration: 1 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".hero-page",
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const circles = document.querySelectorAll(".circle");
    gsap.fromTo(
      circles,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "elastic.out(1, 0.5)",
        stagger: {
          amount: 1,
          grid: "auto",
          from: "center",
        },
      }
    );
    gsap.to(circles, {
      x: () => Math.random() * 200 - 100,
      y: () => Math.random() * 200 - 100,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.5,
        from: "random",
      },
    });
    gsap.to(circles, {
      opacity: 0.8,
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        each: 0.3,
        from: "random",
      },
    });
  }, []);

  const openPDFPopup = () => {
    setIsPDFPopupOpen(true);
  };

  const closePDFPopup = () => {
    setIsPDFPopupOpen(false);
  };

  return (
    <section className="hero-page">
      <div className="hero-div hero-div-left">
        <h1>Jaspal Singh</h1>
        <p className="hero-title" style={{ fontWeight: "bolder" }}>
          Full-Stack Developer
        </p>
        <p className="hero-desc">
          Proficient in web development, databases, and mobile apps. Certified
          in Java, database management, and web design.
        </p>
        <button className="about-btn" onClick={openPDFPopup}>
          View My Resume
        </button>
      </div>
      <div className="hero-div hero-div-right">
        <div className="circle-container">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5"></div>
          <div className="circle circle6"></div>
        </div>
        <img src={aboutPic} alt="PICTURE" className="aboutPic" />
      </div>
      <PDFPopup isOpen={isPDFPopupOpen} closeModal={closePDFPopup} />
    </section>
  );
};

export default Hero;
