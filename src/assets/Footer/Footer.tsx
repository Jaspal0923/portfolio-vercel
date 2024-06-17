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
              <a href="https://www.facebook.com/jmagaso.singh/">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/s_jaspal27?igsh=YWNtbm53Z25rMWVw">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jaspal-singh-60010a283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                Linkedin
              </a>
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
