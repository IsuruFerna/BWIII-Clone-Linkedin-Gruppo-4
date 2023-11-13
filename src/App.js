import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import NavbarLinkedin from "./components/NavbarLinkedin";
import "./components/Navbar.css";

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
