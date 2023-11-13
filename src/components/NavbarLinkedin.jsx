import { Container, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { HouseDoorFill } from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { ChatDotsFill } from "react-bootstrap-icons";
import { Grid3x3GapFill } from "react-bootstrap-icons";

function NavbarLinkedin() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          width="30px"
          className="mb-1"
          alt="logo"
        ></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form>
            <Form.Group
              className="mb-1 ms-2 col-12"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="search" placeholder="Cerca"></Form.Control>
            </Form.Group>
          </Form>
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <div className="text-secondary d-flex flex-column">
          <HouseDoorFill className="fs-5 ms-2" />
          <h6 className="text-center me-3">Home</h6>
        </div>
        <div className="text-secondary d-flex flex-column ms-3">
          <PeopleFill className="fs-5 ms-1" /> <h6 className="me-4">Rete</h6>
        </div>
        <div className="text-secondary d-flex flex-column">
          <BriefcaseFill className="fs-5 ms-3" />
          <h6 className="me-3">Lavoro</h6>
        </div>
        <div className="text-secondary d-flex flex-column">
          <ChatDotsFill className="fs-5 ms-5" />
          <h6 className="me-4 ms-1">Messaggistica</h6>
        </div>
        <div className="text-secondary d-flex flex-column">
          <BellFill className="fs-5 ms-4" /> <h6 className="me-4">Notifiche</h6>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center ">
          <Grid3x3GapFill className="text-secondary me-4" />
          <Nav className="ms-1 ">
            <NavDropdown
              title="Tu"
              id="basic-nav-dropdown"
              className=" text-secondary me-4"
            >
              <h6 className="ms-3 mt-2">Account</h6>
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
        <Nav className="me-auto mt-1">
          <NavDropdown
            title="Per le aziende"
            id="basic-nav-dropdown"
            className="mb-2 text-secondary"
          >
            <h6 className="ms-3 mt-2">Account</h6>
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
      </Container>
    </Navbar>
  );
}

export default NavbarLinkedin;
