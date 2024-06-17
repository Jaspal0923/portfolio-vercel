import Homepage from "./assets/HomePage/Homepage";
import { useEffect } from "react";

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
