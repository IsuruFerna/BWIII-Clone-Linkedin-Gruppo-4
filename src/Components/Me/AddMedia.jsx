import { useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Images, Link45deg, PlusLg } from "react-bootstrap-icons";

function CustomDropdown({ handleAddLinkClick, handleClose }) {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState(null);

   const handleDropdownToggle = (nextIsOpen, event, { source }) => {
      if (source === "select") {
         setIsOpen(nextIsOpen);
      }
   };

   const handleDropdownSelect = (eventKey) => {
      setSelectedOption(eventKey);
      setIsOpen(false); // Close dropdown after selection
   };

   //  const handleInputTypeOnClick = (e, nextIsOpen, { source }) => {
   //     handleDropdownToggle(e, nextIsOpen);
   //  };

   const handleModalClose = () => {
      setSelectedOption(null);
   };

   const handleModalConfirm = () => {
      // Handle modal confirmation based on the selected option
      if (selectedOption === "link") {
         // Trigger function for adding a link
         handleAddLinkClick();
      } else if (selectedOption === "file") {
         // Handle file upload or any other action
         // For demonstration purposes, log a message
         console.log("File upload functionality goes here");
      }
      setSelectedOption(null);
   };

   const handleInputTypeOnClick = (e) => {
      e.preventDefault();
      handleClose();
      handleAddLinkClick();
      // setMediaForm
      // setMediaForm()
   };
   //  onClick={handleAddLinkClick}

   return (
      <div className="position-relative">
         <Button
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            variant="outline-primary"
            className="rounded-pill d-flex align-items-center pe-3"
         >
            <PlusLg className="fs-6 me-1" />
            Dropdown button
         </Button>
         {isOpen && (
            <div className="position-absolute top-100 start-0">
               <Dropdown.Menu
                  show={isOpen}
                  onToggle={handleDropdownToggle}
                  onSelect={handleDropdownSelect}
               >
                  <Dropdown.Item
                     className="d-flex align-items-center"
                     eventKey="link"
                     //  onClick={handleAddLinkClick}
                     onClick={handleInputTypeOnClick}
                  >
                     <Link45deg className="me-2" />
                     Aggiungi un link
                  </Dropdown.Item>
                  <Dropdown.Item
                     className="d-flex align-items-center"
                     eventKey="file"
                     //  onClick={handleInputTypeOnClick}
                  >
                     <Images className="me-2" />
                     Carica un file multimediale
                  </Dropdown.Item>
               </Dropdown.Menu>
            </div>
         )}
         <Modal show={selectedOption !== null} onHide={handleModalClose}>
            <Modal.Header closeButton>
               <Modal.Title>
                  {selectedOption === "link"
                     ? "Add Link Modal Title"
                     : selectedOption === "file"
                     ? "Upload File Modal Title"
                     : ""}
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {/* Modal content goes here */}
               {selectedOption === "link" ? (
                  <p>Add link form or content</p>
               ) : selectedOption === "file" ? (
                  <p>Upload file form or content</p>
               ) : null}
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleModalClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={handleModalConfirm}>
                  Confirm
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}

export default CustomDropdown;
