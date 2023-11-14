import { Row, ListGroup } from "react-bootstrap";
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
                <Container className="d-flex flex-row px-3 ">
                  <ListGroup variant="flush border pe-0">
                    <ListGroup.Item>
                      <b>Mostra tutte le risorse (5)</b> <ArrowRight />
                    </ListGroup.Item>
                  </ListGroup>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Attività;
