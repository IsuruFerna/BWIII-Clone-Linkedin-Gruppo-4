import { Col, Container, Row } from "react-bootstrap";
import SezioneCentraleHomePage from "../Components/Home/SezioneCentraleHomePage";
import SectionRight from "../Components/Home/SectionRight";
import SideBarLeftHome from "../Components/home/sideBarLeft";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={2} className="col-2 bg-info">
            <SideBarLeftHome />
          </Col>
          <Col sm={12} md={5} className="col-5 bg-transparent">
            <SezioneCentraleHomePage />
          </Col>
          <Col sm={12} md={3} className="col-3">
            <SectionRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
