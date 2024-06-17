import "./AboutMe.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PDFPopup from "./PDFPopup";
import aboutPic from "../Images/me/IMG_0359.png";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMeRef = useRef(null);
  const [isPDFPopupOpen, setIsPDFPopupOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".aboutLeft, .aboutRight",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".aboutMe",
          start: "top 80%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      ".about-btn",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-btn",
          start: "top 110%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  const openPDFPopup = () => {
    setIsPDFPopupOpen(true);
  };

  const closePDFPopup = () => {
    setIsPDFPopupOpen(false);
  };

  const pdfUrl = "../pdf/Jaspal-Singh-cv-2.jpg";

  return (
    <section className="aboutMe" ref={aboutMeRef}>
      <div className="aboutLeft">
        <h2>ABOUT ME</h2>
        <p>
          I am a dedicated programmer with a strong foundation in Java and
          skills in web development, databases, and mobile app creation
          <span style={{ fontWeight: "bold", color: "black", opacity: "0.75" }}>
            . I have earned certificates in Java, database management, and web
            design
          </span>
          , showcasing my passion for technology and readiness to tackle
          challenges and innovate.
        </p>
        <button className="about-btn" onClick={openPDFPopup}>
          View My Resume
        </button>
      </div>
      <div className="aboutRight">
        <img src={aboutPic} alt="PICTURE" className="aboutPic"></img>
      </div>

      <PDFPopup
        isOpen={isPDFPopupOpen}
        closeModal={closePDFPopup}
        pdfUrl={pdfUrl}
      />
    </section>
  );
};

export default AboutMe;
