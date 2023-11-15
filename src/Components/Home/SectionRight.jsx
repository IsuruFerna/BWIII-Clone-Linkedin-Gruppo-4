import { useState } from "react";
import { Button } from "react-bootstrap";
import {
  ArrowDown,
  ArrowUp,
  InfoSquareFill,
  RecordFill,
} from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";

const SectionRight = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Card className="mb-4 rounded-3 ms-2">
        <Card.Title className="d-flex justify-content-between align-items-center me-3 fw-semibold fs-6 mt-2 ms-2">
          <div> LindedIn Notizie </div>
          <InfoSquareFill className="" />
        </Card.Title>
        <Card.Text className="mt-2 fw-semibold text-dark mb-1 smaller ms-1 ">
          <RecordFill className="extrasmall text-dark mx-1" /> Assunzioni e
          nuovi premi
        </Card.Text>
        <p className="ms-4 text-secondary fw-light extrasmall">2 ore fa</p>
        <Card.Text className="fw-semibold text-dark mb-1 smaller ms-1">
          <RecordFill className="extrasmall text-dark  mx-1" /> Le esperienze
          trainano il lusso
        </Card.Text>
        <p className="ms-4 extrasmall fw-light text-secondary">
          1 ora fa -415 lettori
        </p>
        <Card.Text className="fw-semibold text-dark mb-1 smaller ms-1">
          <RecordFill className="extrasmall text-dark mx-1" /> L'immobiliare è
          sempre più tech
        </Card.Text>
        <p className="ms-4 extrasmall fw-light text-secondary">5 ore fa</p>
        <Card.Text className="fw-semibold text-dark mb-1 smaller ms-1">
          <RecordFill className="extrasmall text-dark mx-1" /> Effetto ATP
          Finals per Torino
        </Card.Text>
        <p className="ms-4 extrasmall fw-light text-secondary ">2 ora fa</p>
        <Card.Text className="fw-semibold text-dark mb-1 smaller ms-1">
          <RecordFill className="extrasmall text-dark mx-1" /> Il caso di 'C'è
          ancora domani'
        </Card.Text>
        <p className="ms-4 extrasmall fw-light text-secondary ">1 ore</p>

        {/* seconda parte */}
        {showMore === true ? (
          <>
            <Card.Text className="mt-2 fw-semibold text-dark mb-1 smaller ms-1 ">
              <RecordFill className="extrasmall text-dark mx-1" /> Manuale di
              critica costruttiva
            </Card.Text>
            <p className="ms-4 text-secondary fw-light extrasmall">3 ore fa</p>
            <Card.Text className="fw-semibold text-dark mb-1 smaller ms-1">
              <RecordFill className="extrasmall text-dark  mx-1" /> Le Telco
              peggiorano ancora
            </Card.Text>
            <p className="ms-4 extrasmall fw-light text-secondary">5 ore fa</p>
            <Card.Text className="fw-semibold text-dark mb-1 smaller ms-1">
              <RecordFill className="extrasmall text-dark mx-1" /> I Top MBA
              negli USA
            </Card.Text>
            <p className="ms-4 extrasmall fw-light text-secondary">5 ore fa</p>
            <Card.Text className="fw-semibold text-dark mb-1 smaller ms-1">
              <RecordFill className="extrasmall text-dark mx-1" /> Premi Nobel
              nel 2023
            </Card.Text>
            <p className="ms-4 extrasmall fw-light text-secondary ">4 ora fa</p>
            <Card.Text className="fw-semibold text-dark mb-1 smaller ms-1">
              <RecordFill className="extrasmall text-dark mx-1" /> Assunzioni
              part-time nella regione Lazio
            </Card.Text>
            <p className="ms-4 extrasmall fw-light text-secondary ">8 ore fa</p>
          </>
        ) : (
          ""
        )}
        <Button
          id="btnShowMore"
          className="bg-transparent border-0 text-black smaller rounded-top-0"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore === false ? (
            <div>
              Show More <ArrowDown />
            </div>
          ) : (
            <div>
              Show More <ArrowUp />
            </div>
          )}
        </Button>
      </Card>
      <div>
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
        <span className=" ms-3 bg-white smaller d-flex align-items-center justify-content-center">
          <img
            src="https://www.salvatorepumo.it/wp-content/uploads/2022/02/logo-linkedin-oggi.png"
            alt="logoLink"
            width={"80px"}
            className="mb-1"
          />
          <p className="text-secondary smaller">LinkedIn Corporation © 2023</p>
        </span>
      </div>
    </>
  );
};

export default SectionRight;