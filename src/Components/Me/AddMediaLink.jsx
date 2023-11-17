// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef } from "react";

function AddMediaLink({
   handleEditExpClick,
   handleClose,
   handleAddLinkClick,
   showAddMediaLinkModal,
   setMediaForm,
   mediaForm,
}) {
   //  const [show, setShow] = useState(false);

   //  const handleClose = () => setShow(false);
   //  const handleShow = () => setShow(true);

   const formRef = useRef(null);

   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(formRef.current); // Using the ref to access the form
      setMediaForm(formData);
      console.log("Form data:", formData);
   };

   const handleAddLinkApply = (e) => {
      handleClose();
      handleEditExpClick();
      handleSubmit(e);
   };

   const handleChange = (e) => {
      setMediaForm(e.target.value);
   };

   return (
      <>
         {/* <Button variant="primary" onClick={handleAddLinkClick}>
            Aggiungi un link
         </Button> */}
         <Form onSubmit={handleSubmit} ref={formRef}>
            <Modal show={showAddMediaLinkModal} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Aggiungi un link</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <p className="text-secondary fs-7 my-0">
                     Incolla o digita il link
                  </p>
                  <InputGroup size="sm" className="mb-3">
                     <Form.Control
                        //  placeholder="link per del immagine"
                        aria-label="link per del immagine"
                        aria-describedby="basic-addon2"
                        type="url"
                        required
                        name="image"
                        value={mediaForm}
                        onChange={handleChange}
                     />
                     <Button variant="outline-secondary" id="button-addon2">
                        Aggiungi
                     </Button>
                  </InputGroup>

                  {/* verifica se link è apposto */}
                  {/* <div>
                     {" "}
                     <Form.Group
                        size="small"
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                     >
                        <Form.Label className="fs-7 text-secondary my-0">
                           Titolo*
                        </Form.Label>
                        <Form.Control type="text" />
                     </Form.Group>
                     <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                     >
                        <Form.Label className="fs-7 text-secondary my-0">
                           Descrizione
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                     </Form.Group>
                  </div> */}
               </Modal.Body>
               <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button> */}
                  <Button
                     type="submit"
                     variant="outline-primary"
                     size="sm"
                     className="rounded-pill px-3"
                     onClick={handleAddLinkApply}
                  >
                     Applica
                  </Button>
               </Modal.Footer>
            </Modal>
         </Form>
      </>
   );
}

export default AddMediaLink;
