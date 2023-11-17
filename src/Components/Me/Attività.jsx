import { Button, Row } from "react-bootstrap";
import { ArrowRight, Pencil } from "react-bootstrap-icons";
import { Card, Col, Container } from "react-bootstrap/esm";
import { Link } from "react-router-dom";

const Attività = () => {
  return (
    <>
      <Container fluid className="my-3">
        <Row>
          <Col className="col-12">
            <Card className="shadow">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>Attività</Card.Title>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <div>
                      <Button
                        size="sm"
                        className="post"
                        variant="rounded-pill me-3"
                      >
                        Crea un post
                      </Button>
                    </div>
                    <Link to="#" className="btn-circle">
                      <Pencil className="fs-3 text-secondary" />
                    </Link>
                  </div>
                </div>
                <Card.Subtitle
                  className="mb-2 personal-link d-inline-block "
                  id="followers"
                >
                  1 follower
                </Card.Subtitle>
                <div>
                  <h6 className="mb-0">Non hai ancora pubblicato nulla</h6>
                  <p>I post che condividi appariranno qui</p>
                </div>
                <Container className="d-flex flex-row px-3 "></Container>
              </Card.Body>
              <Card.Footer className="my-card-footer">
                <b className="grigetto fw-semibold">
                  Mostra tutte le attività (3)
                </b>{" "}
                <ArrowRight />
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Attività;
