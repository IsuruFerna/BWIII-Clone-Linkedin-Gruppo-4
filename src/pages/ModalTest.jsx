import { Col, Container, Row } from "react-bootstrap";
import AddExperience from "../Components/Me/AddExperience";
import EditExperience from "../Components/Me/EditExperience";
import { useDispatch, useSelector } from "react-redux";
import { addBtn, editBtn } from "../redux/actions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const ModalTest = () => {
   const dispatch = useDispatch();
   const reduxAddBtn = useSelector((state) => state.user.editBtnStatus);
   const reduxEdiBtn = useSelector((state) => state.user.editBtnStatus);

   const [showAddModal, setShowAddModal] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);

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

   console.log("btn status: ", reduxEdiBtn);
   return (
      <Container>
         <Row>
            <Col>
               <button onClick={handleAddExpClick}>A</button>
               <AddExperience
                  handleClose={handleClose}
                  showAddExperienceModal={showAddExperienceModal}
               />
            </Col>
            <Col>
               <button onClick={handleEditExpClick}>B</button>
               <EditExperience
                  handleClose={handleClose}
                  showEditExperienceModal={showEditExperienceModal}
               />
            </Col>
         </Row>
         <Row>
            <Col>
               {reduxAddBtn && (
                  <Button onClick={() => setShowAddModal(true)}>
                     Open Add Modal
                  </Button>
               )}
               {/* Render the Add Modal */}
               <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                  <Modal.Dialog>
                     <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                     </Modal.Header>

                     <Modal.Body>
                        <p>Modal body text goes here.</p>
                     </Modal.Body>

                     <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                     </Modal.Footer>
                  </Modal.Dialog>
               </Modal>
            </Col>
            <Col>
               {reduxEdiBtn && (
                  <Button onClick={() => setShowEditModal(true)}>
                     Open Edit Modal
                  </Button>
               )}
               {/* Render the Edit Modal */}
               <Modal
                  show={showEditModal}
                  onHide={() => setShowEditModal(false)}
               >
                  <Modal.Dialog>
                     <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                     </Modal.Header>

                     <Modal.Body>
                        <p>Modal body text goes here.</p>
                     </Modal.Body>

                     <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                     </Modal.Footer>
                  </Modal.Dialog>
               </Modal>
            </Col>
         </Row>
      </Container>
   );
};

export default ModalTest;
