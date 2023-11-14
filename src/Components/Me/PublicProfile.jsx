import { Pencil } from "react-bootstrap-icons";

const PublicProfile = () => {
  return (
    <div className="mb-3 d-flex flex-column">
      <div>
        <div className="fw-bold d-flex justify-content-between">
          <div>Lingua del profilo</div>
          <div className="me-2">
            <Pencil />
          </div>
        </div>
        <div>
          <div className="text-secondary">Italiano</div>
        </div>
        <div className="fw-bold d-flex justify-content-between">
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
