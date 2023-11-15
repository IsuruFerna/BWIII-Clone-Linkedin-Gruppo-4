import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Plus } from "react-bootstrap-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, postUserExperience } from "../../redux/actions";

function AggiungiEsperienza(props) {
   const [formData, setFormData] = useState({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
   });
   const [initialDate, setInitialDate] = useState({
      mese: "",
      anno: "",
   });
   const [finalDate, setFinalDate] = useState({
      mese: "",
      anno: "",
   });

   const [selectedOption, setSelectedOption] = useState("");
   const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
   };

   const userFormReduxStore = useSelector((state) => state.user);
   const dispatch = useDispatch();

   // handle user experience post
   const postTest = () => {
      console.log("clicked on post");
      const sampleObj = {
         role: "Full Stack Web Developer",
         company: "FizzBuzz",
         startDate: "2022-06-16",
         endDate: "2023-06-16", // può essere null
         description: "Implementing new features",
         area: "Milan",
      };

      // check wheather the data is loaded to the store
      // post user experience
      // retreve updated user experience
      if (userFormReduxStore.user) {
         const userId = userFormReduxStore.user._id;
         dispatch(postUserExperience(userId, sampleObj));
         dispatch(getUserAction());
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log("form submitted aggiungi experiensa", e.target);

      // const sampleObj = {
      //    role: "Full Stack Web Developer",
      //    company: "FizzBuzz",
      //    startDate: "2022-06-16",
      //    endDate: "2023-06-16", // può essere null
      //    description: "Implementing new features",
      //    area: "Milan",
      // };

      const dataIniziale = `${initialDate.anno}-${initialDate.mese}-00`;
      const dataFinale = `${finalDate.anno}-${finalDate.mese}-00`;
      setFormData({
         ...formData,
         startDate: dataIniziale,
         endDate: dataFinale,
      });
      console.log("this is form data", formData);
      // const post = (token) => {
      //    fetch(
      //       `https://striveschool-api.herokuapp.com/api/profile/6551ed75c55e7e0018f83c0c/experiences`,
      //       {
      //          method: "POST",
      //          body: JSON.stringify({
      //             formData,
      //          }),
      //          headers: {
      //             "Content-Type": "application/json",
      //             Authorization: token,
      //          },
      //       }
      //    )
      //       .then((response) => {
      //          if (!response.ok) {
      //             throw new Error("user experience did not GET");
      //          }
      //          return response.json();
      //       })
      //       .then((data) => {
      //          console.log("User experience retreaved!", data);
      //       })
      //       .catch((err) => console.log("ERROR", err));
      // };
      // post(token);
   };

   // {...props}
   // size="lg"
   // aria-labelledby="contained-modal-title-vcenter"
   // centered

   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         {" "}
         <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
               <Modal.Title
                  id="contained-modal-title-vcenter"
                  className="fs-5 text-muted "
               >
                  Aggiungi esperienza
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className="alert-body p-3">
                  <h6>Informa la rete</h6>
                  <div className="d-flex align-items-center ">
                     <div>
                        <p>
                           Attiva l’opzione per informare la tua rete delle
                           principali modifiche al profilo (ad esempio un nuovo
                           lavoro) e degli anniversari lavorativi. Gli
                           aggiornamenti possono richiedere fino a 2 ore. Scopri
                           di più sulla condivisione delle modifiche del
                           profilo.
                        </p>
                     </div>
                     <div className="ms-3 d-flex align-items-center justify-content-center ">
                        <div>
                           <p className="mb-0 me-3 ">Sì</p>
                        </div>
                        <div>
                           {/* <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    checked={true}
                    className="fs-3"
                  /> */}
                        </div>
                     </div>
                  </div>
               </div>
               <Container>
                  <div className="my-3">
                     <p muted>* Indica che è obbligatorio</p>
                  </div>
                  <div className="mb-3">
                     <Form.Label htmlFor="inputPassword5">
                        Qualifica*
                     </Form.Label>
                     <Form.Control
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Esempio: Pettinatore di bambole"
                        className="mb-3 personal-input"
                        value={formData.role}
                        onChange={(e) =>
                           setFormData({ ...formData, role: e.target.value })
                        }
                     />
                  </div>
                  <div className="mb-3">
                     <Form.Label htmlFor="inputPassword5">
                        Tipo di impiego*
                     </Form.Label>
                     <Form.Select>
                        <option>Seleziona</option>
                        <option value="1">A tempo pieno</option>
                        <option value="2">Part-time</option>
                        <option value="3">Autonomo</option>
                        <option value="3">Freelance</option>
                        <option value="3">A contratto</option>
                        <option value="3">Stage</option>
                        <option value="3">Apprendistato</option>
                        <option value="3">Stagionale</option>
                     </Form.Select>
                     <Form.Text id="passwordHelpBlock" muted>
                        Scopri di più sui{" "}
                        <span className="personal-link">tipi di impiego</span>.
                     </Form.Text>
                  </div>
                  <div className="mb-3">
                     <Form.Label htmlFor="inputPassword5">
                        Nome azienda*
                     </Form.Label>
                     <Form.Control
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Esempio: Epicode"
                        className="mb-3"
                        value={formData.company}
                        onChange={(e) =>
                           setFormData({ ...formData, company: e.target.value })
                        }
                     />
                  </div>
                  <div className="mb-3">
                     <Form.Label htmlFor="inputPassword5">Località</Form.Label>
                     <Form.Control
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Esempio: Salaparuta, Sicilia"
                        className="mb-3"
                        value={formData.area}
                        onChange={(e) =>
                           setFormData({ ...formData, area: e.target.value })
                        }
                     />
                  </div>
                  <div className="mb-3">
                     <Form.Label htmlFor="inputPassword5">
                        Tipo di località
                     </Form.Label>
                     <Form.Select>
                        <option>Seleziona</option>
                        <option value="1">In sede</option>
                        <option value="2">Ibrido</option>
                        <option value="3">Da remoto</option>
                     </Form.Select>
                     <Form.Text id="passwordHelpBlock" muted>
                        Scegli un tipo di località (es. da remoto)
                     </Form.Text>
                  </div>
                  <div className="my-4 d-flex align-items-center ">
                     {" "}
                     {/* <Form.Check // prettier-ignore */}
                     {/* // type={type}
                // id={`default-${type}`}
                // className="fs-4"
                // checked={true}
            //   /> */}
                     <p className="mb-0 ms-3">
                        Attualmente ricopro questo ruolo
                     </p>
                  </div>{" "}
                  <Form.Label htmlFor="inputPassword5">
                     Data di inizio*
                  </Form.Label>
                  <Row>
                     <Col className="col-12 col-md-6">
                        <Form.Select
                           className="mb-1"
                           onChange={handleSelectChange}
                           value={selectedOption}
                        >
                           <option>Mese</option>
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
                     </Col>
                     <Col className="col-12 col-md-6">
                        <Form.Select
                           className="mb-3 fix-hover-2"
                           onChange={(e) =>
                              setInitialDate({
                                 ...initialDate,
                                 anno: e.target.value,
                              })
                           }
                           value={initialDate.anno}
                        >
                           <option>Anno</option>
                           <option>2023</option>
                           <option>2022</option>
                           <option>2021</option>
                           <option>2020</option>
                           <option>2019</option>
                           <option>2018</option>
                           <option>2017</option>
                           <option>2016</option>
                           <option>2015</option>
                           <option>2014</option>
                           <option>2013</option>
                           <option>2012</option>
                           <option>2011</option>
                           <option>2010</option>
                           <option>2009</option>
                           <option>2008</option>
                           <option>2007</option>
                           <option>Non ti hanno ancora licenziato??</option>
                        </Form.Select>
                     </Col>
                  </Row>
                  <Form.Label htmlFor="inputPassword5">
                     Data di fine*
                  </Form.Label>
                  <Row>
                     <Col className="col-12 col-md-6">
                        <Form.Select
                           className="mb-1"
                           onChange={(e) =>
                              setFinalDate({
                                 ...finalDate,
                                 mese: e.target.value,
                              })
                           }
                           value={finalDate.mese}
                        >
                           <option>Mese</option>
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
                     </Col>
                     <Col className="col-12 col-md-6">
                        <Form.Select
                           className="mb-3 fix-hover-2"
                           onChange={(e) =>
                              setFinalDate({
                                 ...finalDate,
                                 anno: e.target.value,
                              })
                           }
                           value={finalDate.anno}
                        >
                           <option>Anno</option>
                           <option>2023</option>
                           <option>2022</option>
                           <option>2021</option>
                           <option>2020</option>
                           <option>2019</option>
                           <option>2018</option>
                           <option>2017</option>
                           <option>2016</option>
                           <option>2015</option>
                           <option>2014</option>
                           <option>2013</option>
                           <option>2012</option>
                           <option>2011</option>
                           <option>2010</option>
                           <option>2009</option>
                           <option>2008</option>
                           <option>2007</option>
                           <option>Non ti hanno ancora licenziato??</option>
                        </Form.Select>
                     </Col>
                  </Row>
                  <div className="mb-3">
                     <Form.Label htmlFor="inputPassword5">Settore*</Form.Label>
                     <Form.Control
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Esempio: Commercio reliquie trafugate"
                        className="mb-3"
                     />
                     Scopri di più sulle{" "}
                     <span className="personal-link">
                        opzioni relative al settore
                     </span>
                  </div>
                  <div class="mb-3">
                     <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                     >
                        Descrizione
                     </label>
                     <textarea
                        className="form-control fix-hover"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={formData.description}
                        onChange={(e) =>
                           setFormData({
                              ...formData,
                              description: e.target.value,
                           })
                        }
                     ></textarea>
                  </div>
                  <div className="mb-4">
                     <Form.Label htmlFor="inputPassword5">
                        Sommario del Profilo
                     </Form.Label>
                     <Form.Control
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        className="fix-hover"
                     />
                     <Form.Text id="passwordHelpBlock" muted>
                        <p>
                           Compare sotto il tuo nome nella parte superiore del
                           profilo
                        </p>
                     </Form.Text>
                  </div>{" "}
                  <div>
                     <h4>Competenze</h4>
                     <p>
                        Ti consigliamo di aggiungere le 5 competenze più
                        utilizzate in questo ruolo. Appariranno anche nella
                        sezione Competenze.
                     </p>
                  </div>
                  <div className="mb-5">
                     {" "}
                     <Button
                        className="post fix-hover"
                        variant="rounded-pill me-3 d-flex justify-content-center align-items-center"
                     >
                        <Plus className="fs-4"></Plus> Aggiungi competenza
                     </Button>
                  </div>
                  <div>
                     <h4>Media</h4>
                     <p>
                        Aggiungi contenuti multimediali come immagini,
                        documenti, siti o presentazioni. Scopri di più sui{" "}
                        <span className="personal-link">
                           tipi di file multimediali supportati
                        </span>
                     </p>
                  </div>
                  <div className="mb-5">
                     {" "}
                     <Button
                        className="post fix-hover"
                        variant="rounded-pill me-3 d-flex justify-content-center align-items-center"
                     >
                        <Plus className="fs-4"></Plus> Aggiungi media
                     </Button>
                  </div>
               </Container>{" "}
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={props.onHide} className="rounded-pill">
                  Salva
               </Button>
            </Modal.Footer>
         </Form>
      </Modal>
   );
}
export default AggiungiEsperienza;

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);
// const handleSubmit = (formData) => {
//   const post = (token) => {
//     fetch(
//       `https://striveschool-api.herokuapp.com/api/profile/6551edf8c55e7e0018f83c0e/experiences`,
//       {
//         method: "POST",
//         body: JSON.stringify({
//           formData,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//       }
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("user experience did not GET");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("User experience retreaved!", data);
//       })
//       .catch((err) => console.log("ERROR", err));
//   };
// };
