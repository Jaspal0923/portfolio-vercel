import Homepage from "./assets/HomePage/Homepage";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Jaspal Singh -  Portfolio";
  });
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
