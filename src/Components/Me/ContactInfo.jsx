import Modal from "react-bootstrap/Modal";
import { Envelope, Linkedin, Pencil } from "react-bootstrap-icons";

function ContactInfo({ show, handleClose, mail, user, name, surname }) {
   return (
      <div
         className={`modal ${show ? "show" : "hide"}`}
         style={{ display: "block", position: "fixed" }}
      >
         <Modal.Dialog>
            <Modal.Header closeButton onClick={handleClose}>
               <Modal.Title className="ps-2 text-dark text-opacity-75">
                  {name} {surname}
               </Modal.Title>
            </Modal.Header>
            <div className="d-flex justify-content-between align-items-center">
               <p className="m-3 ps-2 mb-0 fs-5">Informazioni di contatto</p>
               <div className="btn-circle d-flex align-items-center justify-content-center me-3 mt-3 fs-5 rounded-circle">
                  <Pencil />
               </div>
            </div>

            <Modal.Body className="px-4">
               <div className="mb-3">
                  <div className="d-flex align-items-center">
                     <Linkedin className="fs-5" />
                     <p className="fw-bold m-0 ps-1 ms-3">Il tuo profilo</p>
                  </div>
                  <a className="ms-3 ps-4" href="#">
                     {user}
                  </a>
               </div>
               <div>
                  <div className="d-flex align-items-center">
                     <Envelope className="fs-5" />
                     <p className="fw-bold m-0 ps-1 ms-3">Email</p>
                  </div>
                  <a className="ms-3 ps-4" href={`mailto:${mail}`}>
                     {mail}
                  </a>
               </div>
            </Modal.Body>
         </Modal.Dialog>
      </div>
   );
}

export default ContactInfo;
