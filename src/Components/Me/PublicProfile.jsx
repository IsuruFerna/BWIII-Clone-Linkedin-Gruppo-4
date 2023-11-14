import { Container } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const PublicProfile = () => {
  return (
    <Container className="mb-3 d-flex flex-column border border-secondary rounded">
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
          <div className="me-2">
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
