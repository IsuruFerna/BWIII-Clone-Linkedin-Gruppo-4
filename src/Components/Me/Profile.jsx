import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Profile.css";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ContactInfo from "./ContactInfo";
import DetailsCard from "./DetailsCard";
import { Dropdown, DropdownToggle } from "react-bootstrap";
import {
  Arrow90degRight,
  Download,
  InfoSquareFill,
} from "react-bootstrap-icons";
import "./Profilestyle.css";
import AggiungiEsperienza from "./AggiungiEsperienza";

function Profile() {
  const [userData, setUserData] = useState(null);
  //  const [showInfomations, setShowInfomations] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  const showMoreInfo = () => {
  //     setShowInfomations(!showInfomations);
  //  };

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/me`, {
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWQ0ZmM1NWU3ZTAwMThmODNjMGEiLCJpYXQiOjE2OTk4Njc5ODMsImV4cCI6MTcwMTA3NzU4M30.VgwY5-_3HqrYK9L5mB8w_n1YsAqrCrIk6q-aQXvo0wU",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data retreaving error!");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data retreaved fine!", data);
        setUserData(data);
      })
      .catch((err) => console.log("ERROR: ", err));
  }, []);

  return (
    <Container>
      <Row>
        <Col className="position-relative mx-2 px-0">
          {!userData && <LoadingSpinner />}
          {userData && (
            <div className="border rounded shadow">
              {show && (
                <ContactInfo
                  show={show}
                  handleClose={handleClose}
                  mail={userData.email}
                  user={"placeholder"}
                  name={userData.name}
                  surname={userData.surname}
                />
              )}
              <Image
                className="profile-pic position-absolute start-0 top-0 mt-5 rounded-circle border border-white border-5 ms-3"
                src={userData.image}
                alt="profile picture"
              />
              <div className="profile-cover rounded-top">
                <Image
                  className="profile-cover rounded-top"
                  src="https://placedog.net/900/200"
                  alt="profile-cover"
                  fluid
                />
              </div>
              <div className="profile-details rounded-bottom">
                <div className="ps-3 pt-5">
                  <h5 className="mb-0">
                    {userData.name} {userData.surname}
                  </h5>
                  <p className="mb-0 text-secondary">{userData.title}</p>

                  <p className="mt-0 fs-7">
                    {userData.area} &#x2022;{" "}
                    <span onClick={handleShow} className="fw-bold link-small">
                      Informazioni di contatto
                    </span>
                  </p>
                  <p className="fs-7 fw-bold mb-2 link-small">
                    30 collegamenti
                  </p>
                </div>
                <div className="d-flex ps-3">
                  <Button className="rounded-5 me-2" variant="primary">
                    Disponobile per
                  </Button>
                  <Button
                    className="rounded-5 me-2"
                    variant="outline-primary"
                    onClick={() => setModalShow(true)}
                  >
                    Aggiungi sezione del profilo
                  </Button>
                  <AggiungiEsperienza
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  ></AggiungiEsperienza>
                  <div id="backcolor">
                    <Dropdown className="d-flex justify-content-center">
                      <DropdownToggle
                        variant="outline-secondary"
                        id="dropdown-basic"
                        className="rounded-5 dropdown-menu-altro"
                      >
                        Altro
                      </DropdownToggle>
                      <Dropdown.Menu>
                        <div id="menucolor" className="d-flex flex-column ">
                          <Dropdown.Item href="#/action-1" className="Mydrop">
                            <Arrow90degRight className="me-2" />
                            Invia il profilo in un messaggio
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2" className="Mydrop2">
                            <Download className="me-2" />
                            Salva come PDF
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" className="Mydrop">
                            <InfoSquareFill className="me-2" />
                            Informazioni su questo profilo
                          </Dropdown.Item>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="py-3 px-3">
                  {/* substitute carosel with models */}
                  {/* make full customized */}
                  <DetailsCard handleShow={handleShow} />
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

// per rimuovere
<>
  <Carousel>
    <Carousel.Item>
      <div className="d-flex">
        <Card className="w-100 flex-grow-1">
          <Card.Body>
            <Card.Title>Disponobile a lovorare</Card.Title>

            <Card.Text>Ruoli di Designer grafico, Web desig...</Card.Text>
            <Card.Link href="#">Mostra dettagli</Card.Link>
          </Card.Body>
        </Card>
        <Card className="w-100 flex-grow-1">
          <Card.Body>
            <Card.Title>Fai sapere che stai facendo selezione</Card.Title>

            <Card.Text>e attrai candidati qualificati.</Card.Text>
            <Card.Link href="#">Inizia</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="d-flex">
        <Card className="w-100 flex-grow-1">
          <Card.Body>
            <Card.Title>
              Metti in risalto i servizi che offri, così tu e la tua azienda
              potrete apparire nei risultati di ricerca.
            </Card.Title>

            {/* <Card.Text>
               Ruoli di Designer grafico, Web
               desig...
            </Card.Text> */}
            <Card.Link href="#">Inizia</Card.Link>
          </Card.Body>
        </Card>
        <Card className="w-100 flex-grow-1">
          <Card.Body>
            <Card.Title>Fai sapere che stai facendo selezione</Card.Title>

            <Card.Text>e attrai candidati qualificati.</Card.Text>
            <Card.Link href="#">Inizia</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Carousel.Item>
  </Carousel>
</>;
