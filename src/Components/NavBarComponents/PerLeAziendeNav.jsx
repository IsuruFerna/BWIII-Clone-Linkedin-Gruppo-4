import { Grid3x3GapFill } from "react-bootstrap-icons";

const PerLeAziendeNav = ({ handleShow }) => {
  return (
    <div
      onClick={handleShow}
      style={{ cursor: "pointer" }}
      className="text-secondary d-flex align-items-center jusitfy-content-center flex-column mx-2 pointer"
    >
      <Grid3x3GapFill className="fs-5" />
      <h6>Per le aziende</h6>
    </div>
  );
};
export default PerLeAziendeNav;
