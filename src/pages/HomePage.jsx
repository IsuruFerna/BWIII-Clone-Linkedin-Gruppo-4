import { Col, Container, Row } from "react-bootstrap";
import SideBarLeftHome from "../Components/home/sideBarLeft";

const HomePage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={2} className="col-md-3 col-12 bg-info">

   <SideBarLeftHome />

        </Col>
        <Col sm={12} md={5} className="col-5 bg-warning">
          Sezione centrale Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aperiam explicabo saepe qui, ratione voluptas pariatur
          consequuntur necessitatibus ut consectetur in, veritatis aut nesciunt
          placeat, corrupti quos ullam cupiditate. Cum, magni?
        </Col>
        <Col sm={12} md={3} className="col-3 bg-danger">
          Sezione a destra Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Accusamus autem soluta eius corrupti blanditiis facilis tempora
          facere, reiciendis quo recusandae, perferendis accusantium est
          distinctio quasi repellendus delectus quae, neque in!
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
