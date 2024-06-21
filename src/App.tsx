import Homepage from "./pages/HomePage/Homepage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  useEffect(() => {
    document.title = "Jaspal Singh -  Portfolio";
    const link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "icon";
    link.href = "../public/1.jpg";

    document.head.appendChild(link);
  }, []);
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
