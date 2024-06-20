import { gsap } from "gsap";
import cert1 from "../Images/Certificates/mentor.png";
import cert2 from "../Images/Certificates/pycert.jpg";
import { Carousel } from "react-responsive-carousel";
import "./Certificates.css";
import { useGSAP } from "@gsap/react";

const Certificates = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".certificates",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.3,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: ".certificates",
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  return (
    <section className="certificates">
      <div className="cert-title">
        <h1>Certificates</h1>
      </div>
      <div className="cert-cert">
        <Carousel
          className="carousel"
          showThumbs={true}
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={1000}
        >
          <div>
            <img src={cert1} alt="Certificate 1" />
          </div>
          <div>
            <img src={cert2} alt="Certificate 2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Certificates;
