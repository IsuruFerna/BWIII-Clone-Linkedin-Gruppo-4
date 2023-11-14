import { Button, Card, Col, Container, Row } from "react-bootstrap";

import PotrestiConoscere from "../Me/PotrestiConoscere";
import { useState } from "react";

const User = ({ user, add }) => {
  const [innerText, setInnerText] = useState(add);
  const changeInnerText = () => {
    setInnerText(!innerText);
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-6">
          <Card className="shadow">
            <div className="position-relative">
              <Card.Img
                variant="top"
                src="https://placedog.net/1000/200"
                className="w-100"
              />
              <div>
                <img
                  src={user.image}
                  className="rounded-circle"
                  id="userImage"
                  alt="user"
                />
              </div>
            </div>
            <Card.Body className="pt-5">
              <Card.Title className="fw-bolder">
                {user.name} {user.surname} /
                <span className="text-secondary smaller fw-normal">
                  {user.username}
                </span>
              </Card.Title>
              <Card.Text className="smaller">
                <div className="fw-bold">{user.title}</div>
                <div>{user.email}</div>
              </Card.Text>

              <Card.Text>
                <Button
                  className={
                    innerText === false
                      ? "btn-primary rounded-4"
                      : "btn-light rounded-4 border-primary text-primary"
                  }
                  onClick={() => {
                    changeInnerText();
                  }}
                >
                  {innerText === false
                    ? "Invia richiesta di amicizia"
                    : "Richiesta Inviata"}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-2">
          <PotrestiConoscere />
        </Col>
      </Row>
    </Container>
  );
};
export default User;
