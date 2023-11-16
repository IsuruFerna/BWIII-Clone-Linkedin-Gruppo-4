import React, { useState } from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";

const DualColumnModal = () => {
   const [showLeftModal, setShowLeftModal] = useState(false);
   const [showRightModal, setShowRightModal] = useState(false);

   const handleLeftButtonClick = () => {
      setShowLeftModal(true);
   };

   const handleRightButtonClick = () => {
      setShowRightModal(true);
   };

   const handleClose = () => {
      setShowLeftModal(false);
      setShowRightModal(false);
   };

   return (
      <Container>
         <Row>
            <Col>
               <Button variant="primary" onClick={handleLeftButtonClick}>
                  Left Button
               </Button>
               <Modal show={showLeftModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>Left Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     This is the content of the left modal.
                  </Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                  </Modal.Footer>
               </Modal>
            </Col>
            <Col>
               <Button variant="success" onClick={handleRightButtonClick}>
                  Right Button
               </Button>
               <Modal show={showRightModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>Right Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     This is the content of the right modal.
                  </Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                  </Modal.Footer>
               </Modal>
            </Col>
         </Row>
      </Container>
   );
};

export default DualColumnModal;
