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

function Profile() {
   const [userData, setUserData] = useState(null);
   //  const [showInfomations, setShowInfomations] = useState(false);

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
               "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZWRmOGM1NWU3ZTAwMThmODNjMGUiLCJpYXQiOjE2OTk4NjgxNTIsImV4cCI6MTcwMTA3Nzc1Mn0.CBfPd6xhFicg1S-nnU0aS7XGgCdv1KkMH68c4w4c2OY",
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
                  <>
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
                           src="https://placekitten.com/800"
                           alt="profile-cover"
                        />
                     </div>
                     <div className="color-2 profile-details rounded-bottom">
                        <div className="ps-3 pt-5">
                           <h5 className="mb-0">
                              {userData.name} {userData.surname}
                           </h5>
                           <p className="mb-0 text-secondary">
                              {userData.title}
                           </p>

                           <p className="mt-0 fs-7">
                              {userData.area} &#x2022;{" "}
                              <span
                                 onClick={handleShow}
                                 className="fw-bold link-small"
                              >
                                 Informazioni di contatto
                              </span>
                           </p>
                           <p className="fs-7 fw-bold mb-2 link-small">
                              30 collegamenti
                           </p>
                        </div>
                        <div className="ps-3">
                           <Button className="rounded-5 me-2" variant="primary">
                              Disponobile per
                           </Button>
                           <Button
                              className="rounded-5 me-2"
                              variant="outline-primary"
                           >
                              Aggiungi sezione del profilo
                           </Button>
                           <Button
                              className="rounded-5"
                              variant="outline-secondary"
                           >
                              Altro
                           </Button>
                        </div>
                        <div className="py-3 px-3">
                           {/* substitute carosel with models */}
                           {/* make full customized */}
                           <DetailsCard handleShow={handleShow} />
                        </div>
                     </div>
                  </>
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
                     Metti in risalto i servizi che offri, così tu e la tua
                     azienda potrete apparire nei risultati di ricerca.
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
