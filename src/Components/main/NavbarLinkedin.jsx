import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomeNav from "../NavBarComponents/HomeNav";
import ReteNav from "../NavBarComponents/ReteNav";
import Jobs from "../NavBarComponents/Jobs";
import MessaggisticaNav from "../NavBarComponents/MessaggisticaNav";
import NotificheNav from "../NavBarComponents/NotificheNav";
import TuNav from "../NavBarComponents/TuNav";
import PerLeAziendeNav from "../NavBarComponents/PerLeAziendeNav";

function NavbarLinkedin({ onSearch }) {
   // const [searchQuery, setSearchQuery] = useState("");
   const [searchTerm, setSearchTerm] = useState("");
   // const history = useHistory();
   const handleSearch = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
   };

   return (
      <Navbar
         expand="lg"
         className="bg-body-tertiary position-sticky top-0 z-3 "
      >
         <Container id="nav">
            <div className="d-flex align-items-center">
               <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                  width="30px"
                  alt="logo"
               />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
               id="basic-navbar-nav"
               className="d-flex justify-content-between"
            >
               <Form onSubmit={handleSearch}>
                  <Form.Group className="me-3">
                     <Form.Control
                        type="search"
                        placeholder="Cerca..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     ></Form.Control>
                  </Form.Group>
               </Form>
               <div className="d-flex align-items-center">
                  <Link to="/" className="text-decoration-none">
                     <HomeNav />
                  </Link>

                  <ReteNav />
                  <Link to="/jobs" className="nav-link">
                     <Jobs />
                  </Link>
                  <MessaggisticaNav />
                  <NotificheNav />
                  <TuNav />
                  <PerLeAziendeNav />
               </div>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default NavbarLinkedin;
