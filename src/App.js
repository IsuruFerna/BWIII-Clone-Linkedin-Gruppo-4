import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Components/main/Navbar.css";
import "./pages/MePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MePage from "./pages/MePage";
// import Footer from "./Components/main/footer";
import NavbarLinkedin from "./Components/main/NavbarLinkedin";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
// import AddExperience from "./Components/Me/AddExperience";

function App() {
  return (
    <BrowserRouter>
      <NavbarLinkedin />
      {/* <AddExperience /> */}
      <Routes>
        <Route element={<MePage />} path="/" />
        <Route element={<ProfilePage />} path="/profile/:id" />
        <Route element={<HomePage />} path="/home" />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
