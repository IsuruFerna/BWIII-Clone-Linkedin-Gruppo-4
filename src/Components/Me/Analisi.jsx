import { Row } from "react-bootstrap";
import { EyeFill, PeopleFill, Search } from "react-bootstrap-icons";
import { Container, Card, Col } from "react-bootstrap/esm";

const Analisi = () => {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col className="col-12">
            <Card>
              <Card.Body>
                <div>
                  <Card.Title>Analisi</Card.Title>
                </div>
                <Card.Subtitle className="mb-2 text-muted">
                  <EyeFill className="me-1" />
                  Solo per te
                </Card.Subtitle>
                <Container className="d-flex flex-row">
                  <Row>
                    <Col className="col-6 ps-0">
                      <div className="d-flex">
                        <div>
                          <PeopleFill className="me-1" />
                        </div>
                        <div>
                          <h6 className="mt-1">
                            3 visualizzazioni del profilo
                          </h6>
                          <p>Scopri chi ha visitato il tuo profilo.</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="col-6 pe-0">
                      <div className="d-flex">
                        <div>
                          <Search className="me-1" />
                        </div>
                        <div>
                          <h6 className="mt-1">
                            2 comparse nel motore di ricerca
                          </h6>
                          <p>
                            Vedi quante volte compari nei risultati di ricerca.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Analisi;
