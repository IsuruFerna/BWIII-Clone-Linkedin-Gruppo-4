import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Plus } from "react-bootstrap-icons";

function AggiungiEsperienza(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="fs-5 text-muted "
        >
          Aggiungi esperienza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Informa la rete</h6>
        <div className="d-flex align-items-center ">
          <div>
            <p>
              Attiva l’opzione per informare la tua rete delle principali
              modifiche al profilo (ad esempio un nuovo lavoro) e degli
              anniversari lavorativi. Gli aggiornamenti possono richiedere fino
              a 2 ore. Scopri di più sulla condivisione delle modifiche del
              profilo.
            </p>
          </div>
          <div className="ms-3 d-flex align-items-center justify-content-center ">
            <div>
              <p className="mb-0 me-3 ">Sì</p>
            </div>
            <div>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                checked="true"
                className="fs-3"
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Container>
        <div className="my-3">
          <p muted>* Indica che è obbligatorio</p>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="inputPassword5">Qualifica*</Form.Label>
          <Form.Control
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Esempio: Pettinatore di bambole"
            className="mb-3"
          />
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="inputPassword5">Tipo di impiego*</Form.Label>
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
          <Form.Label htmlFor="inputPassword5">Nome azienda*</Form.Label>
          <Form.Control
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Esempio: Epicode"
            className="mb-3"
          />
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="inputPassword5">Località</Form.Label>
          <Form.Control
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Esempio: Salaparuta, Sicilia"
            className="mb-3"
          />
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="inputPassword5">Tipo di località</Form.Label>
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
          <Form.Check // prettier-ignore
            // type={type}
            // id={`default-${type}`}
            className="fs-4"
            checked="true"
          />
          <p className="mb-0 ms-3">Attualmente ricopro questo ruolo</p>
        </div>{" "}
        <Form.Label htmlFor="inputPassword5">Data di inizio*</Form.Label>
        <Row>
          <Col className="col-12 col-md-6">
            <Form.Select className="mb-1">
              <option>Mese</option>
              <option value="1">Gennaio</option>
              <option value="2">Febbraio</option>
              <option value="3">Marzo</option>
              <option value="4">Aprile</option>
              <option value="5">Maggio</option>
              <option value="6">Giugno</option>
              <option value="7">Luglio</option>
              <option value="8">Agosto</option>
              <option value="9">Settembre</option>
              <option value="10">Ottobre</option>
              <option value="11">Novembre</option>
              <option value="12">Dicembre</option>
            </Form.Select>
          </Col>
          <Col className="col-12 col-md-6">
            <Form.Select className="mb-3">
              <option>Anno</option>
              <option value="1">2023</option>
              <option value="1">2022</option>
              <option value="1">2021</option>
              <option value="1">2020</option>
              <option value="1">2019</option>
              <option value="1">2018</option>
              <option value="1">2017</option>
              <option value="1">2016</option>
              <option value="1">2015</option>
              <option value="1">2014</option>
              <option value="1">2013</option>
              <option value="1">2012</option>
              <option value="1">2011</option>
              <option value="1">2010</option>
              <option value="1">2009</option>
              <option value="1">2008</option>
              <option value="2">2007</option>
              <option value="3">Non ti hanno ancora licenziato??</option>
            </Form.Select>
          </Col>
        </Row>
        <Form.Label htmlFor="inputPassword5">Data di fine*</Form.Label>
        <Row>
          <Col className="col-12 col-md-6">
            <Form.Select className="mb-1">
              <option>Mese</option>
              <option value="1">Gennaio</option>
              <option value="2">Febbraio</option>
              <option value="3">Marzo</option>
              <option value="4">Aprile</option>
              <option value="5">Maggio</option>
              <option value="6">Giugno</option>
              <option value="7">Luglio</option>
              <option value="8">Agosto</option>
              <option value="9">Settembre</option>
              <option value="10">Ottobre</option>
              <option value="11">Novembre</option>
              <option value="12">Dicembre</option>
            </Form.Select>
          </Col>
          <Col className="col-12 col-md-6">
            <Form.Select className="mb-3">
              <option>Anno</option>
              <option value="1">2023</option>
              <option value="1">2022</option>
              <option value="1">2021</option>
              <option value="1">2020</option>
              <option value="1">2019</option>
              <option value="1">2018</option>
              <option value="1">2017</option>
              <option value="1">2016</option>
              <option value="1">2015</option>
              <option value="1">2014</option>
              <option value="1">2013</option>
              <option value="1">2012</option>
              <option value="1">2011</option>
              <option value="1">2010</option>
              <option value="1">2009</option>
              <option value="1">2008</option>
              <option value="2">2007</option>
              <option value="3">Non ti hanno ancora licenziato??</option>
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
          <span className="personal-link">opzioni relative al settore</span>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Descrizione
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <Form.Label htmlFor="inputPassword5">Sommario del Profilo</Form.Label>
          <Form.Control
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            <p>Compare sotto il tuo nome nella parte superiore del profilo</p>
          </Form.Text>
        </div>{" "}
        <div>
          <h4>Competenze</h4>
          <p>
            Ti consigliamo di aggiungere le 5 competenze più utilizzate in
            questo ruolo. Appariranno anche nella sezione Competenze.
          </p>
        </div>
        <div className="mb-5">
          {" "}
          <Button
            className="post"
            variant="rounded-pill me-3 d-flex justify-content-center align-items-center"
          >
            <Plus className="fs-4"></Plus> Aggiungi competenza
          </Button>
        </div>
        <div>
          <h4>Media</h4>
          <p>
            Aggiungi contenuti multimediali come immagini, documenti, siti o
            presentazioni. Scopri di più sui tipi di file multimediali
            supportati
          </p>
        </div>
        <div className="mb-5">
          {" "}
          <Button
            className="post"
            variant="rounded-pill me-3 d-flex justify-content-center align-items-center"
          >
            <Plus className="fs-4"></Plus> Aggiungi media
          </Button>
        </div>
      </Container>
      <Modal.Footer>
        <Button onClick={props.onHide} className="rounded-pill">
          Salva
        </Button>
      </Modal.Footer>
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
