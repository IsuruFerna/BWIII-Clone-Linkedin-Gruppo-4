import { Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { Card, Col, Container } from "react-bootstrap/esm";
import "./ConsigliatoPerTe.css";

const Informazioni = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-12">
            <Card className="shadow">
              <Card.Body>
                <div className="d-flex justify-content-between ">
                  <Card.Title>Informazioni</Card.Title>
                  <div className="pencil">
                    <Pencil></Pencil>
                  </div>
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
