import { InfoSquareFill, RecordFill } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import { Accordion } from "react-bootstrap";

const SectionRight = () => {
  return (
    <>
      <Card className="mb-4 rounded-3 ms-2">
        <Card.Title className="d-flex justify-content-between align-items-center me-3 fw-semibold fs-6 mt-2 ms-2">
          <div> LindedIn Notizie </div>
          <InfoSquareFill className="" />
        </Card.Title>
        <Card.Title variant="flush" className="text-start">
          <Card.Text className="mt-2 fw-semibold text-dark mb-1 fs-6 ms-1 ">
            <RecordFill className="extrasmall text-dark mx-1" /> Assunzioni e
            nuovi premi
          </Card.Text>
          <p className="ms-4 text-secondary fw-light extrasmall">2 ore fa</p>
          <Card.Text className="fw-semibold text-dark mb-1 fs-6 ms-1">
            <RecordFill className="extrasmall text-dark  mx-1" /> Le esperienze
            trainano il lusso
          </Card.Text>
          <p className="ms-4 extrasmall fw-light text-secondary">
            1 ora fa -415 lettori
          </p>
          <Card.Text className="fw-semibold text-dark mb-1 fs-6 ms-1">
            <RecordFill className="extrasmall text-dark mx-1" /> L'immobiliare è
            sempre più tech
          </Card.Text>
          <p className="ms-4 extrasmall fw-light text-secondary">5 ore fa</p>
          <Card.Text className="fw-semibold text-dark mb-1 fs-6 ms-1">
            <RecordFill className="extrasmall text-dark mx-1" /> Effetto ATP
            Finals per Torino
          </Card.Text>
          <p className="ms-4 extrasmall fw-light text-secondary ">2 ora fa</p>
          <Card.Text className="fw-semibold text-dark mb-1 fs-6 ms-1">
            <RecordFill className="extrasmall text-dark mx-1" /> Il caso di 'C'è
            ancora domani'
          </Card.Text>
          <p className="ms-4 extrasmall fw-light text-secondary ">1 ore</p>
        </Card.Title>
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>Show more</Accordion.Header>
            <Accordion.Body>
              <Card.Text className="fw-semibold text-dark mb-1 fs-6 ms-1">
                <RecordFill className="extrasmall text-dark mx-1" /> Manuale di
                critica costruttiva
                <p className="ms-4 extrasmall fw-light text-secondary">
                  3 ore fa
                </p>
                <Card.Text className="mt-2 fw-semibold text-dark mb-1 fs-6 ms-1 ">
                  <RecordFill className="extrasmall text-dark mx-1" /> Le Telco
                  peggiorano ancora
                </Card.Text>
                <p className="ms-4 text-secondary fw-light extrasmall">
                  5 ore fa
                </p>
                <Card.Text className="mt-2 fw-semibold text-dark mb-1 fs-6 ms-1 ">
                  <RecordFill className="extrasmall text-dark mx-1" /> I Top MBA
                  negli USA
                </Card.Text>
                <p className="ms-4 text-secondary fw-light extrasmall">
                  5 ore fa
                </p>
                <Card.Text className="mt-2 fw-semibold text-dark mb-1 fs-6 ms-1 ">
                  <RecordFill className="extrasmall text-dark mx-1" /> Premi
                  Nobel 2023
                </Card.Text>
                <p className="ms-4 text-secondary fw-light extrasmall">
                  5 ore fa
                </p>
                <Card.Text className="mt-2 fw-semibold text-dark mb-1 fs-6 ms-1 ">
                  <RecordFill className="extrasmall text-dark mx-1" />{" "}
                  Assunzioni part-time <br></br>{" "}
                  <div className="ms-4">nella regione Lazio</div>
                </Card.Text>
                <p className="ms-4 text-secondary fw-light extrasmall">
                  5 ore fa
                </p>
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
      <div className="d-flex ms-5 text-secondary smaller  ">
        <p className="ms-4">Informazioni</p>{" "}
        <p className="ms-4">Accessibilità</p>
      </div>
      <div className="d-flex text-secondary ms-3 smaller ">
        <p className="ms-4">Centro Assistenza</p>
        <p className="ms-4">Privacy e condizioni</p>
      </div>
      <div className="d-flex ms-5 text-secondary smaller ">
        <p className="ms-2">Opzioni per gli annunci pubblicitari</p>
      </div>
      <div className="d-flex ms-5 text-secondary smaller ">
        <p className="ms-3">Pubblicità</p>
        <p className="ms-4">Servizi alle aziende</p>
      </div>
      <div className="d-flex ms-5 text-secondary smaller ">
        <p className="ms-4">Scarica l'app LinkedIn</p>
        <p className="ms-3">Altro</p>
      </div>
      <span className=" ms-3 bg-white smaller">
        <img
          src="https://www.salvatorepumo.it/wp-content/uploads/2022/02/logo-linkedin-oggi.png"
          alt="logoLink"
          width={"80px"}
          className="mb-1"
        ></img>
        LinkedIn Corporation © 2023
      </span>
    </>
  );
};

export default SectionRight;
