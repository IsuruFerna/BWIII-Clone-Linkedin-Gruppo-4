import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChevronExpand, PlusLg } from "react-bootstrap-icons";
import SingleExperienceModify from "./SingleExperienceModify";
import AddExperience from "./AddExperience";
import { useState } from "react";
import "./Experience.css";

const ExperienceModify = () => {
   // resetting modals
   const [showEditExperienceModal, setEditExperienceModal] = useState(false);
   const [showAddExperienceModal, setAddExperienceModal] = useState(false);
   const handleEditExpClick = () => {
      setEditExperienceModal(true);
   };
   const handleAddExpClick = () => {
      setAddExperienceModal(true);
   };

   const handleClose = () => {
      setEditExperienceModal(false);
      setAddExperienceModal(false);
   };

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
                                 onClick={handleAddExpClick}
                              />
                           </div>
                           <div className="btn-circle">
                              <ChevronExpand className="fs-3" />
                           </div>
                        </div>
                     </div>

                     <SingleExperienceModify
                        handleEditExpClick={handleEditExpClick}
                        handleClose={handleClose}
                        showEditExperienceModal={showEditExperienceModal}
                     />
                  </Card.Body>
               </Card>
            </Col>
         </Row>
         <AddExperience
            handleClose={handleClose}
            showAddExperienceModal={showAddExperienceModal}
         />
      </Container>
   );
};

export default ExperienceModify;
