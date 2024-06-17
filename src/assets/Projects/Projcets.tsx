import "./Projects.css";
import { Carousel } from "react-responsive-carousel";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import proj1 from "../Images/projects/Proj1.png";
import proj2 from "../Images/projects/Proj2.png";
import proj3 from "../Images/projects/Proj3.png";

const Projects = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".projects",
      { opacity: 0, duration: 1, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects",
          start: "top 60%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  return (
    <section className="projects">
      <div className="proj-title">
        <h2>Projects</h2>
      </div>
      <div className="proj-main">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={1000}
        >
          <div id="proj-com">
            <img src={proj1} id="proj-top" />
            <div id="proj-down">
              <h3>JJCV's System</h3>
              <br />
              <p id="proj-desc">
                A POS, featuring comprehensive inventory tracking, efficient
                stock in-stock out processes, and admin and employee management
                tools.
              </p>
              <br />
              <div id="side-by-side">
                <h4>No. of Members:</h4>
                <p id="proj-desc">4</p>
              </div>
              <br />
              <h4>-Role-</h4>
              <p id="proj-desc">
                My role in this project is to ensure smooth code execution,
                guide teammates through code processes and layout, contribute to
                both design and coding tasks, debug issues, minimize bugs, and
                diligently scan and fix any arising errors.
              </p>
              <br />
              <h4>-Tools-</h4>
              <p id="proj-desc">Java, SqLite</p>
            </div>
          </div>
          <div id="proj-com">
            <img src={proj2} id="proj-top" />
            <div id="proj-down">
              <h3>LMS</h3>
              <br />
              <p id="proj-desc">
                A comprehensive lending management system enabling seamless
                tracking of customer payments, balances, loaned amounts, and
                renewal options, coupled with robust CRUD functionalities for
                user and payment management.
              </p>
              <br />
              <div id="side-by-side">
                <h4>No. of Members:</h4>
                <p id="proj-desc">2</p>
              </div>
              <br />
              <h4>-Role-</h4>
              <p id="proj-desc">
                My role involved guiding and supporting the frontend to ensure
                accurate functionality during coding, while also designing and
                implementing the backend architecture of the system
              </p>
              <br />
              <h4>-Tools-</h4>
              <p id="proj-desc">Php, HTML, CSS, Bootstrap, MySql</p>
            </div>
          </div>
          <div id="proj-com">
            <img src={proj3} id="proj-top" />
            <div id="proj-down">
              <h3>TechType</h3>
              <br />
              <p id="proj-desc">
                An efficient Job Order System that tracks all customer orders,
                facilitating seamless management with CRUD capabilities for user
                and payment administration.
              </p>
              <br />
              <div id="side-by-side">
                <h4>No. of Members:</h4>
                <p id="proj-desc">4</p>
              </div>
              <br />
              <h4>-Role-</h4>
              <p id="proj-desc">
                My role involved guiding and assisting the frontend team in
                implementing correct functionality through coding, while also
                designing and developing the backend of the system using the
                MERN stack.
              </p>
              <br />
              <h4>-Tools-</h4>
              <p id="proj-desc">
                MongoDB, Reactjs, Nodejs, Expressjs, TailWindCSS, GSAP{" "}
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
