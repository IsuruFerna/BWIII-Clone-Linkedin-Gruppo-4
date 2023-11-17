import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Components/main/Navbar.css";
import "./pages/MePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MePage from "./pages/MePage";
<<<<<<< HEAD

=======
>>>>>>> marco's-branch
import NavbarLinkedin from "./Components/main/NavbarLinkedin";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import JobsPage from "./Components/jobs/JobsPage";
import { useState } from "react";
<<<<<<< HEAD
import Footer from "./Components/main/footer";
// import AddExperience from "./Components/Me/AddExperience";
=======
>>>>>>> marco's-branch

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <BrowserRouter>
      <NavbarLinkedin onSearch={handleSearch} />
      {/* <AddExperience /> */}
      <Routes>
        <Route element={<MePage />} path="/" />
        <Route element={<ProfilePage />} path="/profile/:id" />
        <Route element={<HomePage />} path="/home" />
        <Route element={<JobsPage searchQuery={searchQuery} />} path="/jobs" />
      </Routes>
<<<<<<< HEAD
    < Footer/> 
=======
>>>>>>> marco's-branch
    </BrowserRouter>
  );
}

export default App;
