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
import ExperiencePage from "./pages/ExperiencePage";
import MenuOffCanvas from "./Components/main/MenuOffCanvas";
import NotFoundPage from "./pages/NotFound";
import Login from "./Components/login/loginPage";

function App() {
   const [searchQuery, setSearchQuery] = useState("");
   const [show, setShow] = useState(false);

   const handleSearch = (query) => {
      setSearchQuery(query);
   };

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <BrowserRouter>
         <NavbarLinkedin onSearch={handleSearch} handleShow={handleShow} />
         {/* <AddExperience /> */}
         <Routes>
            <Route element={<MePage />} path="/" />
            <Route element={<ProfilePage />} path="/profile/:id" />
            <Route element={<HomePage />} path="/home" />
            <Route
               element={<JobsPage searchQuery={searchQuery} />}
               path="/jobs"
            />
            <Route element={<ExperiencePage />} path="/experience" />
            <Route element={<NotFoundPage />} path="/*" />
            <Route element={<Login />} path="/loginPage" />
         </Routes>

         <MenuOffCanvas
            handleClose={handleClose}
            handleShow={handleShow}
            show={show}
         />
      </BrowserRouter>
   );
}

export default App;
