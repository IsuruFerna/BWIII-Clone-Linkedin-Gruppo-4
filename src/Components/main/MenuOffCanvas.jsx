// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import {
  BrowserSafari,
  FileBarGraphFill,
  Info,
  MenuButtonWide,
  PeopleFill,
  PlayBtnFill,
  PlusLg,
  SlashCircleFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function MenuOffCanvas({ handleClose, handleShow, show }) {
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2">
            top
         </Button> */}

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        // name="end"
        className="rounded-start-2"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="px-2">Per le aziende</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-4">
          <Card>
            <Card.Header className="bg-white fw-semibold py-3 px-4">
              Scopri altri prodotti LinkedIn
            </Card.Header>
            <Card.Body className="px-0">
              <div className="px-3 py-0">
                <Card.Text className="py-3">
                  <div className="w-100 d-flex justify-content-around align-items-start">
                    <Link className="d-flex flex-column align-items-center justify-content-center link-underline link-underline-opacity-0">
                      <div className="border rounded p-2 d-flex align-items-center justify-content-center">
                        <PlayBtnFill className="text-primary" />
                      </div>
                      <p className="text-secondary lh-1 text-center mt-1 fs-7">
                        Learning
                      </p>
                    </Link>
                    <Link className="d-flex flex-column align-items-center justify-content-center link-underline link-underline-opacity-0">
                      <div className="border rounded p-2 d-flex align-items-center justify-content-center">
                        <FileBarGraphFill className="text-primary" />{" "}
                      </div>{" "}
                      <p className="text-secondary lh-1 text-center mt-1 fs-7">
                        Talent <br />
                        Insights
                      </p>
                    </Link>
                    <Link className="d-flex flex-column align-items-center justify-content-center link-underline link-underline-opacity-0">
                      <div className="border rounded p-2 d-flex align-items-center justify-content-center">
                        <MenuButtonWide className="text-primary" />{" "}
                      </div>{" "}
                      <p className="text-secondary lh-1 text-center mt-1 fs-7">
                        Publica <br /> un'offerta di <br />
                        lavoro
                      </p>
                    </Link>
                    <Link className="d-flex flex-column align-items-center justify-content-center link-underline link-underline-opacity-0">
                      <div className="border rounded p-2 d-flex align-items-center justify-content-center">
                        <SlashCircleFill className="text-primary" />{" "}
                      </div>{" "}
                      <p className="text-secondary lh-1 text-center mt-1 fs-7">
                        Pubblicizza
                      </p>
                    </Link>
                  </div>
                  <div className="w-75  d-flex justify-content-around align-items-start">
                    {" "}
                    <Link className="d-flex flex-column align-items-center justify-content-center link-underline link-underline-opacity-0">
                      <div className="border rounded p-2 d-flex align-items-center justify-content-center">
                        <BrowserSafari className="text-primary" />{" "}
                      </div>{" "}
                      <p className="text-secondary lh-1 text-center mt-1 fs-7">
                        Vendi
                      </p>
                    </Link>{" "}
                    <Link className="d-flex flex-column align-items-center justify-content-center link-underline link-underline-opacity-0">
                      <div className="border rounded p-2 d-flex align-items-center justify-content-center">
                        <PeopleFill className="text-primary" />{" "}
                      </div>{" "}
                      <p className="text-secondary lh-1 text-center mt-1 fs-7">
                        Gruppi
                      </p>
                    </Link>{" "}
                    <Link className="d-flex flex-column align-items-center justify-content-center link-underline link-underline-opacity-0">
                      <div className="border rounded p-2 d-flex align-items-center justify-content-center">
                        <Info className="text-primary" />{" "}
                      </div>{" "}
                      <p className="text-secondary lh-1 text-center mt-1 fs-7">
                        Marketplace <br /> dei servizi
                      </p>
                    </Link>
                  </div>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Header className="bg-white fw-semibold py-3 px-3">
              Featured
            </Card.Header>
            <Card.Body>
              <Card.Text className="px-1">
                <Link
                  to="#"
                  className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-50-hover"
                >
                  <p className=" mb-0 lh-1">Assumi su Linkedin</p>
                  <p className="text-secondart my-0 fs-7">
                    Trova, attrai e assumi
                  </p>
                </Link>
                <Link
                  to="#"
                  className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-50-hover"
                >
                  <p className="mt-2 mb-0 lh-1">Assumi su Linkedin</p>
                  <p className="text-secondart my-0 fs-7">
                    Trova, attrai e assumi
                  </p>
                </Link>
                <Link
                  to="#"
                  className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-50-hover"
                >
                  <p className="mt-2 mb-0 lh-1">Assumi su Linkedin</p>
                  <p className="text-secondart my-0 fs-7">
                    Trova, attrai e assumi
                  </p>
                </Link>
                <Link
                  to="#"
                  className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-50-hover"
                >
                  <p className="mt-2 mb-0 lh-1">Assumi su Linkedin</p>
                  <p className="text-secondart my-0 fs-7">
                    Trova, attrai e assumi
                  </p>
                </Link>
                <Link
                  to="#"
                  className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-50-hover"
                >
                  <p className="mt-2 mb-0 lh-1">Assumi su Linkedin</p>
                  <p className="text-secondart my-0 fs-7">
                    Trova, attrai e assumi
                  </p>
                </Link>
                <Link
                  to="#"
                  className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-50-hover"
                >
                  <p className="mt-2 mb-0 lh-1">Assumi su Linkedin</p>
                  <p className="text-secondart my-0 fs-7">
                    Trova, attrai e assumi
                  </p>
                </Link>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white px-3 text-dark ps-3 ">
              <Link
                to="#"
                className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-50-hover ps-1"
              >
                Crea una pagina aziendale <PlusLg className="mb-1 ms-2 fs-5" />
              </Link>
            </Card.Footer>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MenuOffCanvas;
