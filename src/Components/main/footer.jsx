import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav, NavDropdown, Dropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="container-fluid">
      <Row>
        <Col className="col-2"></Col>
        <Col className="col-8">
          <Row>
            <Col
              sm={5}
              md={4}
              lg={3}
              className=" d-flex flex-column mt-sm-4 mt-md-0"
            >
              <span className="span">
                {" "}
                Informazioni Linee guida della community
              </span>

              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Privacy e condizioni"
                  menuVariant="white"
                  className="span"
                >
                  <NavDropdown.Item href="#action/3.1" className="span">
                    Informativa sulla privacy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="span">
                    Contratto di licenza
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="span">
                    Termini e condizioni delle pagine
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4" className="span">
                    Informativa sui cookie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5" className="span">
                    Informativa sui copyright
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <span className="span">Sales</span>
              <span className="span">Solutions</span>
              <span className="span">centro sicurezza</span>
            </Col>
            <Col
              sm={4}
              md={2}
              lg={3}
              className=" d-flex flex-column mt-sm-4 mt-md-0"
            >
              <span className="span"> Accessibilità</span>
              <span className="span">Carriera </span>
              <span className="span">Opzioni per gli annunci pubblicitari</span>
              <span className="span"> Mobile</span>
            </Col>
            <Col
              sm={4}
              md={2}
              lg={3}
              className=" d-flex flex-column mt-sm-4 mt-md-0"
            >
              <span className="span">Talent</span>
              <span className="span">Solutions</span>
              <span className="span"> Soluzioni di marketing </span>
              <span className="span"> Pubblicità</span>
              <span className="span"> Piccole imprese</span>
            </Col>
            <Col
              sm={12}
              md={4}
              lg={3}
              className=" d-flex flex-column mt-sm-4 mt-md-0"
            >
              <Row>
                <Col sm={1}>
                  <i className="bi bi-question-circle-fill text-secondary"></i>
                </Col>
                <Col>
                  <h6 className="text-secondary">Domande?</h6>
                  <p className="span">Visita il nostro centro assistenza.</p>
                </Col>
              </Row>

              <Row>
                <Col sm={1}>
                  <i className="bi bi-gear-fill text-secondary"></i>
                </Col>
                <Col>
                  <h6 className="text-secondary">
                    Gestisci il tuo account e la tua privacy
                  </h6>
                  <p className="span">Vai alle impostazioni</p>
                </Col>
              </Row>
              <Row>
                <Col sm={1}>
                  <i className="bi bi-shield-shaded text-secondary"></i>
                </Col>
                <Col>
                  <h6 className="text-secondary">
                    Trasparenza sui contenuti consigliati
                  </h6>
                  <p className="span">
                    Scopri di più sui contenuti consigliati.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="col-md-2 col-sm-6">
          <p className="span">Seleziona lingua</p>
          <Dropdown data-bs-theme="white">
            <Dropdown.Toggle className="span bg-white text-secondary border border-black col-md-14 col-lg-13 d-flex justify-content-start align-items-center">
              Italiano (Italiano)
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">français</Dropdown.Item>
              <Dropdown.Item href="#/action-2">English</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Deutsch</Dropdown.Item>

              <Dropdown.Item href="#/action-4">Sardo</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Español</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col className="col-1"></Col>
        <Col className="col-9">
          <p className="span">LinkedIn Corporation © 2023</p>
        </Col>
        <Col className="col-2"></Col>
      </Row>
    </Container>
  );
};

export default Footer;
