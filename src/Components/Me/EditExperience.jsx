import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, token } from "../../redux/actions";
import { Link } from "react-router-dom";
import { PlusLg } from "react-bootstrap-icons";
import AddMedia from "./AddMedia";

const EditExperience = ({
   formEditData,
   showEditExperienceModal,
   handleClose,
   handleAddLinkClick,
   mediaForm,
   setMediaForm,
}) => {
   const [formData, setFormData] = useState(null);
   const [initialMonth, setInitialMonth] = useState(null);
   const [initialYear, setInitialYear] = useState(null);
   const [endMonth, setEndMonth] = useState(null);
   const [endYear, setEndYear] = useState(null);

   const dispatch = useDispatch();

   // save edits
   const handleSubmit = () => {
      let updatedFormData = { ...formData };

      if (mediaForm) {
         updatedFormData = { ...formData, mediaForm };
      }

      // set initial date
      let initialDate = `${initialYear}-${initialMonth}-01`;
      initialDate = new Date(initialDate);
      updatedFormData.startDate = initialDate;

      // set end date
      if (endMonth && endYear) {
         let endDate = `${endYear}-${endMonth}-01`;
         endDate = new Date(endDate);
         updatedFormData.endDate = endDate;
      } else {
         updatedFormData.endDate = null;
      }

      console.log("this is updated values form", updatedFormData);
      // modify data via put data
      fetch(
         `https://striveschool-api.herokuapp.com/api/profile/${formEditData.user}/experiences/${formEditData.id}`,
         {
            method: "PUT",
            body: JSON.stringify(updatedFormData),
            headers: {
               "Content-Type": "application/json",
               Authorization: token,
            },
         }
      )
         .then((req) => {
            if (!req.ok) {
               throw new Error("PUT request error!");
            }
            return req.json();
         })
         .then((res) => console.log("Experience modified correctly", res))
         .catch((err) => console.log("ERROR: ", err));

      // retreve updated user experience
      dispatch(getUserAction());
      // disappera model form
      // dispatch(editModel());
   };

   const handleSave = (e) => {
      e.preventDefault();
      handleSubmit();
      handleClose();
   };

   const handleDelete = () => {
      fetch(
         `https://striveschool-api.herokuapp.com/api/profile/${formEditData.user}/experiences/${formEditData.id}`,
         {
            method: "DELETE",
            headers: {
               "Content-Type": "application/json",
               Authorization: token,
            },
         }
      )
         .then((req) => {
            if (!req.ok) {
               throw new Error("DELETE request error!");
            }
            console.log("Experience DELETED successfully");
         })
         .catch((err) => console.log("ERROR: ", err));

      handleClose();
      // retreve updated user experience
      dispatch(getUserAction());
      // disappera model form
      // dispatch(editModel(editModel()));
   };

   console.log("date pareant to chield", formEditData);

   //  set formdata values
   const handleChange = (field, value) => {
      setFormData((prevData) => ({
         ...prevData,
         [field]: value,
      }));
   };

   //  makes a array of 100 years based on current year
   const getYears = () => {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let i = currentYear; i > currentYear - 100; i--) {
         years.push(i);
      }
      return years;
   };

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

      <Form onSubmit={handleSubmit}>
         <Modal
            show={showEditExperienceModal}
            onHide={handleClose}
            // className="modal show"
            // style={{ display: "block", position: "fixed" }}
            // centered
         >
            <Modal.Dialog className="m-0">
               <Modal.Header closeButton onClick={handleClose} className="py-2">
                  <Modal.Title>Modifica esperienza</Modal.Title>
               </Modal.Header>

               {formEditData && (
                  <div style={{ height: "75vh" }} className="overflow-auto">
                     <Modal.Body>
                        {/* role */}
                        <Form.Group className="mb-3 text-dark text-opacity-75">
                           <Form.Label className="m-0">
                              <small className="text-dark text-opacity-50 ms-1">
                                 Qualifica*
                              </small>
                           </Form.Label>
                           <Form.Control
                              type="text"
                              placeholder="Esempio: Retail Sales Manager"
                              required
                              value={formData?.role || formEditData.role}
                              onChange={(e) =>
                                 handleChange("role", e.target.value)
                              }
                           />
                        </Form.Group>

                        {/* company */}
                        <Form.Group className="mb-3">
                           <Form.Label className="m-0">
                              <small className="text-dark text-opacity-50 ms-1">
                                 Nome azienda*
                              </small>
                           </Form.Label>
                           <Form.Control
                              type="text"
                              placeholder="Esempio: Retail Sales Manager"
                              required
                              value={formData?.company || formEditData.company}
                              onChange={(e) =>
                                 handleChange("company", e.target.value)
                              }
                           />
                        </Form.Group>

                        {/* area */}
                        <Form.Group className="mb-3">
                           <Form.Label className="m-0">
                              <small className="text-dark text-opacity-50 ms-1">
                                 Nome azienda*
                              </small>
                           </Form.Label>
                           <Form.Control
                              type="text"
                              placeholder="Esempio: Milano, Italia"
                              required
                              value={formData?.area || formEditData.area}
                              onChange={(e) =>
                                 handleChange("area", e.target.value)
                              }
                           />
                        </Form.Group>

                        {/* startDate */}
                        <div className="d-flex align-items-end w-100 gap-1">
                           <Form.Group className="mb-3 w-50">
                              <Form.Label className="m-0">
                                 <small className="text-dark text-opacity-50 ms-1">
                                    Data di inizio*
                                 </small>
                              </Form.Label>
                              {/* initial month */}
                              <Form.Select
                                 aria-label="Default select example"
                                 value={initialMonth || formEditData.startMonth}
                                 onChange={(e) => {
                                    setInitialMonth(e.target.value);
                                 }}
                              >
                                 <option value="" disabled selected>
                                    Mese
                                 </option>
                                 <option value="01">Gennaio</option>
                                 <option value="02">Febbraio</option>
                                 <option value="03">Marzo</option>
                                 <option value="04">Aprile</option>
                                 <option value="05">Maggio</option>
                                 <option value="06">Giugno</option>
                                 <option value="07">Luglio</option>
                                 <option value="08">Agosto</option>
                                 <option value="09">Settembre</option>
                                 <option value="10">Ottobre</option>
                                 <option value="11">Novembre</option>
                                 <option value="12">Dicembre</option>
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                 Please select an option
                              </Form.Control.Feedback>
                           </Form.Group>
                           {/* initial year */}
                           <Form.Group className="mb-3 w-50">
                              <Form.Label></Form.Label>
                              <Form.Select
                                 aria-label="Default select example"
                                 value={initialYear || formEditData.startYear}
                                 onChange={(e) => {
                                    setInitialYear(e.target.value);
                                 }}
                              >
                                 <option value="" disabled selected>
                                    Anno
                                 </option>
                                 {getYears().map((year) => {
                                    return <option key={year}>{year}</option>;
                                 })}
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                 Please select an option
                              </Form.Control.Feedback>
                           </Form.Group>
                        </div>

                        {/* endDate */}
                        <div className="d-flex align-items-end w-100 gap-1">
                           <Form.Group className="mb-3 w-50">
                              <Form.Label className="m-0">
                                 <small className="text-dark text-opacity-50 ms-1">
                                    Data di fine*
                                 </small>
                              </Form.Label>
                              {/* end month */}
                              <Form.Select
                                 aria-label="Default select example"
                                 value={
                                    endMonth || formEditData.endYear <= 1970
                                       ? ""
                                       : formEditData.endMonth
                                 }
                                 onChange={(e) => {
                                    setEndMonth(e.target.value);
                                 }}
                              >
                                 <option value="" disabled selected>
                                    Mese
                                 </option>
                                 <option value="01">Gennaio</option>
                                 <option value="02">Febbraio</option>
                                 <option value="03">Marzo</option>
                                 <option value="04">Aprile</option>
                                 <option value="05">Maggio</option>
                                 <option value="06">Giugno</option>
                                 <option value="07">Luglio</option>
                                 <option value="08">Agosto</option>
                                 <option value="09">Settembre</option>
                                 <option value="10">Ottobre</option>
                                 <option value="11">Novembre</option>
                                 <option value="12">Dicembre</option>
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                 Please select an option
                              </Form.Control.Feedback>
                           </Form.Group>
                           {/* end year */}
                           <Form.Group className="mb-3 w-50">
                              <Form.Label></Form.Label>
                              <Form.Select
                                 aria-label="Default select example"
                                 value={
                                    endYear || formEditData.endYear <= 1970
                                       ? ""
                                       : formEditData.endYear
                                 }
                                 onChange={(e) => {
                                    setEndYear(e.target.value);
                                 }}
                              >
                                 <option value="" disabled selected>
                                    Anno
                                 </option>
                                 {getYears().map((year) => {
                                    return <option key={year}>{year}</option>;
                                 })}
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                 Please select an option
                              </Form.Control.Feedback>
                           </Form.Group>
                        </div>

                        {/* description */}
                        <Form.Group className="mb-3">
                           <Form.Label className="m-0">
                              <small className="text-dark text-opacity-50 ms-1">
                                 Descrizione*
                              </small>
                           </Form.Label>
                           <Form.Control
                              as="textarea"
                              rows={3}
                              value={
                                 formData?.description ||
                                 formEditData.description
                              }
                              onChange={(e) =>
                                 handleChange("description", e.target.value)
                              }
                           />
                        </Form.Group>
                        <div className="w-100 px-1">
                           <h5>Media</h5>
                           <p className="lh-sm fs-7 text-dark">
                              Aggiungi contenuti multimediali come immagini,
                              documenti, siti o presentazioni. Scopri di più sui
                              <Link to="#" className="ms-1">
                                 tipi di file multimediali supportati
                              </Link>
                           </p>
                           {/* <Button
                              variant="outline-primary"
                              className="rounded-pill d-flex align-items-center pe-3"
                              size="sm"
                           >
                              {" "}
                              <PlusLg className="fs-6 me-1" />
                              Aggiungi media
                           </Button> */}
                           <AddMedia
                              handleAddLinkClick={handleAddLinkClick}
                              handleClose={handleClose}
                           />
                        </div>
                     </Modal.Body>
                  </div>
               )}

               <Modal.Footer>
                  <div className="w-100 d-flex justify-content-between">
                     <Button
                        variant="outline-secondary"
                        className={formEditData ? "d-block" : "d-none"}
                        size="sm"
                        onClick={handleDelete}
                     >
                        Elimina esperienza
                     </Button>
                     <Button
                        type="submit"
                        variant="primary"
                        size="sm"
                        className="rounded-pill px-3"
                        onClick={handleSave}
                     >
                        Salva
                     </Button>
                  </div>
               </Modal.Footer>
            </Modal.Dialog>
         </Modal>
      </Form>
   );
};

export default EditExperience;
