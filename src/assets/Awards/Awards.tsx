import "./Awards.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Awards.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import javacert from "../Images/Certificates/it-specialist-java.png";
import htmlcert from "../Images/Certificates/it-specialist-html-and-css.png";
import databasecert from "../Images/Certificates/it-specialist-databases.png";

import javac from "../Images/Certificates/Java.jpg";
import htmlc from "../Images/Certificates/Html.jpg";
import datac from "../Images/Certificates/Database.jpg";
import mentor from "../Images/Certificates/mentor.png";

const Awards = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".awards",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".awards",
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
  return (
    <section className="awards">
      <div className="awards-right">
        <h2>Awards and Certifications</h2>
        <div className="awards-img">
          <img src={javacert} alt="java" />
          <img src={htmlcert} alt="htmlcss" />
          <img src={databasecert} alt="database" />
        </div>
      </div>
      <div className="awards-left">
        <div className="certs-img">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={5000}
            transitionTime={1000}
          >
            <div>
              <img src={mentor} alt="java" />
            </div>
            <div>
              <img src={javac} alt="htmlcss" />
            </div>
            <div>
              <img src={datac} alt="database" />
            </div>
            <div>
              <img src={htmlc} alt="database" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Awards;
