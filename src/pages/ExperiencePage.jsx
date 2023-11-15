import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PotrestiConoscere from "../Components/Me/PotrestiConoscere";
import PublicProfile from "../Components/Me/PublicProfile";
import ExperienceModify from "../Components/Me/ExperienceModify";

const ExperiencePage = () => {
   return (
      <Container>
         <Row className="justify-content-center gx-2">
            <Col className="col-6">
               <ExperienceModify />
            </Col>
            <Col className="col-2">
               <PublicProfile />
               <PotrestiConoscere />
            </Col>
         </Row>
      </Container>
   );
};

export default ExperiencePage;
