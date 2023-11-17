import { Nav, NavDropdown } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const TuNav = () => {
  return (
    <div className="text-secondary d-flex align-items-center flex-column mx-2 pointer position-relative">
      <PersonCircle className=" fs-5 text-secondary position-absolute top-0 start-50 translate-middle-x" />
      <Nav className="ms-2 mt-2">
        <NavDropdown
          title="Tu"
          align={{ lg: "end" }}
          id="basic-nav-dropdown"
          className="mt-1 text-secondary"
        >
          <Link to="/me" className="nav-link p-0 m-0">
            <h6 className="ms-3 mt-2 ">Account</h6>
          </Link>

          <NavDropdown.Item href="#action/3.2">
            Impostazioni e privacy
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Guida</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Lingua</NavDropdown.Item>
          <hr></hr>
          <h6 className="ms-3">Gestisci</h6>
          <NavDropdown.Item href="#action/3.1">
            Post per attività
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Account per la pubblicazione di offerte
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Esci</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
};
export default TuNav;
