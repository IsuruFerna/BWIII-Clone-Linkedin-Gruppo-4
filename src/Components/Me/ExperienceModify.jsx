// import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChevronExpand, PlusLg } from "react-bootstrap-icons";
import "./Experience.css";

import ModifySingleExperience from "./ModifySingleExperience";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { editModel, mofidyExpModel } from "../../redux/actions";
import AddExperience from "./AddExperience";

const ExperienceModify = () => {
   const reduxEditExp = useSelector((state) => state).user.modelExperience;
   console.log("add exp in exp: ", reduxEditExp);

   const dispatch = useDispatch();

   return (
      <Container>
         <Row>
            <Col className="col-12">
               <Card className="shadow">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <Card.Title>Esperienza</Card.Title>
                        <div className="d-flex">
                           <div className="btn-circle p-0 me-1">
                              <PlusLg
                                 className="fs-4"
                                 onClick={() => {
                                    dispatch(mofidyExpModel());
                                 }}
                              />
                           </div>
                           <div className="btn-circle">
                              <ChevronExpand className="fs-3" />
                           </div>
                        </div>
                     </div>
                     <ModifySingleExperience />
                  </Card.Body>
               </Card>
            </Col>
         </Row>

         {reduxEditExp && <AddExperience />}
      </Container>
   );
};

export default ExperienceModify;
