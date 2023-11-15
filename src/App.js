import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Components/main/Navbar.css";
import "./pages/MePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MePage from "./pages/MePage";
import Footer from "./Components/main/footer";
import NavbarLinkedin from "./Components/main/NavbarLinkedin";
import ProfilePage from "./pages/ProfilePage";
import ExperiencePage from "./pages/ExperiencePage";
// import AddExperience from "./Components/Me/AddExperience";

function App() {
   return (
      <BrowserRouter>
         <NavbarLinkedin />
         {/* <AddExperience /> */}
         <Routes>
            <Route element={<MePage />} path="/" />
            <Route element={<ProfilePage />} path="/profile/:id" />
            <Route element={<ExperiencePage />} path="/experience" />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;

// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZGI4NWM1NWU3ZTAwMThmODNiZWMiLCJpYXQiOjE2OTk4NjM0MjksImV4cCI6MTcwMTA3MzAyOX0.AeGut2RX1oz62ERdBCMBJM1Piacgla1-NhTGgCVSkJI
