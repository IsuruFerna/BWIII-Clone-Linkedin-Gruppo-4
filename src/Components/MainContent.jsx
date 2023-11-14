import Analisi from "./Me/Analisi";
import ConsigliatoPerTe from "./Me/ConsigliatoPerTe";
import Informazioni from "./Me/Informazioni";
import Risorse from "./Me/Risorse";
import Attività from "./Me/Attività";

const { Container, Row, Col } = require("react-bootstrap");

const MainContent = () => {
  return (
    <Container>
      <Row className="justify-content-center gx-2">
        <Col className="col-6">
          <ConsigliatoPerTe></ConsigliatoPerTe>
          <Analisi></Analisi>
          <Risorse></Risorse>
          <Informazioni></Informazioni>
          <Attività></Attività>
        </Col>
        <Col className="col-2">lingua profilo /potrebbe interessarti ecc.</Col>
      </Row>
    </Container>
  );
};
export default MainContent;
