import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SinglePerson = ({ person }) => {
  return (
    <>
      <Container fluid className="d-flex mb-4">
        <Row>
          <Col className="col-3">
            <img src={person.image} alt="profileImage" className="img-class" />
          </Col>
          <Col className="d-flex flex-column">
            <div className="smaller fw-bold d-flex flex-column text-start">
              <div>
                {person.name} {person.surname}
              </div>
              <div>
                <span className="text-secondary extrasmall fw-normal">
                  {person.username}
                </span>
              </div>
            </div>

            <div className="extrasmall my-1">
              {/* <div>{person.title}</div> */}
              <Link to={`/profile/${person._id}`} className="nav-link">
                <div className="btn btn-white border border-secondary rounded-4 smaller py-1 px-2">
                  Visita profilo
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SinglePerson;
