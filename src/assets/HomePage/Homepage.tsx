import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import Awards from "../Awards/Awards";
import Projcets from "../Projects/Projcets";
const Homepage = () => {
  return (
    <div className="homePage">
      <Header />
      <Hero />
      <AboutMe />
      <Awards />
      <Projcets />
      <Footer />
    </div>
  );
};

export default Homepage;
