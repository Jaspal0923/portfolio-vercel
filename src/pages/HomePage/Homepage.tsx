import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

import Awards from "../Awards/Awards";
import Projcets from "../Projects/Projcets";
import Certificates from "../Certificates/Certificates";
const Homepage = () => {
  return (
    <div className="homePage">
      <Header />
      <Hero />
      <Awards />
      <Certificates />
      <Projcets />
      <Footer />
    </div>
  );
};

export default Homepage;
