import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const AddExperience = () => {
   const [formData, setFormData] = useState(null);
   const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      console.log("form submited", formData);
   };

   //  const handleChnage = (e, field) => {
   //     field: e.target.value;
   //  };

   return (
      //     Modello dell'EXPERIENCE:
      // {
      //   "role": "Full Stack Web Developer",
      //   "company": "FizzBuzz",
      //   "startDate": "2022-06-16",
      //   "endDate": "2023-06-16", // può essere null
      //   "description": "Implementing new features",
      //   "area": "Milan",
      //   "username": "mario88", // SERVER GENERATED
      //   "image": ..., // SERVER GENERATED, modificabile
      //   "createdAt": 2023-06-16T19:58:31.019Z", // SERVER GENERATED
      //   "updatedAt": "2023-06-16T19:58:31.019Z", // SERVER GENERATED
      //   "__v": 0 // SERVER GENERATED
      //   "_id": "5d925e677360c41e0046d1f5" // SERVER GENERATED
      // }
      <div
         className="modal show"
         style={{ display: "block", position: "initial" }}
      >
         <Modal.Dialog>
            <Modal.Header closeButton className="py-2">
               <Modal.Title>Aggiungi esperienza</Modal.Title>
            </Modal.Header>

            <div>
               <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                     <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                     >
                        <Form.Label>Qualifica*</Form.Label>
                        <Form.Control
                           type="text"
                           placeholder="Esempio: Retail Sales Manager"
                           required
                           isInvalid // Set isInvalid to show validation state
                        />{" "}
                        <Form.Control.Feedback type="invalid">
                           Please select an option
                        </Form.Control.Feedback>
                     </Form.Group>
                     <Form.Group className="mb-3">
                        <Form.Label>Tipo di impiego*</Form.Label>
                        <Form.Select aria-label="Default select example">
                           <option value="" disabled>
                              Seleziona
                           </option>
                           <option>A tempo pieno</option>
                           <option>Part-time</option>
                           <option>Autonomo</option>
                           <option>Freelance</option>
                           <option>A contratto</option>
                           <option>Stage</option>
                           <option>Apprendistato</option>
                           <option>Stagionale</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                           Please select an option
                        </Form.Control.Feedback>
                     </Form.Group>
                     <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        className="rounded-pill px-3"
                     >
                        Salva
                     </Button>
                  </Form>
               </Modal.Body>
            </div>

            <Modal.Footer>footer</Modal.Footer>
         </Modal.Dialog>
      </div>
   );
};

export default AddExperience;
