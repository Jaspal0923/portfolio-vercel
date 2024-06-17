import Homepage from "./assets/HomePage/Homepage";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Jaspal's Folio";
  });
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
