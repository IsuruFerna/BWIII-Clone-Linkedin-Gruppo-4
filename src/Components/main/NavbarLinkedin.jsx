import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import {
  BrowserSafari,
  // Check2All,
  FileBarGraphFill,
  Grid3x3GapFill,
  HouseDoorFill,
  Info,
  MenuButtonWide,
  PlayBtnFill,
  PlusLg,
  SlashCircleFill,
  XLg,
} from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { ChatDotsFill } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function NavbarLinkedin() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0 z-3 ">
      <Container id="nav">
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
              className="mb-1 ms-3 col-12"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="search" placeholder="Cerca"></Form.Control>
            </Form.Group>
          </Form>
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <div className="text-secondary d-flex flex-column">
          <HouseDoorFill className="fs-5 ms-2" />
          <Link to="/home" className="nav-link">
            <h6 className="text-center me-3">Home</h6>
          </Link>
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
          <BellFill className="fs-5 ms-4" /> <h6 className="me-3">Notifiche</h6>
        </div>

        <div className="me-2 d-flex flex-column justify-content-center align-items-center position-relative">
          <PersonCircle className=" fs-5 text-secondary position-absolute top-0 start-50 translate-middle-x" />
          <Nav className="ms-2 mt-2">
            <NavDropdown
              title="Tu"
              align={{ lg: "end" }}
              id="basic-nav-dropdown"
              className="mt-1 text-secondary"
            >
              <Link to="/" className="nav-link p-0 m-0">
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
        <div className="me-2 mt-1 d-flex flex-column justify-content-center align-items-center position-relative">
          <Grid3x3GapFill className=" fs-5 text-secondary position-absolute top-0 start-50 translate-middle-x" />
          <Nav className="me-auto mt-2">
            <NavDropdown
              align={{ lg: "end" }}
              title="Per le aziende"
              id="basic-nav-dropdown"
              className="mb-1 mt-1 text-secondary"
            >
              <div className="d-flex justify-content-between mt-1 mx-3 mt-1">
                <h5>Per le aziende</h5>
                <div
                  className="d-flex justify-content-center align-items-center "
                  id="divclose"
                >
                  <XLg id="close" />
                </div>
              </div>
              <h6 className="mt-5 ms-3 text-dark">
                Scopri altri prodotti Linkedin
              </h6>

              <NavDropdown.Item href="#action/3.1">
                <div className="fs-2 mt-1 text-primary text-start ms-2 ">
                  <PlayBtnFill className="ms-2" />
                  <FileBarGraphFill className="ms-4" />
                  <MenuButtonWide className="ms-4 " />
                  <SlashCircleFill className="ms-4" />
                  <br></br>
                  <BrowserSafari className="ms-2 mt-5" />
                  <PeopleFill className="ms-4 mt-5" />
                  <Info className="ms-3 fs-2 mt-5" />
                </div>

                <div className="colors">
                  <h6 className="mt-5">Scopri altro per il business</h6>
                  <span className="fw-bold">Assumi su Linkedin</span>
                  <p className="text-secondary">Trova, attrai e assumi</p>
                </div>
                <div className="colors">
                  <h6 className="fw-bold">Vendi con Linkedin</h6>
                  <span className="text-secondary">
                    Costruisci relazioni con i buyer
                  </span>
                </div>
                <div className="colors">
                  <h6 className="fw-bold mt-2">Offerta di lavoro gratuita</h6>
                  <span className="text-secondary">
                    Trova candidati di qualità
                  </span>
                </div>
                <div className="colors">
                  <h6 className="fw-bold mt-2">Fai pubblicità su LinkedIn</h6>
                  <span className="text-secondary">
                    Acquisisci clienti e fai crescere la tua azienda
                  </span>
                </div>
                <div className="colors">
                  <h6 className="fw-bold mt-2">Impara con LinkedIn</h6>
                  <span className="text-secondary">
                    Corsi per formare i tuoi dipendenti
                  </span>
                </div>
                <div className="colors">
                  <h6 className="fw-bold mt-2">Centro amministrazione</h6>
                  <span className="text-secondary">
                    Gestisci i dettagli di fatturazione e account
                  </span>
                </div>
                <p className="mt-5 fw-900">
                  Crea una pagina aziendale
                  <PlusLg className="mb-1 ms-2 fs-5" />
                </p>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarLinkedin;
