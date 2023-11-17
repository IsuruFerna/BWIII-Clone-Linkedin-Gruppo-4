import { Col, Container, Row } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import { ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Formazione = () => {
  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col className="col-12">
            <Card className="shadow">
              <Card.Body>
                <div className="d-flex justify-content-between  align-items-center ">
                  <div>
                    <Card.Title className="m-0">Formazione</Card.Title>
                  </div>
                  <div className="d-flex align-items-center ">
                    <Link to="#" className="btn-circle">
                      <Pencil className="fs-3 text-secondary" />
                    </Link>
                    <div className="btn-circle p-0 mx-1">
                      <PlusLg className="fs-4" />
                    </div>
                  </div>
                </div>
                <Col className="col col-12 d-flex align-items-center mt-1">
                  <div className="d-flex">
                    <div>
                      <Card.Img
                        src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_200_200/0/1646830188798/epicodeschool_logo?e=2147483647&v=beta&t=m3mUDKlmOFz0voMP6jSuJwJu6ta1flO8zPkbuUpXeLQ"
                        className="iconaCompetenze mt-2 me-3"
                      />
                    </div>
                    <div>
                      {" "}
                      <p className="m-0">
                        <b className="javascript">Epicode Italia</b>
                      </p>
                      <p className="m-0">Corso Full-Stack Developer</p>
                      <p className="mt-2 text-body-secondary">
                        <b className="fw-semibold  ">Competenze</b>: HTML5,
                        CSS3, Bootstrap e altri.
                      </p>
                    </div>
                  </div>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Formazione;
