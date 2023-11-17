import { Nav, NavDropdown } from "react-bootstrap";
import {
   BrowserSafari,
   FileBarGraphFill,
   Grid3x3GapFill,
   Info,
   MenuButtonWide,
   PeopleFill,
   PlayBtnFill,
   PlusLg,
   SlashCircleFill,
   XLg,
} from "react-bootstrap-icons";

const PerLeAziendeNav = ({ handleShow }) => {
   return (
      <div
         onClick={handleShow}
         style={{ cursor: "pointer" }}
         className="d-flex align-items-center justify-content-center flex-column"
      >
         <Grid3x3GapFill className="fs-5 text-secondary" />
         <Nav className="p-0">
            <div className="text-secondary p-0">
               <p className="mx-1 mb-0">Per le aziende</p>
            </div>
            {/* <NavDropdown
               align={{ lg: "end" }}
               title="Per le aziende"
               id="basic-nav-dropdown"
               className="text-secondary p-0"
            >
               <div className="d-flex justify-content-between mx-1">
                  <h5 className="mx-1">Per le aziende</h5>
                  <div
                     className="d-flex justify-content-center align-items-center "
                     id="divclose"
                  >
                     <XLg id="close" />
                  </div>
               </div>
               <h6 className="text-dark mx-1">
                  Scopri altri prodotti Linkedin
               </h6>

               <NavDropdown.Item>
                  <div className="fs-2 text-primary text-start ms-2 ">
                     <PlayBtnFill />
                     <FileBarGraphFill />
                     <MenuButtonWide />
                     <SlashCircleFill />

                     <BrowserSafari />
                     <PeopleFill />
                     <Info />
                  </div>

                  <div className="colors">
                     <h6 className="mt-5">Scopri altro per il business</h6>
                     <span className="fw-bold">Assumi su Linkedin</span>
                     <p className="text-secondary">Trova, attrai e assumi</p>
                  </div>
                  <div className="colors">
                     <h6 className="fw-bold">Vendi con Linkedin</h6>
                     <span className="text-secondary">
                        Costruisci relazioni con i buyer
                     </span>
                  </div>
                  <div className="colors">
                     <h6 className="fw-bold mt-2">
                        Offerta di lavoro gratuita
                     </h6>
                     <span className="text-secondary">
                        Trova candidati di qualità
                     </span>
                  </div>
                  <div className="colors">
                     <h6 className="fw-bold mt-2">
                        Fai pubblicità su LinkedIn
                     </h6>
                     <span className="text-secondary">
                        Acquisisci clienti e fai crescere la tua azienda
                     </span>
                  </div>
                  <div className="colors">
                     <h6 className="fw-bold mt-2">Impara con LinkedIn</h6>
                     <span className="text-secondary">
                        Corsi per formare i tuoi dipendenti
                     </span>
                  </div>
                  <div className="colors">
                     <h6 className="fw-bold mt-2">Centro amministrazione</h6>
                     <span className="text-secondary">
                        Gestisci i dettagli di fatturazione e account
                     </span>
                  </div>
                  <p className="mt-5 fw-900">
                     Crea una pagina aziendale
                     <PlusLg className="mb-1 ms-2 fs-5" />
                  </p>
               </NavDropdown.Item>
            </NavDropdown> */}
         </Nav>
      </div>
   );
};
export default PerLeAziendeNav;
