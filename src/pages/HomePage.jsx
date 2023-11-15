import { Col, Container, Row } from "react-bootstrap";
import SezioneCentraleHomePage from "../Components/Home/SezioneCentraleHomePage";
import SectionRight from "../Components/Home/SectionRight";
import SideBarLeftHome from "../Components/Home/SideBarLeftHome";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={4} xl={2}>
            <SideBarLeftHome />
          </Col>
          <Col sm={10} md={6} xl={5} className=" bg-transparent">
            <SezioneCentraleHomePage />
          </Col>
          <Col sm={10} xl={3} className="">
            <SectionRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
