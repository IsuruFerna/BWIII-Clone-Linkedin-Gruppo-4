import { Pencil } from "react-bootstrap-icons";

const DetailsCard = ({ handleShow }) => {
   return (
      <div className="w-75 d-flex justify-content-between rounded details-card p-2">
         <div className="p-1">
            <p className="my-0">Disponibile a lavorare</p>
            <p className="my-0">
               Ruoli di Designer grafico, Web designer e Sviluppatore front-end
            </p>
            <p className="my-0 link-small" onClick={handleShow}>
               Mostra detagli
            </p>
         </div>
         <div>
            <div className="rounded-circle btn-circle d-flex align-items-center justify-content-center">
               <Pencil />
            </div>
         </div>
      </div>
   );
};

export default DetailsCard;
