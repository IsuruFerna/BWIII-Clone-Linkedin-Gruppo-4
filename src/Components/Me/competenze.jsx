import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Competenze = () => {
  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col className="col-12">
            <Card className="shadow">
              <Card.Body>
                <div className="d-flex justify-content-between  align-items-center ">
                  <div>
                    <Card.Title className="m-0">Competenze</Card.Title>
                  </div>
                  <div className="d-flex align-items-center ">
                    <div>
                      <Button
                        size="sm"
                        className="post button"
                        variant="rounded-pill me-3 fix-hover"
                      >
                        Quiz valutazione competenze
                      </Button>
                    </div>
                    <Link to="#" className="btn-circle">
                      <Pencil className="fs-3 text-secondary" />
                    </Link>
                    <div className="btn-circle p-0 mx-1">
                      <PlusLg className="fs-4" />
                    </div>
                  </div>
                </div>
                <Col className="col col-12 d-flex align-items-center mt-1">
                  <div>
                    <Card.Img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/100px-JavaScript-logo.png?20120221235433"
                      className="iconaCompetenze mt-2 me-3"
                    />
                  </div>
                  <div>
                    {" "}
                    <p className="m-0">
                      <b className="javascript">Javascript</b>
                    </p>
                    <p className="m-0">
                      Full-Stack Developer presso Epicode Italia
                    </p>
                  </div>
                </Col>
                <hr />
                <Col className="col col-12 d-flex align-items-center my-3">
                  <div>
                    <Card.Img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png"
                      className="iconaCompetenze mt-2 me-3"
                    />
                  </div>
                  <div>
                    {" "}
                    <p className="m-0">
                      <b className="javascript">React</b>
                    </p>
                    <p className="m-0">
                      Full-Stack Developer presso Epicode Italia
                    </p>
                  </div>
                </Col>
              </Card.Body>
              <Card.Footer className="my-card-footer">
                <b className="grigetto fw-semibold">
                  Mostra tutte le competenze (19)
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

export default Competenze;
