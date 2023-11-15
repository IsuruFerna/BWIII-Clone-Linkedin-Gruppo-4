import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, postUserExperience } from "../../redux/actions";

const AddExperience = () => {
   const [formData, setFormData] = useState(null);
   const [initialMonth, setInitialMonth] = useState(null);
   const [initialYear, setInitialYear] = useState(null);
   const [endMonth, setEndMonth] = useState(null);
   const [endYear, setEndYear] = useState(null);

   // get user data from the redux store
   const userFormReduxStore = useSelector((state) => state.user);
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();

      let updatedFormData = { ...formData };
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

      // post data
      // check wheather the data is loaded to the store
      // post user experience
      // retreve updated user experience
      if (userFormReduxStore.user) {
         const userId = userFormReduxStore.user._id;
         dispatch(postUserExperience(userId, updatedFormData));
         dispatch(getUserAction());
      }
   };

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

   console.log("new form data: ", formData);

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
                           value={formData?.role || ""}
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
                           value={formData?.company || ""}
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
                           value={formData?.area || ""}
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
                              value={initialMonth || ""}
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
                              value={initialYear || ""}
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
                              value={endMonth || ""}
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
                              value={endYear || ""}
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
                           value={formData?.description || ""}
                           onChange={(e) =>
                              handleChange("description", e.target.value)
                           }
                        />
                     </Form.Group>
                  </Modal.Body>
               </div>

               <Modal.Footer>
                  {" "}
                  <Button
                     type="submit"
                     variant="primary"
                     size="sm"
                     className="rounded-pill px-3"
                  >
                     Salva
                  </Button>
               </Modal.Footer>
            </Modal.Dialog>
         </div>
      </Form>
   );
};

export default AddExperience;
