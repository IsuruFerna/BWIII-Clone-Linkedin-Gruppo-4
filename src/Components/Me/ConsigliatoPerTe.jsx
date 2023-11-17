import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Card } from "react-bootstrap/esm";
import { EyeFill, XLg } from "react-bootstrap-icons";
import "./ConsigliatoPerTe.css";

const ConsigliatoPerTe = () => {
  return (
    <>
      <Container fluid className="my-3">
        <Row>
          <Col className="col-12">
            <Card className="shadow">
              <Card.Body>
                <div className="pt-2">
                  <Card.Title>Consigliato per te</Card.Title>
                </div>
                <Card.Subtitle className="mb-2 text-muted">
                  <EyeFill className="me-1" />
                  Solo per te
                </Card.Subtitle>
                <div id="advice">
                  <div className="d-flex justify-content-between ">
                    <h5>
                      Lavori ancora presso La Trattoria di Unto & Bisunto?
                    </h5>
                    <XLg id="close" />
                  </div>
                  <p>
                    Tenere aggiornato il tuo profilo ti aiuta a farti notare per
                    le opportunità giuste.
                  </p>
                  <Button variant="rounded-pill" id="advice-button" size="sm">
                    Conferma posizione lavorativa attuale
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ConsigliatoPerTe;
