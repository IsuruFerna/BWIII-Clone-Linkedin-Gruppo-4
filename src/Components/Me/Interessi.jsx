import { Col, Row } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";

const Interessi = () => {
  return (
    <Card className="my-5 shadow">
      <Card.Header className="container-fluid bg-white mt-1">
        <Row className="d-flex justify-content-between">
          <Col sm={7} md={6} lg={9}>
            <h5>Interessi</h5>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Button
              variant="outline-secondary"
              className="butt border-0 rounded-circle"
            >
              <i class="bi bi-plus-lg"></i>
            </Button>
            <Button
              variant="outline-secondary"
              className="butt border-0 rounded-circle"
            >
              <i class="bi bi-pencil"></i>
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm={3} md={2}>
            <Card.Img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Seal_of_the_University_of_Bologna.svg/800px-Seal_of_the_University_of_Bologna.svg.png"
              className="icona align-items-center rounded-circle"
            />
          </Col>
          <Col>
            <Card.Title className="btn text-black fs-6 ps-0 pb-0">
              Università di Bologna
            </Card.Title>
            <Card.Text className="text-secondary">2016-2020</Card.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3} md={2}>
            <Card.Img
              src="https://yt3.googleusercontent.com/ytc/APkrFKb0Fj6nOx3V-GEgA2vMSffiEbAaSMAAHmSieceK0g=s900-c-k-c0x00ffffff-no-rj"
              className="icona align-items-center rounded-circle"
            />
          </Col>
          <Col>
            <Card.Title className="btn text-black fs-6 ps-0 pb-0">
              Università degli studi di Palermo
            </Card.Title>
            <Card.Text className="text-secondary">2018-2023</Card.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3} md={2}>
            <Card.Img
              src="https://www.epromsystem.com/wp-content/uploads/2021/09/Clienti-INTESASP-epromsystem.png"
              className="icona align-items-center rounded-circle mt-1"
            />
          </Col>
          <Col>
            <Card.Title className="btn text-black fs-6 ps-0 pb-0">
              Intesa SanPaolo
            </Card.Title>
            <Card.Text className="text-secondary">Dal 2023</Card.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3} md={2}>
            <Card.Img
              src="data:image/jpeg;base64,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"
              className="icona align-items-center rounded-circle"
            />
          </Col>
          <Col>
            <Card.Title className="btn text-black fs-6 ps-0 pb-0">
              Epicode
            </Card.Title>
            <Card.Text className="text-secondary">2023-2024</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Interessi;
