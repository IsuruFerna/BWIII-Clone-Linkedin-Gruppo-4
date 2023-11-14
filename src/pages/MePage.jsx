import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../Components/Me/Profile";
import PotrestiConoscere from "../Components/Me/PotrestiConoscere";

const MePage = () => {
   return (
      <Container>
         <Row className="justify-content-center gx-2">
            <Col className="col-6">
               <Profile />
            </Col>
            <Col className="col-2">
               <PotrestiConoscere />
            </Col>
         </Row>
      </Container>
   );
};

export default MePage;
