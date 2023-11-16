import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import {
  // Check2All,
  Grid3x3GapFill,
  HouseDoorFill,
  PlusLg,
  XLg,
} from "react-bootstrap-icons";
import { PeopleFill } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { BriefcaseFill } from "react-bootstrap-icons";
import { ChatDotsFill } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavbarLinkedin({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  // const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

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
          <Form onSubmit={handleSearch}>
            <Form.Group
              className="mb-1 ms-3 col-12"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="search"
                placeholder="Cerca"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <div className="text-secondary d-flex flex-column pointer">
          <HouseDoorFill className="fs-5 ms-2" />
          <Link to="/home" className="nav-link">
            <h6 className="text-center me-3">Home</h6>
          </Link>
        </div>
        <div className="text-secondary d-flex flex-column ms-3 pointer">
          <PeopleFill className="fs-5 ms-1" /> <h6 className="me-4">Rete</h6>
        </div>
        <Link to="/jobs" className="nav-link">
          <div className="text-secondary d-flex flex-column pointer">
            <BriefcaseFill className="fs-5 ms-3" />
            <h6 className="me-3">Lavoro</h6>
          </div>
        </Link>
        <div className="text-secondary d-flex flex-column pointer">
          <ChatDotsFill className="fs-5 ms-5" />
          <h6 className="me-4 ms-1">Messaggistica</h6>
        </div>
        <div className="text-secondary d-flex flex-column pointer">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="40"
                    height="40"
                    focusable="false"
                    className="me-3"
                  >
                    <defs>
                      <linearGradient
                        id="app-learning-@1-a"
                        x1="7.18"
                        y1="6.98"
                        x2="13.8"
                        y2="20.22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#33aada"></stop>
                        <stop offset="1" stop-color="#0091ca"></stop>
                      </linearGradient>
                      <linearGradient
                        id="app-learning-@1-b"
                        x1="12.96"
                        y1="-17.55"
                        x2="27.9"
                        y2="24.33"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#665ed0"></stop>
                        <stop offset="1" stop-color="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z"
                      fill="url(#app-learning-@1-a)"
                    ></path>
                    <path
                      d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                      fill="url(#app-learning-@1-b)"
                    ></path>
                    <path
                      fill="#33aada"
                      d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"
                    ></path>
                    <path
                      fill="#006097"
                      d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"
                    ></path>
                    <path
                      d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                      fill="#fff"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="40"
                    height="40"
                    focusable="false"
                    className="me-3"
                  >
                    <defs>
                      <linearGradient
                        id="app-talent-insights-medium-a"
                        x1="34.05"
                        y1="44.47"
                        x2="13.67"
                        y2="19.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#665ed0"></stop>
                        <stop offset="1" stop-color="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                      fill="#caedff"
                    ></path>
                    <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                    <path
                      d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                      fill="url(#app-talent-insights-medium-a)"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="40"
                    height="40"
                    focusable="false"
                    className="me-3"
                  >
                    <defs>
                      <linearGradient
                        id="app-jobs-posting-@1-a"
                        x1="-6.68"
                        y1="-1"
                        x2="25.05"
                        y2="26.36"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#665ed0"></stop>
                        <stop offset="1" stop-color="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="none"
                      stroke="#caedff"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                    ></path>
                    <rect
                      x="8"
                      y="14"
                      width="24"
                      height="16"
                      rx="1"
                      ry="1"
                      fill="url(#app-jobs-posting-@1-a)"
                    ></rect>
                    <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                    <path fill="#33aada" d="M15 23h10v3H15z"></path>
                    <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="40"
                    height="40"
                    focusable="false"
                  >
                    <defs>
                      <linearGradient
                        id="app-ads-@1-a"
                        x1="34.78"
                        y1="3.84"
                        x2="14.66"
                        y2="25.84"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#665ed0"></stop>
                        <stop offset="1" stop-color="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <g fill="url(#app-ads-@1-a)">
                      <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                      <circle cx="20" cy="20" r="4"></circle>
                    </g>
                    <circle
                      cx="20"
                      cy="20"
                      r="2"
                      transform="rotate(-45 20.002 19.995)"
                      fill="#33aada"
                    ></circle>
                    <path
                      fill="#33aada"
                      d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"
                    ></path>
                    <path
                      fill="#33aada"
                      d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                    ></path>
                  </svg>
                  <br></br>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="40"
                    height="40"
                    focusable="false"
                    className="mt-4"
                  >
                    <defs>
                      <linearGradient
                        id="app-sales-navigator-@1-a"
                        x1="40.53"
                        y1="-53.4"
                        x2="20.23"
                        y2="19.17"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#665ed0"></stop>
                        <stop offset="1" stop-color="#0073b1"></stop>
                      </linearGradient>
                    </defs>
                    <circle
                      cx="20"
                      cy="20"
                      r="14"
                      fill="url(#app-sales-navigator-@1-a)"
                    ></circle>
                    <path
                      d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                      fill="#98d8f4"
                    ></path>
                    <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                    <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="40"
                    height="40"
                    focusable="false"
                    className="mt-4 ms-3"
                  >
                    <defs>
                      <linearGradient
                        id="app-groups-@1-b"
                        x1="1.84"
                        y1="-24.59"
                        x2="20.66"
                        y2="25.05"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#665ed0"></stop>
                        <stop offset="1" stop-color="#0073b1"></stop>
                      </linearGradient>
                      <clipPath id="app-groups-@1-a">
                        <path
                          d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                          fill="none"
                        ></path>
                      </clipPath>
                    </defs>
                    <path
                      d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                      fill="#caedff"
                    ></path>
                    <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                    <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                    <g clip-path="url(#app-groups-@1-a)">
                      <path
                        d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                        fill="url(#app-groups-@1-b)"
                      ></path>
                      <path
                        fill="#0091ca"
                        d="M26 21h6v14h-6zM8 21h6v14H8z"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    data-supported-dps="40x40"
                    width="40"
                    height="40"
                    focusable="false"
                    className="mt-4 ms-3"
                  >
                    <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                    <path
                      d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                      fill="#0091ca"
                    ></path>
                    <path
                      d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                      fill="#33aada"
                      opacity=".8"
                    ></path>
                    <path
                      fill="#0073b1"
                      d="M19 26.34l4-4V18h-6v6.34l2 2z"
                    ></path>
                  </svg>
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
