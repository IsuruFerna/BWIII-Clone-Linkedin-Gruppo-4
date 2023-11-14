import { Button, Row } from "react-bootstrap";
import { ArrowRight, Pencil } from "react-bootstrap-icons";
import { Card, Col, Container } from "react-bootstrap/esm";

const Attività = () => {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col className="col-12">
            <Card className="shadow">
              <Card.Body className="p-0">
                <div className="d-flex align-items-center">
                  <div className="px-3 pt-3 ">
                    <Card.Title>Attività</Card.Title>
                  </div>
                  <div className="align-self-center px-3">1 follower</div>
                  <div className="pencil">
                    <Pencil></Pencil>
                  </div>
                </div>
                <Card.Subtitle className="mb-2" id="followers">
                  1 follower
                </Card.Subtitle>
                <div>
                  <h6 className="mb-0">Non hai ancora pubblicato nulla</h6>
                  <p>I post che condividi appariranno qui</p>
                </div>
                <Container className="d-flex flex-row px-3 "></Container>
              </Card.Body>
              <Card.Footer>
                <b>Mostra tutte le risorse (5)</b> <ArrowRight />
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Attività;
