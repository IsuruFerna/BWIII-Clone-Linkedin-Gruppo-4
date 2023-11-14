import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../Components/Me/Profile";
import PotrestiConoscere from "../Components/Me/PotrestiConoscere";
import ConsigliatoPerTe from "../Components/Me/ConsigliatoPerTe";
import Analisi from "../Components/Me/Analisi";
import Risorse from "../Components/Me/Risorse";
import Attività from "../Components/Me/Attività";
import Informazioni from "../Components/Me/Informazioni";
import Competenze from "../Components/Me/competenze";
import Formazione from "../Components/Me/formazione";
import Interessi from "../Components/Me/Interessi";
import Experiences from "../Components/Me/Experience";
import PublicProfile from "../Components/Me/PublicProfile";

const MePage = () => {
  return (
    <Container>
      <Row className="justify-content-center gx-2">
        <Col className="col-6">
          <Profile />
          <ConsigliatoPerTe />
          <Analisi />

          <Risorse />
          <Attività />
          <Informazioni />
          <Experiences />
          <Competenze />
          <Formazione />
          <Interessi />
        </Col>
        <Col className="col-2">
          <PublicProfile />
          <PotrestiConoscere />
        </Col>
      </Row>
    </Container>
  );
};

export default MePage;
