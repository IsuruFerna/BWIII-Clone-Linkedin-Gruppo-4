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
import FooterComp from "../Components/main/FooterComp";

const MePage = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center gx-2">
          <Col className="col-11 col-lg-8 col-xl-6 mt-2">
            <Profile />
            <ConsigliatoPerTe />
            <Analisi />
            <Risorse />
            <Attività />
            <Informazioni />
            <Experiences />
            <Formazione />
            <Competenze />
            <Interessi />
          </Col>
          <Col className="col-11 col-lg-8 col-xl-2 mt-2">
            <PublicProfile />
            <PotrestiConoscere />
          </Col>
        </Row>
      </Container>
      <FooterComp />
    </>
  );
};

export default MePage;
