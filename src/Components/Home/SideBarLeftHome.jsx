import { Button, Card, ListGroup, Accordion } from "react-bootstrap";
import "./sideBarLeft.css";
import { useEffect, useState } from "react";

const SideBarLeftHome = () => {
  const [userData, setUserData] = useState({});
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
    <>
      <Card className="cardSideBar shadow p-0">
        <div className="">
          <Card.Img
            variant="top"
            src="https://placedog.net/1000/400"
            className="w-100"
          />
          <div className="d-flex justify-content-center">
            <img
              src={userData.image}
              className="rounded-circle col-4"
              id="userImage2"
              alt="user"
            />
          </div>
        </div>

        <Card.Body>
          <Card.Title className="title">
            Ti diamo il benvenuto {userData.name} !
          </Card.Title>
          <span className="ancora text-primary">Aggiungi una foto</span>

          <div className="d-none d-md-block">
            <Card.Text className="d-flex justify-content-md-between mt-3 ">
              <div className="mt-2">
                <p className="text-secondary">Collegamenti</p>
                <p className="fw-bold">Espandi la tua rete</p>
              </div>
              <div className="mt-2">
                <i className="bi bi-person-plus-fill "></i>
              </div>
            </Card.Text>
            <Card.Text>
              <p className="text-secondary mt-2">
                Accedi a strumenti e informazioni in esclusiva
              </p>
              <span className="ancorDue text-black">
                <i className="bi bi-square-fill me-1"></i>
                Prova Premium gratis
              </span>
            </Card.Text>
            <Card.Text>
              <p>
                <i className="bi bi-bookmark-fill"></i> I miei elementi{" "}
              </p>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>

      <div className="d-none d-md-block shadow">
        <ListGroup className="my-3">
          <ListGroup.Item className="border-0">
            <span className="ancoraTre">Gruppi</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between border-0">
            <span className="ancoraTre mt-2">Eventi</span>
            <Button
              variant="outline-secondary"
              className=" border-0 rounded-circle"
            >
              <i className="bi bi-plus-lg"></i>
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="ancoraTre">Hashtag seguiti</span>
          </ListGroup.Item>
          <ListGroup.Item className=" d-flex justify-content-center">
            <Button variant="outline-secondary" className="border-0 ">
              Scopri di più
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="d-md-none d-block">
        <Accordion className="mb-3" defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0" className=" mt-2 ">
            <Accordion.Header className="d-flex justify-content-center">
              Vedi altro
            </Accordion.Header>
            <Accordion.Body className="bg-white">
              <Card.Text className="d-flex justify-content-md-between mt-3 ">
                <div className="mt-2">
                  <p className="text-secondary">Collegamenti</p>
                  <p className="fw-bold">Espandi la tua rete</p>
                </div>
                <div className="mt-2">
                  <i className="bi bi-person-plus-fill "></i>
                </div>
              </Card.Text>
              <Card.Text>
                <p className="text-secondary mt-2">
                  Accedi a strumenti e informazioni in esclusiva
                </p>
                <span className="ancorDue text-black">
                  <i className="bi bi-square-fill me-1"></i>
                  Prova Premium gratis
                </span>
              </Card.Text>
              <Card.Text>
                <p>
                  <i className="bi bi-bookmark-fill"></i> I miei elementi{" "}
                </p>
              </Card.Text>

              <ListGroup className="my-3">
                <ListGroup.Item className="border-0">
                  <span className="ancoraTre">Gruppi</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between border-0">
                  <span className="ancoraTre mt-2">Eventi</span>
                  <Button
                    variant="outline-secondary"
                    className=" border-0 rounded-circle"
                  >
                    <i className="bi bi-plus-lg"></i>
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item className="border-start-0 border-end-0">
                  <span className="ancoraTre">Hashtag seguiti</span>
                </ListGroup.Item>
                <ListGroup.Item className=" d-flex justify-content-center">
                  <Button variant="outline-secondary" className="border-0 ">
                    Scopri di più
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default SideBarLeftHome;
