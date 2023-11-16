import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Components/main/Navbar.css";
import "./pages/MePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MePage from "./pages/MePage";
import NavbarLinkedin from "./Components/main/NavbarLinkedin";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import JobsPage from "./Components/jobs/JobsPage";
import { useState } from "react";
// import AddExperience from "./Components/Me/AddExperience";

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
    </BrowserRouter>
  );
}

export default App;
