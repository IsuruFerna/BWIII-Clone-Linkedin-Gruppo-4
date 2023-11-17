import { Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { Card, Col, Container } from "react-bootstrap/esm";
import "./ConsigliatoPerTe.css";
import { Link } from "react-router-dom";

const Informazioni = () => {
  return (
    <>
      <Container fluid className="mb-3">
        <Row>
          <Col className="col-12">
            <Card className="shadow">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title>Informazioni</Card.Title>
                  <Link to="#" className="btn-circle">
                    <Pencil className="fs-3 text-secondary" />
                  </Link>
                </div>

                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur autem, possimus iure odio quae nihil dignissimos
                  ullam! Deserunt earum unde, esse quam cupiditate odio quos
                  sapiente, odit quas modi rem!
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Informazioni;
