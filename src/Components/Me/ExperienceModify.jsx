// import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChevronExpand, Pencil, PlusLg } from "react-bootstrap-icons";
import "./Experience.css";

import ModifySingleExperience from "./ModifySingleExperience";

const ExperienceModify = () => {
   return (
      <Container>
         <Row>
            <Col className="col-12">
               <Card className="shadow">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <Card.Title>Esperienza</Card.Title>
                        {/* <div className="d-flex">
                           <div className="btn-circle p-0 me-1">
                              <PlusLg className="fs-4" />
                           </div>
                           <div className="btn-circle">
                              <ChevronExpand className="fs-3" />
                           </div>
                        </div> */}
                     </div>
<ModifySingleExperience/>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   );
};

export default ExperienceModify;
