import { Col, Container, Row } from "react-bootstrap";

const SinglePerson = ({ person }) => {
  return (
    <>
      <Container fluid className="d-flex mb-4">
        <Row>
          <Col className="col-3">
            <img
              src={person.image}
              alt="profileImage"
              className="w-100 rounded-circle"
            />
          </Col>
          <Col>
            <div className="smaller">
              {person.name} {person.surname} /{" "}
              <span className="text-secondary extrasmall">
                {person.username}
              </span>
            </div>

            <div className="extrasmall">
              <div>{person.title}</div>
              <div>{person._id}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SinglePerson;
