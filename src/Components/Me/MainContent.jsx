const { Container, Row, Col } = require("react-bootstrap");

const MainContent = () => {
  return (
    <Container>
      <Row className="justify-content-center gx-2">
        <Col className="col-6">profilo</Col>
        <Col className="col-2">lingua profilo /potrebbe interessarti ecc.</Col>
      </Row>
    </Container>
  );
};
export default MainContent;
