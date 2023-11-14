import { Container, Row, Col } from "react-bootstrap";

import { Pencil } from "react-bootstrap-icons";

const PublicProfile = () => {
  return (
    <Container fluid>
      <Row>
        <Col className=" border-rounded">
          <div className="mb-4 ">
            <div className="d-flex justify-content-between fw-bold">
              <div>
                <p>Lingua del profilo</p>
              </div>
              <div>
                <Pencil className="" />
              </div>
            </div>

            <div>
              <p className="text-start text-secondary ">Italiano</p>
            </div>
            <div>
              <p className="fw-bold text-start">Public profile & Url</p>
            </div>
            <div>
              <Pencil />
            </div>
            <div>
              <p className="text-secondary ">
                www.linkedin.com/in/angela-prestano-603240243
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PublicProfile;
