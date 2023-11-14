import { Pencil } from "react-bootstrap-icons";
import "./PublicProfile.css";

const PublicProfile = () => {
  return (
    <div className="mb-3 d-flex flex-column">
      <div>
        <div className="fw-bold d-flex justify-content-between mt-2">
          <div>Lingua del profilo</div>
          <div className="me-2" id="pencil2">
            <Pencil />
          </div>
        </div>
        <div>
          <div className="text-secondary">Italiano</div>
        </div>
        <div className="fw-bold d-flex justify-content-between mt-2">
          <div>Public profile & Url</div>
          <div className="me-2" id="pencil">
            <Pencil />
          </div>
        </div>
        <div
          className="text-secondary smaller"
          style={{ "word-break": "break-all" }}
        >
          www.linkedin.com/in/angela-prestano-603240243
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
