import { Row } from "react-bootstrap";
import { ArrowRight, EyeFill, PeopleFill } from "react-bootstrap-icons";
import { Card, Col, Container } from "react-bootstrap/esm";
import Satellite from "../../assets/icons8-satellite-16.png";

const Risorse = () => {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col className="col-12">
            <Card>
              <Card.Body className="p-0">
                <div className="px-3 pt-3 ">
                  <Card.Title>Risorse</Card.Title>
                </div>
                <Card.Subtitle className="mb-2 text-muted px-3">
                  <EyeFill className="me-1" />
                  Solo per te
                </Card.Subtitle>
                <Container className="d-flex flex-row px-3 ">
                  <Row className="">
                    <Col className="col-12">
                      <div className="d-flex">
                        <div>
                          <img
                            src={Satellite}
                            alt="satellite"
                            className="me-1"
                          />
                        </div>
                        <div>
                          <h6 className="mt-1">
                            Modalità creazione di contenuti{" "}
                            <span id="no">No</span>
                          </h6>
                          <p>
                            Fatti scoprire, metti in risalto i contenuti sul tuo
                            profilo e accedi agli strumenti di creazione
                          </p>
                        </div>
                      </div>{" "}
                    </Col>
                    <hr />
                    <Col className="col-12 ps-0">
                      <div className="d-flex px-3 ">
                        <div>
                          <PeopleFill className="me-1" />
                        </div>
                        <div>
                          <h6 className="mt-1">La mia rete</h6>
                          <p>
                            Salva e gestisci i tuoi collegamenti e interessi.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
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
export default Risorse;
