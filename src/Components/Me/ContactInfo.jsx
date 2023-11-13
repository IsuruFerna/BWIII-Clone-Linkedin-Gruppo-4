import Modal from "react-bootstrap/Modal";
import { Envelope, Linkedin } from "react-bootstrap-icons";

function ContactInfo({ show, handleClose, mail, user, name, surname }) {
   return (
      <div
         className={`modal ${show ? "show" : "hide"}`}
         style={{ display: "block", position: "fixed" }}
      >
         <Modal.Dialog>
            <Modal.Header closeButton onClick={handleClose}>
               <Modal.Title>
                  {name} {surname}
               </Modal.Title>
            </Modal.Header>

            <p className="m-3 mb-0">Informazioni di contatto</p>

            <Modal.Body>
               <div className="mb-3">
                  <div className="d-flex align-items-center">
                     <Linkedin />
                     <p className="fw-bold m-0 ms-2">Il tuo profilo</p>
                  </div>
                  <a className="ms-4" href="#">
                     {user}
                  </a>
               </div>
               <div>
                  <div className="d-flex align-items-center">
                     <Envelope />
                     <p className="fw-bold m-0 ms-2">Email</p>
                  </div>
                  <a className="ms-4" href={`mailto:${mail}`}>
                     {mail}
                  </a>
               </div>
            </Modal.Body>
         </Modal.Dialog>
      </div>
   );
}

export default ContactInfo;
