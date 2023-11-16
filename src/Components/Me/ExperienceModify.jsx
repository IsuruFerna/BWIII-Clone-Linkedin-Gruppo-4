// import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChevronExpand, Pencil, PlusLg } from "react-bootstrap-icons";
import "./Experience.css";
import SingleExperience from "./SingleExperience";
import SingleExperienceModify from "./SingleExperienceModify";
import { useDispatch, useSelector } from "react-redux";
import AddExperience from "./AddExperience";
import { addBtn } from "../../redux/actions";

const ExperienceModify = () => {
   const reduxBtnAdd = useSelector((state) => state.user.addBtnStatus);
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
                                    dispatch(addBtn());
                                 }}
                              />
                           </div>
                           <div className="btn-circle">
                              <ChevronExpand className="fs-3" />
                           </div>
                        </div>
                     </div>

                     {/* <SingleExperience /> */}
                     <SingleExperienceModify />
                  </Card.Body>
               </Card>
            </Col>
         </Row>
         {reduxBtnAdd && <AddExperience />}
      </Container>
   );
};

export default ExperienceModify;
