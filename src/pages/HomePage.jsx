import { Col, Container, Row } from "react-bootstrap";
import SezioneCentraleHomePage from "../Components/Home/SezioneCentraleHomePage";
import SectionRight from "../Components/Home/SectionRight";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="col-2 bg-info">
            Sezione a sinistra Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iste mollitia quis harum, rem id nihil amet.
            Labore ab laboriosam optio iusto voluptatum quasi porro, blanditiis
            dolorem amet eaque. Repellendus, quo!
          </Col>
          <Col className="col-5 bg-transparent">
            <SezioneCentraleHomePage />
          </Col>
          <Col className="col-3">
            <SectionRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
