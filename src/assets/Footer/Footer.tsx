import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="divUp">
        <div className="divLeft">
          <div className="logo">
            JASPAL <span style={{ color: "red" }}>|</span>
          </div>
          Created with React & GSAP
        </div>
        <div className="divRight">
          <p style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
            Follow Me On
          </p>
          <ol>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
          </ol>
        </div>
      </div>

      <div className="divDown">
        <hr />
        <p>© 2024 Jaspal Singh. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
