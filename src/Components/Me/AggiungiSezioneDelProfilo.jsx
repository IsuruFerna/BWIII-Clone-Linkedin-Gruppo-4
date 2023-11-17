import { useState } from "react";
import { Accordion, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import AddExperience from "./AddExperience";

const AggiungiSezioneDelProfilo = ({
  show,
  onHide,
  handleAddExperienceClick,
  setAddExperienceShow,
  setShowAddProfileModal,
  setShowVisibleAddExperience,
}) => {
  //   const [show, setShow] = useState(false);

  return (
    <>
      <Modal
        // {...props}
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Accordion className="bg-white">
          <Modal.Header closeButton>
            <Modal.Title>
              <h5>Aggiungi al profilo</h5>
            </Modal.Title>
          </Modal.Header>

          {/* SEZIONI PRINCIPALI */}

          <Accordion.Item eventKey="0" className="bg-white ">
            <Accordion.Header>
              <h6>Sezioni principali</h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-2">
                Iniziamo dalle basi. Se compili queste sezioni, sarà più facile
                trovarti per i recruiter e le persone che potresti conoscere.
              </p>
              <ListGroup>
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    Aggiungi grado di formazione
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p
                    className="text-secondary mb-1 pointer"
                    onClick={() => {
                      setShowVisibleAddExperience(true);
                      setShowAddProfileModal(false);
                    }}
                  >
                    Aggiungi posizione lavorativa
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    {" "}
                    Aggiungi pausa lavorativa
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0  pb-0">
                  <p className="text-secondary mb-0 pointer">
                    {" "}
                    Aggiungi competenze
                  </p>
                </ListGroupItem>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>

          {/* SEZIONI CONSIGLIATE */}

          <Accordion.Item eventKey="1" className="bg-white ">
            <Accordion.Header>
              <h6>Sezioni consigliate</h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-2">
                Completando queste sezioni aumenterai la tua credibilità e
                potrai accedere a più opportunità.
              </p>
              <ListGroup>
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    Aggiungi elementi in primo piano
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    Aggiungi licenze e certificazioni
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    {" "}
                    Aggiungi progetti
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer"> Aggiungi corsi</p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 pb-0 ">
                  <p className="text-secondary mb-0 pointer">
                    {" "}
                    Aggiungi referenze
                  </p>
                </ListGroupItem>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>

          {/* ALTRO */}

          <Accordion.Item eventKey="2" className="bg-white ">
            <Accordion.Header>
              <h6>Altro</h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-2">
                {" "}
                Conferisci ancora più personalità al tuo profilo. Queste sezioni
                ti aiuteranno a espandere la tua rete e a instaurare più
                relazioni lavorative.
              </p>
              <ListGroup>
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    Aggiungi esperienza di volontariato
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    Aggiungi pubblicazioni
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    {" "}
                    Aggiungi brevetti
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    {" "}
                    Aggiungi riconoscimenti e premi
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    {" "}
                    Aggiungi votazioni esame
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    {" "}
                    Aggiungi lingue
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 ">
                  <p className="text-secondary mb-1 pointer">
                    {" "}
                    Aggiungi organizzazioni
                  </p>
                </ListGroupItem>
                <hr className="mt-0" />
                <ListGroupItem className="border border-0 ps-0 pb-0 ">
                  <p className="text-secondary mb-0 pointer"> Aggiungi cause</p>
                </ListGroupItem>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal>
    </>
  );
};
export default AggiungiSezioneDelProfilo;
