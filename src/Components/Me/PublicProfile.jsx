import { Container } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import "./PublicProfile.css";

const PublicProfile = () => {
  return (
    <Container className="mb-3 d-flex mx-1 flex-column border shadow rounded bg-white">
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
          fetchper avere email di me
        </div>
      </div>
    </Container>
  );
};

export default PublicProfile;
