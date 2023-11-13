import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import NavbarLinkedin from "./components/NavbarLinkedin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarLinkedin />
      </BrowserRouter>
    </div>
  );
}

export default App;
