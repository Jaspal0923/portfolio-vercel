import "./Awards.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styled from "styled-components";
import javacert from "../../assets/Images/Certificates/it-specialist-java.png";
import htmlcert from "../../assets/Images/Certificates/it-specialist-html-and-css.png";
import databasecert from "../../assets/Images/Certificates/it-specialist-databases.png";

// Styled component for awards section
const AwardsSection = styled.section`
  padding: 50px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 980px) {
    padding: 20px 50px;
  }
`;

// Styled component for certifications grid
const CertsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

// Styled component for certificate image container
const CertImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Styled component for certificate image
const CertImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

// Styled component for certificate description
const CertDescription = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 10px 0;
`;

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
          start: "top 100%",
          toggleActions: "play false play false",
        },
      }
    );
  });

  return (
    <AwardsSection className="awards">
      <div className="awards-title">
        <h1>Certifications</h1>
      </div>
      <div className="awards-main-down">
        <CertsGrid className="certs-img">
          <div className="img">
            <CertImageContainer>
              <CertImage src={javacert} alt="Java Certification" />
            </CertImageContainer>
            <CertDescription>
              IT SPECIALIST <br />
              JAVA
            </CertDescription>
          </div>
          <div className="img">
            <CertImageContainer>
              <CertImage src={databasecert} alt="Database Certification" />
            </CertImageContainer>
            <CertDescription>
              IT SPECIALIST <br />
              DATABASES
            </CertDescription>
          </div>
          <div className="img">
            <CertImageContainer>
              <CertImage src={htmlcert} alt="HTML & CSS Certification" />
            </CertImageContainer>
            <CertDescription>
              IT SPECIALIST <br />
              HTML & CSS
            </CertDescription>
          </div>
        </CertsGrid>
      </div>
    </AwardsSection>
  );
};

export default Awards;
